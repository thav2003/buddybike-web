import { Breadcrumbs } from '@/components/breadcrumbs';
import PageContainer from '@/components/layout/page-container';
import UserTable from '../user-tables';
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
  { title: 'User', link: '/dashboard/user' }
];

type TUserListingPage = {};

export default async function UserListingPage({}: TUserListingPage) {
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
      name: 'Hoàng Lê Nguyên Kiều',
      university: 'Đại học FPT',
      phone: '0708555703',
      email: 'kieuhlnss171296@fpt.edu.vn'
    },
    {
      id: '2',
      name: 'Bùi Khánh Linh',
      university: 'Đại học FPT',
      phone: '0991368442',
      email: 'linhkbss192155@fpt.edu.vn'
    },
    {
      id: '3',
      name: 'Lê Thị Trâm Anh',
      university: 'Đại học Y Dược TP.HCM',
      phone: '0795347961',
      email: 'anhltt169309@ump.edu.vn'
    },
    {
      id: '4',
      name: 'Lê Thành Nhân',
      university: 'Đại học FPT',
      phone: '0793585675',
      email: 'nhanltse175766@fpt.edu.vn'
    },
    {
      id: '5',
      name: 'Phạm Khánh Linh',
      university: 'Đại học FPT',
      phone: '0808676858',
      email: 'linhpksa168865@fpt.edu.vn'
    },
    {
      id: '6',
      name: 'Phạm Thị Phương Mai',
      university: 'Đại học FPT',
      phone: '0741556824',
      email: 'maiptpss171305@fpt.edu.vn'
    },
    {
      id: '7',
      name: 'Nguyễn Hồng Hạnh',
      university: 'Đại học FPT',
      phone: '0914155072',
      email: 'hanhnhse187617@fpt.edu.vn'
    },
    {
      id: '8',
      name: 'Nguyễn Hoàng Kim Ngân',
      university: 'Đại học Văn Lang cơ sở 3',
      phone: '0807894364',
      email: 'ngannhk376465@vlu.edu.vn'
    },
    {
      id: '9',
      name: 'Hà Kiều Anh',
      university: 'Đại học FPT',
      phone: '0747452279',
      email: 'hakasa192619@fpt.edu.vn'
    },
    {
      id: '10',
      name: 'Nguyễn Trần Trung Anh',
      university: 'Đại học FPT',
      phone: '0759233552',
      email: 'anhnttse186514@fpt.edu.vn'
    },
    {
      id: '11',
      name: 'Lê Dương Diệu Trinh',
      university: 'Đại học FPT',
      phone: '0792398146',
      email: 'trinhldtss191281@fpt.edu.vn'
    },
    {
      id: '12',
      name: 'Lê Hoàng Kim Khánh',
      university: 'Đại học Nông Lâm TP.HCM',
      phone: '0832751073',
      email: 'khanhlhk215170@huaf.edu.vn'
    },
    {
      id: '13',
      name: 'Nguyễn Tùng Dương',
      university: 'Đại học FPT',
      phone: '0713896231',
      email: 'nguyentse176863@fpt.edu.vn'
    },
    {
      id: '14',
      name: 'Lưu Trọng Cường',
      university: 'Đại học Công Nghiệp TP.HCM',
      phone: '0745114673',
      email: 'cuonglt215839@iuh.edu.vn'
    },
    {
      id: '15',
      name: 'Vũ Hải Đăng',
      university: 'Đại học Công Nghiệp TP.HCM',
      phone: '0961416785',
      email: 'dangvh464181@iuh.edu.vn'
    },
    {
      id: '16',
      name: 'Nguyễn Thiệu Thúy Ngân',
      university: 'Đại học FPT',
      phone: '0756117212',
      email: 'ngannttse178925@fpt.edu.vn'
    },
    {
      id: '17',
      name: 'Thái Hoàng Kim',
      university: 'Đại học FPT',
      phone: '0924799257',
      email: 'kimhtss177411@fpt.edu.vn'
    },
    {
      id: '18',
      name: 'Lê Dương Anh Tú',
      university: 'Đại Học Mở TP. Hồ Chí Minh',
      phone: '0979641581',
      email: 'tulad67187655@ou.edu.vn'
    },
    {
      id: '19',
      name: 'Phạm Phương Trinh',
      university: 'Đại học Khoa học xã hội và Nhân văn',
      phone: '0748083648',
      email: 'trinhpp674278@vnuhcm.edu.vn'
    },
    {
      id: '20',
      name: 'Nguyễn Khánh Ngọc',
      university: 'Đại học FPT',
      phone: '0815421195',
      email: 'ngocnkss171754@fpt.edu.vn'
    },
    {
      id: '21',
      name: 'Đoàn Lưu Ngọc Linh',
      university: 'Đại học FPT',
      phone: '0931443938',
      email: 'linhdlnsa161158@fpt.edu.vn'
    },
    {
      id: '22',
      name: 'Lê Vũ Ngọc An',
      university: 'Đại học Kinh tế Tài chính TP.HCM',
      phone: '0705701169',
      email: 'anlnv32193202@uef.edu.vn'
    },
    {
      id: '23',
      name: 'Võ Hoàng Long',
      university: 'Đại học Khoa học Tự nhiên - Đại học Quốc Quốc Gia TP.HCM',
      phone: '0702214248',
      email: 'longvhhe198850@hcmus.edu.vn'
    },
    {
      id: '24',
      name: 'Phan Thị Kiều Ngân',
      university: 'Đại học Sài Gòn',
      phone: '0751524375',
      email: 'nganptk199256@sgu.edu.vn'
    },
    {
      id: '25',
      name: 'Nguyễn An Bảo Khang',
      university: 'Đại học FPT',
      phone: '0984057369',
      email: 'khangnabse179563@fpt.edu.vn'
    },
    {
      id: '26',
      name: 'Hà Vĩnh Phúc',
      university: 'Đại học Sài Gòn',
      phone: '0933080759',
      email: 'phuchv15182632@sgu.edu.vn'
    },
    {
      id: '27',
      name: 'Lê Võ Ngọc Hân',
      university: 'Đại học FPT',
      phone: '0801252703',
      email: 'hanlnvse173687@fpt.edu.vn'
    },
    {
      id: '28',
      name: 'Lưu Thị Hà Trinh',
      university: 'Đại học Kiến Trúc TP.HCM',
      phone: '0761165078',
      email: 'trinhlth654327@uah.edu.vn'
    },
    {
      id: '29',
      name: 'Phan Bảo Ngọc',
      university: 'Đại học Sài Gòn',
      phone: '0881101806',
      email: 'phanbss195285@fpt.edu.vn'
    },
    {
      id: '30',
      name: 'Nguyễn Minh Khôi',
      university: 'Đại học Luật TP.HCM',
      phone: '0743944900',
      email: 'nguyenm363892@hcmulaw.edu.vn'
    },
    {
      id: '31',
      name: 'Đỗ Thành Đạt',
      university: 'Đại học Sài Gòn',
      phone: '0739091679',
      email: 'dotse195363@fpt.edu.vn'
    },
    {
      id: '32',
      name: 'Ngô Thị Kim Chi',
      university: 'Đại học Thể Dục Thể Thao TP.HCM',
      phone: '0881704294',
      email: 'chintkse183848@fpt.edu.vn'
    },
    {
      id: '33',
      name: 'Phan Gia Khánh',
      university: 'Trường ĐH Kinh tế – Luật',
      phone: '0907009012',
      email: 'khanhpgss179678@fpt.edu.vn'
    },
    {
      id: '34',
      name: 'Nguyễn Trung Nghĩa',
      university: 'Đại học FPT',
      phone: '0844568094',
      email: 'nghiantsa191397@fpt.edu.vn'
    },
    {
      id: '35',
      name: 'Nguyễn Thị Thu Hằng',
      university: 'Đại học FPT',
      phone: '0809519322',
      email: 'sa186075@fpt.edu.vn'
    },
    {
      id: '36',
      name: 'Phạm Hữu Nghĩa',
      university: 'Đại học Bách khoa – Đại học Quốc gia TP.HCM.',
      phone: '0846376775',
      email: 'nghianh46194642@vnuhcm.edu.vn'
    },
    {
      id: '37',
      name: 'Từ Khánh Vy',
      university: 'Trường ĐH Giao thông Vận tải Phân hiệu tại TP.HCM',
      phone: '0997930299',
      email: 'vytk57174370@utc2.edu.vn'
    },
    {
      id: '38',
      name: 'Đặng Thị Kim Chi',
      university: 'Trường ĐH Kinh tế – Luật',
      phone: '0825932993',
      email: 'dangtse186578@fpt.edu.vn'
    },
    {
      id: '39',
      name: 'Nguyễn Quang Anh',
      university: 'Đại học Thể Dục Thể Thao TP.HCM',
      phone: '0915510425',
      email: 'anhnq56178953@ush.edu.vn'
    },
    {
      id: '40',
      name: 'Vũ Hồng Sơn',
      university: 'Đại học FPT',
      phone: '0828374750',
      email: 'sonvhsa186554@fpt.edu.vn'
    },
    {
      id: '41',
      name: 'Tăng Hồng Bảo',
      university: 'Đại học FPT',
      phone: '0903634178',
      email: 'baothse182235@fpt.edu.vn'
    },
    {
      id: '42',
      name: 'Mai Phương Thảo',
      university: 'Đại học Tài chính - Marketing',
      phone: '0979498487',
      email: 'thaomp56171884@uef.edu.vn'
    },
    {
      id: '43',
      name: 'Triệu Thị Kiều Trang',
      university: 'Đại học Ngân hàng TP.HCM',
      phone: '0929562561',
      email: 'trangttk5664005@hub.edu.vn'
    },
    {
      id: '44',
      name: 'Lý Diễm Kiều',
      university: 'Đại học Sư phạm Kỹ thuật TP.HCM.',
      phone: '0788446334',
      email: 'kieuldse172203@hcmute.edu.vn'
    },
    {
      id: '45',
      name: 'Cao Kỳ Sơn',
      university: 'Đại học FPT',
      phone: '0819424175',
      email: 'caokss192001@fpt.edu.vn'
    },
    {
      id: '46',
      name: 'Phạm Phước Thiện',
      university: 'Đại học Tôn Đức Thắng',
      phone: '0825484648',
      email: 'phampt272893@tdtu.edu.vn.'
    },
    {
      id: '47',
      name: 'Quách Đạt Phước',
      university: 'Đại học Công Thương TP.HCM',
      phone: '0817923549',
      email: 'phuocqd234578@hufi.edu.vn'
    },
    {
      id: '48',
      name: 'Phan Lâm Viên',
      university: 'Đại học Bách khoa – Đại học Quốc gia TP.HCM.',
      phone: '0752640589',
      email: 'vienpl56181977@vnuhcm.edu.vn'
    },
    {
      id: '49',
      name: 'Dương Thanh Bình',
      university: 'Đại học Tài chính - Marketing',
      phone: '0763512086',
      email: 'duongtsa180126@fpt.edu.vn'
    },
    {
      id: '50',
      name: 'Nguyễn Lê Bảo Lâm',
      university: 'Đại học Thể Dục Thể Thao TP.HCM',
      phone: '0753991790',
      email: 'lamnlb57183264@ush.edu.vn'
    },
    {
      id: '51',
      name: 'Vũ Diễm Thư',
      university: 'Đại học Sư phạm Kỹ thuật TP.HCM.',
      phone: '0714106954',
      email: 'thuvd67190034@hcmute.edu.vn'
    },
    {
      id: '52',
      name: 'Phan Tiến Phúc Anh',
      university: 'Đại học FPT',
      phone: '0815231564',
      email: 'anhptpss172332@fpt.edu.vn'
    },
    {
      id: '53',
      name: 'Ngô Vĩnh Khoa',
      university: 'Đại học Bách khoa – Đại học Quốc gia TP.HCM.',
      phone: '0905027383',
      email: 'khoanv56162677@vnuhcm.edu.vn'
    },
    {
      id: '54',
      name: 'Quách Thị Diễm My',
      university: 'Trường ĐH Giao thông Vận tải Phân hiệu tại TP.HCM',
      phone: '0876998520',
      email: 'quachtdm677543@utc2.edu.vn'
    },
    {
      id: '55',
      name: 'Lê Dương Diệu Trinh',
      university: 'Đại học Công Thương TP.HCM',
      phone: '0747838687',
      email: 'trinhldd567896@hufi.edu.vn'
    },
    {
      id: '56',
      name: 'Thạch Ngọc Bích',
      university: 'Đại học Kinh tế Tài chính TP.HCM',
      phone: '0778727873',
      email: 'bichtnss161278@fpt.edu.vn'
    },
    {
      id: '57',
      name: 'Hoàng Hoàng Hoa',
      university: 'Đại học Y Dược',
      phone: '0993541813',
      email: 'hoahh505859@umb.edu.vn'
    },
    {
      id: '58',
      name: 'Đỗ Hữu Tú',
      university: 'Đại học Khoa học Xã hội và Nhân văn',
      phone: '0791581497',
      email: 'tudh546640@vnuhcm.edu.vn'
    },
    {
      id: '59',
      name: 'Lê Văn Chi',
      university: 'Đại học Văn Lang',
      phone: '0888664380',
      email: 'chilv650109@vlu.edu.vn'
    },
    {
      id: '60',
      name: 'Lê Thị Kiên',
      university: 'Đại học Mở',
      phone: '0912401170',
      email: 'kienlt706291@ou.edu.vn'
    },
    {
      id: '61',
      name: 'Hồ Hữu Anh',
      university: 'Đại học Y Dược',
      phone: '0741524613',
      email: 'anhhh765164@umb.edu.vn'
    },
    {
      id: '62',
      name: 'Hoàng Thị Sơn',
      university: 'Đại học Khoa học Tự nhiên - Đại học Quốc Quốc Gia TP.HCM',
      phone: '0808767759',
      email: 'sonht534663@hcmus.edu.vn'
    },
    {
      id: '63',
      name: 'Đặng Thanh Hoa',
      university: 'Đại học Thể Dục Thể Thao TP.HCM',
      phone: '0899788463',
      email: 'hoadt273830@ush.edu.vn'
    },
    {
      id: '64',
      name: 'Bùi Thanh Lan',
      university: 'Đại học Mở',
      phone: '0738562678',
      email: 'lanbt913499@ou.edu.vn'
    },
    {
      id: '65',
      name: 'Hoàng Hữu Việt',
      university: 'Đại học FPT',
      phone: '0851367291',
      email: 'viethhse179669@fpt.edu.vn'
    },
    {
      id: '66',
      name: 'Lê Hoàng Tú',
      university: 'Đại học Khoa học Xã hội và Nhân văn',
      phone: '0995966177',
      email: 'tulh757899@vnuhcm.edu.vn'
    },
    {
      id: '67',
      name: 'Hồ Khánh Anh',
      university: 'Đại học FPT',
      phone: '0732780158',
      email: 'anhhkse170015@fpt.edu.vn'
    },
    {
      id: '68',
      name: 'Hồ Phước Thảo',
      university: 'Đại học Văn Lang',
      phone: '0965352073',
      email: 'thaohp112659@vlu.edu.vn'
    },
    {
      id: '69',
      name: 'Trần Văn Chi',
      university: 'Đại học Văn Lang',
      phone: '0994766656',
      email: 'chitv829287@vlu.edu.vn'
    },
    {
      id: '70',
      name: 'Bùi Khánh Chi',
      university: 'Đại học Văn Lang',
      phone: '0707556812',
      email: 'chibk281649@vlu.edu.vn'
    },
    {
      id: '71',
      name: 'Lê Phước Trang',
      university: 'Đại học Mở',
      phone: '0857122203',
      email: 'tranglp420984@ou.edu.vn'
    },
    {
      id: '72',
      name: 'Đỗ Văn Tú',
      university: 'Đại học Công Nghiệp TP.HCM',
      phone: '0999436736',
      email: 'tudv316073@iuh.edu.vn'
    },
    {
      id: '73',
      name: 'Bùi Phước Tú',
      university: 'Đại học Công Nghiệp TP.HCM',
      phone: '0806477036',
      email: 'tubp825110@iuh.edu.vn'
    },
    {
      id: '74',
      name: 'Bùi Hữu Chi',
      university: 'Đại học Khoa học Tự nhiên - Đại học Quốc Quốc Gia TP.HCM',
      phone: '0883386516',
      email: 'chibh741037@hcmus.edu.vn'
    },
    {
      id: '75',
      name: 'Hoàng Thị Quý',
      university: 'Đại học FPT',
      phone: '0977637901',
      email: 'quyhtss172059@fpt.edu.vn'
    },
    {
      id: '76',
      name: 'Đặng Minh Linh',
      university: 'Đại học Khoa học Tự nhiên - Đại học Quốc Quốc Gia TP.HCM',
      phone: '0972126102',
      email: 'linhdm386696@hcmus.edu.vn'
    },
    {
      id: '77',
      name: 'Trần Phước Hưng',
      university: 'Đại học Mở',
      phone: '0871607187',
      email: 'hungtp549365@ou.edu.vn'
    },
    {
      id: '78',
      name: 'Bùi Hoàng Lan',
      university: 'Đại học Y Dược',
      phone: '0831234024',
      email: 'lanbh998690@umb.edu.vn'
    },
    {
      id: '79',
      name: 'Lê Thanh Kiên',
      university: 'Đại học Công Nghiệp TP.HCM',
      phone: '0752366688',
      email: 'kienlt523110@iuh.edu.vn'
    },
    {
      id: '80',
      name: 'Trần Văn Anh',
      university: 'Đại học Công Nghiệp TP.HCM',
      phone: '0747415434',
      email: 'anhtv871524@iuh.edu.vn'
    },
    {
      id: '81',
      name: 'Hoàng Hoàng Hưng',
      university: 'Đại học Khoa học Xã hội và Nhân văn',
      phone: '0746565271',
      email: 'hunghh594071@vnuhcm.edu.vn'
    },
    {
      id: '82',
      name: 'Đỗ Khánh Bảo',
      university: 'Đại học Khoa học Xã hội và Nhân văn',
      phone: '0986155191',
      email: 'baodk925723@vnuhcm.edu.vn'
    },
    {
      id: '83',
      name: 'Nguyễn Phước Chi',
      university: 'Đại học UEF',
      phone: '0915432526',
      email: 'chinp834803@uef.edu.vn'
    },
    {
      id: '84',
      name: 'Đỗ Minh Linh',
      university: 'Đại học Khoa học Xã hội và Nhân văn',
      phone: '0829712311',
      email: 'linhdm494508@vnuhcm.edu.vn'
    },
    {
      id: '85',
      name: 'Lê Hoàng Thịnh',
      university: 'Đại học Văn Lang',
      phone: '0878776442',
      email: 'thinhlh955236@vlu.edu.vn'
    },
    {
      id: '86',
      name: 'Trần Khánh Như',
      university: 'Đại học Kinh tế TP. Hồ Chí Minh',
      phone: '0863798401',
      email: 'nhutk713963@ueh.edu.vn'
    },
    {
      id: '87',
      name: 'Võ Thanh Hưng',
      university: 'Đại học Y Dược',
      phone: '0786008175',
      email: 'hungvt327046@umb.edu.vn'
    },
    {
      id: '88',
      name: 'Trần Thanh Bảo',
      university: 'Đại học UEF',
      phone: '0941352386',
      email: 'baott194541@uef.edu.vn'
    },
    {
      id: '89',
      name: 'Hoàng Phước Bảo',
      university: 'Đại học Y Dược',
      phone: '0776560111',
      email: 'baohp620000@umb.edu.vn'
    },
    {
      id: '90',
      name: 'Đỗ Thanh Kiên',
      university: 'Đại học Sài Gòn',
      phone: '0737270741',
      email: 'kiendt416614@sgu.edu.vn'
    },
    {
      id: '91',
      name: 'Lê Văn Quý',
      university: 'Đại học Văn Lang',
      phone: '0845744112',
      email: 'quylv242505@vlu.edu.vn'
    },
    {
      id: '92',
      name: 'Trần Thị Thịnh',
      university: 'Đại học Nông Lâm TP.HCM',
      phone: '0911426381',
      email: 'thinhtt384768@huaf.edu.vn'
    },
    {
      id: '93',
      name: 'Phạm Thị Kiên',
      university: 'Đại học UEF',
      phone: '0894719801',
      email: 'kienpt181587@uef.edu.vn'
    },
    {
      id: '94',
      name: 'Nguyễn Minh Kiên',
      university: 'Đại học Văn Lang',
      phone: '0784736953',
      email: 'kiennm319377@vlu.edu.vn'
    },
    {
      id: '95',
      name: 'Đặng Minh Bảo',
      university: 'Đại học Khoa học Tự nhiên - Đại học Quốc Quốc Gia TP.HCM',
      phone: '0984148369',
      email: 'baodm630561@hcmus.edu.vn'
    },
    {
      id: '96',
      name: 'Nguyễn Văn Duy',
      university: 'Đại học Văn Lang',
      phone: '0744349544',
      email: 'duynv426092@vlu.edu.vn'
    },
    {
      id: '97',
      name: 'Lê Hoàng Kiên',
      university: 'Đại học UEF',
      phone: '0937896651',
      email: 'kienlh531292@uef.edu.vn'
    },
    {
      id: '98',
      name: 'Lê Thị Quân',
      university: 'Đại học FPT',
      phone: '0755177997',
      email: 'quanltse183958@fpt.edu.vn'
    },
    {
      id: '99',
      name: 'Hoàng Thanh Lan',
      university: 'Đại học Mở',
      phone: '0735817951',
      email: 'lanht928877@ou.edu.vn'
    },
    {
      id: '100',
      name: 'Lê Thanh Quân',
      university: 'Đại học Sài Gòn',
      phone: '0746293276',
      email: 'quanlt470876@sgu.edu.vn'
    },
    {
      id: '101',
      name: 'Đỗ Hữu Anh',
      university: 'Đại học Văn Lang',
      phone: '0829070060',
      email: 'anhdh614431@vlu.edu.vn'
    },
    {
      id: '102',
      name: 'Phạm Minh Bảo',
      university: 'Đại học Khoa học Xã hội và Nhân văn',
      phone: '0923987736',
      email: 'baopm798552@vnuhcm.edu.vn'
    },
    {
      id: '103',
      name: 'Võ Minh Hưng',
      university: 'Đại học UEF',
      phone: '0763609009',
      email: 'hungvm375309@uef.edu.vn'
    },
    {
      id: '104',
      name: 'Phạm Khánh Hoa',
      university: 'Đại học Kinh tế TP. Hồ Chí Minh',
      phone: '0853848593',
      email: 'hoakp204653@ueh.edu.vn'
    },
    {
      id: '105',
      name: 'Đỗ Hoàng Như',
      university: 'Đại học Y Dược',
      phone: '0941514214',
      email: 'nhudh812989@umb.edu.vn'
    },
    {
      id: '106',
      name: 'Lê Khánh Việt',
      university: 'Đại học Khoa học Tự nhiên - Đại học Quốc Quốc Gia TP.HCM',
      phone: '0908527949',
      email: 'vietlk212216@hcmus.edu.vn'
    },
    {
      id: '107',
      name: 'Bùi Hoàng Hưng',
      university: 'Đại học FPT',
      phone: '0776703522',
      email: 'hungbhse163978@fpt.edu.vn'
    },
    {
      id: '108',
      name: 'Đỗ Thanh Linh',
      university: 'Đại học Khoa học Xã hội và Nhân văn',
      phone: '0915393731',
      email: 'linhdt554992@vnuhcm.edu.vn'
    },
    {
      id: '109',
      name: 'Nguyễn Hoàng Trang',
      university: 'Đại học Y Dược',
      phone: '0803103378',
      email: 'trangnh603381@umb.edu.vn'
    },
    {
      id: '110',
      name: 'Phạm Phước Dung',
      university: 'Đại học Nông Lâm TP.HCM',
      phone: '0831997455',
      email: 'dungpp574854@huaf.edu.vn'
    },
    {
      id: '111',
      name: 'Đỗ Văn Anh',
      university: 'Đại học Thể Dục Thể Thao TP.HCM',
      phone: '0968349268',
      email: 'anhdv173100@ush.edu.vn'
    },
    {
      id: '112',
      name: 'Đặng Khánh Quân',
      university: 'Đại học Y Dược',
      phone: '0914215895',
      email: 'quandk913215@umb.edu.vn'
    },
    {
      id: '113',
      name: 'Lê Minh Quân',
      university: 'Đại học UEF',
      phone: '0994172999',
      email: 'quanlm371357@uef.edu.vn'
    },
    {
      id: '114',
      name: 'Đặng Thanh Quý',
      university: 'Đại học Văn Lang',
      phone: '0856279896',
      email: 'quydt613263@vlu.edu.vn'
    },
    {
      id: '115',
      name: 'Trần Khánh Dung',
      university: 'Đại học Kinh tế TP. Hồ Chí Minh',
      phone: '0897378777',
      email: 'dungtk790571@ueh.edu.vn'
    },
    {
      id: '116',
      name: 'Hồ Thanh Quý',
      university: 'Đại học Sài Gòn',
      phone: '0909878952',
      email: 'quyht371646@sgu.edu.vn'
    },
    {
      id: '117',
      name: 'Võ Khánh Anh',
      university: 'Đại học Nông Lâm TP.HCM',
      phone: '0705650951',
      email: 'anhvk207827@huaf.edu.vn'
    },
    {
      id: '118',
      name: 'Bùi Minh Tú',
      university: 'Đại học Y Dược',
      phone: '0953041966',
      email: 'tubm385149@umb.edu.vn'
    },
    {
      id: '119',
      name: 'Hoàng Phước Linh',
      university: 'Đại học Văn Lang',
      phone: '0912220389',
      email: 'linhhp499888@vlu.edu.vn'
    },
    {
      id: '120',
      name: 'Trần Minh Kiên',
      university: 'Đại học Nông Lâm TP.HCM',
      phone: '0893360015',
      email: 'kientm591652@huaf.edu.vn'
    },
    {
      id: '121',
      name: 'Nguyễn Hữu Linh',
      university: 'Đại học FPT',
      phone: '0856700624',
      email: 'linhnhse182790@fpt.edu.vn'
    },
    {
      id: '122',
      name: 'Đặng Văn Sơn',
      university: 'Đại học Khoa học Xã hội và Nhân văn',
      phone: '0921134242',
      email: 'sondv685871@vnuhcm.edu.vn'
    },
    {
      id: '123',
      name: 'Bùi Hoàng Quân',
      university: 'Đại học Khoa học Xã hội và Nhân văn',
      phone: '0872009304',
      email: 'quanbh270331@vnuhcm.edu.vn'
    },
    {
      id: '124',
      name: 'Nguyễn Hoàng Hưng',
      university: 'Đại học Khoa học Tự nhiên - Đại học Quốc Quốc Gia TP.HCM',
      phone: '0948271655',
      email: 'hungnh764020@hcmus.edu.vn'
    },
    {
      id: '125',
      name: 'Nguyễn Phước Quân',
      university: 'Đại học FPT',
      phone: '0789123964',
      email: 'quannpsa170587@fpt.edu.vn'
    },
    {
      id: '126',
      name: 'Phạm Thị Hoa',
      university: 'Đại học Thể Dục Thể Thao TP.HCM',
      phone: '0759813607',
      email: 'hoapt413477@ush.edu.vn'
    },
    {
      id: '127',
      name: 'Bùi Thanh Dung',
      university: 'Đại học Mở',
      phone: '0765470006',
      email: 'dungtb938765@ou.edu.vn'
    },
    {
      id: '128',
      name: 'Nguyễn Hoàng Quân',
      university: 'Đại học Kinh tế TP. Hồ Chí Minh',
      phone: '0953410598',
      email: 'quanhn250651@ueh.edu.vn'
    },
    {
      id: '129',
      name: 'Hồ Thị Quân',
      university: 'Đại học Khoa học Xã hội và Nhân văn',
      phone: '0927533096',
      email: 'quanht66054@vnuhcm.edu.vn'
    },
    {
      id: '130',
      name: 'Bùi Phước Hưng',
      university: 'Đại học Y Dược',
      phone: '0955284918',
      email: 'hungbp921659@umb.edu.vn'
    },
    {
      id: '131',
      name: 'Võ Văn Thảo',
      university: 'Đại học Văn Lang',
      phone: '0863060194',
      email: 'thaovv210539@vlu.edu.vn'
    },
    {
      id: '132',
      name: 'Phạm Khánh Sơn',
      university: 'Đại học UEF',
      phone: '0937731687',
      email: 'sonpk720207@uef.edu.vn'
    },
    {
      id: '133',
      name: 'Hoàng Văn Như',
      university: 'Đại học Thể Dục Thể Thao TP.HCM',
      phone: '0874551842',
      email: 'nhuhv530988@ush.edu.vn'
    },
    {
      id: '134',
      name: 'Đỗ Phước Như',
      university: 'Đại học Thể Dục Thể Thao TP.HCM',
      phone: '0875263275',
      email: 'nhudp832515@ush.edu.vn'
    },
    {
      id: '135',
      name: 'Phạm Hoàng Thủy Tiên',
      university: 'Đại học FPT',
      phone: '0964827494',
      email: 'tienphtss160534@fpt.edu.vn'
    },
    {
      id: '136',
      name: 'Võ Nguyễn Hoàng Long',
      university: 'Đại học FPT',
      phone: '0726482956',
      email: 'longvnhse160432@fpt.edu.vn'
    },
    {
      id: '137',
      name: 'Mai Nguyễn Hoàng An',
      university: 'Đại học Y Dược TP.HCM',
      phone: '0721364965',
      email: 'anmnh412532@ump.edu.vn'
    },
    {
      id: '138',
      name: 'Trương Hoàng Anh Vũ',
      university: 'Đại học FPT',
      phone: '0837261547',
      email: 'vuthase172485@fpt.edu.vn'
    },
    {
      id: '139',
      name: 'Lê Gia Hân',
      university: 'Đại học FPT',
      phone: '0849264726',
      email: 'hanlgss154238@fpt.edu.vn'
    },
    {
      id: '140',
      name: 'Trần Quốc Tú',
      university: 'Đại học Văn Lang cơ sở 3',
      phone: '0837261549',
      email: 'tutq678231@vlu.edu.vn'
    },
    {
      id: '141',
      name: 'Nguyễn Tấn Nhật Quang',
      university: 'Đại học FPT',
      phone: '0837261550',
      email: 'quangntnse160932@fpt.edu.vn'
    },
    {
      id: '142',
      name: 'Trần Huyền Trang',
      university: 'Đại học Nông Lâm TP.HCM',
      phone: '0832861551',
      email: 'trangth487213@huaf.edu.vn'
    },
    {
      id: '143',
      name: 'Lữ Minh Ngọc',
      university: 'Đại học FPT',
      phone: '0489322847',
      email: 'ngoclmss161562@fpt.edu.vn'
    },
    {
      id: '144',
      name: 'Hồ Tiến Quốc',
      university: 'Đại học Công Nghiệp TP.HCM',
      phone: '0746689993',
      email: 'quocht781232@iuh.edu.vn'
    },
    {
      id: '145',
      name: 'Lê Quốc Huy',
      university: 'Đại học Kinh tế Tài chính TP.HCM',
      phone: '0831533899',
      email: 'huylq217823@uef.edu.vn'
    },
    {
      id: '146',
      name: 'Phạm Thiện Toàn',
      university: 'Đại học FPT',
      phone: '0749222834',
      email: 'toanptse170423@fpt.edu.vn'
    },
    {
      id: '147',
      name: 'Phạm Lê Quốc Tuấn',
      university: 'Đại học Công Nghiệp TP.HCM',
      phone: '0937446821',
      email: 'tuanplq354213@iuh.edu.vn'
    },
    {
      id: '148',
      name: 'Đỗ Ngọc Ánh',
      university: 'Đại học Nông Lâm TP.HCM',
      phone: '0805370065',
      email: 'anhdn432512@iuh.edu.vn'
    },
    {
      id: '149',
      name: 'Trịnh Thị Bích Huyền',
      university: 'Đại học FPT',
      phone: '0974482181',
      email: 'huyenttbss156132@fpt.edu.vn'
    },
    {
      id: '150',
      name: 'Tăng Thành Định',
      university: 'Đại học FPT',
      phone: '0998336723',
      email: 'dinhttse167541@fpt.edu.vn'
    },
    {
      id: '151',
      name: 'Nguyễn Thị Diễm',
      university: 'Đại Học Mở TP. Hồ Chí Minh',
      phone: '0472947294',
      email: 'diemnt143273@ou.edu.vn'
    },
    {
      id: '152',
      name: 'Trần Minh Hoài',
      university: 'Đại học Khoa học xã hội và Nhân văn',
      phone: '0831234567',
      email: 'hoaitm521645@vnuhcm.edu.vn'
    },
    {
      id: '153',
      name: 'Phạm Mai Anh',
      university: 'Đại Học Mở TP. Hồ Chí Minh',
      phone: '0842345678',
      email: 'anhpm425134@ou.edu.vn'
    },
    {
      id: '154',
      name: 'Lương Thế Thành',
      university: 'Đại học Khoa học Tự nhiên - Đại học Quốc Quốc Gia TP.HCM',
      phone: '0853456789',
      email: 'thanhlt647124@hcmus.edu.vn'
    },
    {
      id: '155',
      name: 'Lê Tấn Tài',
      university: 'Đại học Kinh tế Tài chính TP.HCM',
      phone: '0814567890',
      email: 'tailt293812@uef.edu.vn'
    },
    {
      id: '156',
      name: 'Lý Lệ Anh',
      university: 'Đại học Khoa học Tự nhiên - Đại học Quốc Quốc Gia TP.HCM',
      phone: '0865678901',
      email: 'anhlt267312@hcmus.edu.vn'
    },
    {
      id: '157',
      name: 'Mai Hoàng Đạt',
      university: 'Đại học Sài Gòn',
      phone: '0966789012',
      email: 'datmh762341@sgu.edu.vn'
    },
    {
      id: '158',
      name: 'Nguyễn Gia Huy',
      university: 'Đại học FPT',
      phone: '0977890123',
      email: 'huyngse174325@fpt.edu.vn'
    },
    {
      id: '159',
      name: 'Nguyễn Tấn Phi',
      university: 'Đại học Thể Dục Thể Thao TP.HCM',
      phone: '0988901234',
      email: 'phitn156242@ush.edu.vn'
    },
    {
      id: '160',
      name: 'Mai Xuân Thịnh',
      university: 'Đại học Sài Gòn',
      phone: '0860915401',
      email: 'thinhmx847213@sgu.edu.vn'
    },
    {
      id: '161',
      name: 'Đặng Tuấn Anh',
      university: 'Đại học Kiến Trúc TP.HCM',
      phone: '0969702511',
      email: 'anhdt726312@uah.edu.vn'
    },
    {
      id: '162',
      name: 'Lý Anh Kiệt',
      university: 'Đại học Kinh tế Tài chính TP.HCM',
      phone: '0904010328',
      email: 'kietla638922@uef.edu.vn'
    },
    {
      id: '163',
      name: 'Đặng Phi Khang',
      university: 'Đại Học Mở TP. Hồ Chí Minh',
      phone: '0932223895',
      email: 'khangdp657123@ou.edu.vn'
    },
    {
      id: '164',
      name: 'Hoàng Ngọc Anh',
      university: 'Đại học Sài Gòn',
      phone: '0862486078',
      email: 'anhhn762312@sgu.edu.vn'
    },
    {
      id: '165',
      name: 'Phan Gia Khang',
      university: 'Đại học Luật TP.HCM',
      phone: '0859468461',
      email: 'khangpg562134@hcmulaw.edu.vn'
    },
    {
      id: '166',
      name: 'Lưu Trọng Vũ',
      university: 'Đại học FPT',
      phone: '0849390294',
      email: 'vultsa176534@fpt.edu.vn'
    },
    {
      id: '167',
      name: 'Nguyễn Thị Thu Phương',
      university: 'Đại học Thể Dục Thể Thao TP.HCM',
      phone: '0989140711',
      email: 'phuongntt622726@ush.edu.vn'
    },
    {
      id: '168',
      name: 'Nguyễn Bình Hạnh Nguyên',
      university: 'Trường ĐH Kinh tế – Luật',
      phone: '0962954192',
      email: 'nguyennbh272653@uel.edu.vn'
    },
    {
      id: '169',
      name: 'Vũ Ngọc Huyền',
      university: 'Đại học FPT',
      phone: '0890449783',
      email: 'huyenvnse176489@fpt.edu.vn'
    },
    {
      id: '170',
      name: 'Đặng Thị Lan Anh',
      university: 'Trường ĐH Kinh tế – Luật',
      phone: '0894943610',
      email: 'anhdtl262739@uel.edu.vn'
    },
    {
      id: '171',
      name: 'Tạ Minh Khang',
      university: 'Trường ĐH Giao thông Vận tải Phân hiệu tại TP.HCM',
      phone: '0904212120',
      email: 'khangtm152628@utc2.edu.vn'
    },
    {
      id: '172',
      name: 'Phan Anh Thư',
      university: 'Trường ĐH Kinh tế – Luật',
      phone: '0892599664',
      email: 'thupa@uel.edu.vn'
    },
    {
      id: '173',
      name: 'Vũ Hoàng Nam',
      university: 'Đại học Thể Dục Thể Thao TP.HCM',
      phone: '0988476994',
      email: 'namvh537890@ush.edu.vn'
    },
    {
      id: '174',
      name: 'Tạ Bảo Ngọc',
      university: 'Đại học FPT',
      phone: '0836816418',
      email: 'ngoctbse176781@fpt.edu.vn'
    },
    {
      id: '175',
      name: 'Hồ Nguyễn Minh Triết',
      university: 'Đại học FPT',
      phone: '0832069071',
      email: 'triethnmss17523@fpt.edu.vn'
    },
    {
      id: '176',
      name: 'Lê Quốc Duy',
      university: 'Đại học Tài chính - Marketing',
      phone: '0975180835',
      email: 'duylq246388@ufm.edu.vn'
    },
    {
      id: '177',
      name: 'Trương Quốc Hưng',
      university: 'Đại học Ngân hàng TP.HCM',
      phone: '0987773156',
      email: 'hungtq262800@hub.edu.vn'
    },
    {
      id: '178',
      name: 'Võ Thanh Tùng',
      university: 'Đại học Sư phạm Kỹ thuật TP.HCM.',
      phone: '0907729548',
      email: 'tungvt262836@hcmute.edu.vn'
    },
    {
      id: '179',
      name: 'Bạch Ngọc Lan',
      university: 'Đại học FPT',
      phone: '0810983566',
      email: 'lanbnse177388@fpt.edu.vn'
    },
    {
      id: '180',
      name: 'Lưu Trọng Nhân',
      university: 'Đại học Tôn Đức Thắng',
      phone: '0831429047',
      email: 'nhanlt625388@tdtu.edu.vn'
    },
    {
      id: '181',
      name: 'Đặng Tài Đức',
      university: 'Đại học Công Thương TP.HCM',
      phone: '0813568821',
      email: 'ducdt625387@hufi.edu.vn'
    },
    {
      id: '182',
      name: 'Tạ Hải Yến',
      university: 'Đại học Bách khoa – Đại học Quốc gia TP.HCM.',
      phone: '0930965088',
      email: 'yenth262537@vnuhcm.edu.vn'
    },
    {
      id: '183',
      name: 'Hoàng Khánh Vân',
      university: 'Đại học Tài chính - Marketing',
      phone: '0902162602',
      email: 'vanhk235789@ufm.edu.vn'
    },
    {
      id: '184',
      name: 'Trần Bảo Khang',
      university: 'Đại học Thể Dục Thể Thao TP.HCM',
      phone: '0980597938',
      email: 'khangtb627827@ush.edu.vn'
    },
    {
      id: '185',
      name: 'Trần Hoàng Nam',
      university: 'Đại học Sư phạm Kỹ thuật TP.HCM.',
      phone: '0858392939',
      email: 'namth262639@hcmute.edu.vn'
    },
    {
      id: '186',
      name: 'Trần Thu Hà',
      university: 'Đại học FPT',
      phone: '0813335025',
      email: 'hattsa186548@fpt.edu.vn'
    },
    {
      id: '187',
      name: 'Mạc Quang Huy',
      university: 'Đại học Bách khoa – Đại học Quốc gia TP.HCM.',
      phone: '0819732511',
      email: 'huymq273546@vnuhcm.edu.vn'
    },
    {
      id: '188',
      name: 'Huỳnh Thị Kim Ngọc',
      university: 'Đại học Kinh tế Tài chính TP.HCM',
      phone: '0909984929',
      email: 'ngochtk236589@uef.edu.vn'
    },
    {
      id: '189',
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
            title={`User (189)`}
            description="Manage users (Server side table functionalities.)"
          />

          <Link
            href={'/dashboard/user/new'}
            className={cn(buttonVariants({ variant: 'default' }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>
        <Separator />
        <UserTable data={employee} totalData={totalUsers} />
      </div>
    </PageContainer>
  );
}
