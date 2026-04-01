import type { Meta, StoryObj } from "@storybook/react";
import { AlertBanner } from "./alert-banner";

const meta = {
  title: "UI/AlertBanner",
  component: AlertBanner,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "success", "warning", "error"],
    },
    dismissible: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof AlertBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Info: Story = {
  args: {
    variant: "info",
    title: "Information",
    description: "This is an informational alert.",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    title: "Success",
    description: "Your changes have been saved successfully.",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Warning",
    description: "Please review your input before submitting.",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    title: "Error",
    description: "Something went wrong. Please try again.",
  },
};

export const Dismissible: Story = {
  args: {
    variant: "info",
    title: "Dismissible Alert",
    description: "This alert can be dismissed by clicking the X button.",
    dismissible: true,
    onDismiss: () => alert("Dismissed!"),
  },
};

export const WithChildren: Story = {
  args: {
    variant: "warning",
    title: "Alert with Custom Content",
    children: (
      <button className="text-sm underline hover:no-underline">Take action</button>
    ),
  },
};
