import * as React from "react";
import { cn } from "@/lib/utils";
import { SkipLink } from "./skip-link";
import { AppSidebar, type NavItem } from "./app-sidebar";
import { AppHeader } from "./app-header";
import { useTheme } from "next-themes";

export interface AppShellProps {
  children: React.ReactNode;
  appName?: string;
  appLogo?: React.ReactNode;
  storeName?: string;
  storeDomain?: string;
  userAvatarSrc?: string;
  userAvatarFallback?: string;
  navItems?: NavItem[];
  activeNavId?: string;
  onNavigate?: (id: string) => void;
  showDarkModeToggle?: boolean;
  className?: string;
  contentClassName?: string;
}

export function AppShell({
  children,
  appName,
  appLogo,
  storeName,
  storeDomain,
  userAvatarSrc,
  userAvatarFallback,
  navItems,
  activeNavId,
  onNavigate,
  showDarkModeToggle = true,
  className,
  contentClassName,
}: AppShellProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const isDarkMode = theme === "dark";

  const handleDarkModeToggle = React.useCallback(() => {
    setTheme(isDarkMode ? "light" : "dark");
  }, [isDarkMode, setTheme]);

  return (
    <div
      className={cn("flex h-screen overflow-hidden", className)}
      style={{ backgroundColor: "var(--app-bg)" }}
    >
      <SkipLink />

      <AppSidebar
        items={navItems}
        activeItemId={activeNavId}
        isCollapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed((prev) => !prev)}
        onNavigate={onNavigate}
      />

      <div className="flex flex-1 flex-col overflow-hidden">
        <AppHeader
          appName={appName}
          appLogo={appLogo}
          storeName={storeName}
          storeDomain={storeDomain}
          userAvatarSrc={userAvatarSrc}
          userAvatarFallback={userAvatarFallback}
          showDarkModeToggle={showDarkModeToggle}
          isDarkMode={isDarkMode}
          onDarkModeToggle={handleDarkModeToggle}
        />

        <main
          id="main-content"
          className={cn("flex-1 overflow-y-auto", contentClassName)}
          style={{ backgroundColor: "var(--app-bg)" }}
          tabIndex={-1}
        >
          {children}
        </main>
      </div>
    </div>
  );
}