import { WaitlistForm } from "@/components/waitlist-form";
import { GithubIcon } from "@/components/icons";

export const metadata = {
  title: "Join the Waitlist — MysteryD",
  description:
    "Get early access to MysteryD apps. We're building Shopify apps that are simpler, faster, and better supported than what you're using now.",
};

export default function WaitlistPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 md:py-32 px-4 bg-gradient-to-b from-violet-50 to-white dark:from-violet-950/20 dark:to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center rounded-full border border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/20 px-3 py-1 text-xs font-medium text-violet-700 dark:text-violet-300 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-violet-500 mr-2" />
            Early access
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight font-heading text-foreground mb-6">
            Shopify apps that actually work.
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            Frustrated with apps that bloat your store, slow it down, or vanish
            when you need support? We&apos;re building the alternative.
          </p>

          <p className="text-lg text-foreground max-w-xl mx-auto mb-10">
            Join the waitlist to get early access when we launch — and to help us
            build what you actually need.
          </p>

          <div className="flex justify-center mb-8">
            <WaitlistForm source="waitlist-hero" />
          </div>

          <p className="text-sm text-muted-foreground">
            Already building?{" "}
            <a
              href="https://github.com/mysteryd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary hover:underline"
            >
              <GithubIcon className="h-4 w-4" />
              Follow on GitHub
            </a>
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-secondary/30 border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight font-heading text-center mb-12">
            Why we&apos;re building this
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="font-heading font-bold mb-2">One thing, done well</h3>
              <p className="text-sm text-muted-foreground">
                Every app does exactly one job. No feature creep, no
                &quot;premium tiers&quot; for basic functionality.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="text-3xl mb-4">🔓</div>
              <h3 className="font-heading font-bold mb-2">Open by default</h3>
              <p className="text-sm text-muted-foreground">
                The code is public. You can audit it, fork it, or host it
                yourself. No black boxes.
              </p>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border text-center">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="font-heading font-bold mb-2">Actually supported</h3>
              <p className="text-sm text-muted-foreground">
                We respond when you reach out. No ticket systems that go nowhere.
                Real help from people who build the product.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold tracking-tight font-heading mb-8">
            What you&apos;ll get
          </h2>

          <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto text-left">
            <div className="flex gap-3">
              <div className="shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary text-sm">✓</span>
              </div>
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">Early access</span> to
                new apps before public launch
              </p>
            </div>

            <div className="flex gap-3">
              <div className="shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary text-sm">✓</span>
              </div>
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">Influence</span> what
                we build next based on your needs
              </p>
            </div>

            <div className="flex gap-3">
              <div className="shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary text-sm">✓</span>
              </div>
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">Behind-the-scenes</span>{" "}
                looks at how we make decisions
              </p>
            </div>

            <div className="flex gap-3">
              <div className="shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary text-sm">✓</span>
              </div>
              <p className="text-muted-foreground">
                <span className="text-foreground font-medium">Discounted pricing</span>{" "}
                for early adopters
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-violet-50 dark:bg-violet-950/20 border-t border-violet-100 dark:border-violet-900">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight font-heading mb-4">
            Ready to join?
          </h2>
          <p className="text-muted-foreground mb-8">
            Be among the first to know when we launch.
          </p>
          <div className="flex justify-center">
            <WaitlistForm source="waitlist-cta" />
          </div>
        </div>
      </section>
    </div>
  );
}
