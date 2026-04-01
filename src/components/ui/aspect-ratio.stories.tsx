import type { Meta, StoryObj } from "@storybook/react";
import Image from "next/image";
import { AspectRatio } from "./aspect-ratio";

const meta: Meta<typeof AspectRatio> = {
  title: "UI/AspectRatio",
  component: AspectRatio,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  render: (args) => (
    <div className="w-full max-w-md">
      <AspectRatio {...args}>
        <div className="flex h-full w-full items-center justify-center bg-muted">
          <span className="text-muted-foreground">16:9 Aspect Ratio</span>
        </div>
      </AspectRatio>
    </div>
  ),
  args: {
    ratio: 16 / 9,
  },
};

export const FourThree: Story = {
  render: () => (
    <div className="w-full max-w-md">
      <AspectRatio ratio={4 / 3}>
        <div className="flex h-full w-full items-center justify-center bg-muted">
          <span className="text-muted-foreground">4:3 Aspect Ratio</span>
        </div>
      </AspectRatio>
    </div>
  ),
};

export const OneOne: Story = {
  render: () => (
    <div className="w-full max-w-xs">
      <AspectRatio ratio={1}>
        <div className="flex h-full w-full items-center justify-center bg-muted">
          <span className="text-muted-foreground">1:1 Aspect Ratio (Square)</span>
        </div>
      </AspectRatio>
    </div>
  ),
};

export const WithImage: Story = {
  render: () => (
    <div className="w-full max-w-lg">
      <AspectRatio ratio={16 / 9}>
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
          alt="Mountain landscape"
          fill
          className="rounded-md object-cover"
        />
      </AspectRatio>
    </div>
  ),
};
