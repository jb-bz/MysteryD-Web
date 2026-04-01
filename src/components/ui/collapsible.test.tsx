import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "./collapsible";

describe("Collapsible", () => {
  it("renders trigger", () => {
    render(
      <Collapsible>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>Content</CollapsibleContent>
      </Collapsible>
    );
    expect(screen.getByText("Toggle")).toBeInTheDocument();
  });

  it("is closed by default", () => {
    render(
      <Collapsible>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>Content</CollapsibleContent>
      </Collapsible>
    );
    expect(screen.getByText("Toggle")).toHaveAttribute("aria-expanded", "false");
  });

  it("toggles on click", () => {
    render(
      <Collapsible>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>Content</CollapsibleContent>
      </Collapsible>
    );
    fireEvent.click(screen.getByText("Toggle"));
    expect(screen.getByText("Toggle")).toHaveAttribute("aria-expanded", "true");
  });

  it("shows content when open", () => {
    render(
      <Collapsible open>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>Visible Content</CollapsibleContent>
      </Collapsible>
    );
    expect(screen.getByText("Visible Content")).toBeInTheDocument();
  });

  it("hides content when closed", () => {
    render(
      <Collapsible open={false}>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>Hidden Content</CollapsibleContent>
      </Collapsible>
    );
    expect(screen.queryByText("Hidden Content")).not.toBeInTheDocument();
  });

  it("has chevron icon that rotates", () => {
    render(
      <Collapsible>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>Content</CollapsibleContent>
      </Collapsible>
    );
    const chevron = document.querySelector(".rotate-180");
    expect(chevron).not.toBeInTheDocument();
    
    fireEvent.click(screen.getByText("Toggle"));
    const rotatedChevron = document.querySelector(".rotate-180");
    expect(rotatedChevron).toBeInTheDocument();
  });
});

describe("CollapsibleContent", () => {
  it("applies custom className", () => {
    render(
      <Collapsible open>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent className="custom-content">Content</CollapsibleContent>
      </Collapsible>
    );
    expect(screen.getByText("Content")).toHaveClass("custom-content");
  });
});
