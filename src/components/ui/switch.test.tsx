import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Switch } from "./switch";

describe("Switch", () => {
  it("renders without label", () => {
    render(<Switch />);
    expect(screen.getByRole("switch")).toBeInTheDocument();
  });

  it("renders with label", () => {
    render(<Switch label="Enable notifications" />);
    expect(screen.getByRole("switch")).toBeInTheDocument();
    expect(screen.getByText("Enable notifications")).toBeInTheDocument();
  });

  it("is unchecked by default", () => {
    render(<Switch />);
    expect(screen.getByRole("switch")).not.toBeChecked();
  });

  it("is checked when checked prop is passed", () => {
    render(<Switch checked />);
    expect(screen.getByRole("switch")).toBeChecked();
  });

  it("is disabled when disabled prop is passed", () => {
    render(<Switch disabled />);
    expect(screen.getByRole("switch")).toBeDisabled();
  });

  it("handles change events", () => {
    const handleChange = vi.fn();
    render(<Switch onChange={handleChange} />);
    fireEvent.click(screen.getByRole("switch"));
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("applies custom className", () => {
    render(<Switch className="custom-switch" />);
    expect(screen.getByRole("switch")).toHaveClass("custom-switch");
  });
});
