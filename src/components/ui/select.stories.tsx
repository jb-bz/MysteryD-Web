import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./select";

const meta = {
  title: "UI/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
    },
    error: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Country",
    children: (
      <>
        <option value="">Select a country</option>
        <option value="us">United States</option>
        <option value="ca">Canada</option>
        <option value="uk">United Kingdom</option>
      </>
    ),
  },
};

export const WithoutLabel: Story = {
  args: {
    children: (
      <>
        <option value="s">Small</option>
        <option value="m">Medium</option>
        <option value="l">Large</option>
      </>
    ),
  },
};

export const WithError: Story = {
  args: {
    label: "Country",
    error: true,
    children: (
      <>
        <option value="">Select a country</option>
        <option value="us">United States</option>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled select",
    disabled: true,
    children: <option value="us">United States</option>,
  },
};
