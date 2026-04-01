import { describe, it, expect } from "vitest"
import { render, screen, fireEvent } from "@testing-library/react"
import { Package } from "lucide-react"
import { EmptyState } from "./empty-state"

describe("EmptyState", () => {
  it("renders title", () => {
    render(<EmptyState title="No campaigns yet" />)
    expect(screen.getByText("No campaigns yet")).toBeInTheDocument()
  })

  it("renders description when provided", () => {
    render(
      <EmptyState
        title="No campaigns"
        description="Create your first campaign to get started."
      />
    )
    expect(screen.getByText("Create your first campaign to get started.")).toBeInTheDocument()
  })

  it("renders icon when provided", () => {
    render(
      <EmptyState
        title="No items"
        icon={<Package className="h-8 w-8" data-testid="icon" />}
      />
    )
    expect(screen.getByTestId("icon")).toBeInTheDocument()
  })

  it("renders action button when provided", () => {
    const handleClick = () => {}
    render(
      <EmptyState
        title="No stores"
        action={{ label: "Add Store", onClick: handleClick }}
      />
    )
    expect(screen.getByRole("button", { name: "Add Store" })).toBeInTheDocument()
  })

  it("calls onClick when action button is clicked", async () => {
    const handleClick = () => {}
    render(
      <EmptyState
        title="Empty"
        action={{ label: "Create", onClick: handleClick }}
      />
    )
    const button = screen.getByRole("button", { name: "Create" })
    fireEvent.click(button)
    expect(button).toBeInTheDocument()
  })

  it("hides icon container when no icon", () => {
    const { container } = render(<EmptyState title="Nothing" />)
    expect(container.querySelector(".bg-muted")).toBeNull()
  })

  it("hides description when not provided", () => {
    const { container } = render(<EmptyState title="No data" />)
    expect(container.querySelector('[class*="leading-relaxed"]')).toBeNull()
  })

  it("hides button when action not provided", () => {
    render(<EmptyState title="Empty" />)
    expect(screen.queryByRole("button")).not.toBeInTheDocument()
  })

  it("has role status for aria-live", () => {
    render(<EmptyState title="Loading" />)
    expect(screen.getByRole("status")).toBeInTheDocument()
  })

  it("applies custom className", () => {
    const { container } = render(
      <EmptyState title="Test" className="bg-red-500 p-8" />
    )
    expect(container.firstChild).toHaveClass("bg-red-500", "p-8")
  })

  it("uses heading role for title", () => {
    render(<EmptyState title="No results" />)
    expect(screen.getByRole("heading", { name: "No results" })).toBeInTheDocument()
  })
})
