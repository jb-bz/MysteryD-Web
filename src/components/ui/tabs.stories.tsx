import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./tabs";

const meta = {
  title: "UI/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultValue: "tab-1",
    children: (
      <>
        <TabsList ariaLabel="Example tabs">
          <TabsTrigger value="tab-1">First Tab</TabsTrigger>
          <TabsTrigger value="tab-2">Second Tab</TabsTrigger>
          <TabsTrigger value="tab-3">Third Tab</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">
          <p>Content for the first tab goes here.</p>
        </TabsContent>
        <TabsContent value="tab-2">
          <p>Content for the second tab goes here.</p>
        </TabsContent>
        <TabsContent value="tab-3">
          <p>Content for the third tab goes here.</p>
        </TabsContent>
      </>
    ),
  },
};

export const Vertical: Story = {
  args: {
    defaultValue: "tab-1",
    orientation: "vertical",
    children: (
      <>
        <TabsList ariaLabel="Vertical tabs example">
          <TabsTrigger value="tab-1">Overview</TabsTrigger>
          <TabsTrigger value="tab-2">Details</TabsTrigger>
          <TabsTrigger value="tab-3">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">
          <p>Overview content displayed vertically.</p>
        </TabsContent>
        <TabsContent value="tab-2">
          <p>Details content displayed vertically.</p>
        </TabsContent>
        <TabsContent value="tab-3">
          <p>Settings content displayed vertically.</p>
        </TabsContent>
      </>
    ),
  },
};

export const WithDisabledTab: Story = {
  args: {
    defaultValue: "tab-1",
    children: (
      <>
        <TabsList ariaLabel="Tabs with disabled">
          <TabsTrigger value="tab-1">Active</TabsTrigger>
          <TabsTrigger value="tab-2" disabled>Disabled</TabsTrigger>
          <TabsTrigger value="tab-3">Also Active</TabsTrigger>
        </TabsList>
        <TabsContent value="tab-1">
          <p>The first tab is active.</p>
        </TabsContent>
        <TabsContent value="tab-2">
          <p>You should not see this.</p>
        </TabsContent>
        <TabsContent value="tab-3">
          <p>The third tab is also active.</p>
        </TabsContent>
      </>
    ),
  },
};
