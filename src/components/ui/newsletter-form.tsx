"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Spinner } from "@/components/ui/spinner";

interface NewsletterFormProps {
  variant?: "waitlist" | "newsletter";
  source?: string;
  title?: string;
  description?: string;
  compact?: boolean;
  className?: string;
  onSubmit?: (data: NewsletterFormData) => Promise<void>;
}

interface NewsletterFormData {
  email: string;
  source?: string;
  utm_source?: string | null;
  utm_medium?: string | null;
  utm_campaign?: string | null;
  timestamp?: string;
}

function NewsletterForm({
  variant = "newsletter",
  source = "newsletter",
  title,
  description,
  compact = false,
  className,
  onSubmit,
}: NewsletterFormProps) {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "success" | "error">("idle");
  const [loading, setLoading] = React.useState(false);
  const [utmSource, setUtmSource] = React.useState<string | null>(null);
  const [utmMedium, setUtmMedium] = React.useState<string | null>(null);
  const [utmCampaign, setUtmCampaign] = React.useState<string | null>(null);

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtmSource(params.get("utm_source"));
    setUtmMedium(params.get("utm_medium"));
    setUtmCampaign(params.get("utm_campaign"));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus("idle");

    try {
      const payload: NewsletterFormData = {
        email,
        source: variant === "waitlist" ? source : undefined,
        utm_source: utmSource,
        utm_medium: utmMedium,
        utm_campaign: utmCampaign,
        timestamp: new Date().toISOString(),
      };

      if (onSubmit) {
        await onSubmit(payload);
      } else {
        const response = await fetch("/api/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.error || "Subscription failed");
        }
      }

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const defaultTitle = variant === "waitlist" ? "Join the waitlist" : "Stay in the loop";
  const defaultDescription =
    variant === "waitlist"
      ? "Be the first to know when we launch."
      : "Get notified when we launch new apps or publish posts.";
  const successMessage =
    variant === "waitlist"
      ? "You're on the list."
      : "Thanks! You're on the list.";

  if (status === "success") {
    if (compact) {
      return (
        <span className="text-sm text-primary font-medium">{successMessage}</span>
      );
    }

    return (
      <div className={cn("w-full max-w-md text-center", className)}>
        <div
          className={cn(
            "rounded-lg p-6",
            variant === "waitlist"
              ? "bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
              : "bg-primary/10 border border-primary/20"
          )}
        >
          <h3
            className={cn(
              "font-heading text-lg font-medium mb-2",
              variant === "waitlist"
                ? "text-green-800 dark:text-green-200"
                : "text-primary"
            )}
          >
            {successMessage}
          </h3>
          <p
            className={cn(
              "text-sm",
              variant === "waitlist"
                ? "text-green-700 dark:text-green-300"
                : "text-muted-foreground"
            )}
          >
            {variant === "waitlist" ? (
              <>
                Follow us on{" "}
                <a
                  href="https://github.com/mysteryd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline"
                >
                  GitHub
                </a>{" "}
                for real-time updates.
              </>
            ) : (
              <>We&apos;ll only email you when we have something worth sharing.</>
            )}
          </p>
        </div>
      </div>
    );
  }

  if (compact) {
    return (
      <form onSubmit={handleSubmit} className={cn("flex gap-2", className)}>
        <div className="relative flex-1">
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={cn(
              "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base",
              "transition-colors outline-none placeholder:text-muted-foreground",
              "focus:ring-2 focus:ring-ring focus:ring-offset-1",
              "disabled:opacity-50 max-w-[240px]",
              status === "error" && "border-red-500 focus:ring-red-500"
            )}
            required
            aria-label="Email address"
            aria-invalid={status === "error"}
            aria-describedby={status === "error" ? "compact-form-error" : undefined}
          />
          {status === "error" && (
            <span id="compact-form-error" role="alert" className="absolute -bottom-5 left-0 text-xs text-red-500">
              Please enter a valid email
            </span>
          )}
        </div>
        <button
          type="submit"
          disabled={loading}
          className={cn(
            "h-9 rounded-lg bg-primary px-3 py-1 text-sm font-medium",
            "text-primary-foreground transition-all hover:bg-primary/80",
            "disabled:opacity-50 inline-flex items-center gap-2"
          )}
        >
          {loading ? <Spinner size="sm" /> : null}
          {loading ? "..." : "Subscribe"}
        </button>
      </form>
    );
  }

  return (
    <div className={cn("w-full max-w-md", className)}>
      {title !== "" && (
        <h3 className="font-heading text-lg font-medium mb-2">
          {title ?? defaultTitle}
        </h3>
      )}
      {description !== "" && (
        <p className="text-sm text-muted-foreground mb-4">
          {description ?? defaultDescription}
        </p>
      )}
      <form onSubmit={handleSubmit} className="flex gap-2">
        <div className="relative flex-1">
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={cn(
              "h-10 flex-1 rounded-lg border border-input bg-transparent px-3 py-2 text-sm",
              "transition-colors outline-none placeholder:text-muted-foreground",
              "focus:ring-2 focus:ring-ring focus:ring-offset-1",
              "disabled:opacity-50",
              status === "error" && "border-red-500 focus:ring-red-500"
            )}
            required
            aria-label="Email address"
            aria-invalid={status === "error"}
            aria-describedby={status === "error" ? "form-error" : undefined}
          />
          {status === "error" && (
            <span id="form-error" role="alert" className="absolute -bottom-5 left-0 text-xs text-red-500">
              Please enter a valid email
            </span>
          )}
        </div>
        <button
          type="submit"
          disabled={loading}
          className={cn(
            "h-10 rounded-lg bg-primary px-4 py-2 text-sm font-medium",
            "text-primary-foreground transition-all hover:bg-primary/80",
            "disabled:opacity-50 inline-flex items-center gap-2"
          )}
        >
          {loading ? <Spinner size="sm" /> : null}
          {loading ? "..." : variant === "waitlist" ? "Join" : "Subscribe"}
        </button>
      </form>
      {variant === "waitlist" && (
        <p className="text-xs text-muted-foreground text-center mt-3">
          No spam. Unsubscribe anytime.
        </p>
      )}
    </div>
  );
}

export { NewsletterForm };
export type { NewsletterFormData, NewsletterFormProps };
