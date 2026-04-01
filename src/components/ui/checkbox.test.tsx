import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Checkbox } from "./checkbox";

describe("Checkbox", () => {
  it("renders without label", () => {
    render(<Checkbox />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });

  it("renders with label", () => {
    render(<Checkbox label="Accept terms" />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByText("Accept terms")).toBeInTheDocument();
  });

  it("is checked when checked prop is passed", () => {
    render(<Checkbox checked />);
    expect(screen.getByRole("checkbox")).toBeChecked();
  });

  it("is disabled when disabled prop is passed", () => {
    render(<Checkbox disabled />);
    expect(screen.getByRole("checkbox")).toBeDisabled();
  });

  it("handles change events", () => {
    const handleChange = vi.fn();
    render(<Checkbox onChange={handleChange} />);
    fireEvent.click(screen.getByRole("checkbox"));
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("applies custom className", () => {
    render(<Checkbox className="custom-class" />);
    expect(screen.getByRole("checkbox")).toHaveClass("custom-class");
  });
});
