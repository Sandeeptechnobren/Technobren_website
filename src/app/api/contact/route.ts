import { renderContactEmail } from "@/lib/email/template";
import { contactSchema } from "@/lib/validation/contact";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const env = {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
    from: process.env.MAIL_FROM,
    to: process.env.MAIL_TO,
  };
  for (const [k, v] of Object.entries(env)) {
    if (!v) {
      console.error(`Contact API: missing env var ${k.toUpperCase()}`);
      return NextResponse.json(
        { ok: false, error: "server_misconfigured" },
        { status: 500 }
      );
    }
  }

  try {
    const transporter = nodemailer.createTransport({
      host: env.host!,
      port: Number(env.port),
      secure: false,
      auth: { user: env.user!, pass: env.pass! },
    });

    await transporter.sendMail({
  from: `"${parsed.data.name}" <${env.user!}>`,
  to: env.to!,
  replyTo: parsed.data.email,
  subject: `${parsed.data.name} (${parsed.data.email}) sent a message`,
  html: renderContactEmail(parsed.data),
})

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API: send failed", err);
    return NextResponse.json({ ok: false, error: "send_failed" }, { status: 500 });
  }
}
