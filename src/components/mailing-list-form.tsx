"use client";

import { useState } from "react";

export function MailingListForm({
  title = "Stay in the loop",
  description = "Get notified when we launch new apps or publish posts.",
  compact = false,
}: {
  title?: string;
  description?: string;
  compact?: boolean;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setStatus("idle");

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setStatus("success");
    setEmail("");
    setLoading(false);
  };

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none placeholder:text-muted-foreground disabled:opacity-50 max-w-[240px]"
          required
        />
        <button
          type="submit"
          disabled={loading || status === "success"}
          className="h-9 rounded-lg bg-primary px-2.5 py-1 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/80 disabled:opacity-50"
        >
          {loading ? "..." : status === "success" ? "Joined!" : "Subscribe"}
        </button>
      </form>
    );
  }

  return (
    <div className="w-full max-w-md">
      <h3 className="font-heading text-lg font-medium mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      {status === "success" ? (
        <p className="text-sm text-primary font-medium">
          Thanks! You&apos;re on the list.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-9 rounded-lg border border-input bg-transparent px-2.5 py-1 text-sm transition-colors outline-none placeholder:text-muted-foreground disabled:opacity-50 flex-1"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="h-9 rounded-lg bg-primary px-2.5 py-1 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/80 disabled:opacity-50"
          >
            {loading ? "..." : "Join"}
          </button>
        </form>
      )}
    </div>
  );
}
