import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { ConfirmDialog } from "./confirm-dialog";
import { Button } from "./button";

const meta: Meta<typeof ConfirmDialog> = {
  title: "UI/ConfirmDialog",
  component: ConfirmDialog,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open Confirm Dialog
        </Button>
        <ConfirmDialog
          open={open}
          onOpenChange={setOpen}
          title="Are you sure?"
          description="This action cannot be undone."
          confirmLabel="Yes, proceed"
          cancelLabel="Cancel"
          onConfirm={() => {
            alert("Confirmed!");
            setOpen(false);
          }}
          onCancel={() => setOpen(false)}
        />
      </>
    );
  },
};

export const Destructive: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="destructive" onClick={() => setOpen(true)}>
          Delete Item
        </Button>
        <ConfirmDialog
          open={open}
          onOpenChange={setOpen}
          title="Delete this item?"
          description="This will permanently delete the item and all associated data. This action cannot be undone."
          confirmLabel="Delete"
          cancelLabel="Cancel"
          variant="destructive"
          onConfirm={() => {
            alert("Deleted!");
            setOpen(false);
          }}
          onCancel={() => setOpen(false)}
        />
      </>
    );
  },
};

export const WithLoading: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [open, setOpen] = useState(false);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [loading, setLoading] = useState(false);

    const handleConfirm = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setOpen(false);
      }, 2000);
    };

    return (
      <>
        <Button variant="outline" onClick={() => setOpen(true)}>
          Open Loading Dialog
        </Button>
        <ConfirmDialog
          open={open}
          onOpenChange={setOpen}
          title="Process payment?"
          description="This will charge the customer's card."
          confirmLabel="Process"
          cancelLabel="Cancel"
          loading={loading}
          onConfirm={handleConfirm}
          onCancel={() => setOpen(false)}
        />
      </>
    );
  },
};
