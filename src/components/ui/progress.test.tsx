import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Progress } from "./progress";

describe("Progress", () => {
  it("renders with default value 0", () => {
    render(<Progress />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("renders with custom value", () => {
    render(<Progress value={50} />);
    const progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveAttribute("aria-valuenow", "50");
  });

  it("renders with custom max", () => {
    render(<Progress value={50} max={200} />);
    const progressbar = screen.getByRole("progressbar");
    expect(progressbar).toHaveAttribute("aria-valuemax", "200");
  });

  it("applies custom className", () => {
    render(<Progress className="custom-progress" />);
    expect(screen.getByRole("progressbar")).toHaveClass("custom-progress");
  });

  it("calculates percentage correctly", () => {
    render(<Progress value={75} max={100} />);
    const indicator = document.querySelector(".h-full");
    expect(indicator).toHaveAttribute("style", "width: 75%;");
  });

  it("clamps value to 0 when negative", () => {
    render(<Progress value={-10} />);
    const indicator = document.querySelector(".h-full");
    expect(indicator).toHaveAttribute("style", "width: 0%;");
  });

  it("clamps value to 100 when exceeding max", () => {
    render(<Progress value={150} max={100} />);
    const indicator = document.querySelector(".h-full");
    expect(indicator).toHaveAttribute("style", "width: 100%;");
  });
});
