import type { MDXComponents } from "mdx/types";
import { VelaFigure } from "@/components/vela-figure";
import { Signal404Figure } from "@/components/signal404-figure";

const components: MDXComponents = {
  a: ({ href = "", children }) =>
    href.startsWith("http") ? (
      <a href={href} target="_blank" rel="noreferrer">
        {children}
        <span className="visually-hidden"> (opens in a new tab)</span>
      </a>
    ) : (
      <a href={href}>{children}</a>
    ),
  VelaFigure,
  Signal404Figure,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
