import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  it("renders with default props", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
  });

  it("renders with default variant", () => {
    render(<Button variant="default">Default</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("renders with destructive variant", () => {
    render(<Button variant="destructive">Delete</Button>);
    expect(screen.getByRole("button", { name: "Delete" })).toBeInTheDocument();
  });

  it("renders with outline variant", () => {
    render(<Button variant="outline">Outline</Button>);
    expect(screen.getByRole("button", { name: "Outline" })).toBeInTheDocument();
  });

  it("renders with secondary variant", () => {
    render(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole("button", { name: "Secondary" })).toBeInTheDocument();
  });

  it("renders with ghost variant", () => {
    render(<Button variant="ghost">Ghost</Button>);
    expect(screen.getByRole("button", { name: "Ghost" })).toBeInTheDocument();
  });

  it("renders with link variant", () => {
    render(<Button variant="link">Link</Button>);
    expect(screen.getByRole("button", { name: "Link" })).toBeInTheDocument();
  });

  it("renders with default size", () => {
    render(<Button size="default">Default Size</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("renders with sm size", () => {
    render(<Button size="sm">Small</Button>);
    expect(screen.getByRole("button", { name: "Small" })).toBeInTheDocument();
  });

  it("renders with lg size", () => {
    render(<Button size="lg">Large</Button>);
    expect(screen.getByRole("button", { name: "Large" })).toBeInTheDocument();
  });

  it("renders with icon size", () => {
    render(<Button size="icon">X</Button>);
    expect(screen.getByRole("button", { name: "X" })).toBeInTheDocument();
  });

  it("forwards ref to the button element", () => {
    const ref = { current: null } as React.RefObject<HTMLButtonElement>;
    render(<Button ref={ref}>Ref Button</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });

  it("applies custom className", () => {
    render(<Button className="custom-class">Custom</Button>);
    expect(screen.getByRole("button")).toHaveClass("custom-class");
  });

  it("is disabled when disabled prop is passed", () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("handles click events", async () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    screen.getByRole("button").click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    const handleClick = vi.fn();
    render(<Button disabled onClick={handleClick}>Disabled</Button>);
    screen.getByRole("button").click();
    expect(handleClick).not.toHaveBeenCalled();
  });
});
