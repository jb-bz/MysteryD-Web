"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { AlertCircle, CheckCircle, Info, XCircle, X } from "lucide-react"

type AlertVariant = "default" | "success" | "warning" | "destructive" | "info"

interface AlertContextValue {
  variant: AlertVariant
  onDismiss?: () => void
}

const AlertContext = React.createContext<AlertContextValue | null>(null)

function useAlertContext() {
  const context = React.useContext(AlertContext)
  if (!context) {
    throw new Error("Alert components must be used within an Alert")
  }
  return context
}

interface AlertProps extends React.ComponentProps<"div"> {
  variant?: AlertVariant
  onDismiss?: () => void
}

function Alert({
  variant = "default",
  onDismiss,
  className,
  children,
  ...props
}: AlertProps) {
  return (
    <AlertContext.Provider value={{ variant, onDismiss }}>
      <div
        role="alert"
        className={cn(
          "relative flex w-full items-start gap-3 rounded-lg border p-4",
          {
            "border-border bg-background text-foreground": variant === "default",
            "border-success/30 bg-success/5 text-success dark:border-success/40 dark:bg-success/10": variant === "success",
            "border-warning/30 bg-warning/5 text-warning dark:border-warning/40 dark:bg-warning/10": variant === "warning",
            "border-destructive/30 bg-destructive/5 text-destructive dark:border-destructive/40 dark:bg-destructive/10": variant === "destructive",
            "border-info/30 bg-info/5 text-info dark:border-info/40 dark:bg-info/10": variant === "info",
          },
          className
        )}
        {...props}
      >
        {children}
      </div>
    </AlertContext.Provider>
  )
}

interface AlertIconProps {
  className?: string
}

function AlertIcon({ className }: AlertIconProps) {
  const { variant } = useAlertContext()

  const icons = {
    default: null,
    success: CheckCircle,
    warning: AlertCircle,
    destructive: XCircle,
    info: Info,
  }

  const Icon = icons[variant]

  if (!Icon) return null

  return <Icon className={cn("h-5 w-5 shrink-0 mt-0.5", className)} aria-hidden="true" />
}

interface AlertTitleProps extends React.ComponentProps<"div"> {
  className?: string
}

function AlertTitle({ className, ...props }: AlertTitleProps) {
  return (
    <div
      className={cn("font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  )
}

interface AlertDescriptionProps extends React.ComponentProps<"div"> {
  className?: string
}

function AlertDescription({ className, ...props }: AlertDescriptionProps) {
  return (
    <div
      className={cn("text-sm [&_p]:leading-relaxed", className)}
      {...props}
    />
  )
}

interface AlertDismissProps extends React.ComponentProps<"button"> {
  className?: string
}

function AlertDismiss({ className, ...props }: AlertDismissProps) {
  const { onDismiss } = useAlertContext()

  if (!onDismiss) return null

  return (
    <button
      type="button"
      onClick={onDismiss}
      className={cn(
        "absolute right-3 top-3 rounded-lg p-1",
        "text-muted-foreground hover:text-foreground hover:bg-muted",
        "transition-colors outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
      aria-label="Dismiss alert"
      {...props}
    >
      <X className="h-4 w-4" />
    </button>
  )
}

export {
  Alert,
  AlertDescription,
  AlertDismiss,
  AlertIcon,
  AlertTitle,
}
