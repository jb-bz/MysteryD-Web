"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface CollapsibleContextValue {
  open: boolean
  setOpen: (open: boolean) => void
}

const CollapsibleContext = React.createContext<CollapsibleContextValue | null>(null)

function useCollapsibleContext() {
  const context = React.useContext(CollapsibleContext)
  if (!context) {
    throw new Error("Collapsible components must be used within a Collapsible")
  }
  return context
}

interface CollapsibleProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  className?: string
}

function Collapsible({
  open: controlledOpen,
  onOpenChange,
  children,
  className,
}: CollapsibleProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(false)
  const open = controlledOpen ?? uncontrolledOpen
  const setOpen = onOpenChange ?? setUncontrolledOpen

  return (
    <CollapsibleContext.Provider value={{ open, setOpen }}>
      <div className={cn("flex flex-col", className)}>
        {children}
      </div>
    </CollapsibleContext.Provider>
  )
}

interface CollapsibleTriggerProps extends React.ComponentProps<"button"> {
  asChild?: boolean
}

function CollapsibleTrigger({
  children,
  className,
  asChild,
  ...props
}: CollapsibleTriggerProps) {
  const { open, setOpen } = useCollapsibleContext()

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children as React.ReactElement<{ onClick?: () => void }>, {
      onClick: () => setOpen(!open),
    })
  }

  return (
    <button
      type="button"
      aria-expanded={open}
      data-state={open ? "open" : "closed"}
      onClick={() => setOpen(!open)}
      className={cn(
        "flex items-center justify-between w-full",
        "text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-4 w-4 shrink-0 transition-transform duration-200",
          open && "rotate-180"
        )}
        aria-hidden="true"
      />
    </button>
  )
}

interface CollapsibleContentProps extends React.ComponentProps<"div"> {
  hidden?: boolean
}

function CollapsibleContent({
  children,
  className,
  hidden: forceHidden,
  ...props
}: CollapsibleContentProps) {
  const { open } = useCollapsibleContext()

  if (forceHidden ?? !open) return null

  return (
    <div
      data-state={open ? "open" : "closed"}
      className={cn(
        "overflow-hidden transition-all duration-200 ease-out",
        open ? "animate-slide-down" : "",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { Collapsible, CollapsibleContent, CollapsibleTrigger }
