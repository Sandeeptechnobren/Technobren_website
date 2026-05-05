import { z } from "zod";

export const SERVICE_OPTIONS = [
  "Customised software",
  "Customised App",
] as const;

export const BUDGET_OPTIONS = ["$700", "$1000"] as const;

export const REQUIREMENT_OPTIONS = ["Business", "Educational"] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name is too short").max(100),
  email: z.string().trim().email("Please enter a valid email"),
  mobile: z
    .string()
    .trim()
    .regex(/^[+\d\s\-()]{7,20}$/, "Please enter a valid phone number"),
  company: z.string().trim().min(1, "Company is required").max(100),
  service: z.enum(SERVICE_OPTIONS),
  budget: z.enum(BUDGET_OPTIONS),
  requirement: z.enum(REQUIREMENT_OPTIONS),
  message: z
    .string()
    .trim()
    .min(10, "Please share a bit more about your project")
    .max(2000),
});

export type ContactPayload = z.infer<typeof contactSchema>;
