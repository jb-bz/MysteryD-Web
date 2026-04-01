import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { Skeleton } from "./skeleton";

describe("Skeleton", () => {
  it("renders with default props", () => {
    render(<Skeleton />);
    expect(document.querySelector(".animate-pulse")).toBeInTheDocument();
  });

  it("renders with custom className", () => {
    render(<Skeleton className="custom-skeleton" />);
    expect(document.querySelector(".custom-skeleton")).toBeInTheDocument();
  });

  it("renders with text variant", () => {
    render(<Skeleton variant="text" />);
    const skeleton = document.querySelector(".rounded-md.h-4");
    expect(skeleton).toBeInTheDocument();
  });

  it("renders with circular variant", () => {
    render(<Skeleton variant="circular" />);
    const skeleton = document.querySelector(".rounded-full");
    expect(skeleton).toBeInTheDocument();
  });

  it("renders with rectangular variant", () => {
    render(<Skeleton variant="rectangular" />);
    const skeleton = document.querySelector(".rounded-lg");
    expect(skeleton).toBeInTheDocument();
  });

  it("applies custom width", () => {
    render(<Skeleton width={200} />);
    expect(document.querySelector('[style*="width: 200px"]')).toBeInTheDocument();
  });

  it("applies custom height", () => {
    render(<Skeleton height={100} />);
    expect(document.querySelector('[style*="height: 100px"]')).toBeInTheDocument();
  });
});
