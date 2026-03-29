import Link from "next/link";
import { GithubIcon } from "@/components/icons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/apps", label: "Apps" },
  { href: "/blog", label: "Blog" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tight font-heading text-primary">
                MysteryD
              </span>
            </Link>
            <p className="mt-4 text-muted-foreground max-w-sm">
              No black boxes. Just better apps.
            </p>
            <a
              href="https://github.com/mysteryd"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-muted-foreground hover:text-primary transition-colors"
            >
              <GithubIcon className="h-5 w-5" />
              Follow on GitHub
            </a>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-mono tracking-widest uppercase text-foreground">
              Navigation
            </h3>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-6 text-sm font-mono tracking-widest uppercase text-foreground">
              Company
            </h3>
            <p className="text-sm text-muted-foreground">
              Built in public by Mysterious Development, LLC
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Mysterious Development, LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
