import * as React from "react";
import {
  LayoutDashboard,
  Users,
  Settings,
  Package,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AppNavItem, type AppNavItemProps } from "./app-nav-item";

export interface NavItem {
  id: string;
  label: string;
  icon?: AppNavItemProps["icon"];
  href?: string;
  badge?: string | number;
  disabled?: boolean;
}

export interface AppSidebarProps {
  items?: NavItem[];
  activeItemId?: string;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
  onNavigate?: (id: string) => void;
  className?: string;
}

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { id: "dashboard", label: "Dashboard", icon: LayoutDashboard, href: "/app" },
  { id: "orders", label: "Orders", icon: Package, href: "/app/orders" },
  { id: "customers", label: "Customers", icon: Users, href: "/app/customers" },
  { id: "analytics", label: "Analytics", icon: BarChart3, href: "/app/analytics" },
  { id: "settings", label: "Settings", icon: Settings, href: "/app/settings" },
];

export function AppSidebar({
  items = DEFAULT_NAV_ITEMS,
  activeItemId,
  isCollapsed = false,
  onToggleCollapse,
  onNavigate,
  className,
}: AppSidebarProps) {
  return (
    <aside
      className={cn(
        "sticky top-0 flex h-screen flex-col border-r transition-all duration-300",
        className
      )}
      style={{
        width: isCollapsed ? "var(--app-sidebar-collapsed-width)" : "var(--app-sidebar-width)",
        backgroundColor: "var(--app-surface)",
        borderColor: "var(--app-border)",
      }}
      aria-label="Main navigation"
    >
      <div
        className="flex h-[var(--app-header-height)] items-center border-b px-4"
        style={{ borderColor: "var(--app-border)" }}
      >
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-lg"
              style={{ backgroundColor: "var(--app-accent)" }}
              aria-hidden="true"
            >
              <span className="text-sm font-bold text-white">M</span>
            </div>
            <span
              className="font-heading text-lg font-bold"
              style={{ color: "var(--app-text-primary)" }}
            >
              MysteryD
            </span>
          </div>
        )}
        {isCollapsed && (
          <div
            className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg"
            style={{ backgroundColor: "var(--app-accent)" }}
            aria-hidden="true"
          >
            <span className="text-sm font-bold text-white">M</span>
          </div>
        )}
      </div>

      <nav className="flex-1 overflow-y-auto px-2 py-3" aria-label="App navigation">
        <ul className="space-y-1" role="list">
          {items.map((item) => (
            <li key={item.id}>
              <AppNavItem
                icon={item.icon}
                label={item.label}
                href={item.href}
                isActive={activeItemId === item.id}
                isCollapsed={isCollapsed}
                badge={item.badge}
                disabled={item.disabled}
                onClick={() => onNavigate?.(item.id)}
              />
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t px-2 py-3" style={{ borderColor: "var(--app-border)" }}>
        <AppNavItem
          icon={HelpCircle}
          label={isCollapsed ? "Help" : "Help & Support"}
          isCollapsed={isCollapsed}
          onClick={() => {}}
        />

        <button
          type="button"
          onClick={onToggleCollapse}
          className="mt-2 flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-[var(--app-border)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--app-accent)]"
          style={{ color: "var(--app-text-secondary)" }}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? (
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          ) : (
            <>
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              <span>Collapse</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );
}