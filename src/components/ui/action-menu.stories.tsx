import type { Meta, StoryObj } from "@storybook/react";
import { ActionMenu, EditAction, DeleteAction } from "./action-menu";
import { Pencil, Trash2, ExternalLink } from "lucide-react";

const meta = {
  title: "UI/ActionMenu",
  component: ActionMenu,
  tags: ["autodocs"],
} satisfies Meta<typeof ActionMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    actions: [
      { label: "Edit", icon: Pencil },
      { label: "View", icon: ExternalLink },
      { label: "Delete", icon: Trash2, variant: "destructive" },
    ],
  },
};

export const SingleAction: Story = {
  args: {
    actions: [{ label: "Edit", icon: Pencil }],
  },
};

export const AllDestructive: Story = {
  args: {
    actions: [
      { label: "Delete", icon: Trash2, variant: "destructive" },
    ],
  },
};

export const WithDisabled: Story = {
  args: {
    actions: [
      { label: "Edit", icon: Pencil },
      { label: "Delete", icon: Trash2, variant: "destructive", disabled: true },
    ],
  },
};

export const Dark: Story = {
  decorators: [
    (Story) => <div className="dark p-4"><Story /></div>,
  ],
  args: {
    actions: [
      { label: "Edit", icon: Pencil },
      { label: "Delete", icon: Trash2, variant: "destructive" },
    ],
  },
};

export const StandaloneEdit: StoryObj = {
  render: () => <EditAction onClick={() => {}} />,
};

export const StandaloneDelete: StoryObj = {
  render: () => <DeleteAction onClick={() => {}} />,
};
