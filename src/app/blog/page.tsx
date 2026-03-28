import { MailingListForm } from "@/components/mailing-list-form";

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      <section className="py-24 md:py-32 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight font-heading mb-6">
            Building in public.
          </h1>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-10">
            We document what we build, why we build it, and what we learn along
            the way. First post coming soon.
          </p>
          <MailingListForm
            title="Get notified"
            description="Be the first to know when we publish a new post."
          />
        </div>
      </section>

      <section className="py-16 px-4 bg-secondary/30 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight font-heading text-center mb-8">
            What you&apos;ll find here
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <h3 className="font-bold font-heading mb-2">Build logs</h3>
              <p className="text-sm text-muted-foreground">
                Real-time updates on what we&apos;re building and why.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <h3 className="font-bold font-heading mb-2">Decisions</h3>
              <p className="text-sm text-muted-foreground">
                Why we chose X over Y. The tradeoffs we made.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <h3 className="font-bold font-heading mb-2">Lessons learned</h3>
              <p className="text-sm text-muted-foreground">
                What worked, what didn&apos;t, and what we&apos;d do differently.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
