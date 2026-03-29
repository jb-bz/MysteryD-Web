import { GithubIcon } from "@/components/icons";
import { MailingListForm } from "@/components/mailing-list-form";

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
      <section className="relative py-24 md:py-40 px-6 bg-[#0F0A1E] dark:bg-[#0F0A1E] text-[#EDE9FE] overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="container mx-auto max-w-4xl relative z-10">
          <span className="inline-block text-[#9D5FF3] text-sm font-mono tracking-widest uppercase mb-6 opacity-0 animate-fade-up">
            About
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] mb-8 opacity-0 animate-fade-up stagger-1">
            We build what we wish existed.
          </h1>
          <p className="text-xl md:text-2xl text-[#A89BC2] max-w-2xl opacity-0 animate-fade-up stagger-2">
            MysteryD was founded on a simple idea: the best software comes from solving real problems, not chasing feature lists.
          </p>
        </div>
      </section>

      <section className="relative py-24 md:py-32 px-6 bg-[#F5F3FF] dark:bg-[#F5F3FF]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <span className="inline-block text-[#7C3AED] text-sm font-mono tracking-widest uppercase mb-4 opacity-0 animate-fade-up">
                The Story
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1E1B2E] leading-[1.1] opacity-0 animate-fade-up stagger-1">
                From Costa Rica to the USA.
              </h2>
            </div>
            <div className="lg:col-span-7">
              <div className="space-y-6 opacity-0 animate-fade-up stagger-2">
                <p className="text-xl text-[#4C4469] leading-relaxed">
                  MysteryD was originally founded in Costa Rica in the early 2000s. It&apos;s being revived and relaunched in the USA in 2026.
                </p>
                <p className="text-xl text-[#4C4469] leading-relaxed">
                  The mission hasn&apos;t changed: build the Shopify apps we wish existed. Simple, well-crafted tools that do exactly what they say — no bloat, no surprises.
                </p>
                <p className="text-xl text-[#4C4469] leading-relaxed">
                  30+ years of software and product experience tells us one thing: merchants deserve better than the bloated, expensive, poorly-supported apps they&apos;re stuck with today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 px-6 bg-[#1E1B2E] dark:bg-[#1E1B2E] text-[#EDE9FE]">
        <div className="absolute inset-0 noise-overlay" />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block text-[#9D5FF3] text-sm font-mono tracking-widest uppercase mb-4 opacity-0 animate-fade-up">
              The Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight opacity-0 animate-fade-up stagger-1">
              Small team. Big experience.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="relative p-8 bg-[#1A1033] rounded-2xl border border-[#3D2F6B] hover-lift opacity-0 animate-fade-up"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-[#9D5FF3]/20 flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold text-[#9D5FF3]">{member.initials}</span>
                </div>
                <h3 className="text-xl font-bold text-[#EDE9FE] mb-1">
                  {member.name}
                </h3>
                <p className="text-sm text-[#9D5FF3] font-medium mb-4">{member.role}</p>
                <p className="text-[#A89BC2] leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 px-6 bg-[#F5F3FF] dark:bg-[#F5F3FF]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="inline-block text-[#7C3AED] text-sm font-mono tracking-widest uppercase mb-4 opacity-0 animate-fade-up">
              How We Work
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1E1B2E] opacity-0 animate-fade-up stagger-1">
              Our principles.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl border border-[#DDD6FE] opacity-0 animate-fade-up stagger-2">
              <span className="text-4xl font-bold text-[#7C3AED]/20">01</span>
              <h3 className="text-xl font-bold text-[#1E1B2E] mt-4 mb-3">
                Async-first
              </h3>
              <p className="text-[#4C4469] leading-relaxed">
                Small team. Ship fast, listen hard, improve constantly. No standups for the sake of standups.
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-[#DDD6FE] opacity-0 animate-fade-up stagger-3">
              <span className="text-4xl font-bold text-[#7C3AED]/20">02</span>
              <h3 className="text-xl font-bold text-[#1E1B2E] mt-4 mb-3">
                Customer-led
              </h3>
              <p className="text-[#4C4469] leading-relaxed">
                What merchants tell us matters more than what we assume. Real feedback, real improvements.
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-[#DDD6FE] opacity-0 animate-fade-up stagger-4">
              <span className="text-4xl font-bold text-[#7C3AED]/20">03</span>
              <h3 className="text-xl font-bold text-[#1E1B2E] mt-4 mb-3">
                One at a time
              </h3>
              <p className="text-[#4C4469] leading-relaxed">
                Scope locked before build begins. No feature creep. Every app does one thing well.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 px-6 bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] dark:from-[#9D5FF3] dark:to-[#7C3AED] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 opacity-0 animate-fade-up">
            Get involved.
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto opacity-0 animate-fade-up stagger-1">
            Follow the build, join the mailing list, or just watch what we&apos;re working on.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up stagger-2">
            <a
              href="https://github.com/mysteryd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#7C3AED] hover:bg-[#F5F3FF] font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              <GithubIcon className="h-5 w-5" />
              Follow on GitHub
            </a>
            <MailingListForm />
          </div>
        </div>
      </section>
    </div>
  );
}