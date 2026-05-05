import type { ContactPayload } from "@/lib/validation/contact";

function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function renderContactEmail(payload: ContactPayload): string {
  const e = (s: string) => escapeHtml(s);
  const messageHtml = e(payload.message).replace(/\n/g, "<br>");

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Contact Form Submission</title>
</head>
<body style="margin:0;padding:0;background-color:#f4f4f4;color:#333;font-family:Arial,sans-serif;">
  <div style="width:100%;padding:20px 0;">
    <div style="max-width:600px;margin:0 auto;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.05);">
      <div style="background:#A72329;text-align:center;padding:24px;">
        <img src="https://ucarecdn.com/2a9c4446-4504-493e-bb03-ed3deede71af/logo1.jpg" alt="Technobren" style="max-width:120px;height:auto;" />
      </div>
      <div style="padding:30px;">
        <h2 style="color:#A72329;margin:0 0 20px 0;">New Contact Submission</h2>
        <p style="font-size:15px;line-height:1.6;margin:8px 0;"><strong style="display:inline-block;width:120px;color:#555;">Name:</strong> ${e(payload.name)}</p>
        <p style="font-size:15px;line-height:1.6;margin:8px 0;"><strong style="display:inline-block;width:120px;color:#555;">Email:</strong> ${e(payload.email)}</p>
        <p style="font-size:15px;line-height:1.6;margin:8px 0;"><strong style="display:inline-block;width:120px;color:#555;">Mobile:</strong> ${e(payload.mobile)}</p>
        <p style="font-size:15px;line-height:1.6;margin:8px 0;"><strong style="display:inline-block;width:120px;color:#555;">Company:</strong> ${e(payload.company)}</p>
        <p style="font-size:15px;line-height:1.6;margin:8px 0;"><strong style="display:inline-block;width:120px;color:#555;">Service:</strong> ${e(payload.service)}</p>
        <p style="font-size:15px;line-height:1.6;margin:8px 0;"><strong style="display:inline-block;width:120px;color:#555;">Budget:</strong> ${e(payload.budget)}</p>
        <p style="font-size:15px;line-height:1.6;margin:8px 0;"><strong style="display:inline-block;width:120px;color:#555;">Requirement:</strong> ${e(payload.requirement)}</p>
        <p style="font-size:15px;line-height:1.6;margin:8px 0;"><strong style="display:inline-block;width:120px;color:#555;">Message:</strong><br>${messageHtml}</p>
      </div>
      <div style="text-align:center;font-size:13px;color:#aaa;padding:20px;background:#f9f9f9;">
        &copy; 2025 Technobren. All rights reserved.<br>
        This message was sent from your website contact form.
      </div>
    </div>
  </div>
</body>
</html>`;
}
