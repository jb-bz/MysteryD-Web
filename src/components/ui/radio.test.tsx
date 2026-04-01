import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Radio, RadioGroup } from "./radio";

describe("Radio", () => {
  it("renders without label", () => {
    render(<Radio />);
    expect(screen.getByRole("radio")).toBeInTheDocument();
  });

  it("renders with label", () => {
    render(<Radio label="Option A" />);
    expect(screen.getByRole("radio")).toBeInTheDocument();
    expect(screen.getByText("Option A")).toBeInTheDocument();
  });

  it("is unchecked by default", () => {
    render(<Radio />);
    expect(screen.getByRole("radio")).not.toBeChecked();
  });

  it("is disabled when disabled prop is passed", () => {
    render(<Radio disabled />);
    expect(screen.getByRole("radio")).toBeDisabled();
  });

  it("applies custom className", () => {
    render(<Radio className="custom-radio" />);
    expect(screen.getByRole("radio")).toHaveClass("custom-radio");
  });
});

describe("RadioGroup", () => {
  it("renders children", () => {
    render(
      <RadioGroup>
        <Radio value="a" label="Option A" />
        <Radio value="b" label="Option B" />
      </RadioGroup>
    );
    expect(screen.getByRole("radio", { name: "Option A" })).toBeInTheDocument();
    expect(screen.getByRole("radio", { name: "Option B" })).toBeInTheDocument();
  });

  it("has radiogroup role", () => {
    render(
      <RadioGroup>
        <Radio value="a" />
      </RadioGroup>
    );
    expect(screen.getByRole("radiogroup")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(
      <RadioGroup className="custom-group">
        <Radio value="a" />
      </RadioGroup>
    );
    expect(screen.getByRole("radiogroup")).toHaveClass("custom-group");
  });
});
