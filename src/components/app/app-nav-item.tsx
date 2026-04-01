import * as React from "react";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AppNavItemProps {
  icon?: LucideIcon;
  label: string;
  href?: string;
  isActive?: boolean;
  isCollapsed?: boolean;
  badge?: string | number;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

export function AppNavItem({
  icon: Icon,
  label,
  href,
  isActive = false,
  isCollapsed = false,
  badge,
  disabled = false,
  onClick,
  className,
}: AppNavItemProps) {
  const content = (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "group relative flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-semibold transition-all duration-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--app-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--app-bg)]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        isActive
          ? "bg-[var(--app-accent)]/10 text-[var(--app-accent)]"
          : "text-[var(--app-text-secondary)] hover:bg-[var(--app-border)] hover:text-[var(--app-text-primary)]",
        isCollapsed && "justify-center px-2",
        className
      )}
      style={
        isActive
          ? { color: "var(--app-accent)" }
          : { color: "var(--app-text-secondary)" }
      }
      aria-current={isActive ? "page" : undefined}
    >
      {isActive && (
        <span
          className="absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-r-full"
          style={{ backgroundColor: "var(--app-accent)" }}
          aria-hidden="true"
        />
      )}

      {Icon && (
        <Icon
          className={cn("h-5 w-5 flex-shrink-0", isCollapsed && "h-5 w-5")}
          aria-hidden="true"
        />
      )}

      {!isCollapsed && (
        <>
          <span className="flex-1 truncate text-left">{label}</span>
          {badge !== undefined && (
            <span
              className="ml-auto flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-xs font-bold"
              style={{
                backgroundColor: isActive ? "var(--app-accent)" : "var(--app-muted)",
                color: isActive ? "white" : "var(--app-text-primary)",
              }}
              aria-label={typeof badge === "number" ? `${badge} items` : badge}
            >
              {badge}
            </span>
          )}
        </>
      )}

      {isCollapsed && badge !== undefined && (
        <span
          className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-bold"
          style={{
            backgroundColor: "var(--app-accent)",
            color: "white",
          }}
          aria-label={typeof badge === "number" ? `${badge} items` : badge}
        >
          {typeof badge === "number" && badge > 9 ? "9+" : badge}
        </span>
      )}
    </button>
  );

  if (href && !disabled) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}