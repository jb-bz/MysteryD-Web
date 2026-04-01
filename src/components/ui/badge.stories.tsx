import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./badge";

const meta = {
  title: "UI/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "secondary", "outline", "destructive"],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default Badge",
    variant: "default",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Badge",
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline Badge",
    variant: "outline",
  },
};

export const Destructive: Story = {
  args: {
    children: "Error Badge",
    variant: "destructive",
  },
};

export const Dark: Story = {
  decorators: [
    (Story) => <div className="dark"><Story /></div>,
  ],
  args: {
    children: "Dark Badge",
    variant: "default",
  },
};
