"use client";

import { NewsletterForm } from "@/components/ui/newsletter-form";

interface MailingListFormProps {
  title?: string;
  description?: string;
  compact?: boolean;
}

function MailingListForm({ title, description, compact = false }: MailingListFormProps) {
  return <NewsletterForm variant="newsletter" title={title} description={description} compact={compact} />;
}

export { MailingListForm };
export type { MailingListFormProps };
