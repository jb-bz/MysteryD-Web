import type { Meta, StoryObj } from "@storybook/react"
import { DataTable, type Column } from "./data-table"
import { Badge } from "./badge"
import { Button } from "./button"

type OrderRecord = Record<string, unknown>

const columns: Column<OrderRecord>[] = [
  {
    key: "id",
    header: "Order",
    width: "100px",
    render: (row) => (
      <span className="font-mono text-sm">{String(row.id)}</span>
    ),
  },
  {
    key: "customer",
    header: "Customer",
    sortable: true,
  },
  {
    key: "email",
    header: "Email",
    render: (row) => (
      <span className="text-muted-foreground">{String(row.email)}</span>
    ),
  },
  {
    key: "total",
    header: "Total",
    sortable: true,
    width: "100px",
    render: (row) => (
      <span className="font-semibold">{String(row.total)}</span>
    ),
  },
  {
    key: "status",
    header: "Status",
    width: "120px",
    render: (row) => {
      const variants = {
        pending: "outline" as const,
        fulfilled: "default" as const,
        refunded: "destructive" as const,
      }
      const status = row.status as keyof typeof variants
      return (
        <Badge variant={variants[status]}>
          {String(row.status).charAt(0).toUpperCase() + String(row.status).slice(1)}
        </Badge>
      )
    },
  },
  {
    key: "date",
    header: "Date",
    sortable: true,
    width: "140px",
  },
]

const sampleOrders: OrderRecord[] = [
  { id: "#1001", customer: "Alice Johnson", email: "alice@example.com", total: "$129.00", status: "fulfilled", date: "Mar 15, 2026" },
  { id: "#1002", customer: "Bob Smith", email: "bob@example.com", total: "$89.50", status: "pending", date: "Mar 16, 2026" },
  { id: "#1003", customer: "Carol White", email: "carol@example.com", total: "$234.00", status: "fulfilled", date: "Mar 17, 2026" },
  { id: "#1004", customer: "David Brown", email: "david@example.com", total: "$45.00", status: "refunded", date: "Mar 18, 2026" },
  { id: "#1005", customer: "Eve Davis", email: "eve@example.com", total: "$156.75", status: "fulfilled", date: "Mar 19, 2026" },
]

const meta = {
  title: "UI/DataTable",
  component: DataTable,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
} satisfies Meta<typeof DataTable>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    columns,
    data: sampleOrders,
    keyField: "id",
  },
}

export const Loading: Story = {
  args: {
    columns,
    data: [],
    keyField: "id",
    loading: true,
  },
}

export const Empty: Story = {
  args: {
    columns,
    data: [],
    keyField: "id",
    empty: {
      title: "No orders yet",
      description: "Orders will appear here once customers start placing them.",
      action: <Button size="sm">Refresh</Button>,
    },
  },
}

export const Error: Story = {
  args: {
    columns,
    data: [],
    keyField: "id",
    error: {
      title: "Failed to load orders",
      description: "Something went wrong while fetching your orders.",
      onRetry: () => {},
    },
  },
}

export const WithPagination: Story = {
  args: {
    columns,
    data: sampleOrders,
    keyField: "id",
    pagination: {
      page: 2,
      pageSize: 5,
      total: 47,
      onPageChange: () => {},
    },
  },
}

export const WithSorting: Story = {
  args: {
    columns,
    data: sampleOrders,
    keyField: "id",
    sortField: "total",
    sortDirection: "desc",
    onSort: () => {},
  },
}

export const Selectable: Story = {
  args: {
    columns,
    data: sampleOrders,
    keyField: "id",
    selectable: true,
    selectedKeys: new Set(["#1001", "#1003"]),
    onSelectionChange: () => {},
  },
}

export const SelectableWithPagination: Story = {
  args: {
    columns,
    data: sampleOrders,
    keyField: "id",
    selectable: true,
    selectedKeys: new Set(["#1001"]),
    onSelectionChange: () => {},
    pagination: {
      page: 1,
      pageSize: 5,
      total: 47,
      onPageChange: () => {},
    },
  },
}
