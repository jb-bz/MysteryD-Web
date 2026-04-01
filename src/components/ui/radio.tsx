"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface RadioProps extends Omit<React.ComponentProps<"input">, "type"> {
  label?: React.ReactNode
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, id, ...props }, ref) => {
    const generatedId = React.useId()
    const radioId = id || generatedId

    return (
      <div className="flex items-center gap-2">
        <input
          type="radio"
          role="radio"
          ref={ref}
          id={radioId}
          className={cn(
            "h-4 w-4 border border-input bg-transparent ring-offset-background",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "aria-invalid:border-destructive",
            className
          )}
          {...props}
        />
        {label && (
          <label
            htmlFor={radioId}
            className="text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        )}
      </div>
    )
  }
)
Radio.displayName = "Radio"

interface RadioGroupProps extends React.ComponentProps<"div"> {
  value?: string
  onValueChange?: (value: string) => void
}

const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, value, onValueChange, children, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onValueChange?.(e.target.value)
    }

    return (
      <div
        ref={ref}
        role="radiogroup"
        className={cn("flex flex-col gap-2", className)}
        onChange={handleChange}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (React.isValidElement<RadioProps>(child)) {
            return React.cloneElement(child, {
              checked: child.props.value === value,
            })
          }
          return child
        })}
      </div>
    )
  }
)
RadioGroup.displayName = "RadioGroup"

export { Radio, RadioGroup }
