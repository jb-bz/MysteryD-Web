import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Alert, AlertDescription, AlertIcon, AlertTitle, AlertDismiss } from "./alert";

describe("Alert", () => {
  it("renders with default variant", () => {
    render(<Alert>Alert content</Alert>);
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("renders with success variant", () => {
    render(<Alert variant="success">Success alert</Alert>);
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("renders with warning variant", () => {
    render(<Alert variant="warning">Warning alert</Alert>);
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("renders with destructive variant", () => {
    render(<Alert variant="destructive">Error alert</Alert>);
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("renders with info variant", () => {
    render(<Alert variant="info">Info alert</Alert>);
    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("renders children", () => {
    render(<Alert><p>Custom content</p></Alert>);
    expect(screen.getByText("Custom content")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Alert className="custom-alert">Alert</Alert>);
    expect(screen.getByRole("alert")).toHaveClass("custom-alert");
  });
});

describe("AlertIcon", () => {
  it("renders CheckCircle for success variant", () => {
    render(
      <Alert variant="success">
        <AlertIcon />
        <AlertTitle>Title</AlertTitle>
      </Alert>
    );
    const icon = document.querySelector("svg");
    expect(icon).toBeInTheDocument();
  });

  it("renders XCircle for destructive variant", () => {
    render(
      <Alert variant="destructive">
        <AlertIcon />
        <AlertTitle>Title</AlertTitle>
      </Alert>
    );
    const icon = document.querySelector("svg");
    expect(icon).toBeInTheDocument();
  });
});

describe("AlertTitle", () => {
  it("renders title text", () => {
    render(
      <Alert>
        <AlertTitle>Alert Title</AlertTitle>
      </Alert>
    );
    expect(screen.getByText("Alert Title")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(
      <Alert>
        <AlertTitle className="custom-title">Title</AlertTitle>
      </Alert>
    );
    expect(screen.getByText("Title")).toHaveClass("custom-title");
  });
});

describe("AlertDescription", () => {
  it("renders description text", () => {
    render(
      <Alert>
        <AlertDescription>Alert description text</AlertDescription>
      </Alert>
    );
    expect(screen.getByText("Alert description text")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(
      <Alert>
        <AlertDescription className="custom-desc">Description</AlertDescription>
      </Alert>
    );
    expect(screen.getByText("Description")).toHaveClass("custom-desc");
  });
});

describe("AlertDismiss", () => {
  it("renders dismiss button when onDismiss is provided", () => {
    render(
      <Alert onDismiss={() => {}}>
        <AlertDismiss />
      </Alert>
    );
    expect(screen.getByLabelText("Dismiss alert")).toBeInTheDocument();
  });

  it("does not render when onDismiss is not provided", () => {
    render(
      <Alert>
        <AlertDismiss />
      </Alert>
    );
    expect(screen.queryByLabelText("Dismiss alert")).not.toBeInTheDocument();
  });
});
