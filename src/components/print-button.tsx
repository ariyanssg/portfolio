"use client";

import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button type="button" className="btn btn-secondary" onClick={() => window.print()}>
      <Printer className="size-4" aria-hidden strokeWidth={2} />
      Print
    </button>
  );
}
