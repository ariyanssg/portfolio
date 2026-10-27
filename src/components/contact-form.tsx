"use client";

import { useActionState } from "react";
import { sendMessage, type ContactState } from "@/app/actions";

const initial: ContactState = { status: "idle" };

export function ContactForm() {
  const [state, action, pending] = useActionState(sendMessage, initial);
  const errors = state.fieldErrors ?? {};
  const sent = state.status === "success";

  return (
    <form action={action} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="field">
          <label htmlFor="cf-name">Name</label>
          <input
            id="cf-name"
            name="name"
            autoComplete="name"
            className="input"
            defaultValue={state.values?.name}
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "cf-name-error" : undefined}
            disabled={pending}
            required
          />
          {errors.name && <p id="cf-name-error" className="error">{errors.name}</p>}
        </div>
        <div className="field">
          <label htmlFor="cf-email">Email</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            className="input"
            defaultValue={state.values?.email}
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "cf-email-error" : undefined}
            disabled={pending}
            required
          />
          {errors.email && <p id="cf-email-error" className="error">{errors.email}</p>}
        </div>
      </div>
      <div className="field">
        <label htmlFor="cf-message">Message</label>
        <p id="cf-message-hint" className="hint">A role, a project or a question. Plain text is fine.</p>
        <textarea
          id="cf-message"
          name="message"
          rows={5}
          className="input resize-y"
          defaultValue={state.values?.message}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "cf-message-hint cf-message-error" : "cf-message-hint"}
          disabled={pending}
          required
        />
        {errors.message && <p id="cf-message-error" className="error">{errors.message}</p>}
      </div>
      <div className="visually-hidden" aria-hidden>
        <label htmlFor="cf-company">Company</label>
        <input id="cf-company" name="company" tabIndex={-1} autoComplete="off" />
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <button type="submit" className="btn btn-primary" disabled={pending}>
          {pending ? "Sending…" : "Send message"}
        </button>
        <p role="status" aria-live="polite" className={`text-sm ${sent ? "text-success" : "text-error"}`}>
          {state.message}
        </p>
      </div>
    </form>
  );
}
