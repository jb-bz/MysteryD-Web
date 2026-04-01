import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Avatar, AvatarImage, AvatarFallback, AvatarBadge, AvatarGroup, AvatarGroupCount } from "./avatar";

describe("Avatar", () => {
  it("renders with default size", () => {
    render(
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
    );
    expect(screen.getByText("JD")).toBeInTheDocument();
  });

  it("renders with sm size", () => {
    render(
      <Avatar size="sm">
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
    );
    expect(screen.getByText("SM")).toBeInTheDocument();
  });

  it("renders with lg size", () => {
    render(
      <Avatar size="lg">
        <AvatarFallback>LG</AvatarFallback>
      </Avatar>
    );
    expect(screen.getByText("LG")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(
      <Avatar className="custom-class">
        <AvatarFallback>TC</AvatarFallback>
      </Avatar>
    );
    expect(screen.getByText("TC").closest(".custom-class")).toBeInTheDocument();
  });
});

describe("AvatarImage", () => {
  it("renders with default alt", () => {
    render(
      <Avatar>
        <AvatarImage src="/test.jpg" />
        <AvatarFallback>AI</AvatarFallback>
      </Avatar>
    );
    const img = document.querySelector("img");
    expect(img).toHaveAttribute("alt", "");
  });

  it("renders with custom alt", () => {
    render(
      <Avatar>
        <AvatarImage src="/test.jpg" alt="User avatar" />
        <AvatarFallback>CA</AvatarFallback>
      </Avatar>
    );
    const img = document.querySelector("img");
    expect(img).toHaveAttribute("alt", "User avatar");
  });
});

describe("AvatarFallback", () => {
  it("renders with initials", () => {
    render(<AvatarFallback>AB</AvatarFallback>);
    expect(screen.getByText("AB")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<AvatarFallback className="custom-class">FC</AvatarFallback>);
    expect(screen.getByText("FC")).toHaveClass("custom-class");
  });
});

describe("AvatarBadge", () => {
  it("renders children", () => {
    render(<AvatarBadge>+99</AvatarBadge>);
    expect(screen.getByText("+99")).toBeInTheDocument();
  });
});

describe("AvatarGroup", () => {
  it("renders children", () => {
    render(
      <AvatarGroup>
        <Avatar><AvatarFallback>A</AvatarFallback></Avatar>
        <Avatar><AvatarFallback>B</AvatarFallback></Avatar>
      </AvatarGroup>
    );
    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByText("B")).toBeInTheDocument();
  });
});

describe("AvatarGroupCount", () => {
  it("renders with count", () => {
    render(<AvatarGroupCount>+5</AvatarGroupCount>);
    expect(screen.getByText("+5")).toBeInTheDocument();
  });
});
