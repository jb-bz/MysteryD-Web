import type { Meta, StoryObj } from "@storybook/react";
import { StatusBadge } from "./status-badge";

const meta: Meta<typeof StatusBadge> = {
  title: "UI/StatusBadge",
  component: StatusBadge,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    variant: "active",
    children: "Active",
  },
};

export const Inactive: Story = {
  args: {
    variant: "inactive",
    children: "Inactive",
  },
};

export const Pending: Story = {
  args: {
    variant: "pending",
    children: "Pending",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    children: "Error",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <StatusBadge variant="active">Active</StatusBadge>
      <StatusBadge variant="inactive">Inactive</StatusBadge>
      <StatusBadge variant="pending">Pending</StatusBadge>
      <StatusBadge variant="error">Error</StatusBadge>
    </div>
  ),
};
