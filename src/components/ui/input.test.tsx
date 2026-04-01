import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "./input";

describe("Input", () => {
  it("renders with default props", () => {
    render(<Input />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("renders with placeholder", () => {
    render(<Input placeholder="Enter email" />);
    expect(screen.getByPlaceholderText("Enter email")).toBeInTheDocument();
  });

  it("renders with type password", () => {
    render(<Input type="password" />);
    const input = document.querySelector("input");
    expect(input).toBeInTheDocument();
    expect(input?.type).toBe("password");
  });

  it("renders with type email", () => {
    render(<Input type="email" placeholder="email" />);
    const input = screen.getByPlaceholderText("email") as HTMLInputElement;
    expect(input.type).toBe("email");
  });

  it("applies custom className", () => {
    render(<Input className="custom-class" />);
    expect(screen.getByRole("textbox")).toHaveClass("custom-class");
  });

  it("forwards ref to the input element", () => {
    const ref = { current: null } as React.RefObject<HTMLInputElement>;
    render(<Input ref={ref} />);
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });

  it("is disabled when disabled prop is passed", () => {
    render(<Input disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("handles change events", () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("has aria-invalid when invalid prop is passed", () => {
    render(<Input aria-invalid="true" />);
    expect(screen.getByRole("textbox")).toHaveAttribute("aria-invalid", "true");
  });

  it("accepts default value", () => {
    render(<Input defaultValue="test@example.com" />);
    expect(screen.getByRole("textbox")).toHaveValue("test@example.com");
  });
});
