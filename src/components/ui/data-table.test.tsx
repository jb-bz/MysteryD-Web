import { render, screen, fireEvent } from '@testing-library/react';
import { DataTable } from './data-table';

interface TestRow {
  id: string;
  name: string;
  email: string;
  status: 'active' | 'inactive' | 'pending';
}

const mockColumns = [
  { key: 'name', header: 'Name', sortable: true },
  { key: 'email', header: 'Email' },
  {
    key: 'status',
    header: 'Status',
    render: (row: TestRow) => row.status,
  },
];

const mockData: TestRow[] = [
  { id: '1', name: 'Alice', email: 'alice@example.com', status: 'active' },
  { id: '2', name: 'Bob', email: 'bob@example.com', status: 'inactive' },
  { id: '3', name: 'Charlie', email: 'charlie@example.com', status: 'pending' },
];

describe('DataTable', () => {
  it('renders column headers', () => {
    render(<DataTable columns={mockColumns} data={mockData} keyField="id" />);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
  });

  it('renders data rows', () => {
    render(<DataTable columns={mockColumns} data={mockData} keyField="id" />);
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
    expect(screen.getByText('Charlie')).toBeInTheDocument();
  });

  it('renders empty state when no data', () => {
    render(
      <DataTable
        columns={mockColumns}
        data={[]}
        keyField="id"
        empty={{ title: 'No items', description: 'Add your first item' }}
      />
    );
    expect(screen.getByText('No items')).toBeInTheDocument();
    expect(screen.getByText('Add your first item')).toBeInTheDocument();
  });

  it('renders loading skeleton', () => {
    render(<DataTable columns={mockColumns} data={[]} keyField="id" loading />);
    const skeletons = document.querySelectorAll('[class*="animate-pulse"]');
    expect(skeletons.length).toBeGreaterThan(0);
  });

  it('renders error state', () => {
    render(
      <DataTable
        columns={mockColumns}
        data={[]}
        keyField="id"
        error={{ title: 'Error loading', description: 'Please try again' }}
      />
    );
    expect(screen.getByText('Error loading')).toBeInTheDocument();
    expect(screen.getByText('Please try again')).toBeInTheDocument();
  });

  it('renders error state with retry button', () => {
    const onRetry = vi.fn();
    render(
      <DataTable
        columns={mockColumns}
        data={[]}
        keyField="id"
        error={{ title: 'Error', onRetry }}
      />
    );
    const retryButton = screen.getByText('Retry');
    fireEvent.click(retryButton);
    expect(onRetry).toHaveBeenCalled();
  });

  it('handles row selection', () => {
    const onSelectionChange = vi.fn();
    render(
      <DataTable
        columns={mockColumns}
        data={mockData}
        keyField="id"
        selectable
        onSelectionChange={onSelectionChange}
      />
    );
    const checkbox = screen.getAllByRole('checkbox')[1];
    fireEvent.click(checkbox);
    expect(onSelectionChange).toHaveBeenCalledWith(new Set(['1']));
  });

  it('handles select all', () => {
    const onSelectionChange = vi.fn();
    render(
      <DataTable
        columns={mockColumns}
        data={mockData}
        keyField="id"
        selectable
        onSelectionChange={onSelectionChange}
      />
    );
    const selectAllCheckbox = screen.getByRole('checkbox', { name: 'Select all' });
    fireEvent.click(selectAllCheckbox);
    expect(onSelectionChange).toHaveBeenCalledWith(new Set(['1', '2', '3']));
  });

  it('displays pagination info', () => {
    render(
      <DataTable
        columns={mockColumns}
        data={mockData}
        keyField="id"
        pagination={{
          page: 1,
          pageSize: 10,
          total: 25,
          onPageChange: vi.fn(),
        }}
      />
    );
    expect(screen.getByText('1–10 of 25')).toBeInTheDocument();
    expect(screen.getByText('Page 1 of 3')).toBeInTheDocument();
  });

  it('calls onSort when sortable column header is clicked', () => {
    const onSort = vi.fn();
    render(
      <DataTable
        columns={mockColumns}
        data={mockData}
        keyField="id"
        sortField="name"
        sortDirection="asc"
        onSort={onSort}
      />
    );
    fireEvent.click(screen.getByText('Name'));
    expect(onSort).toHaveBeenCalledWith('name', 'desc');
  });
});
