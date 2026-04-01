import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { CheckCircle, Package } from "lucide-react"
import { ActivityItem } from "./activity-item"

describe("ActivityItem", () => {
  it("renders description and timestamp", () => {
    render(
      <ActivityItem
        description="Campaign 'Q1 Audit' was completed"
        timestamp="2 hours ago"
      />
    )
    expect(screen.getByText("Campaign 'Q1 Audit' was completed")).toBeInTheDocument()
    expect(screen.getByText("2 hours ago")).toBeInTheDocument()
  })

  it("renders with icon when provided", () => {
    render(
      <ActivityItem
        description="New store added"
        timestamp="Just now"
        icon={<CheckCircle className="h-4 w-4" data-testid="icon" />}
      />
    )
    expect(screen.getByTestId("icon")).toBeInTheDocument()
  })

  it("renders without icon when not provided", () => {
    const { container } = render(
      <ActivityItem description="Something happened" timestamp="Yesterday" />
    )
    expect(container.querySelector(".bg-muted")).toBeNull()
  })

  it("renders as link when href is provided", () => {
    render(
      <ActivityItem
        description="View campaign report"
        timestamp="Mar 15, 2026"
        href="/campaigns/123"
      />
    )
    const link = screen.getByRole("link", { name: "View campaign report" })
    expect(link).toHaveAttribute("href", "/campaigns/123")
  })

  it("does not render as link when href is not provided", () => {
    render(
      <ActivityItem
        description="Campaign was paused"
        timestamp="Mar 14, 2026"
      />
    )
    expect(screen.queryByRole("link")).not.toBeInTheDocument()
  })

  it("accepts React timestamp node", () => {
    render(
      <ActivityItem
        description="Event happened"
        timestamp={<span data-testid="custom-time">Yesterday</span>}
      />
    )
    expect(screen.getByTestId("custom-time")).toBeInTheDocument()
  })

  it("uses time element with dateTime for string timestamp", () => {
    render(
      <ActivityItem
        description="Created"
        timestamp="2026-03-15"
      />
    )
    const time = screen.getByText("2026-03-15")
    expect(time).toHaveAttribute("dateTime", "2026-03-15")
  })

  it("applies custom className", () => {
    const { container } = render(
      <ActivityItem
        description="Test"
        timestamp="Now"
        className="bg-red-500"
      />
    )
    expect(container.firstChild).toHaveClass("bg-red-500")
  })

  it("icon container is decorative (aria-hidden)", () => {
    render(
      <ActivityItem
        description="Something"
        timestamp="Now"
        icon={<Package className="h-4 w-4" data-testid="icon" />}
      />
    )
    expect(screen.getByTestId("icon").parentElement).toHaveAttribute("aria-hidden", "true")
  })
})
