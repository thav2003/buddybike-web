import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import EmployeeTable from '../employee-tables';
import { buttonVariants } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { Employee } from '@/constants/data';
import { fakeUsers } from '@/constants/mock-api';
import { searchParamsCache } from '@/lib/searchparams';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import Link from 'next/link';

const breadcrumbItems = [
  { title: 'Dashboard', link: '/dashboard' },
  { title: 'Employee', link: '/dashboard/employee' }
];

type TEmployeeListingPage = {};

export default async function EmployeeListingPage({}: TEmployeeListingPage) {
  // Showcasing the use of search params cache in nested RSCs
  const page = searchParamsCache.get('page');
  const search = searchParamsCache.get('q');
  const gender = searchParamsCache.get('gender');
  const pageLimit = searchParamsCache.get('limit');

  const filters = {
    page,
    limit: pageLimit,
    ...(search && { search }),
    ...(gender && { genders: gender })
  };
  // mock api call
  const data = await fakeUsers.getUsers(filters);
  const totalUsers = data.total_users;
  const employee: Employee[] = [
    {
      id: '1',
      name: 'Phạm Hoàng Thủy Tiên',
      university: 'Đại học FPT',
      phone: '0964827494',
      email: 'tienphtss160534@fpt.edu.vn'
    },
    {
      id: '2',
      name: 'Võ Nguyễn Hoàng Long',
      university: 'Đại học FPT',
      phone: '0726482956',
      email: 'longvnhse160432@fpt.edu.vn'
    },
    {
      id: '3',
      name: 'Mai Nguyễn Hoàng An',
      university: 'Đại học Y Dược TP.HCM',
      phone: '0721364965',
      email: 'anmnh412532@ump.edu.vn'
    },
    {
      id: '4',
      name: 'Trương Hoàng Anh Vũ',
      university: 'Đại học FPT',
      phone: '0837261547',
      email: 'vuthase172485@fpt.edu.vn'
    },
    {
      id: '5',
      name: 'Lê Gia Hân',
      university: 'Đại học FPT',
      phone: '0849264726',
      email: 'hanlgss154238@fpt.edu.vn'
    },
    {
      id: '6',
      name: 'Trần Quốc Tú',
      university: 'Đại học Văn Lang cơ sở 3',
      phone: '0837261549',
      email: 'tutq678231@vlu.edu.vn'
    },
    {
      id: '7',
      name: 'Nguyễn Tấn Nhật Quang',
      university: 'Đại học FPT',
      phone: '0837261550',
      email: 'quangntnse160932@fpt.edu.vn'
    },
    {
      id: '8',
      name: 'Trần Huyền Trang',
      university: 'Đại học Nông Lâm TP.HCM',
      phone: '0832861551',
      email: 'trangth487213@huaf.edu.vn'
    },
    {
      id: '9',
      name: 'Lữ Minh Ngọc',
      university: 'Đại học FPT',
      phone: '0489322847',
      email: 'ngoclmss161562@fpt.edu.vn'
    },
    {
      id: '10',
      name: 'Hồ Tiến Quốc',
      university: 'Đại học Công Nghiệp TP.HCM',
      phone: '0746689993',
      email: 'quocht781232@iuh.edu.vn'
    },
    {
      id: '11',
      name: 'Lê Quốc Huy',
      university: 'Đại học Kinh tế Tài chính TP.HCM',
      phone: '0831533899',
      email: 'huylq217823@uef.edu.vn'
    },
    {
      id: '12',
      name: 'Phạm Thiện Toàn',
      university: 'Đại học FPT',
      phone: '0749222834',
      email: 'toanptse170423@fpt.edu.vn'
    },
    {
      id: '13',
      name: 'Phạm Lê Quốc Tuấn',
      university: 'Đại học Công Nghiệp TP.HCM',
      phone: '0937446821',
      email: 'tuanplq354213@iuh.edu.vn'
    },
    {
      id: '14',
      name: 'Đỗ Ngọc Ánh',
      university: 'Đại học Nông Lâm TP.HCM',
      phone: '0805370065',
      email: 'anhdn432512@iuh.edu.vn'
    },
    {
      id: '15',
      name: 'Trịnh Thị Bích Huyền',
      university: 'Đại học FPT',
      phone: '0974482181',
      email: 'huyenttbss156132@fpt.edu.vn'
    },
    {
      id: '16',
      name: 'Tăng Thành Định',
      university: 'Đại học FPT',
      phone: '0998336723',
      email: 'dinhttse167541@fpt.edu.vn'
    },
    {
      id: '17',
      name: 'Nguyễn Thị Diễm',
      university: 'Đại Học Mở TP. Hồ Chí Minh',
      phone: '0472947294',
      email: 'diemnt143273@ou.edu.vn'
    },
    {
      id: '18',
      name: 'Trần Minh Hoài',
      university: 'Đại học Khoa học xã hội và Nhân văn',
      phone: '0831234567',
      email: 'hoaitm521645@vnuhcm.edu.vn'
    },
    {
      id: '19',
      name: 'Phạm Mai Anh',
      university: 'Đại Học Mở TP. Hồ Chí Minh',
      phone: '0842345678',
      email: 'anhpm425134@ou.edu.vn'
    },
    {
      id: '20',
      name: 'Lương Thế Thành',
      university: 'Đại học Khoa học Tự nhiên - Đại học Quốc Quốc Gia TP.HCM',
      phone: '0853456789',
      email: 'thanhlt647124@hcmus.edu.vn'
    },
    {
      id: '21',
      name: 'Lê Tấn Tài',
      university: 'Đại học Kinh tế Tài chính TP.HCM',
      phone: '0814567890',
      email: 'tailt293812@uef.edu.vn'
    },
    {
      id: '22',
      name: 'Lý Lệ Anh',
      university: 'Đại học Khoa học Tự nhiên - Đại học Quốc Quốc Gia TP.HCM',
      phone: '0865678901',
      email: 'anhlt267312@hcmus.edu.vn'
    },
    {
      id: '23',
      name: 'Mai Hoàng Đạt',
      university: 'Đại học Sài Gòn',
      phone: '0966789012',
      email: 'datmh762341@sgu.edu.vn'
    },
    {
      id: '24',
      name: 'Nguyễn Gia Huy',
      university: 'Đại học FPT',
      phone: '0977890123',
      email: 'huyngse174325@fpt.edu.vn'
    },
    {
      id: '25',
      name: 'Nguyễn Tấn Phi',
      university: 'Đại học Thể Dục Thể Thao TP.HCM',
      phone: '0988901234',
      email: 'phitn156242@ush.edu.vn'
    },
    {
      id: '26',
      name: 'Mai Xuân Thịnh',
      university: 'Đại học Sài Gòn',
      phone: '0860915401',
      email: 'thinhmx847213@sgu.edu.vn'
    },
    {
      id: '27',
      name: 'Đặng Tuấn Anh',
      university: 'Đại học Kiến Trúc TP.HCM',
      phone: '0969702511',
      email: 'anhdt726312@uah.edu.vn'
    },
    {
      id: '28',
      name: 'Lý Anh Kiệt',
      university: 'Đại học Kinh tế Tài chính TP.HCM',
      phone: '0904010328',
      email: 'kietla638922@uef.edu.vn'
    },
    {
      id: '29',
      name: 'Đặng Phi Khang',
      university: 'Đại Học Mở TP. Hồ Chí Minh',
      phone: '0932223895',
      email: 'khangdp657123@ou.edu.vn'
    },
    {
      id: '30',
      name: 'Hoàng Ngọc Anh',
      university: 'Đại học Sài Gòn',
      phone: '0862486078',
      email: 'anhhn762312@sgu.edu.vn'
    },
    {
      id: '31',
      name: 'Phan Gia Khang',
      university: 'Đại học Luật TP.HCM',
      phone: '0859468461',
      email: 'khangpg562134@hcmulaw.edu.vn'
    },
    {
      id: '32',
      name: 'Lưu Trọng Vũ',
      university: 'Đại học FPT',
      phone: '0849390294',
      email: 'vultsa176534@fpt.edu.vn'
    },
    {
      id: '33',
      name: 'Nguyễn Thị Thu Phương',
      university: 'Đại học Thể Dục Thể Thao TP.HCM',
      phone: '0989140711',
      email: 'phuongntt622726@ush.edu.vn'
    },
    {
      id: '34',
      name: 'Nguyễn Bình Hạnh Nguyên',
      university: 'Trường ĐH Kinh tế – Luật',
      phone: '0962954192',
      email: 'nguyennbh272653@uel.edu.vn'
    },
    {
      id: '35',
      name: 'Vũ Ngọc Huyền',
      university: 'Đại học FPT',
      phone: '0890449783',
      email: 'huyenvnse176489@fpt.edu.vn'
    },
    {
      id: '36',
      name: 'Đặng Thị Lan Anh',
      university: 'Trường ĐH Kinh tế – Luật',
      phone: '0894943610',
      email: 'anhdtl262739@uel.edu.vn'
    },
    {
      id: '37',
      name: 'Tạ Minh Khang',
      university: 'Trường ĐH Giao thông Vận tải Phân hiệu tại TP.HCM',
      phone: '0904212120',
      email: 'khangtm152628@utc2.edu.vn'
    },
    {
      id: '38',
      name: 'Phan Anh Thư',
      university: 'Trường ĐH Kinh tế – Luật',
      phone: '0892599664',
      email: 'thupa@uel.edu.vn'
    },
    {
      id: '39',
      name: 'Vũ Hoàng Nam',
      university: 'Đại học Thể Dục Thể Thao TP.HCM',
      phone: '0988476994',
      email: 'namvh537890@ush.edu.vn'
    },
    {
      id: '40',
      name: 'Tạ Bảo Ngọc',
      university: 'Đại học FPT',
      phone: '0836816418',
      email: 'ngoctbse176781@fpt.edu.vn'
    },
    {
      id: '41',
      name: 'Hồ Nguyễn Minh Triết',
      university: 'Đại học FPT',
      phone: '0832069071',
      email: 'triethnmss17523@fpt.edu.vn'
    },
    {
      id: '42',
      name: 'Lê Quốc Duy',
      university: 'Đại học Tài chính - Marketing',
      phone: '0975180835',
      email: 'duylq246388@ufm.edu.vn'
    },
    {
      id: '43',
      name: 'Trương Quốc Hưng',
      university: 'Đại học Ngân hàng TP.HCM',
      phone: '0987773156',
      email: 'hungtq262800@hub.edu.vn'
    },
    {
      id: '44',
      name: 'Võ Thanh Tùng',
      university: 'Đại học Sư phạm Kỹ thuật TP.HCM.',
      phone: '0907729548',
      email: 'tungvt262836@hcmute.edu.vn'
    },
    {
      id: '45',
      name: 'Bạch Ngọc Lan',
      university: 'Đại học FPT',
      phone: '0810983566',
      email: 'lanbnse177388@fpt.edu.vn'
    },
    {
      id: '46',
      name: 'Lưu Trọng Nhân',
      university: 'Đại học Tôn Đức Thắng',
      phone: '0831429047',
      email: 'nhanlt625388@tdtu.edu.vn'
    },
    {
      id: '47',
      name: 'Đặng Tài Đức',
      university: 'Đại học Công Thương TP.HCM',
      phone: '0813568821',
      email: 'ducdt625387@hufi.edu.vn'
    },
    {
      id: '48',
      name: 'Tạ Hải Yến',
      university: 'Đại học Bách khoa – Đại học Quốc gia TP.HCM.',
      phone: '0930965088',
      email: 'yenth262537@vnuhcm.edu.vn'
    },
    {
      id: '49',
      name: 'Hoàng Khánh Vân',
      university: 'Đại học Tài chính - Marketing',
      phone: '0902162602',
      email: 'vanhk235789@ufm.edu.vn'
    },
    {
      id: '50',
      name: 'Trần Bảo Khang',
      university: 'Đại học Thể Dục Thể Thao TP.HCM',
      phone: '0980597938',
      email: 'khangtb627827@ush.edu.vn'
    },
    {
      id: '51',
      name: 'Trần Hoàng Nam',
      university: 'Đại học Sư phạm Kỹ thuật TP.HCM.',
      phone: '0858392939',
      email: 'namth262639@hcmute.edu.vn'
    },
    {
      id: '52',
      name: 'Trần Thu Hà',
      university: 'Đại học FPT',
      phone: '0813335025',
      email: 'hattsa186548@fpt.edu.vn'
    },
    {
      id: '53',
      name: 'Mạc Quang Huy',
      university: 'Đại học Bách khoa – Đại học Quốc gia TP.HCM.',
      phone: '0819732511',
      email: 'huymq273546@vnuhcm.edu.vn'
    },
    {
      id: '54',
      name: 'Huỳnh Thị Kim Ngọc',
      university: 'Đại học Kinh tế Tài chính TP.HCM',
      phone: '0909984929',
      email: 'ngochtk236589@uef.edu.vn'
    },
    {
      id: '55',
      name: 'La Gia Hưng',
      university: 'Đại học Kinh tế Tài chính TP.HCM',
      phone: '0906795149',
      email: 'hunglg236476@uef.edu.vn'
    }
  ];

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Employee (${55})`}
            description="Manage employees (Server side table functionalities.)"
          />

          <Link
            href={'/dashboard/employee/new'}
            className={cn(buttonVariants({ variant: 'default' }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>
        <Separator />
        <EmployeeTable data={employee} totalData={totalUsers} />
      </div>
    </PageContainer>
  );
}
