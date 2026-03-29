import { MailingListForm } from "@/components/mailing-list-form";

export default function BlogPage() {
  return (
    <div className="flex flex-col">
      <section className="relative py-32 md:py-48 px-4 overflow-hidden bg-[#0a0a0f]">
        <div className="absolute inset-0 noise-overlay opacity-30 pointer-events-none" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-[#8b5cf6]/20 blur-3xl" />
        <div className="absolute bottom-0 -left-16 w-64 h-64 rounded-full bg-[#a855f7]/10 blur-2xl" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <div className="stagger-1">
            <span className="inline-block text-xs font-mono uppercase tracking-widest text-[#a855f7] mb-6">
              The Blog
            </span>
          </div>
          <h1 className="font-heading font-bold tracking-tight text-[#fafafa] stagger-2">
            <span className="block text-5xl md:text-7xl lg:text-8xl leading-none">
              Building
            </span>
            <span className="block text-5xl md:text-7xl lg:text-8xl leading-none text-gradient">
              in public.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[#a1a1aa] max-w-xl mt-8 stagger-3">
            We document what we build, why we build it, and what we learn along
            the way.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-[#fafafa]">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-12 gap-6 md:gap-8">
            <div className="col-span-12 md:col-span-8 stagger-1">
              <div className="bg-[#f5f5f5] p-8 md:p-12 rounded-lg border border-[#e5e5e5] hover-lift">
                <span className="text-xs font-mono uppercase tracking-widest text-[#7c3aed]">Coming Soon</span>
                <h2 className="font-heading font-bold text-2xl md:text-3xl mt-4 mb-4 text-[#171717]">
                  First post is in the works
                </h2>
                <p className="text-[#525252] leading-relaxed">
                  We&apos;re working on our first post. Sign up below to be notified when it drops.
                </p>
              </div>
            </div>
            
            <div className="col-span-12 md:col-span-4 flex flex-col gap-6 stagger-2">
              <div className="bg-[#f5f5f5] p-6 rounded-lg border border-[#e5e5e5] hover-lift">
                <h3 className="font-bold font-heading text-lg text-[#171717] mb-3">
                  What you&apos;ll find here
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#7c3aed] font-mono text-sm mt-0.5">01</span>
                    <div>
                      <span className="font-semibold text-[#171717]">Build logs</span>
                      <p className="text-sm text-[#525252]">Real-time updates on what we&apos;re building.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#7c3aed] font-mono text-sm mt-0.5">02</span>
                    <div>
                      <span className="font-semibold text-[#171717]">Decisions</span>
                      <p className="text-sm text-[#525252]">Why we chose X over Y.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#7c3aed] font-mono text-sm mt-0.5">03</span>
                    <div>
                      <span className="font-semibold text-[#171717]">Lessons</span>
                      <p className="text-sm text-[#525252]">What worked, what didn&apos;t.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-[#0a0a0f] relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay opacity-20 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#7c3aed]/10 blur-3xl" />
        
        <div className="container mx-auto max-w-3xl relative z-10 text-center stagger-1">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-[#fafafa] mb-6">
            Don&apos;t miss a post.
          </h2>
          <p className="text-[#a1a1aa] text-lg mb-10 max-w-md mx-auto">
            Join the list. No spam, just updates when we publish something worth reading.
          </p>
          <div className="stagger-2">
            <MailingListForm
              title="Get notified"
              description="Be the first to know when we publish a new post."
            />
          </div>
        </div>
      </section>
    </div>
  );
}