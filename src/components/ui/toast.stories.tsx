import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Toast, ToastProvider, useToast } from "./toast";
import { Button } from "./button";

const meta: Meta<typeof Toast> = {
  title: "UI/Toast",
  component: Toast,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

function ToastDemo() {
  const { addToast } = useToast();
  const [count, setCount] = useState(0);

  const showToast = (variant: "info" | "success" | "warning" | "error") => {
    setCount((c) => c + 1);
    addToast({
      variant,
      title: `${variant.charAt(0).toUpperCase() + variant.slice(1)} Toast`,
      description: `This is toast notification #${count + 1}`,
    });
  };

  return (
    <div className="flex flex-wrap gap-2">
      <Button variant="outline" onClick={() => showToast("info")}>
        Info Toast
      </Button>
      <Button variant="outline" onClick={() => showToast("success")}>
        Success Toast
      </Button>
      <Button variant="outline" onClick={() => showToast("warning")}>
        Warning Toast
      </Button>
      <Button variant="outline" onClick={() => showToast("error")}>
        Error Toast
      </Button>
    </div>
  );
}

export const Info: Story = {
  render: () => (
    <ToastProvider>
      <Toast variant="info" title="Information" description="This is an informational message." />
    </ToastProvider>
  ),
};

export const Success: Story = {
  render: () => (
    <ToastProvider>
      <Toast variant="success" title="Success" description="Your changes have been saved successfully." />
    </ToastProvider>
  ),
};

export const Warning: Story = {
  render: () => (
    <ToastProvider>
      <Toast variant="warning" title="Warning" description="Please review your input before submitting." />
    </ToastProvider>
  ),
};

export const Error: Story = {
  render: () => (
    <ToastProvider>
      <Toast variant="error" title="Error" description="Something went wrong. Please try again." />
    </ToastProvider>
  ),
};

export const Interactive: Story = {
  render: () => (
    <ToastProvider>
      <ToastDemo />
    </ToastProvider>
  ),
};

export const Dark: Story = {
  decorators: [
    (Story) => <div className="dark"><Story /></div>,
  ],
  render: () => (
    <ToastProvider>
      <Toast variant="success" title="Success in Dark Mode" description="Your changes have been saved successfully." />
    </ToastProvider>
  ),
};
