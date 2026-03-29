import { GithubIcon } from "@/components/icons";
import { MailingListForm } from "@/components/mailing-list-form";

export default function AppsPage() {
  return (
    <div className="flex flex-col">
      <section className="relative min-h-[60vh] flex items-center justify-center bg-[#0F0A1E] dark:bg-[#0F0A1E] text-[#EDE9FE] overflow-hidden">
        <div className="absolute inset-0 noise-overlay" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/10 via-transparent to-transparent" />
        
        <div className="relative z-10 container mx-auto max-w-4xl px-6 py-24 text-center">
          <span className="inline-block text-[#9D5FF3] text-sm font-mono tracking-widest uppercase mb-6 opacity-0 animate-fade-up">
            The Apps
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] mb-8 opacity-0 animate-fade-up stagger-1">
            Coming soon.
          </h1>
          <p className="text-xl md:text-2xl text-[#A89BC2] max-w-2xl mx-auto mb-12 opacity-0 animate-fade-up stagger-2">
            We&apos;re building our first app now. Follow us on GitHub to watch it happen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up stagger-3">
            <a
              href="https://github.com/mysteryd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#9D5FF3] hover:bg-[#7C3AED] text-[#0F0A1E] font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              <GithubIcon className="h-5 w-5" />
              Watch on GitHub
            </a>
            <MailingListForm
              title=""
              description=""
              compact
            />
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 bg-[#F5F3FF] dark:bg-[#F5F3FF]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1E1B2E] opacity-0 animate-fade-up">
              What to expect.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-white rounded-2xl border border-[#DDD6FE] opacity-0 animate-fade-up stagger-1">
              <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-bold text-[#1E1B2E] mb-3">Focused apps</h3>
              <p className="text-[#4C4469] leading-relaxed">
                One problem solved well. No feature bloat, no confused UX. Every app does exactly what it says.
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-[#DDD6FE] opacity-0 animate-fade-up stagger-2">
              <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center mb-6">
                <span className="text-2xl">🔓</span>
              </div>
              <h3 className="text-xl font-bold text-[#1E1B2E] mb-3">Open source</h3>
              <p className="text-[#4C4469] leading-relaxed">
                Every app is open source. Audit the code, contribute, or fork it. No black boxes.
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-[#DDD6FE] opacity-0 animate-fade-up stagger-3">
              <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center mb-6">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-[#1E1B2E] mb-3">Fair pricing</h3>
              <p className="text-[#4C4469] leading-relaxed">
                No surprise charges. No tier gymnastics. Simple, transparent pricing you can understand.
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl border border-[#DDD6FE] opacity-0 animate-fade-up stagger-4">
              <div className="w-12 h-12 rounded-xl bg-[#7C3AED]/10 flex items-center justify-center mb-6">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-bold text-[#1E1B2E] mb-3">Real support</h3>
              <p className="text-[#4C4469] leading-relaxed">
                Talk to a human who knows the product. No ticket purgatory, no chatbots.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}