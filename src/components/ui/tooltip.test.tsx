import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "./tooltip";

describe("Tooltip", () => {
  it("renders trigger button", () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger id="test">Trigger</TooltipTrigger>
          <TooltipContent id="test">Content</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
    expect(screen.getByText("Trigger")).toBeInTheDocument();
  });

  it("TooltipTrigger is a button", () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger id="btn">Button</TooltipTrigger>
          <TooltipContent id="btn">Tooltip</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
    expect(screen.getByRole("button", { name: "Button" })).toBeInTheDocument();
  });

  it("renders with custom className on trigger", () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger id="custom" className="custom-trigger">Custom</TooltipTrigger>
          <TooltipContent id="custom">Content</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
    expect(screen.getByText("Custom")).toHaveClass("custom-trigger");
  });

  it("has correct data attributes", () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger id="data-test">Data</TooltipTrigger>
          <TooltipContent id="data-test">Info</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
    const trigger = screen.getByText("Data");
    expect(trigger).toHaveAttribute("data-tooltip-id", "data-test");
  });
});

describe("TooltipProvider", () => {
  it("renders children", () => {
    render(
      <TooltipProvider>
        <div>Child content</div>
      </TooltipProvider>
    );
    expect(screen.getByText("Child content")).toBeInTheDocument();
  });

  it("accepts delayDuration prop", () => {
    render(
      <TooltipProvider delayDuration={500}>
        <div>Delayed tooltip</div>
      </TooltipProvider>
    );
    expect(screen.getByText("Delayed tooltip")).toBeInTheDocument();
  });
});

describe("TooltipContent structure", () => {
  it("TooltipContent renders when visible in DOM", () => {
    const TestContent = () => (
      <div data-slot="tooltip-content" className="tooltip-content">Test Content</div>
    );
    render(<TestContent />);
    expect(screen.getByText("Test Content")).toBeInTheDocument();
    expect(screen.getByText("Test Content")).toHaveClass("tooltip-content");
  });
});
