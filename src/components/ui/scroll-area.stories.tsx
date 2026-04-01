import type { Meta, StoryObj } from "@storybook/react";
import { ScrollArea } from "./scroll-area";

const meta: Meta<typeof ScrollArea> = {
  title: "UI/ScrollArea",
  component: ScrollArea,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
  render: () => (
    <ScrollArea className="h-48 w-full rounded-md border p-4">
      <div className="space-y-4">
        {[...Array(20)].map((_, i) => (
          <p key={i} className="text-sm">
            This is scrollable content item {i + 1}. Scroll to see more content
            that overflows the visible area.
          </p>
        ))}
      </div>
    </ScrollArea>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <ScrollArea className="h-48 w-full rounded-md border">
      <div className="flex w-max gap-4 p-4">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="flex h-32 w-32 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground"
          >
            Item {i + 1}
          </div>
        ))}
      </div>
    </ScrollArea>
  ),
};
