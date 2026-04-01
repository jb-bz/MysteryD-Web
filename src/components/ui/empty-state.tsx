import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface EmptyStateProps {
  icon?: React.ReactNode
  title: string
  description?: string
  action?: {
    label: string
    onClick: () => void
  }
  className?: string
}

function EmptyState({
  icon,
  title,
  description,
  action,
  className,
}: EmptyStateProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      className={cn(
        "flex flex-col items-center justify-center text-center py-16 px-8",
        className
      )}
    >
      {icon && (
        <div className="mb-6 flex items-center justify-center rounded-full bg-muted p-4 text-muted-foreground">
          {icon}
        </div>
      )}

      <h3 className="text-lg font-semibold font-heading text-foreground mb-2">
        {title}
      </h3>

      {description && (
        <p className="text-sm text-muted-foreground max-w-sm mb-6 leading-relaxed">
          {description}
        </p>
      )}

      {action && (
        <Button onClick={action.onClick} className="mt-2">
          {action.label}
        </Button>
      )}
    </div>
  )
}

export { EmptyState }
export type { EmptyStateProps }
