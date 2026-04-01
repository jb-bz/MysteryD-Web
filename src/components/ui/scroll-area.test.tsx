import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { ScrollArea } from "./scroll-area";

describe("ScrollArea", () => {
  it("renders with children", () => {
    const { getByText } = render(
      <ScrollArea>
        <div>Scrollable content</div>
      </ScrollArea>
    );
    expect(getByText("Scrollable content")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <ScrollArea className="custom-class">
        <div>Content</div>
      </ScrollArea>
    );
    expect(container.firstElementChild).toHaveClass("custom-class");
  });

  it("renders multiple children", () => {
    const { getByText } = render(
      <ScrollArea>
        <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
      </ScrollArea>
    );
    expect(getByText("Item 1")).toBeInTheDocument();
    expect(getByText("Item 2")).toBeInTheDocument();
    expect(getByText("Item 3")).toBeInTheDocument();
  });
});
