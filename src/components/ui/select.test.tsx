import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Select } from "./select";

describe("Select", () => {
  it("renders with label", () => {
    render(
      <Select label="Country">
        <option>USA</option>
        <option>Canada</option>
      </Select>
    );
    expect(screen.getByLabelText("Country")).toBeInTheDocument();
  });

  it("renders without label", () => {
    render(
      <Select>
        <option>Option 1</option>
        <option>Option 2</option>
      </Select>
    );
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("renders with options", () => {
    render(
      <Select>
        <option value="a">Option A</option>
        <option value="b">Option B</option>
      </Select>
    );
    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Option A" })).toBeInTheDocument();
  });

  it("is disabled when disabled prop is passed", () => {
    render(
      <Select disabled>
        <option>Option</option>
      </Select>
    );
    expect(screen.getByRole("combobox")).toBeDisabled();
  });

  it("handles change events", () => {
    const handleChange = vi.fn();
    render(
      <Select onChange={handleChange}>
        <option value="a">A</option>
        <option value="b">B</option>
      </Select>
    );
    fireEvent.change(screen.getByRole("combobox"), { target: { value: "b" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("shows error state", () => {
    render(
      <Select error label="Country">
        <option>USA</option>
      </Select>
    );
    expect(screen.getByLabelText("Country")).toHaveAttribute("aria-invalid", "true");
  });
});
