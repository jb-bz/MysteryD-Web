import * as React from "react"
import { cn } from "@/lib/utils"

export interface CheckboxProps extends Omit<React.ComponentProps<"input">, "checked"> {
  label?: React.ReactNode
  checked?: boolean | "indeterminate"
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, checked, ...props }, ref) => {
    const generatedId = React.useId()
    const inputId = id || generatedId
    const inputRef = React.useRef<HTMLInputElement>(null)

    React.useImperativeHandle(ref, () => inputRef.current!)

    React.useEffect(() => {
      if (inputRef.current) {
        inputRef.current.indeterminate = checked === "indeterminate"
      }
    }, [checked])

    return (
      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          ref={inputRef}
          id={inputId}
          checked={checked === "indeterminate" ? false : checked}
          className={cn(
            "h-4 w-4 shrink-0 rounded border border-input bg-transparent ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            "checked:bg-primary checked:border-primary checked:text-primary-foreground",
            "aria-invalid:border-destructive",
            className
          )}
          {...props}
        />
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        )}
      </div>
    )
  }
)
Checkbox.displayName = "Checkbox"

export { Checkbox }
