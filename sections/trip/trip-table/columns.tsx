import { ColumnDef } from '@tanstack/react-table';
import { CellAction } from './cell-action';
export interface Trip {
  id: string;
  datetime: string;
  status: string;
  driver: string | null;
  user: string | null;
  pickupPoint: string;
  destination: string;
  distance: number;
  duration: number;
}
export const columns: ColumnDef<Trip>[] = [
  // {
  //   accessorKey: 'id',
  //   header: 'Trip ID'
  // },
  {
    accessorKey: 'datetime',
    header: 'Date & Time',
    cell: ({ row }) => {
      const date = new Date(row.getValue('datetime'));

      // Lấy tên thứ
      const weekday = date.toLocaleDateString('vi-VN', { weekday: 'long' });

      // Lấy ngày và tháng
      const day = date.getDate();
      const month = date.getMonth() + 1; // Tháng được đếm từ 0
      const year = date.getFullYear();

      // Lấy giờ và phút
      const hours = date.getHours();
      const minutes = date.getMinutes();
      return `${weekday}, ${day}/${month} ${hours}:${
        minutes < 10 ? '0' : ''
      }${minutes}`;
    }
  },
  {
    accessorKey: 'status',
    header: 'Status'
  },
  {
    accessorKey: 'driver',
    header: 'Driver',
    cell: ({ row }) => row.getValue('driver') || 'N/A'
  },
  {
    accessorKey: 'user',
    header: 'User',
    cell: ({ row }) => row.getValue('user') || 'N/A'
  },
  // {
  //   accessorKey: 'pickupPoint',
  //   header: 'Pickup Point'
  // },
  // {
  //   accessorKey: 'destination',
  //   header: 'Destination'
  // },
  {
    accessorKey: 'distance',
    header: 'Distance (km)'
  },
  {
    accessorKey: 'duration',
    header: 'Duration (min)'
  },
  {
    id: 'actions',
    cell: ({ row }) => <CellAction data={row.original} />
  }
];
