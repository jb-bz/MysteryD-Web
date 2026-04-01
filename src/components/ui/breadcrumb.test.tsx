import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "./breadcrumb";

describe("Breadcrumb", () => {
  it("renders with nav role", () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("renders with aria-label", () => {
    render(
      <Breadcrumb aria-label="Breadcrumb navigation">
        <BreadcrumbList>
          <BreadcrumbItem>Item</BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );
    expect(screen.getByLabelText("Breadcrumb navigation")).toBeInTheDocument();
  });
});

describe("BreadcrumbList", () => {
  it("renders ol element", () => {
    render(
      <BreadcrumbList>
        <BreadcrumbItem>Item</BreadcrumbItem>
      </BreadcrumbList>
    );
    expect(document.querySelector("ol")).toBeInTheDocument();
  });
});

describe("BreadcrumbItem", () => {
  it("renders li element", () => {
    render(
      <BreadcrumbItem>Item</BreadcrumbItem>
    );
    expect(document.querySelector("li")).toBeInTheDocument();
  });
});

describe("BreadcrumbLink", () => {
  it("renders anchor element", () => {
    render(
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
    );
    expect(document.querySelector("a")).toBeInTheDocument();
    expect(screen.getByText("Home")).toHaveAttribute("href", "/");
  });
});

describe("BreadcrumbPage", () => {
  it("renders span with current page aria", () => {
    render(
      <BreadcrumbPage>Current Page</BreadcrumbPage>
    );
    expect(screen.getByText("Current Page")).toHaveAttribute("aria-current", "page");
  });
});

describe("BreadcrumbSeparator", () => {
  it("renders with default chevron icon", () => {
    render(<BreadcrumbSeparator />);
    expect(document.querySelector("svg")).toBeInTheDocument();
  });

  it("renders with custom icon", () => {
    render(<BreadcrumbSeparator icon={<span>→</span>} />);
    expect(screen.getByText("→")).toBeInTheDocument();
  });
});
