import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';

export interface Withdrawal {
  id: string;
  datetime: string;
  amount: number;
  accountName: string;
  qrCode: string | null;
  status: string;
  customerName: string;
  bankAccountNumber: string;
  bankName: string;
}

export const columns: ColumnDef<Withdrawal>[] = [
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
      return `${weekday}, ${day}/${month} ${hours}:${
        minutes < 10 ? '0' : ''
      }${minutes}`;
    }
  },
  {
    accessorKey: 'amount',
    header: 'Withdrawal Amount'
  },
  {
    accessorKey: 'accountName',
    header: 'Account Name'
  },
  {
    accessorKey: 'status',
    header: 'Status'
  },
  {
    accessorKey: 'customerName',
    header: 'Customer Name'
  },
  {
    accessorKey: 'bankAccountNumber',
    header: 'Bank Account Number'
  },
  {
    accessorKey: 'bankName',
    header: 'Bank Name'
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
