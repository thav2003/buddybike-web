import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';

export interface Trip {
  id: string;
  tripCode: string;
  datetime: string;
  driverName: string | null;
  userName: string | null;
  pickupLocation: string;
  destination: string;
  routeDistance: string;
  price: string;
  vouchers: string;
  priceAfterVoucher: string;
  revenue: string;
}

export const columns: ColumnDef<Trip>[] = [
  {
    accessorKey: 'tripCode',
    header: 'Trip Code',
    cell: ({ row }) => row.getValue('tripCode'),
    meta: {
      style: { maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis' }
    }
  },
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
    },
    meta: {
      style: { maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis' }
    }
  },
  {
    accessorKey: 'driverName',
    header: 'Driver',
    cell: ({ row }) => row.getValue('driverName') || 'N/A',
    meta: {
      style: { maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis' }
    }
  },
  {
    accessorKey: 'userName',
    header: 'User',
    cell: ({ row }) => row.getValue('userName') || 'N/A',
    meta: {
      style: { maxWidth: '150px', overflow: 'hidden', textOverflow: 'ellipsis' }
    }
  },
  {
    accessorKey: 'pickupLocation',
    header: 'Pickup Location',
    cell: ({ row }) => row.getValue('pickupLocation'),
    meta: {
      style: { maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis' }
    }
  },
  {
    accessorKey: 'destination',
    header: 'Destination',
    cell: ({ row }) => row.getValue('destination'),
    meta: {
      style: { maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis' }
    }
  },
  {
    accessorKey: 'revenue',
    header: 'Revenue',
    cell: ({ row }) => {
      const revenue = row.getValue('revenue');
      if (typeof revenue === 'number') {
        return new Intl.NumberFormat('vi-VN', {
          style: 'currency',
          currency: 'VND'
        }).format(revenue);
      } else {
        return 'N/A'; // Handle cases where revenue is not a valid number
      }
    }
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
