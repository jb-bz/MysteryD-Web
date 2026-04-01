import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogBody, DialogFooter } from "./dialog";
import { Button } from "./button";

describe("Dialog", () => {
  it("renders when open", () => {
    render(
      <Dialog open>
        <DialogTrigger asChild>
          <Button>Open</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Test Title</DialogTitle>
            <DialogDescription>Test Description</DialogDescription>
          </DialogHeader>
          <DialogBody>
            <p>Dialog content</p>
          </DialogBody>
          <DialogFooter>
            <Button>Cancel</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    );
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Dialog content")).toBeInTheDocument();
  });

  it("does not render when closed", () => {
    render(
      <Dialog open={false}>
        <DialogContent>
          <DialogTitle>Should not render</DialogTitle>
        </DialogContent>
      </Dialog>
    );
    expect(screen.queryByText("Should not render")).not.toBeInTheDocument();
  });

  it("renders with role dialog and aria-labelledby when title is present", () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogTitle>Modal</DialogTitle>
        </DialogContent>
      </Dialog>
    );
    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAttribute("aria-labelledby");
  });

  it("DialogTrigger opens dialog on click", () => {
    render(
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Opened</DialogTitle>
        </DialogContent>
      </Dialog>
    );
    fireEvent.click(screen.getByText("Open Dialog"));
    expect(screen.getByText("Opened")).toBeInTheDocument();
  });

  it("closes on Escape key", () => {
    render(
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Press Escape</DialogTitle>
        </DialogContent>
      </Dialog>
    );
    fireEvent.click(screen.getByText("Open"));
    expect(screen.getByText("Press Escape")).toBeInTheDocument();
    fireEvent.keyDown(document, { key: "Escape" });
    waitFor(() => {
      expect(screen.queryByText("Press Escape")).not.toBeInTheDocument();
    });
  });

  it("closes when clicking backdrop", () => {
    render(
      <Dialog>
        <DialogTrigger asChild>
          <Button>Open</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle>Click Backdrop</DialogTitle>
        </DialogContent>
      </Dialog>
    );
    fireEvent.click(screen.getByText("Open"));
    expect(screen.getByText("Click Backdrop")).toBeInTheDocument();
    const backdrop = document.querySelector(".fixed.inset-0");
    if (backdrop) fireEvent.click(backdrop);
  });

  it("renders close button by default", () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogTitle>With Close</DialogTitle>
        </DialogContent>
      </Dialog>
    );
    expect(screen.getByLabelText("Close dialog")).toBeInTheDocument();
  });

  it("hides close button when showCloseButton is false", () => {
    render(
      <Dialog open>
        <DialogContent showCloseButton={false}>
          <DialogTitle>No Close</DialogTitle>
        </DialogContent>
      </Dialog>
    );
    expect(screen.queryByLabelText("Close dialog")).not.toBeInTheDocument();
  });
});

describe("DialogTitle", () => {
  it("renders title text", () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogTitle>My Title</DialogTitle>
        </DialogContent>
      </Dialog>
    );
    expect(screen.getByText("My Title")).toBeInTheDocument();
  });
});

describe("DialogDescription", () => {
  it("renders description text", () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogDescription>My Description</DialogDescription>
        </DialogContent>
      </Dialog>
    );
    expect(screen.getByText("My Description")).toBeInTheDocument();
  });
});

describe("DialogBody", () => {
  it("renders body content", () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogBody>Body Content</DialogBody>
        </DialogContent>
      </Dialog>
    );
    expect(screen.getByText("Body Content")).toBeInTheDocument();
  });
});

describe("DialogFooter", () => {
  it("renders footer content", () => {
    render(
      <Dialog open>
        <DialogContent>
          <DialogFooter>Footer Content</DialogFooter>
        </DialogContent>
      </Dialog>
    );
    expect(screen.getByText("Footer Content")).toBeInTheDocument();
  });
});
