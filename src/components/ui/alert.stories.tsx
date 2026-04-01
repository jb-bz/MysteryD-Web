import type { Meta, StoryObj } from "@storybook/react";
import { Alert, AlertDescription, AlertIcon, AlertTitle } from "./alert";

const meta = {
  title: "UI/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "success", "warning", "destructive", "info"],
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: "default",
    children: (
      <>
        <AlertTitle>Alert Title</AlertTitle>
        <AlertDescription>
          This is an alert message with important information.
        </AlertDescription>
      </>
    ),
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: (
      <>
        <AlertIcon />
        <AlertTitle>Success!</AlertTitle>
        <AlertDescription>
          Your changes have been saved successfully.
        </AlertDescription>
      </>
    ),
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: (
      <>
        <AlertIcon />
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          Please review your input before submitting.
        </AlertDescription>
      </>
    ),
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: (
      <>
        <AlertIcon />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Something went wrong. Please try again.
        </AlertDescription>
      </>
    ),
  },
};

export const Info: Story = {
  args: {
    variant: "info",
    children: (
      <>
        <AlertIcon />
        <AlertTitle>Information</AlertTitle>
        <AlertDescription>
          Here is some helpful information for you.
        </AlertDescription>
      </>
    ),
  },
};

export const Dark: Story = {
  decorators: [
    (Story) => <div className="dark"><Story /></div>,
  ],
  args: {
    variant: "success",
    children: (
      <>
        <AlertIcon />
        <AlertTitle>Success in Dark Mode</AlertTitle>
        <AlertDescription>
          Your changes have been saved successfully in dark mode too.
        </AlertDescription>
      </>
    ),
  },
};
