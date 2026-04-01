import * as React from "react"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { Spinner } from "@/components/ui/spinner"

interface StatCardProps {
  label: string
  value: string | number
  trend?: {
    direction: "up" | "down" | "neutral"
    value: string
    label?: string
  }
  description?: string
  icon?: React.ReactNode
  loading?: boolean
  error?: boolean
  className?: string
}

function StatCard({
  label,
  value,
  trend,
  description,
  icon,
  loading = false,
  error = false,
  className,
}: StatCardProps) {
  const TrendIcon = {
    up: TrendingUp,
    down: TrendingDown,
    neutral: Minus,
  }[trend?.direction ?? "neutral"]

  const trendColorClass = {
    up: "text-success dark:text-success",
    down: "text-destructive dark:text-destructive",
    neutral: "text-muted-foreground",
  }[trend?.direction ?? "neutral"]

  const trendAriaLabel = trend
    ? `${label} is ${trend.direction === "up" ? "up" : trend.direction === "down" ? "down" : "unchanged"} ${trend.value}`
    : undefined

  const formattedValue = typeof value === "number"
    ? new Intl.NumberFormat("en-US").format(value)
    : value

  return (
    <Card
      role="figure"
      aria-label={trendAriaLabel ?? `${label}: ${formattedValue}`}
      className={cn("relative", className)}
    >
      <CardContent className="flex flex-col gap-3 p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1 min-w-0">
            <span className="text-sm font-medium text-muted-foreground truncate">
              {label}
            </span>
            {loading ? (
              <Spinner size="lg" className="mt-1" />
            ) : error ? (
              <span className="text-3xl font-bold font-heading text-destructive">
                —
              </span>
            ) : (
              <span className="text-3xl font-bold font-heading text-foreground truncate">
                {formattedValue}
              </span>
            )}
          </div>

          {icon && !loading && (
            <div className="flex-shrink-0 rounded-lg bg-primary/10 text-primary p-2.5">
              {icon}
            </div>
          )}
        </div>

        {(trend || description) && !loading && !error && (
          <div className="flex items-center gap-3">
            {trend && (
              <span
                aria-label={trendAriaLabel}
                className={cn("inline-flex items-center gap-1 text-sm font-medium", trendColorClass)}
              >
                <TrendIcon className="h-4 w-4" aria-hidden="true" />
                <span>{trend.value}</span>
                {trend.label && (
                  <span className="text-muted-foreground font-normal">
                    {trend.label}
                  </span>
                )}
              </span>
            )}
            {description && (
              <span className="text-sm text-muted-foreground truncate">
                {description}
              </span>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export { StatCard }
export type { StatCardProps }
