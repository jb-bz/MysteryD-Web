"use client";

import { useState, useEffect } from "react";

interface WaitlistFormProps {
  source?: string;
}

export function WaitlistForm({ source = "waitlist-page" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = useState(false);
  const [utmSource, setUtmSource] = useState<string | null>(null);
  const [utmMedium, setUtmMedium] = useState<string | null>(null);
  const [utmCampaign, setUtmCampaign] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtmSource(params.get("utm_source"));
    setUtmMedium(params.get("utm_medium"));
    setUtmCampaign(params.get("utm_campaign"));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setStatus("idle");

    const payload = {
      email,
      source,
      utm_source: utmSource,
      utm_medium: utmMedium,
      utm_campaign: utmCampaign,
      timestamp: new Date().toISOString(),
    };

    console.log("Waitlist submission:", payload);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setStatus("success");
    setEmail("");
    setLoading(false);
  };

  if (status === "success") {
    return (
      <div className="w-full max-w-md text-center">
        <div className="rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-6">
          <h3 className="font-heading text-lg font-medium text-green-800 dark:text-green-200 mb-2">
            You&apos;re on the list.
          </h3>
          <p className="text-sm text-green-700 dark:text-green-300">
            We&apos;ll be in touch when we have something to share. Follow us on{" "}
            <a
              href="https://github.com/mysteryd"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:no-underline"
            >
              GitHub
            </a>{" "}
            for real-time updates.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md space-y-4"
    >
      <div>
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="h-10 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm transition-colors outline-none placeholder:text-muted-foreground disabled:opacity-50"
          required
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="h-10 w-full rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/80 disabled:opacity-50"
      >
        {loading ? "Joining..." : "Join the waitlist"}
      </button>
      <p className="text-xs text-muted-foreground text-center">
        No spam. Unsubscribe anytime.
      </p>
    </form>
  );
}
