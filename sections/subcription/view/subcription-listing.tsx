import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import SubcriptionTable from '../subcription-table';
import {} from '../subcription-table'; // Assuming you've exported mockTrips
import { Transaction } from '../subcription-table/columns';
import { searchParamsCache } from '@/lib/searchparams';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Trips', link: '/dashboard/trip' }
];

export default async function SubcriptionListingPage() {
  const page = searchParamsCache.get('page');
  const pageLimit = searchParamsCache.get('limit');
  const search = searchParamsCache.get('q');
  const from = searchParamsCache.get('from');
  const to = searchParamsCache.get('to');
  const status = searchParamsCache.get('status');
  const filters = {
    page,
    limit: pageLimit,
    ...(search && { search }),
    ...(from && { from: from }),
    ...(to && { from: to })
  };

  const mockTrips: Transaction[] = [
    {
      transactionCode: 'DIAMOND - 241001',
      date: '24/10',
      time: '07:07',
      name: 'Võ Hoàng Đăng Dương',
      subscription: 'Diamond',
      paymentMethod: '',
      validTime: '24/10',
      dueDate: '23/11',
      revenue: '29000'
    },
    {
      transactionCode: 'GOLD - 241001',
      date: '24/10',
      time: '09:32',
      name: 'Phạm Hoàng Thủy Tiên',
      subscription: 'Gold',
      paymentMethod: '',
      validTime: '24/10',
      dueDate: '23/11',
      revenue: '19000'
    },
    {
      transactionCode: 'GOLD - 241002',
      date: '24/10',
      time: '12:32',
      name: 'Võ Hoàng Long',
      subscription: 'Gold',
      paymentMethod: '',
      validTime: '24/10',
      dueDate: '23/11',
      revenue: '19000'
    },
    {
      transactionCode: 'GOLD - 241003',
      date: '24/10',
      time: '23:19',
      name: 'Nguyễn Trần Trung Anh',
      subscription: 'Gold',
      paymentMethod: '',
      validTime: '24/10',
      dueDate: '23/11',
      revenue: '19000'
    },
    {
      transactionCode: 'GOLD - 251001',
      date: '25/10',
      time: '14:00',
      name: 'Hà Kiều Anh',
      subscription: 'Gold',
      paymentMethod: '',
      validTime: '25/10',
      dueDate: '24/11',
      revenue: '19000'
    },
    {
      transactionCode: 'GOLD - 251002',
      date: '25/10',
      time: '14:30',
      name: 'Trần Bảo Khang',
      subscription: 'Gold',
      paymentMethod: '',
      validTime: '25/10',
      dueDate: '24/11',
      revenue: '19000'
    },
    {
      transactionCode: 'GOLD - 251003',
      date: '25/10',
      time: '19:10',
      name: 'Phan Tiến Phúc Anh',
      subscription: 'Gold',
      paymentMethod: '',
      validTime: '25/10',
      dueDate: '24/11',
      revenue: '19000'
    },
    {
      transactionCode: 'DIAMOND - 271001',
      date: '27/10',
      time: '18:04',
      name: 'Nguyễn Trung Nghĩa',
      subscription: 'Diamond',
      paymentMethod: '',
      validTime: '27/10',
      dueDate: '26/11',
      revenue: '29000'
    },
    {
      transactionCode: 'GOLD - 291001',
      date: '29/10',
      time: '10:11',
      name: 'Cao Kỳ Sơn',
      subscription: 'Gold',
      paymentMethod: '',
      validTime: '29/10',
      dueDate: '28/11',
      revenue: '19000'
    },
    {
      transactionCode: 'GOLD - 291002',
      date: '29/10',
      time: '17:02',
      name: 'Hồ Nguyễn Minh Triết',
      subscription: 'Gold',
      paymentMethod: '',
      validTime: '29/10',
      dueDate: '28/11',
      revenue: '19000'
    },
    {
      transactionCode: 'DIAMOND - 301001',
      date: '30/10',
      time: '22:34',
      name: 'Đoàn Lưu Ngọc Linh',
      subscription: 'Diamond',
      paymentMethod: '',
      validTime: '30/10',
      dueDate: '29/11',
      revenue: '29000'
    },
    {
      transactionCode: 'GOLD - 311001',
      date: '31/10',
      time: '01:49',
      name: 'Nguyễn Thị Thu Hằng',
      subscription: 'Gold',
      paymentMethod: '',
      validTime: '31/10',
      dueDate: '30/11',
      revenue: '19000'
    },
    {
      transactionCode: 'GOLD - 311002',
      date: '31/10',
      time: '16:37',
      name: 'Nguyễn Tấn Nhật Quang',
      subscription: 'Gold',
      paymentMethod: '',
      validTime: '31/10',
      dueDate: '30/11',
      revenue: '19000'
    },
    {
      transactionCode: 'GOLD - 021101',
      date: '2/11',
      time: '11:53',
      name: 'Quách Đạt Phước',
      subscription: 'Gold',
      paymentMethod: '',
      validTime: '2/11',
      dueDate: '2/12',
      revenue: '19000'
    },
    {
      transactionCode: 'DIAMOND - 041001',
      date: '4/11',
      time: '23:05',
      name: 'Nguyễn Quang Anh',
      subscription: 'Diamond',
      paymentMethod: '',
      validTime: '4/11',
      dueDate: '4/12',
      revenue: '29000'
    },
    {
      transactionCode: 'GOLD - 061101',
      date: '6/11',
      time: '13:01',
      name: 'Nguyễn Lê Bảo Lâm',
      subscription: 'Gold',
      paymentMethod: '',
      validTime: '6/11',
      dueDate: '6/12',
      revenue: '19000'
    },
    {
      transactionCode: 'GOLD - 081101',
      date: '8/11',
      time: '08:31',
      name: 'Vũ Hải Đăng',
      subscription: 'Gold',
      paymentMethod: '',
      validTime: '8/11',
      dueDate: '8/12',
      revenue: '19000'
    },
    {
      transactionCode: 'DIAMOND - 081001',
      date: '8/11',
      time: '10:45',
      name: 'Lê Dương Diệu Trinh',
      subscription: 'Diamond',
      paymentMethod: '',
      validTime: '8/11',
      dueDate: '8/12',
      revenue: '29000'
    },
    {
      transactionCode: 'GOLD - 111101',
      date: '11/11',
      time: '08:50',
      name: 'Trần Khánh Dung',
      subscription: 'Gold',
      paymentMethod: '',
      validTime: '11/11',
      dueDate: '11/12',
      revenue: '19000'
    },
    {
      transactionCode: 'GOLD - 111101',
      date: '11/11',
      time: '12:54',
      name: 'Nguyễn Hữu Linh',
      subscription: 'Gold',
      paymentMethod: '',
      validTime: '11/11',
      dueDate: '11/12',
      revenue: '19000'
    },
    {
      transactionCode: 'GOLD - 121101',
      date: '12/11',
      time: '10:21',
      name: 'Võ Văn Thảo',
      subscription: 'Gold',
      paymentMethod: '',
      validTime: '12/11',
      dueDate: '12/12',
      revenue: '19000'
    },
    {
      transactionCode: 'DIAMOND - 131001',
      date: '13/11',
      time: '21:09',
      name: 'Đặng Văn Sơn',
      subscription: 'Diamond',
      paymentMethod: '',
      validTime: '13/11',
      dueDate: '13/12',
      revenue: '29000'
    },
    {
      transactionCode: 'DIAMOND - 131002',
      date: '13/11',
      time: '23:30',
      name: 'Trần Minh Kiên',
      subscription: 'Diamond',
      paymentMethod: '',
      validTime: '13/11',
      dueDate: '13/12',
      revenue: '29000'
    },
    {
      transactionCode: 'GOLD - 141101',
      date: '14/11',
      time: '09:25',
      name: 'Phạm Thị Hoa',
      subscription: 'Gold',
      paymentMethod: '',
      validTime: '14/11',
      dueDate: '14/12',
      revenue: '19000'
    },
    {
      transactionCode: 'GOLD - 141102',
      date: '14/11',
      time: '18:39',
      name: 'Phạm Phước Dung',
      subscription: 'Gold',
      paymentMethod: '',
      validTime: '14/11',
      dueDate: '14/12',
      revenue: '19000'
    }
  ];

  // Lọc dữ liệu theo khoảng thời gian (from và to)
  const filteredTripsByDate = mockTrips.filter((trip) => {
    const date = trip.date; // Lấy giá trị 'date'
    const time = trip.time;
    const datetimeString = `${date} ${time}`;
    const tripStartDate = new Date(datetimeString).getTime();
    const fromTime = from ? new Date(from).getTime() : null;
    const toTime = to ? new Date(to).getTime() : null;

    // Kiểm tra nếu chuyến đi nằm trong khoảng thời gian
    const isWithinDateRange =
      (!fromTime || tripStartDate >= fromTime) &&
      (!toTime || tripStartDate <= toTime);
    return isWithinDateRange;
  });

  // Lọc theo từ khóa tìm kiếm (nếu có)
  const filteredTripsBySearch = filteredTripsByDate.filter((trip) => {
    if (!search) return true;
    const lowerSearch = search.toLowerCase();
    return trip.name?.toLowerCase().includes(lowerSearch);
  });

  // Lọc theo trạng thái (nếu có)
  const filteredTrips = filteredTripsBySearch.filter((trip) => {
    if (!status) return true;
    return trip.status === status; // Kiểm tra trạng thái
  });

  // Tính toán phân trang
  const startIndex = (page - 1) * pageLimit;
  const endIndex = startIndex + pageLimit;
  const paginatedTrips = filteredTrips.slice(startIndex, endIndex);
  return (
    <PageContainer>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />
        <div className="total-amount">
          Total Subcription Amount:{' '}
          {new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
          }).format(
            mockTrips.reduce((total, item) => {
              const revenue = parseFloat(item.revenue.replace(',', ''));
              return total + (isNaN(revenue) ? 0 : revenue);
            }, 0)
          )}
        </div>
        <div className="flex items-start justify-between">
          <Heading
            title={`Subcription`}
            description="Manage trips (Client-side table with date range filtering)"
          />
        </div>
        <Separator />
        <SubcriptionTable data={paginatedTrips} totalData={mockTrips.length} />
      </div>
    </PageContainer>
  );
}
