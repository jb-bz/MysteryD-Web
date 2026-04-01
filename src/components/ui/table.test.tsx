import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Table, TableHeader, TableBody, TableFooter, TableRow, TableHead, TableCell, TableCaption } from "./table";

describe("Table", () => {
  it("renders table element", () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Header 1</TableHead>
            <TableHead>Header 2</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Cell 1</TableCell>
            <TableCell>Cell 2</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(document.querySelector("table")).toBeInTheDocument();
  });

  it("renders with caption", () => {
    render(
      <Table>
        <TableCaption>Table Caption</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Header</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Data</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(screen.getByText("Table Caption")).toBeInTheDocument();
  });

  it("forwards ref to table element", () => {
    const ref = { current: null } as React.RefObject<HTMLTableElement>;
    render(<Table ref={ref}><tbody></tbody></Table>);
    expect(ref.current).toBeInstanceOf(HTMLTableElement);
  });

  it("applies custom className", () => {
    render(<Table className="custom-class"><tbody></tbody></Table>);
    expect(document.querySelector("table")).toHaveClass("custom-class");
  });
});

describe("TableHeader", () => {
  it("renders thead element", () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Head</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
    );
    expect(document.querySelector("thead")).toBeInTheDocument();
  });
});

describe("TableBody", () => {
  it("renders tbody element", () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Cell</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(document.querySelector("tbody")).toBeInTheDocument();
  });
});

describe("TableFooter", () => {
  it("renders tfoot element", () => {
    render(
      <Table>
        <TableFooter>
          <TableRow>
            <TableCell>Footer</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );
    expect(document.querySelector("tfoot")).toBeInTheDocument();
  });
});

describe("TableRow", () => {
  it("renders tr element", () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Row</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(document.querySelector("tr")).toBeInTheDocument();
  });
});

describe("TableHead", () => {
  it("renders th element with scope col", () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Column</TableHead>
          </TableRow>
        </TableHeader>
      </Table>
    );
    const th = document.querySelector("th");
    expect(th).toBeInTheDocument();
    expect(th).toHaveAttribute("scope", "col");
  });
});

describe("TableCell", () => {
  it("renders td element", () => {
    render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Data</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(document.querySelector("td")).toBeInTheDocument();
  });
});

describe("TableCaption", () => {
  it("renders caption element", () => {
    render(
      <Table>
        <TableCaption>Caption</TableCaption>
        <TableBody>
          <TableRow>
            <TableCell>Data</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
    expect(document.querySelector("caption")).toBeInTheDocument();
    expect(screen.getByText("Caption")).toBeInTheDocument();
  });
});
