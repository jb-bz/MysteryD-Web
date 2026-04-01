"use client";

import { NewsletterForm } from "@/components/ui/newsletter-form";

interface WaitlistFormProps {
  source?: string;
}

function WaitlistForm({ source = "waitlist-page" }: WaitlistFormProps) {
  return <NewsletterForm variant="waitlist" source={source} />;
}

export { WaitlistForm };
export type { WaitlistFormProps };
