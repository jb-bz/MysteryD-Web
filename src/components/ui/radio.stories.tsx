import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Radio, RadioGroup } from "./radio";

const meta = {
  title: "UI/Radio",
  component: Radio,
  tags: ["autodocs"],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <RadioGroup value="option1" onValueChange={() => {}}>
      <Radio value="option1" label="Option 1" />
      <Radio value="option2" label="Option 2" />
      <Radio value="option3" label="Option 3" />
    </RadioGroup>
  ),
};

export const Controlled: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState("option1");
    return (
      <div className="space-y-4">
        <p className="text-sm">Selected: {value}</p>
        <RadioGroup value={value} onValueChange={setValue}>
          <Radio value="option1" label="Option 1" />
          <Radio value="option2" label="Option 2" />
          <Radio value="option3" label="Option 3" />
        </RadioGroup>
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <RadioGroup value="option2">
      <Radio value="option1" label="Disabled option" disabled />
      <Radio value="option2" label="Selected and disabled" disabled />
      <Radio value="option3" label="Another disabled option" disabled />
    </RadioGroup>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <RadioGroup value="small" className="flex-row gap-4">
      <Radio value="small" label="Small" />
      <Radio value="medium" label="Medium" />
      <Radio value="large" label="Large" />
    </RadioGroup>
  ),
};
