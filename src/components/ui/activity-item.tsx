import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface ActivityItemProps {
  icon?: React.ReactNode
  description: string
  timestamp: string | React.ReactNode
  href?: string
  className?: string
}

function ActivityItem({
  icon,
  description,
  timestamp,
  href,
  className,
}: ActivityItemProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 py-3",
        className
      )}
    >
      {icon && (
        <div aria-hidden="true" className="flex-shrink-0 mt-0.5 rounded-full bg-muted p-2 text-muted-foreground">
          {icon}
        </div>
      )}

      <div className="flex flex-col min-w-0 flex-1 gap-0.5">
        <p className="text-sm text-foreground leading-snug">
          {href ? (
            <Link
              href={href}
              className="font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
            >
              {description}
            </Link>
          ) : (
            <span>{description}</span>
          )}
        </p>
        {typeof timestamp === "string" ? (
          <time
            dateTime={timestamp}
            className="text-xs text-muted-foreground font-mono"
          >
            {timestamp}
          </time>
        ) : (
          <span className="text-xs text-muted-foreground font-mono">{timestamp}</span>
        )}
      </div>
    </div>
  )
}

export { ActivityItem }
export type { ActivityItemProps }
