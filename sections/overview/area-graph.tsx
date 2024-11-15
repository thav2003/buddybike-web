'use client';

import { TrendingUp } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';
import { Transaction } from '../subcription/subcription-table/columns';
import { useState, useEffect } from 'react';

const subscriptions: Transaction[] = [
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
const chartConfig = {
  member: {
    label: 'Member User',
    color: 'hsl(var(--chart-1))'
  },
  gold: {
    label: 'Gold User',
    color: 'hsl(var(--chart-2))'
  },
  diamond: {
    label: 'Diamond User',
    color: 'hsl(var(--chart-3))'
  }
} satisfies ChartConfig;
// Hàm chuyển đổi subscriptions thành chartData và chartConfig
function processSubscriptions(subscriptions: Transaction[]) {
  // Group by month and subscription type, then sum revenue
  const dataByMonth = subscriptions.reduce((acc, sub) => {
    const month = sub.date.split('/')[1]; // Extract month
    const subscriptionType = sub.subscription.toLowerCase();

    // Initialize data for the month if not yet
    if (!acc[month]) {
      acc[month] = {
        month: `${month}/2024`, // Month format (e.g., 10/2024)
        member: 0,
        gold: 0,
        diamond: 0
      };
    }
    console.log(subscriptionType);
    // Accumulate revenue based on subscription type
    if (subscriptionType === 'gold') {
      acc[month].gold += 1;
    } else if (subscriptionType === 'diamond') {
      acc[month].diamond += 1;
    } else {
      acc[month].member += 1; // Default to member if no match
    }

    return acc;
  }, {});

  // Convert grouped data into an array for chart rendering
  const chartData = Object.values(dataByMonth);

  return chartData;
}

export function AreaGraph() {
  const [chartData, setChartData] = useState([]);
  useEffect(() => {
    const processedData = processSubscriptions(subscriptions);
    setChartData(processedData);
  }, []);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue by Service Type</CardTitle>
        <CardDescription>Showing the last 3 months</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[310px] w-full"
        >
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="member"
              type="natural"
              fill="var(--color-member)"
              fillOpacity={0.4}
              stroke="var(--color-member)"
              stackId="a"
            />
            <Area
              dataKey="gold"
              type="natural"
              fill="var(--color-gold)"
              fillOpacity={0.4}
              stroke="var(--color-gold)"
              stackId="a"
            />
            <Area
              dataKey="diamond"
              type="natural"
              fill="var(--color-diamond)"
              fillOpacity={0.4}
              stroke="var(--color-diamond)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              September - November 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
