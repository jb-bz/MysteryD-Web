"use client"

import * as React from "react"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { cn } from "@/lib/utils"
import { MoreHorizontal, Pencil, Trash2, type LucideIcon } from "lucide-react"

export interface ActionMenuItem {
  label: string
  onClick?: () => void
  variant?: "default" | "destructive"
  icon?: LucideIcon
  disabled?: boolean
}

export interface ActionMenuProps {
  actions: ActionMenuItem[]
  trigger?: React.ReactNode
  className?: string
}

export function ActionMenu({ actions, trigger, className }: ActionMenuProps) {
  const defaultTrigger = (
    <button
      type="button"
      className={cn(
        "flex h-9 w-9 items-center justify-center rounded-lg",
        "text-[var(--app-text-secondary)]",
        "hover:bg-[var(--app-border)] hover:text-[var(--app-text-primary)]",
        "transition-colors outline-none",
        "focus-visible:ring-2 focus-visible:ring-[var(--app-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--app-bg)]",
        "disabled:pointer-events-none disabled:opacity-50"
      )}
      aria-label="Open actions menu"
    >
      <MoreHorizontal className="h-5 w-5" aria-hidden="true" />
    </button>
  )

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        {trigger ?? defaultTrigger}
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          sideOffset={4}
          className={cn(
            "z-50 min-w-[160px] rounded-lg border",
            "bg-[var(--app-surface)] text-[var(--app-text-primary)]",
            "border-[var(--app-border)]",
            "shadow-[var(--app-shadow-md)]",
            "p-1",
            "animate-scale-in",
            className
          )}
        >
          {actions.map((action, index) => {
            const Icon = action.icon
            const isDestructive = action.variant === "destructive"
            return (
              <DropdownMenu.Item
                key={index}
                disabled={action.disabled}
                onSelect={action.onClick}
                className={cn(
                  "flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm outline-none",
                  "transition-colors select-none",
                  isDestructive
                    ? "text-[var(--app-error)] focus:bg-[var(--app-error)]/10"
                    : "text-[var(--app-text-primary)] focus:bg-[var(--app-border)]",
                  "disabled:pointer-events-none disabled:opacity-50",
                  "[&_svg]:h-4 [&_svg]:w-4"
                )}
              >
                {Icon && <Icon aria-hidden="true" />}
                {action.label}
              </DropdownMenu.Item>
            )
          })}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}

export function EditAction({ onClick, disabled }: { onClick?: () => void; disabled?: boolean }) {
  return (
    <ActionMenu
      actions={[{ label: "Edit", onClick, icon: Pencil, disabled }]}
      trigger={
        <button
          type="button"
          aria-label="Edit"
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-md",
            "text-[var(--app-text-secondary)]",
            "hover:bg-[var(--app-border)] hover:text-[var(--app-text-primary)]",
            "transition-colors outline-none",
            "focus-visible:ring-2 focus-visible:ring-[var(--app-accent)] focus-visible:ring-offset-2",
            "disabled:pointer-events-none disabled:opacity-50"
          )}
        >
          <Pencil className="h-4 w-4" aria-hidden="true" />
        </button>
      }
    />
  )
}

export function DeleteAction({ onClick, disabled }: { onClick?: () => void; disabled?: boolean }) {
  return (
    <ActionMenu
      actions={[{ label: "Delete", onClick, icon: Trash2, variant: "destructive", disabled }]}
      trigger={
        <button
          type="button"
          aria-label="Delete"
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-md",
            "text-[var(--app-text-secondary)]",
            "hover:bg-[var(--app-error)]/10 hover:text-[var(--app-error)]",
            "transition-colors outline-none",
            "focus-visible:ring-2 focus-visible:ring-[var(--app-accent)] focus-visible:ring-offset-2",
            "disabled:pointer-events-none disabled:opacity-50"
          )}
        >
          <Trash2 className="h-4 w-4" aria-hidden="true" />
        </button>
      }
    />
  )
}
