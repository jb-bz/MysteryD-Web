import * as React from "react"
import { cn } from "@/lib/utils"

interface ProgressProps extends React.ComponentProps<"div"> {
  value?: number
  max?: number
  indicatorClassName?: string
}

function Progress({
  className,
  value = 0,
  max = 100,
  indicatorClassName,
  ...props
}: ProgressProps) {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={max}
      className={cn("relative w-full overflow-hidden rounded-full bg-secondary", className)}
      {...props}
    >
      <div
        className={cn(
          "h-full transition-all duration-300 ease-out bg-primary",
          indicatorClassName
        )}
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}

export { Progress }
