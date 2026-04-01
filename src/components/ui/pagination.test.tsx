import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./pagination";

describe("Pagination", () => {
  it("renders pagination nav element", () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationLink href="/?page=1">1</PaginationLink>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
    const nav = screen.getByRole("navigation", { name: "Pagination" });
    expect(nav).toBeInTheDocument();
  });

  it("renders pagination content with items", () => {
    render(
      <PaginationContent>
        <PaginationItem>
          <PaginationLink href="/?page=1">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/?page=2">2</PaginationLink>
        </PaginationItem>
      </PaginationContent>
    );
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("PaginationLink shows isActive state", () => {
    render(
      <PaginationLink isActive>1</PaginationLink>
    );
    const link = screen.getByText("1");
    expect(link).toHaveAttribute("aria-current", "page");
  });

  it("PaginationPrevious renders with chevron icon", () => {
    render(<PaginationPrevious href="/?page=1" />);
    expect(screen.getByLabelText("Go to previous page")).toBeInTheDocument();
  });

  it("PaginationNext renders with chevron icon", () => {
    render(<PaginationNext href="/?page=2" />);
    expect(screen.getByLabelText("Go to next page")).toBeInTheDocument();
  });

  it("PaginationEllipsis renders with more icon", () => {
    render(<PaginationEllipsis />);
    expect(screen.getByText("More pages")).toBeInTheDocument();
  });

  it("PaginationItem renders as list item", () => {
    const { container } = render(
      <PaginationItem>1</PaginationItem>
    );
    expect(container.querySelector("li")).toBeInTheDocument();
  });

  it("PaginationLink is clickable", () => {
    render(
      <PaginationLink href="/?page=1">1</PaginationLink>
    );
    const link = screen.getByText("1");
    fireEvent.click(link);
  });
});
