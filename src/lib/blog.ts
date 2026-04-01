export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "no-black-boxes-just-better-apps",
    title: "No black boxes. Just better apps.",
    date: "2026-03-30",
    excerpt: "We're launching MysteryD to fix what Shopify app development has become: a maze of bloated plugins, opaque pricing, and apps that promise everything and deliver confusion.",
    author: "MysteryD Team",
    content: `## The problem with Shopify apps

Shopify merchants deserve better than what the app ecosystem has become.

Open up your Shopify admin today. Count the apps you've installed. Now try to answer simple questions: Which app is slowing down my store? Which one handles inventory? Why does syncing take three different apps and still break on Saturdays?

Most merchants have accumulated a stack of tools that were supposed to simplify their lives. Instead, they've created a fragile Rube Goldberg machine held together by hope and expensive app subscriptions.

The apps aren't designed to work together. They're designed to capture you.

## What we built

MysteryD is a different approach.

We build focused Shopify apps that do one thing well. No bloat. No feature creep. No "enterprise tier" that costs more than your rent.

More importantly: you can see exactly what our apps do. The code is open source. The logic is transparent. When something breaks, you can find out why instead of filing a support ticket into the void.

**"No black boxes. Just better apps."** isn't marketing copy. It's a commitment.

## Who this is for

You're a Shopify merchant doing $500K to $10M in revenue. You've got a real business, not a lifestyle blog. You've tried the cheap apps, you've outgrown them, and the enterprise solutions are price-prohibitive and overengineered.

You need apps that work. That you can understand. That don't charge you when you dare to ask how something works.

That's who we build for.

## What we're launching with

Our first app tackles the problem nobody talks about: **multi-agent orchestration for Shopify tasks**.

While other tools add AI as a buzzword, we built actual agents that coordinate to handle complex workflows. Inventory sync, order processing, customer support routing — tasks that usually require a pile of third-party apps and a virtual assistant to babysit them.

Our agents work in the open. You see what they're doing. You can adjust how they behave. You own the workflow, not the tool.

## This is just the start

We're launching with one focused app. We'll be adding more based on what merchants actually need — not what sounds good in a pitch deck.

If you're tired of the app stack chaos, [join the waitlist](/waitlist). We're onboarding merchants who want better, not just different.

The black box era of Shopify apps is over.`,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
