import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { MailingListForm } from "@/components/mailing-list-form";
import { Separator } from "@/components/ui/separator";
import { GithubIcon } from "@/components/icons";

const valueProps = [
  {
    title: "No bloat",
    description: "Every app does one thing well. Nothing more.",
  },
  {
    title: "Open source",
    description:
      "The code is public. No mystery about what's running your store.",
  },
  {
    title: "Built by someone who's been in ecommerce",
    description:
      "30+ years of software and product experience. We know the pain.",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <section className="py-24 md:py-32 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-heading text-foreground">
            No black boxes. Just better apps.
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            MysteryD builds Shopify apps that are simpler, faster, and better
            supported than what you&apos;re using now. Open source. Built in
            public.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/mysteryd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 text-primary-foreground bg-primary h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3"
            >
              <GithubIcon className="h-5 w-5" />
              Follow on GitHub
            </a>
            <MailingListForm compact />
          </div>
        </div>
      </section>

      <Separator />

      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight font-heading text-center mb-12">
            What We&apos;re Building
          </h2>
          <div className="prose prose-lg mx-auto text-center">
            <p className="text-muted-foreground">
              We build focused Shopify apps, one at a time. Every app solves one
              real problem — not a hundred imaginary ones. We open source
              everything and document the build in public. No hidden roadmaps,
              no surprise pricing.
            </p>
            <p className="mt-4">
              <Link
                href="/apps"
                className="inline-flex items-center gap-1 text-primary hover:underline"
              >
                See what&apos;s coming <ArrowRight className="h-4 w-4" />
              </Link>
            </p>
          </div>
        </div>
      </section>

      <Separator />

      <section className="py-16 md:py-24 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight font-heading text-center mb-12">
            Why MysteryD
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {valueProps.map((prop) => (
              <Card key={prop.title} className="bg-card">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-bold font-heading mb-2 text-primary">
                    {prop.title}
                  </h3>
                  <p className="text-muted-foreground">{prop.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight font-heading mb-6">
            Follow the Build
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            We ship in public. Watch the code evolve, see what decisions we
            make and why, and get involved if you want.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/mysteryd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-lg border border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3 text-sm font-medium transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50"
            >
              <GithubIcon className="h-5 w-5" />
              Watch on GitHub
            </a>
            <MailingListForm compact />
          </div>
        </div>
      </section>
    </div>
  );
}
