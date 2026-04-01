import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Textarea } from "./textarea";

describe("Textarea", () => {
  it("renders with default props", () => {
    render(<Textarea />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("renders with placeholder", () => {
    render(<Textarea placeholder="Enter description" />);
    expect(screen.getByPlaceholderText("Enter description")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Textarea className="custom-class" />);
    expect(screen.getByRole("textbox")).toHaveClass("custom-class");
  });

  it("forwards ref to the textarea element", () => {
    const ref = { current: null } as React.RefObject<HTMLTextAreaElement>;
    render(<Textarea ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLTextAreaElement);
  });

  it("is disabled when disabled prop is passed", () => {
    render(<Textarea disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("handles change events", () => {
    const handleChange = vi.fn();
    render(<Textarea onChange={handleChange} />);
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "test" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("accepts default value", () => {
    render(<Textarea defaultValue="Initial content" />);
    expect(screen.getByRole("textbox")).toHaveValue("Initial content");
  });
});
