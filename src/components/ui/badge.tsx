import * as React from "react"
import { cn } from "@/lib/utils"

function Badge({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"span"> & {
  variant?: "default" | "secondary" | "outline" | "destructive"
}) {
  return (
    <span
      data-slot="badge"
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset",
        {
          "bg-primary/10 text-primary ring-primary/20": variant === "default",
          "bg-secondary text-secondary-foreground ring-secondary/20": variant === "secondary",
          "border border-input bg-transparent text-foreground ring-foreground/10": variant === "outline",
          "bg-destructive/10 text-destructive ring-destructive/20": variant === "destructive",
        },
        className
      )}
      {...props}
    />
  )
}

export { Badge }
