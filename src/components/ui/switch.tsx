"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface SwitchProps extends Omit<React.ComponentProps<"input">, "type"> {
  label?: React.ReactNode
}

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ className, label, id, ...props }, ref) => {
    const generatedId = React.useId()
    const switchId = id || generatedId

    return (
      <div className="flex items-center gap-2">
        <div className="relative">
          <input
            type="checkbox"
            role="switch"
            ref={ref}
            id={switchId}
            className={cn(
              "peer sr-only",
              className
            )}
            {...props}
          />
          <div
            className={cn(
              "h-6 w-11 cursor-pointer rounded-full bg-input transition-colors",
              "peer-checked:bg-primary",
              "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
              "peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background",
              "peer-aria-invalid:border-destructive"
            )}
          />
          <div
            className={cn(
              "absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-background shadow-lg transition-transform",
              "peer-checked:translate-x-5",
              "peer-disabled:cursor-not-allowed"
            )}
          />
        </div>
        {label && (
          <label
            htmlFor={switchId}
            className="text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        )}
      </div>
    )
  }
)
Switch.displayName = "Switch"

export { Switch }
