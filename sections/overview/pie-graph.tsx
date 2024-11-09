'use client';

import * as React from 'react';
import { TrendingUp } from 'lucide-react';
import { Label, Pie, PieChart } from 'recharts';

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
const chartData = [
  { university: 'FPT', students: 5000, fill: 'hsl(var(--chart-1))' },
  { university: 'KHTN', students: 3000, fill: 'hsl(var(--chart-2))' },
  { university: 'ĐHQG', students: 4000, fill: 'hsl(var(--chart-3))' },
  { university: 'ĐH Bách Khoa', students: 2500, fill: 'hsl(var(--chart-4))' },
  { university: 'ĐH Kinh Tế', students: 2000, fill: 'hsl(var(--chart-5))' },
  { university: 'Khác', students: 1500, fill: 'hsl(var(--chart-6))' }
];
const chartConfig = {
  students: {
    label: 'Sinh viên'
  },
  FPT: {
    label: 'FPT',
    color: 'hsl(var(--chart-1))'
  },
  KHTN: {
    label: 'ĐH Khoa học Tự nhiên',
    color: 'hsl(var(--chart-2))'
  },
  ĐHQG: {
    label: 'ĐH Quốc gia',
    color: 'hsl(var(--chart-3))'
  },
  'ĐH Bách Khoa': {
    label: 'ĐH Bách Khoa',
    color: 'hsl(var(--chart-4))'
  },
  'ĐH Kinh Tế': {
    label: 'ĐH Kinh Tế',
    color: 'hsl(var(--chart-5))'
  },
  Khác: {
    label: 'Khác',
    color: 'hsl(var(--chart-6))'
  }
} satisfies ChartConfig;

export function PieGraph() {
  const totalStudents = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.students, 0);
  }, []);
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Phân bổ sinh viên</CardTitle>
        <CardDescription>Tháng 10 - Tháng 11 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[360px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="students"
              nameKey="university"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalStudents.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Sinh viên
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Tăng 5.2% so với tháng trước <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Hiển thị dữ liệu 6 tháng gần nhất
        </div>
      </CardFooter>
    </Card>
  );
}
