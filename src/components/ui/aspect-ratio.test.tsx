import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { AspectRatio } from "./aspect-ratio";

describe("AspectRatio", () => {
  it("renders with default 16:9 ratio", () => {
    const { container } = render(
      <AspectRatio data-testid="aspect-ratio">
        <div>Content</div>
      </AspectRatio>
    );
    const wrapper = container.querySelector("[data-testid='aspect-ratio']");
    expect(wrapper).toBeInTheDocument();
    expect(wrapper?.style.paddingBottom).toBe("56.25%");
  });

  it("renders with custom 4:3 ratio", () => {
    const { container } = render(
      <AspectRatio ratio={4 / 3}>
        <div>Content</div>
      </AspectRatio>
    );
    const wrapper = container.firstElementChild;
    expect(wrapper?.getAttribute("style")).toContain("75");
  });

  it("renders with 1:1 ratio", () => {
    const { container } = render(
      <AspectRatio ratio={1}>
        <div>Content</div>
      </AspectRatio>
    );
    const wrapper = container.firstElementChild;
    expect(wrapper?.getAttribute("style")).toContain("100");
  });

  it("applies custom className", () => {
    const { container } = render(
      <AspectRatio className="custom-class">
        <div>Content</div>
      </AspectRatio>
    );
    expect(container.firstElementChild).toHaveClass("custom-class");
  });

  it("contains the child content", () => {
    const { getByText } = render(
      <AspectRatio>
        <div>Test Content</div>
      </AspectRatio>
    );
    expect(getByText("Test Content")).toBeInTheDocument();
  });
});
