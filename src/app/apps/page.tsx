import { MailingListForm } from "@/components/mailing-list-form";
import { GithubIcon } from "@/components/icons";

export default function AppsPage() {
  return (
    <div className="flex flex-col">
      <section className="py-24 md:py-32 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight font-heading mb-6">
            Apps coming soon.
          </h1>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-10">
            We&apos;re building our first app now. Follow us on GitHub to watch
            it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/mysteryd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 text-primary-foreground bg-primary h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3"
            >
              <GithubIcon className="h-5 w-5" />
              Watch on GitHub
            </a>
            <MailingListForm
              title="Get notified"
              description="Be the first to know when we launch."
              compact
            />
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-secondary/30 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight font-heading text-center mb-8">
            What to expect
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="font-bold font-heading mb-2">Focused apps</h3>
              <p className="text-muted-foreground">
                One problem solved well. No feature bloat, no confused UX.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="font-bold font-heading mb-2">Open source</h3>
              <p className="text-muted-foreground">
                Every app is open source. Audit the code, contribute, or fork
                it.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="font-bold font-heading mb-2">Fair pricing</h3>
              <p className="text-muted-foreground">
                No surprise charges. No tier gymnastics. Simple, transparent
                pricing.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="font-bold font-heading mb-2">
                Real support
              </h3>
              <p className="text-muted-foreground">
                Talk to a human who knows the product. No ticket purgatory.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
