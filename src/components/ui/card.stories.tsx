import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./card";
import { Button } from "./button";

const meta = {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["default", "sm"],
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>This is a description for the card.</CardDescription>
        </CardHeader>
        <CardContent>
          Card content goes here. You can put any content inside a card.
        </CardContent>
        <CardFooter>
          <Button size="sm">Action</Button>
        </CardFooter>
      </>
    ),
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: (
      <>
        <CardHeader>
          <CardTitle>Small Card</CardTitle>
          <CardDescription>A compact card variant.</CardDescription>
        </CardHeader>
        <CardContent>
          Smaller padding and text.
        </CardContent>
      </>
    ),
  },
};

export const WithoutFooter: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>No Footer</CardTitle>
          <CardDescription>This card has no footer.</CardDescription>
        </CardHeader>
        <CardContent>
          Just header and content.
        </CardContent>
      </>
    ),
  },
};

export const Dark: Story = {
  decorators: [
    (Story) => <div className="dark"><Story /></div>,
  ],
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Dark Mode Card</CardTitle>
          <CardDescription>This card renders correctly in dark mode.</CardDescription>
        </CardHeader>
        <CardContent>
          Card content works properly with dark background colors.
        </CardContent>
        <CardFooter>
          <Button size="sm" variant="outline">Action</Button>
        </CardFooter>
      </>
    ),
  },
};
