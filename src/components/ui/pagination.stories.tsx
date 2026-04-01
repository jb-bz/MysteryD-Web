import type { Meta, StoryObj } from "@storybook/react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "./pagination";

const meta: Meta<typeof Pagination> = {
  title: "UI/Pagination",
  component: Pagination,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="/?page=0" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/?page=1" isActive>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/?page=2">2</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/?page=3">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/?page=10">10</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="/?page=2" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};

export const WithManyPages: Story = {
  render: () => {
    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const currentPage = 5;

    return (
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href={`/?page=${currentPage - 1}`} />
          </PaginationItem>
          {pages.map((page) => (
            <PaginationItem key={page}>
              <PaginationLink
                href={`/?page=${page}`}
                isActive={page === currentPage}
              >
                {page}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext href={`/?page=${currentPage + 1}`} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  },
};

export const SimpleNavigation: Story = {
  render: () => (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="/?page=1" />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="/?page=2" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  ),
};
