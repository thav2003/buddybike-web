import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';

export interface Deposit {
  id: string;
  datetime: string;
  status: string;
  user: string;
  amount: number;
  method: string;
  transactionId: string;
}

export const columns: ColumnDef<Deposit>[] = [
  {
    accessorKey: 'datetime',
    header: 'Date & Time',
    cell: ({ row }) => {
      const date = new Date(row.getValue('datetime'));
      const weekday = date.toLocaleDateString('vi-VN', { weekday: 'long' });
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      return `${weekday}, ${day}/${month}/${year} ${hours}:${
        minutes < 10 ? '0' : ''
      }${minutes}`;
    }
  },
  {
    accessorKey: 'status',
    header: 'Status'
  },
  {
    accessorKey: 'user',
    header: 'User'
  },
  {
    accessorKey: 'amount',
    header: 'Amount (VND)',
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'));
      const formatted = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
      }).format(amount);
      return formatted;
    }
  },
  {
    accessorKey: 'method',
    header: 'Payment Method'
  },
  {
    accessorKey: 'transactionId',
    header: 'Transaction ID'
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
