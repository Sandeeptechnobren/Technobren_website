"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/shared/Button";
import {
  BUDGET_OPTIONS,
  REQUIREMENT_OPTIONS,
  SERVICE_OPTIONS,
  contactSchema,
  type ContactPayload,
} from "@/lib/validation/contact";

type Status = "idle" | "submitting" | "error";

const initialForm: ContactPayload = {
  name: "",
  email: "",
  mobile: "",
  company: "",
  service: SERVICE_OPTIONS[0],
  budget: BUDGET_OPTIONS[0],
  requirement: REQUIREMENT_OPTIONS[0],
  message: "",
};

export function ContactForm() {
  const router = useRouter();
  const [form, setForm] = useState<ContactPayload>(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof ContactPayload, string>>>({});
  const [serverError, setServerError] = useState<string | null>(null);

  function update<K extends keyof ContactPayload>(key: K, value: ContactPayload[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setServerError(null);

    const parsed = contactSchema.safeParse(form);
    if (!parsed.success) {
      const flat = parsed.error.flatten().fieldErrors;
      const next: typeof errors = {};
      for (const [k, v] of Object.entries(flat)) {
        if (v && v.length) next[k as keyof ContactPayload] = v[0];
      }
      setErrors(next);
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        if (res.status === 400 && data?.errors) {
          const next: typeof errors = {};
          for (const [k, v] of Object.entries(
            data.errors as Record<string, string[]>
          )) {
            if (v && v.length) next[k as keyof ContactPayload] = v[0];
          }
          setErrors(next);
          setStatus("idle");
          return;
        }
        setServerError(
          "Sorry — we couldn't send your message right now. Please try again or email us directly."
        );
        setStatus("error");
        return;
      }
      router.push("/thank-you");
    } catch {
      setServerError(
        "Network error. Please check your connection and try again."
      );
      setStatus("error");
    }
  }

  const fieldClass = (key: keyof ContactPayload) =>
    "form-input" + (errors[key] ? " border-red-500" : "");

  return (
    <form noValidate onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Field label="Your Name" required error={errors.name}>
        <input
          className={fieldClass("name")}
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          autoComplete="name"
        />
      </Field>

      <Field label="Email" required error={errors.email}>
        <input
          type="email"
          className={fieldClass("email")}
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          autoComplete="email"
        />
      </Field>

      <Field label="Mobile" required error={errors.mobile}>
        <input
          type="tel"
          className={fieldClass("mobile")}
          value={form.mobile}
          onChange={(e) => update("mobile", e.target.value)}
          autoComplete="tel"
        />
      </Field>

      <Field label="Company" required error={errors.company}>
        <input
          className={fieldClass("company")}
          value={form.company}
          onChange={(e) => update("company", e.target.value)}
          autoComplete="organization"
        />
      </Field>

      <Field label="Service" required>
        <select
          className={fieldClass("service")}
          value={form.service}
          onChange={(e) =>
            update("service", e.target.value as ContactPayload["service"])
          }
        >
          {SERVICE_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Budget" required>
        <select
          className={fieldClass("budget")}
          value={form.budget}
          onChange={(e) =>
            update("budget", e.target.value as ContactPayload["budget"])
          }
        >
          {BUDGET_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Requirement" required>
        <select
          className={fieldClass("requirement")}
          value={form.requirement}
          onChange={(e) =>
            update("requirement", e.target.value as ContactPayload["requirement"])
          }
        >
          {REQUIREMENT_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </Field>

      <div className="md:col-span-2">
        <Field label="Project Details" required error={errors.message}>
          <textarea
            rows={5}
            className={fieldClass("message") + " resize-y"}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
          />
        </Field>
      </div>

      {serverError && (
        <div className="md:col-span-2 rounded-md bg-red-50 border border-red-200 text-red-700 p-3 text-sm">
          {serverError}
        </div>
      )}

      <div className="md:col-span-2">
        <Button
          type="submit"
          disabled={status === "submitting"}
          withArrow={false}
          className="min-w-[200px]"
        >
          {status === "submitting" ? "Sending…" : "Send Message"}
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-[#444] mb-1">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      {children}
      {error && <p className="text-red-600 text-xs mt-1">{error}</p>}
    </div>
  );
}
