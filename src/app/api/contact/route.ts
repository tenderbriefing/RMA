import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const ContactSchema = z.object({
  fullName: z.string().min(1, "Full name is required"),
  organisation: z.string().optional().default(""),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional().default(""),
  enquiryType: z.enum([
    "Mining company partnership",
    "SME registration support",
    "Finance partner enquiry",
    "Supplier development programme",
    "General enquiry",
  ]),
  message: z.string().min(1, "Message is required"),
});

function getSmtpConfig() {
  const host = process.env.SMTP_HOST;
  const portRaw = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM;
  const to = process.env.CONTACT_TO_EMAIL || "info@rma.africa";

  const port = portRaw ? Number(portRaw) : undefined;

  const missing: string[] = [];
  if (!host) missing.push("SMTP_HOST");
  if (!portRaw) missing.push("SMTP_PORT");
  if (!user) missing.push("SMTP_USER");
  if (!pass) missing.push("SMTP_PASS");
  if (!from) missing.push("SMTP_FROM");
  if (!Number.isFinite(port)) missing.push("SMTP_PORT(valid number)");

  return { host, port, user, pass, from, to, missing };
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = ContactSchema.parse(body);

    const smtp = getSmtpConfig();
    if (smtp.missing.length > 0) {
      return NextResponse.json(
        {
          ok: false,
          error: "SMTP_NOT_CONFIGURED",
          message:
            "Email sending is not configured. Please email info@rma.africa directly.",
          missing: smtp.missing,
        },
        { status: 503 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtp.host!,
      port: smtp.port!,
      secure: smtp.port === 465,
      auth: { user: smtp.user!, pass: smtp.pass! },
    });

    const subject = `[RMA Enquiry] ${data.enquiryType} — ${data.fullName}`;

    const text = [
      "New enquiry from rma.africa contact form",
      "",
      `Full name: ${data.fullName}`,
      `Organisation: ${data.organisation || "-"}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "-"}`,
      `Enquiry type: ${data.enquiryType}`,
      "",
      "Message:",
      data.message,
    ].join("\n");

    await transporter.sendMail({
      from: smtp.from!,
      to: smtp.to,
      replyTo: data.email,
      subject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    if (err instanceof z.ZodError) {
      return NextResponse.json(
        { ok: false, error: "VALIDATION_ERROR", issues: err.issues },
        { status: 400 },
      );
    }
    return NextResponse.json(
      {
        ok: false,
        error: "SEND_FAILED",
        message:
          "We could not send your enquiry. Please try again or email info@rma.africa directly.",
      },
      { status: 500 },
    );
  }
}

