import * as React from "react";

export interface SkipLinkProps {
  href?: string;
  children?: React.ReactNode;
}

export function SkipLink({ href = "#main-content", children = "Skip to main content" }: SkipLinkProps) {
  return (
    <a
      href={href}
      className="fixed top-2 left-2 z-[100] translate-y-[-200%] rounded-lg bg-[var(--app-accent)] px-4 py-2 text-sm font-semibold text-white opacity-0 transition-all focus-visible:translate-y-0 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--app-accent)] focus-visible:ring-offset-2"
      style={{ backgroundColor: "var(--app-accent)" }}
    >
      {children}
    </a>
  );
}