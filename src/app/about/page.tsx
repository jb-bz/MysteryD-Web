import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { MailingListForm } from "@/components/mailing-list-form";
import { GithubIcon } from "@/components/icons";

const team = [
  {
    name: "Jolon Bankey",
    role: "Founder, Developer, Product Lead",
    initials: "JB",
    bio: "30+ years in software development and product management. Deep ecommerce background. Started MysteryD to build the Shopify apps he wishes existed.",
  },
  {
    name: "Zia",
    role: "Customer Support and Community",
    initials: "Z",
    bio: "Keeps users happy and communities thriving. Makes sure every customer feels heard and every question gets a real answer.",
  },
  {
    name: "Neira",
    role: "Marketing, Design, and Growth",
    initials: "N",
    bio: "Turns complex ideas into clear messages. Makes sure the right people find MysteryD at the right time.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight font-heading text-center mb-12">
            About MysteryD
          </h1>

          <div className="prose prose-lg mx-auto">
            <h2 className="text-2xl font-bold font-heading mb-4">The Story</h2>
            <p className="text-muted-foreground">
              MysteryD was originally founded in Costa Rica in the early 2000s.
              It&apos;s being revived and relaunched in the USA in 2026.
            </p>
            <p className="text-muted-foreground mt-4">
              The mission hasn&apos;t changed: build the Shopify apps we wish
              existed. Simple, well-crafted tools that do exactly what they
              say — no bloat, no surprises.
            </p>
          </div>
        </div>
      </section>

      <Separator />

      <section className="py-16 md:py-24 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight font-heading text-center mb-12">
            The Team
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {team.map((member) => (
              <Card key={member.name} className="bg-card">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="h-20 w-20 mb-4 bg-primary/10 text-primary">
                      <AvatarFallback className="text-lg font-bold">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-lg font-bold font-heading">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary mb-4">{member.role}</p>
                    <p className="text-sm text-muted-foreground">
                      {member.bio}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Separator />

      <section className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight font-heading text-center mb-12">
            How We Work
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <h3 className="text-lg font-bold font-heading mb-2">
                Async-first
              </h3>
              <p className="text-muted-foreground">
                Small team. Ship fast, listen hard, improve constantly.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold font-heading mb-2">
                Customer-led
              </h3>
              <p className="text-muted-foreground">
                What merchants tell us matters more than what we assume.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold font-heading mb-2">
                One at a time
              </h3>
              <p className="text-muted-foreground">
                Scope locked before build begins. No feature creep.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      <section className="py-16 md:py-24 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight font-heading mb-6">
            Get Involved
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Follow the build, join the mailing list, or just watch what
            we&apos;re working on.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/mysteryd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center rounded-lg border border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50 h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3 text-sm font-medium transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50"
            >
              <GithubIcon className="h-5 w-5" />
              Follow on GitHub
            </a>
            <MailingListForm compact />
          </div>
        </div>
      </section>
    </div>
  );
}
