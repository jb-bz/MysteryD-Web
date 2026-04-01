import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./label";
import { Input } from "./input";

const meta = {
  title: "UI/Label",
  component: Label,
  tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="email">Email address</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
  ),
};

export const Required: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="name">
        Full Name <span className="text-destructive">*</span>
      </Label>
      <Input id="name" placeholder="Enter your name" required />
    </div>
  ),
};

export const WithHint: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="username">Username</Label>
      <Input id="username" placeholder="Choose a username" />
      <p className="text-sm text-muted-foreground">
        Must be at least 3 characters long.
      </p>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="space-y-2">
      <Label htmlFor="disabled-field">Disabled Field</Label>
      <Input id="disabled-field" disabled placeholder="Cannot edit this" />
    </div>
  ),
};
