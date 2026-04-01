import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./skeleton";

const meta = {
  title: "UI/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["text", "circular", "rectangular"],
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Rectangular: Story = {
  args: {
    variant: "rectangular",
    width: 200,
    height: 100,
  },
};

export const Circular: Story = {
  args: {
    variant: "circular",
    width: 48,
    height: 48,
  },
};

export const Text: Story = {
  args: {
    variant: "text",
    width: "100%",
  },
};

export const CardSkeleton: Story = {
  render: () => (
    <div className="w-80 space-y-4 p-4 border rounded-lg">
      <div className="flex items-center gap-3">
        <Skeleton variant="circular" width={48} height={48} />
        <div className="flex-1 space-y-2">
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="40%" />
        </div>
      </div>
      <Skeleton variant="rectangular" width="100%" height={80} />
      <div className="flex gap-2">
        <Skeleton variant="rectangular" width={80} height={32} />
        <Skeleton variant="rectangular" width={80} height={32} />
      </div>
    </div>
  ),
};

export const TableSkeleton: Story = {
  render: () => (
    <div className="w-full max-w-md space-y-2">
      <Skeleton variant="text" width="30%" />
      {[...Array(5)].map((_, i) => (
        <div key={i} className="flex items-center gap-3">
          <Skeleton variant="circular" width={32} height={32} />
          <div className="flex-1 space-y-1">
            <Skeleton variant="text" width={`${70 - i * 10}%`} />
          </div>
          <Skeleton variant="rectangular" width={60} height={24} />
        </div>
      ))}
    </div>
  ),
};
