import * as React from "react"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

type BreadcrumbProps = React.ComponentProps<"nav">

function Breadcrumb({ className, ...props }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex", className)}
      {...props}
    />
  )
}

type BreadcrumbListProps = React.ComponentProps<"ol">

function BreadcrumbList({ className, ...props }: BreadcrumbListProps) {
  return (
    <ol
      className={cn(
        "flex items-center gap-1 text-sm text-muted-foreground",
        className
      )}
      {...props}
    />
  )
}

type BreadcrumbItemProps = React.ComponentProps<"li">

function BreadcrumbItem({ className, ...props }: BreadcrumbItemProps) {
  return (
    <li
      className={cn("inline-flex items-center gap-1", className)}
      {...props}
    />
  )
}

interface BreadcrumbLinkProps extends React.ComponentProps<"a"> {
  asChild?: boolean
}

function BreadcrumbLink({
  children,
  className,
  asChild,
  ...props
}: BreadcrumbLinkProps) {
  if (asChild && React.isValidElement(children)) {
    const child = children as React.ReactElement<{ className?: string }>
    return React.cloneElement(child, {
      className: cn("hover:text-foreground transition-colors", child.props.className),
    })
  }

  return (
    <a
      className={cn(
        "hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
      {...props}
    >
      {children}
    </a>
  )
}

type BreadcrumbPageProps = React.ComponentProps<"span">

function BreadcrumbPage({ className, ...props }: BreadcrumbPageProps) {
  return (
    <span
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn(
        "font-medium text-foreground",
        className
      )}
      {...props}
    />
  )
}

interface BreadcrumbSeparatorProps extends React.ComponentProps<"li"> {
  icon?: React.ReactNode
}

function BreadcrumbSeparator({
  className,
  icon,
  ...props
}: BreadcrumbSeparatorProps) {
  return (
    <li
      aria-hidden="true"
      className={cn("flex items-center", className)}
      {...props}
    >
      {icon || <ChevronRight className="h-4 w-4" />}
    </li>
  )
}

export {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
}
