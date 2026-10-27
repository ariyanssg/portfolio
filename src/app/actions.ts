"use server";

import { profile } from "@/content/site";

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "message", string>>;
  values?: { name: string; email: string; message: string };
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function sendMessage(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const values = { name, email, message };

  // Bots fill the hidden field; people never see it.
  if (String(formData.get("company") ?? "")) return { status: "success", message: "Thanks, your message is on its way." };

  const fieldErrors: ContactState["fieldErrors"] = {};
  if (!name) fieldErrors.name = "Enter your name.";
  if (!EMAIL_RE.test(email)) fieldErrors.email = "Enter an email address like name@company.com.";
  if (message.length < 10) fieldErrors.message = "Write a message of at least 10 characters.";
  if (Object.keys(fieldErrors).length) return { status: "error", fieldErrors, values };

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    return {
      status: "error",
      message: `The form isn't connected yet. Email me at ${profile.email} and I'll reply there.`,
      values,
    };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO_EMAIL ?? profile.email],
        reply_to: email,
        subject: `Portfolio message from ${name}`,
        text: `${message}\n\nFrom: ${name} <${email}>`,
      }),
    });
    if (!res.ok) throw new Error(`Resend responded ${res.status}`);
  } catch {
    return {
      status: "error",
      message: `Your message didn't send. Try again, or email me at ${profile.email}.`,
      values,
    };
  }

  return { status: "success", message: `Thanks, ${name}. Your message is sent, and I'll reply to ${email}.` };
}
