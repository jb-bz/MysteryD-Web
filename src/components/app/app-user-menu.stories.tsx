import type { Meta, StoryObj } from "@storybook/react";
import { AppUserMenu } from "./app-user-menu";

const meta = {
  title: "App/UserMenu",
  component: AppUserMenu,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AppUserMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    storeName: "Acme Store",
    storeDomain: "acme.myshopify.com",
  },
};

export const WithAvatar: Story = {
  args: {
    storeName: "Acme Store",
    storeDomain: "acme.myshopify.com",
    avatarFallback: "AS",
  },
};