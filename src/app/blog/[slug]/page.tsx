import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getBlogPost, getAllBlogPosts } from "@/lib/blog";

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-foreground to-background" />
        <div className="absolute inset-0 noise-overlay" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <article>
            <header className="mb-16">
              <p className="text-primary font-mono text-sm mb-4">{post.date}</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
                {post.title}
              </h1>
              <p className="text-xl text-muted-foreground">
                {post.author}
              </p>
            </header>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-2xl text-muted-foreground leading-relaxed mb-12">
                {post.excerpt}
              </p>
              
              {post.content.split('\n\n').map((paragraph, i) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={i} className="text-3xl font-bold mt-12 mb-6">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <p key={i} className="text-lg leading-relaxed font-semibold">
                      {paragraph.replace(/\*\*/g, '')}
                    </p>
                  );
                }
                if (paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n').map(line => line.replace('- ', ''));
                  return (
                    <ul key={i} className="list-disc pl-6 mb-6 space-y-2">
                      {items.map((item, j) => (
                        <li key={j} className="text-lg leading-relaxed">{item}</li>
                      ))}
                    </ul>
                  );
                }
                if (paragraph.includes('**')) {
                  const parts = paragraph.split('**');
                  return (
                    <p key={i} className="text-lg leading-relaxed mb-6">
                      {parts.map((part, j) => j % 2 === 1 ? <strong key={j} className="text-primary">{part}</strong> : part)}
                    </p>
                  );
                }
                return (
                  <p key={i} className="text-lg leading-relaxed mb-6">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
