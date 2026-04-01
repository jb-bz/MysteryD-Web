import { describe, it, expect } from "vitest"
import { render, screen } from "@testing-library/react"
import { StatCard } from "./stat-card"

describe("StatCard", () => {
  it("renders label and value", () => {
    render(<StatCard label="Total Campaigns" value={42} />)
    expect(screen.getByText("Total Campaigns")).toBeInTheDocument()
    expect(screen.getByText("42")).toBeInTheDocument()
  })

  it("formats numeric values with Intl.NumberFormat", () => {
    render(<StatCard label="Revenue" value={1234567} />)
    expect(screen.getByText("1,234,567")).toBeInTheDocument()
  })

  it("accepts string values as-is", () => {
    render(<StatCard label="Conversion" value="87.5%" />)
    expect(screen.getByText("87.5%")).toBeInTheDocument()
  })

  it("shows up trend with TrendingUp icon", () => {
    render(
      <StatCard
        label="Campaigns"
        value={128}
        trend={{ direction: "up", value: "+12%", label: "vs last month" }}
      />
    )
    expect(screen.getByRole("figure", { name: /up/i })).toBeInTheDocument()
    expect(screen.getByText("+12%")).toBeInTheDocument()
    expect(screen.getByText("vs last month")).toBeInTheDocument()
  })

  it("shows down trend with TrendingDown icon", () => {
    render(
      <StatCard
        label="Response Rate"
        value="23%"
        trend={{ direction: "down", value: "-5%" }}
      />
    )
    expect(screen.getByRole("figure", { name: /down/i })).toBeInTheDocument()
    expect(screen.getByText("-5%")).toBeInTheDocument()
  })

  it("shows neutral trend with Minus icon", () => {
    render(
      <StatCard
        label="Stores"
        value={56}
        trend={{ direction: "neutral", value: "0%" }}
      />
    )
    expect(screen.getByRole("figure", { name: /unchanged/i })).toBeInTheDocument()
    expect(screen.getByText("0%")).toBeInTheDocument()
  })

  it("renders loading state with spinner", () => {
    render(<StatCard label="Active Users" value={0} loading />)
    expect(screen.getByRole("status", { name: /loading/i })).toBeInTheDocument()
  })

  it("renders error state with em dash", () => {
    render(<StatCard label="API Calls" value={0} error />)
    expect(screen.getByText("—")).toBeInTheDocument()
  })

  it("shows description text when provided", () => {
    render(
      <StatCard
        label="Avg Score"
        value={94.2}
        description="Across all campaigns"
      />
    )
    expect(screen.getByText("Across all campaigns")).toBeInTheDocument()
  })

  it("hides description and trend when loading", () => {
    const { container } = render(
      <StatCard
        label="Total"
        value={100}
        trend={{ direction: "up", value: "+10%" }}
        description="vs last month"
        loading
      />
    )
    expect(container.querySelector('[class*="trending"]')).toBeNull()
    expect(screen.queryByText("vs last month")).not.toBeInTheDocument()
  })

  it("has role figure", () => {
    render(<StatCard label="Test" value={1} />)
    expect(screen.getByRole("figure")).toBeInTheDocument()
  })

  it("applies custom className", () => {
    const { container } = render(
      <StatCard label="Custom" value={5} className="bg-red-500" />
    )
    expect(container.firstChild).toHaveClass("bg-red-500")
  })

  it("shows icon when provided and not loading", () => {
    render(
      <StatCard
        label="Visits"
        value={1024}
        icon={<span data-testid="icon">📊</span>}
      />
    )
    expect(screen.getByTestId("icon")).toBeInTheDocument()
  })

  it("hides icon when loading", () => {
    render(
      <StatCard
        label="Visits"
        value={1024}
        icon={<span data-testid="icon">📊</span>}
        loading
      />
    )
    expect(screen.queryByTestId("icon")).not.toBeInTheDocument()
  })
})
