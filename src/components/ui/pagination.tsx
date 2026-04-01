import * as React from "react"
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"

type PaginationProps = React.HTMLAttributes<HTMLElement>

const Pagination = ({ className, ...props }: PaginationProps) => (
  <nav
    aria-label="Pagination"
    className={cn("flex justify-center", className)}
    {...props}
  />
)
Pagination.displayName = "Pagination"

const PaginationContent = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("flex flex-row items-center gap-1", className)}
    {...props}
  />
))
PaginationContent.displayName = "PaginationContent"

const PaginationItem = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
))
PaginationItem.displayName = "PaginationItem"

type PaginationLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  isActive?: boolean
  ariaLabel?: string
}

const PaginationLink = ({
  className,
  isActive,
  ariaLabel,
  ...props
}: PaginationLinkProps) => (
  <a
    aria-current={isActive ? "page" : undefined}
    aria-label={ariaLabel}
    className={cn(
      "flex h-9 w-9 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
      isActive
        ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground"
        : "text-muted-foreground",
      className
    )}
    {...props}
  />
)
PaginationLink.displayName = "PaginationLink"

const PaginationPrevious = ({
  className,
  ariaLabel = "Go to previous page",
  ...props
}: React.ComponentProps<"a"> & { ariaLabel?: string }) => (
  <PaginationLink
    ariaLabel={ariaLabel}
    className={cn("gap-1 pl-2.5", className)}
    {...props}
  >
    <ChevronLeft className="h-4 w-4" />
    <span className="sr-only">Previous</span>
  </PaginationLink>
)
PaginationPrevious.displayName = "PaginationPrevious"

const PaginationNext = ({
  className,
  ariaLabel = "Go to next page",
  ...props
}: React.ComponentProps<"a"> & { ariaLabel?: string }) => (
  <PaginationLink
    ariaLabel={ariaLabel}
    className={cn("gap-1 pr-2.5", className)}
    {...props}
  >
    <span className="sr-only">Next</span>
    <ChevronRight className="h-4 w-4" />
  </PaginationLink>
)
PaginationNext.displayName = "PaginationNext"

const PaginationEllipsis = ({
  className,
  ...props
}: React.ComponentProps<"span">) => (
  <span
    aria-hidden
    className={cn(
      "flex h-9 w-9 items-center justify-center text-sm font-medium",
      className
    )}
    {...props}
  >
    <MoreHorizontal className="h-4 w-4" />
    <span className="sr-only">More pages</span>
  </span>
)
PaginationEllipsis.displayName = "PaginationEllipsis"

export {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
}
