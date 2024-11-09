import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import TripTable from '../trip-table';
import {} from '../trip-table'; // Assuming you've exported mockTrips
import { Trip } from '../trip-table/columns';
import { searchParamsCache } from '@/lib/searchparams';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Trips', link: '/dashboard/trip' }
];

export default async function TripListingPage() {
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

  const mockTrips: Trip[] = [
    {
      id: 'T001',
      datetime: '2024-10-20T08:30:00',
      status: 'Completed',
      driver: 'Nguyen Van A',
      user: 'Tran Thi B',
      pickupPoint: '123 Le Loi, District 1, HCMC',
      destination: '456 Nguyen Hue, District 1, HCMC',
      distance: 5.2,
      duration: 15
    },
    {
      id: 'T002',
      datetime: '2024-10-21T14:45:00',
      status: 'In Progress',
      driver: 'Le Van C',
      user: 'Pham Thi D',
      pickupPoint: '789 Vo Van Tan, District 3, HCMC',
      destination: '101 Cach Mang Thang 8, District 10, HCMC',
      distance: 7.8,
      duration: 25
    },
    {
      id: 'T003',
      datetime: '2024-10-22T10:00:00',
      status: 'Scheduled',
      driver: null,
      user: 'Hoang Van E',
      pickupPoint: '202 Dien Bien Phu, Binh Thanh District, HCMC',
      destination: '303 Nguyen Xi, Binh Thanh District, HCMC',
      distance: 3.5,
      duration: 12
    },
    {
      id: 'T004',
      datetime: '2024-10-23T16:15:00',
      status: 'Cancelled',
      driver: 'Tran Van F',
      user: null,
      pickupPoint: '404 Phan Xich Long, Phu Nhuan District, HCMC',
      destination: '505 Nguyen Kiem, Phu Nhuan District, HCMC',
      distance: 2.1,
      duration: 8
    },
    {
      id: 'T005',
      datetime: '2024-10-24T09:30:00',
      status: 'Completed',
      driver: 'Nguyen Thi G',
      user: 'Le Van H',
      pickupPoint: '606 Truong Chinh, Tan Binh District, HCMC ',
      destination: '707 Cong Hoa, Tan Binh District, HCMC',
      distance: 4.7,
      duration: 18
    }
  ];
  // Lọc dữ liệu theo khoảng thời gian (from và to)
  const filteredTripsByDate = mockTrips.filter((trip) => {
    const tripStartDate = new Date(trip.datetime).getTime();
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
    return (
      trip.driver?.toLowerCase().includes(lowerSearch) ||
      trip.user?.toLowerCase().includes(lowerSearch)
    );
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

        <div className="flex items-start justify-between">
          <Heading
            title={`Trips (${paginatedTrips.length})`}
            description="Manage trips (Client-side table with date range filtering)"
          />
        </div>
        <Separator />
        <TripTable data={paginatedTrips} totalData={mockTrips.length} />
      </div>
    </PageContainer>
  );
}
