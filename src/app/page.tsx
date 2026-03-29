import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";
import { MailingListForm } from "@/components/mailing-list-form";

const valueProps = [
  {
    number: "01",
    title: "No bloat",
    description:
      "Every app does one thing well. Nothing more. We don't build feature factories — we build focused tools that do exactly what you need.",
  },
  {
    number: "02",
    title: "Open source",
    description:
      "The code is public. No mystery about what's running your store. Audit it, fork it, trust it.",
  },
  {
    number: "03",
    title: "30+ years of experience",
    description:
      "We've been in ecommerce long enough to know what works and what doesn't. We build the apps we wish existed.",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <section className="relative min-h-[90vh] flex items-center justify-center bg-[#0F0A1E] dark:bg-[#0F0A1E] text-[#EDE9FE] overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/10 via-transparent to-transparent" />
        
        <div className="relative z-10 container mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-4xl">
            <div className="opacity-0 animate-fade-up">
              <span className="inline-block text-[#9D5FF3] text-sm font-mono tracking-widest uppercase mb-6">
                MysteryD
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8 opacity-0 animate-fade-up stagger-1">
              <span className="block">No black boxes.</span>
              <span className="block text-[#9D5FF3]">Just better apps.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-[#A89BC2] max-w-2xl mb-12 opacity-0 animate-fade-up stagger-2">
              We build Shopify apps that are simpler, faster, and better supported than what you&apos;re using now. Open source. Built in public.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up stagger-3">
              <a
                href="https://github.com/mysteryd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#9D5FF3] hover:bg-[#7C3AED] text-[#0F0A1E] font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                <GithubIcon className="h-5 w-5" />
                Follow on GitHub
              </a>
              <MailingListForm compact />
            </div>
          </div>
          
          <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block opacity-10">
            <div className="w-96 h-96 rounded-full border border-[#9D5FF3]" />
            <div className="absolute inset-12 w-72 h-72 rounded-full border border-[#7C3AED]" />
            <div className="absolute inset-24 w-48 h-48 rounded-full border border-[#3D2F6B]" />
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-0 animate-fade-up stagger-5">
          <div className="flex flex-col items-center gap-2 text-[#A89BC2]">
            <span className="text-sm font-mono tracking-widest uppercase">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-[#9D5FF3] to-transparent" />
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 px-6 bg-[#F5F3FF] dark:bg-[#F5F3FF]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block text-[#7C3AED] text-sm font-mono tracking-widest uppercase mb-4 opacity-0 animate-fade-up">
                What We&apos;re Building
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1E1B2E] mb-6 leading-[1.1] opacity-0 animate-fade-up stagger-1">
                Focused Shopify apps,
                <br />
                <span className="text-[#7C3AED]">one at a time.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-[#DDD6FE] hover-lift opacity-0 animate-fade-up stagger-2">
                <p className="text-lg text-[#4C4469] leading-relaxed">
                  We build one app at a time. Each one solves one real problem — not a hundred imaginary ones. We open source everything and document the build in public.
                </p>
                <p className="mt-4 text-lg text-[#4C4469] leading-relaxed">
                  No hidden roadmaps. No surprise pricing. Just honest software.
                </p>
                <Link
                  href="/apps"
                  className="inline-flex items-center gap-2 mt-6 text-[#7C3AED] font-semibold hover:gap-3 transition-all"
                >
                  See what&apos;s coming
                  <ArrowRight className="h-4 w-4" />
                </Link>
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
              Why MysteryD
            </span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight opacity-0 animate-fade-up stagger-1">
              Built different.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {valueProps.map((prop, index) => (
              <div
                key={prop.number}
                className="relative p-8 bg-[#1A1033] rounded-2xl border border-[#3D2F6B] hover-lift opacity-0 animate-fade-up"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <span className="text-6xl font-bold text-[#3D2F6B] absolute top-4 right-6">
                  {prop.number}
                </span>
                <h3 className="text-2xl font-bold text-[#9D5FF3] mb-4">
                  {prop.title}
                </h3>
                <p className="text-[#A89BC2] leading-relaxed">
                  {prop.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-24 md:py-32 px-6 bg-gradient-to-br from-[#7C3AED] to-[#6D28D9] dark:from-[#9D5FF3] dark:to-[#7C3AED] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        
        <div className="container mx-auto max-w-4xl relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 opacity-0 animate-fade-up">
            Follow the build.
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto opacity-0 animate-fade-up stagger-1">
            We ship in public. Watch the code evolve, see what decisions we make and why, and get involved if you want.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up stagger-2">
            <a
              href="https://github.com/mysteryd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#7C3AED] hover:bg-[#F5F3FF] font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              <GithubIcon className="h-5 w-5" />
              Watch on GitHub
            </a>
            <MailingListForm />
          </div>
        </div>
      </section>
    </div>
  );
}