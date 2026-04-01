import * as React from "react";
import { Bell, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { AppUserMenu } from "./app-user-menu";

export interface AppHeaderProps {
  appName?: string;
  appLogo?: React.ReactNode;
  storeName?: string;
  storeDomain?: string;
  userAvatarSrc?: string;
  userAvatarFallback?: string;
  showDarkModeToggle?: boolean;
  isDarkMode?: boolean;
  onDarkModeToggle?: () => void;
  className?: string;
}

export function AppHeader({
  appName = "MysteryD",
  appLogo,
  storeName,
  storeDomain,
  userAvatarSrc,
  userAvatarFallback,
  showDarkModeToggle = false,
  isDarkMode = false,
  onDarkModeToggle,
  className,
}: AppHeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-40 flex h-[var(--app-header-height)] items-center border-b px-4 gap-4",
        className
      )}
      style={{
        backgroundColor: "var(--app-surface)",
        borderColor: "var(--app-border)",
      }}
      role="banner"
    >
      <div className="flex flex-1 items-center gap-3">
        {appLogo && <div aria-hidden="true">{appLogo}</div>}
        {!appLogo && (
          <div
            className="flex h-8 w-8 items-center justify-center rounded-lg"
            style={{ backgroundColor: "var(--app-accent)" }}
            aria-hidden="true"
          >
            <span className="text-sm font-bold text-white">{appName[0]}</span>
          </div>
        )}
        <span
          className="font-heading text-lg font-bold"
          style={{ color: "var(--app-text-primary)" }}
        >
          {appName}
        </span>
      </div>

      <div className="flex items-center gap-2">
        {showDarkModeToggle && (
          <button
            type="button"
            onClick={onDarkModeToggle}
            className="flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-[var(--app-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--app-accent)]"
            style={{ color: "var(--app-text-secondary)" }}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        )}

        <button
          type="button"
          className="relative flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:bg-[var(--app-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--app-accent)]"
          style={{ color: "var(--app-text-secondary)" }}
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5" aria-hidden="true" />
          <span
            className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full"
            style={{ backgroundColor: "var(--app-accent)" }}
            aria-hidden="true"
          />
        </button>

        <div
          className="h-6 w-px"
          style={{ backgroundColor: "var(--app-border)" }}
          aria-hidden="true"
        />

        <AppUserMenu
          storeName={storeName}
          storeDomain={storeDomain}
          avatarSrc={userAvatarSrc}
          avatarFallback={userAvatarFallback}
        />
      </div>
    </header>
  );
}