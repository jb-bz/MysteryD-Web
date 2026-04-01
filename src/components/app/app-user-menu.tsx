import * as React from "react";
import Image from "next/image";
import { ChevronDown, Store } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AppUserMenuProps {
  storeName?: string;
  storeDomain?: string;
  avatarSrc?: string;
  avatarFallback?: string;
  onSignOut?: () => void;
  className?: string;
}

export function AppUserMenu({
  storeName = "My Store",
  storeDomain = "mystore.myshopify.com",
  avatarSrc,
  avatarFallback,
  className,
}: AppUserMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const fallback = avatarFallback || storeName.slice(0, 2).toUpperCase();

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={menuRef} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm transition-colors hover:bg-[var(--app-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--app-accent)]"
        style={{ color: "var(--app-text-primary)" }}
      >
        <div
          className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold"
          style={{ backgroundColor: "var(--app-accent)", color: "white" }}
        >
          {avatarSrc ? (
            <Image
              src={avatarSrc}
              alt=""
              width={28}
              height={28}
              className="rounded-full object-cover"
            />
          ) : (
            fallback
          )}
        </div>
        <div className="hidden flex-col items-start md:flex">
          <span className="font-semibold" style={{ color: "var(--app-text-primary)" }}>
            {storeName}
          </span>
          <span
            className="flex items-center gap-1 text-xs"
            style={{ color: "var(--app-text-secondary)" }}
          >
            <Store className="h-3 w-3" />
            {storeDomain}
          </span>
        </div>
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
          style={{ color: "var(--app-text-secondary)" }}
          aria-hidden="true"
        />
      </button>

      {isOpen && (
        <div
          className="absolute bottom-full left-0 mb-1 w-56 animate-scale-in rounded-xl border shadow-lg"
          style={{
            backgroundColor: "var(--app-surface)",
            borderColor: "var(--app-border)",
            animationDuration: "0.15s",
            animationFillMode: "both",
          }}
          role="menu"
        >
          <div
            className="border-b px-3 py-2"
            style={{ borderColor: "var(--app-border)" }}
          >
            <p className="text-xs font-semibold" style={{ color: "var(--app-text-secondary)" }}>
              Signed in as
            </p>
            <p className="text-sm font-medium truncate" style={{ color: "var(--app-text-primary)" }}>
              {storeDomain}
            </p>
          </div>
          <div className="p-1">
            <button
              type="button"
              role="menuitem"
              className="w-full rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-[var(--app-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--app-accent)]"
              style={{ color: "var(--app-text-primary)" }}
              onClick={() => setIsOpen(false)}
            >
              Store Settings
            </button>
            <button
              type="button"
              role="menuitem"
              className="w-full rounded-lg px-3 py-2 text-left text-sm transition-colors hover:bg-[var(--app-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--app-accent)]"
              style={{ color: "var(--app-error)" }}
              onClick={() => setIsOpen(false)}
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}