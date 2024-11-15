import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';

export interface Transaction {
  transactionCode: string;
  date: string;
  time: string;
  name: string;
  subscription: string;
  paymentMethod: string;
  validTime: string;
  dueDate: string;
  revenue: string;
}

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: 'transactionCode', // Cột này có trong interface 'Transaction'
    header: 'Transaction Code',
    cell: ({ row }) => row.getValue('transactionCode'),
    meta: {
      style: { maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis' }
    }
  },

  {
    accessorKey: 'name', // Trường 'name' có trong Transaction
    header: 'Name',
    cell: ({ row }) => row.getValue('name') || 'N/A',
    meta: {
      style: { maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis' }
    }
  },
  {
    accessorKey: 'subscription', // Trường 'subscription' có trong Transaction
    header: 'Subscription',
    cell: ({ row }) => row.getValue('subscription') || 'N/A',
    meta: {
      style: { maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis' }
    }
  },
  {
    accessorKey: 'validTime', // Trường 'validTime' có trong Transaction
    header: 'Valid Time',
    cell: ({ row }) => row.getValue('validTime') || 'N/A',
    meta: {
      style: { maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis' }
    }
  },
  {
    accessorKey: 'dueDate', // Trường 'dueDate' có trong Transaction
    header: 'Due Date',
    cell: ({ row }) => row.getValue('dueDate') || 'N/A',
    meta: {
      style: { maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis' }
    }
  },
  {
    accessorKey: 'revenue', // Trường 'revenue' có trong Transaction
    header: 'Revenue',
    cell: ({ row }) => {
      let revenue = row.getValue('revenue');

      // Xử lý khi revenue là chuỗi có dấu phẩy
      if (typeof revenue === 'string') {
        revenue = parseFloat(revenue.replace(/,/g, '')); // Loại bỏ dấu phẩy và chuyển thành số
      }

      // Kiểm tra xem revenue có phải là một số hợp lệ không
      if (typeof revenue === 'number' && !isNaN(revenue)) {
        return new Intl.NumberFormat('vi-VN', {
          style: 'currency',
          currency: 'VND'
        }).format(revenue);
      } else {
        return 'N/A'; // Nếu revenue không phải là một số hợp lệ
      }
    }
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
