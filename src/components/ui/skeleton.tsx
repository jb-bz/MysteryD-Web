import * as React from "react"
import { cn } from "@/lib/utils"

interface SkeletonProps extends React.ComponentProps<"div"> {
  variant?: "text" | "circular" | "rectangular"
  width?: string | number
  height?: string | number
}

function Skeleton({
  className,
  variant = "rectangular",
  width,
  height,
  style,
  ...props
}: SkeletonProps) {
  const variantClasses = {
    text: "rounded-md h-4",
    circular: "rounded-full",
    rectangular: "rounded-lg",
  }

  return (
    <div
      className={cn(
        "animate-pulse bg-muted",
        variantClasses[variant],
        className
      )}
      style={{
        width: width ?? undefined,
        height: height ?? undefined,
        ...style,
      }}
      {...props}
    />
  )
}

export { Skeleton }
