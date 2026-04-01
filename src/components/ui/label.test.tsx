import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Label } from "./label";

describe("Label", () => {
  it("renders with text", () => {
    render(<Label>Email Address</Label>);
    expect(screen.getByText("Email Address")).toBeInTheDocument();
  });

  it("renders with htmlFor association", () => {
    render(<Label htmlFor="email">Email</Label>);
    expect(screen.getByText("Email")).toHaveAttribute("for", "email");
  });

  it("applies custom className", () => {
    render(<Label className="custom-class">Custom Label</Label>);
    expect(screen.getByText("Custom Label")).toHaveClass("custom-class");
  });

  it("handles additional props", () => {
    render(<Label htmlFor="test" id="label-id">Test</Label>);
    const label = screen.getByText("Test");
    expect(label).toHaveAttribute("for", "test");
    expect(label).toHaveAttribute("id", "label-id");
  });
});
