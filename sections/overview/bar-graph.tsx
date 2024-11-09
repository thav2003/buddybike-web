'use client';

import * as React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';

export const description = 'An interactive bar chart';

const chartData = [
  { date: '2024-04-01', user: 222, driver: 150 },
  { date: '2024-04-02', user: 97, driver: 180 },
  { date: '2024-04-03', user: 167, driver: 120 },
  { date: '2024-04-04', user: 242, driver: 260 },
  { date: '2024-04-05', user: 373, driver: 290 },
  { date: '2024-04-06', user: 301, driver: 340 },
  { date: '2024-04-07', user: 245, driver: 180 },
  { date: '2024-04-08', user: 409, driver: 320 },
  { date: '2024-04-09', user: 59, driver: 110 },
  { date: '2024-04-10', user: 261, driver: 190 },
  { date: '2024-04-11', user: 327, driver: 350 },
  { date: '2024-04-12', user: 292, driver: 210 },
  { date: '2024-04-13', user: 342, driver: 380 },
  { date: '2024-04-14', user: 137, driver: 220 },
  { date: '2024-04-15', user: 120, driver: 170 },
  { date: '2024-04-16', user: 138, driver: 190 },
  { date: '2024-04-17', user: 446, driver: 360 },
  { date: '2024-04-18', user: 364, driver: 410 },
  { date: '2024-04-19', user: 243, driver: 180 },
  { date: '2024-04-20', user: 89, driver: 150 },
  { date: '2024-04-21', user: 137, driver: 200 },
  { date: '2024-04-22', user: 224, driver: 170 },
  { date: '2024-04-23', user: 138, driver: 230 },
  { date: '2024-04-24', user: 387, driver: 290 },
  { date: '2024-04-25', user: 215, driver: 250 },
  { date: '2024-04-26', user: 75, driver: 130 },
  { date: '2024-04-27', user: 383, driver: 420 },
  { date: '2024-04-28', user: 122, driver: 180 },
  { date: '2024-04-29', user: 315, driver: 240 },
  { date: '2024-04-30', user: 454, driver: 380 },
  { date: '2024-05-01', user: 165, driver: 220 },
  { date: '2024-05-02', user: 293, driver: 310 },
  { date: '2024-05-03', user: 247, driver: 190 },
  { date: '2024-05-04', user: 385, driver: 420 },
  { date: '2024-05-05', user: 481, driver: 390 },
  { date: '2024-05-06', user: 498, driver: 520 },
  { date: '2024-05-07', user: 388, driver: 300 },
  { date: '2024-05-08', user: 149, driver: 210 },
  { date: '2024-05-09', user: 227, driver: 180 },
  { date: '2024-05-10', user: 293, driver: 330 },
  { date: '2024-05-11', user: 335, driver: 270 },
  { date: '2024-05-12', user: 197, driver: 240 },
  { date: '2024-05-13', user: 197, driver: 160 },
  { date: '2024-05-14', user: 448, driver: 490 },
  { date: '2024-05-15', user: 473, driver: 380 },
  { date: '2024-05-16', user: 338, driver: 400 },
  { date: '2024-05-17', user: 499, driver: 420 },
  { date: '2024-05-18', user: 315, driver: 350 },
  { date: '2024-05-19', user: 235, driver: 180 },
  { date: '2024-05-20', user: 177, driver: 230 },
  { date: '2024-05-21', user: 82, driver: 140 },
  { date: '2024-05-22', user: 81, driver: 120 },
  { date: '2024-05-23', user: 252, driver: 290 },
  { date: '2024-05-24', user: 294, driver: 220 },
  { date: '2024-05-25', user: 201, driver: 250 },
  { date: '2024-05-26', user: 213, driver: 170 },
  { date: '2024-05-27', user: 420, driver: 460 },
  { date: '2024-05-28', user: 233, driver: 190 },
  { date: '2024-05-29', user: 78, driver: 130 },
  { date: '2024-05-30', user: 340, driver: 280 },
  { date: '2024-05-31', user: 178, driver: 230 },
  { date: '2024-06-01', user: 178, driver: 200 },
  { date: '2024-06-02', user: 470, driver: 410 },
  { date: '2024-06-03', user: 103, driver: 160 },
  { date: '2024-06-04', user: 439, driver: 380 },
  { date: '2024-06-05', user: 88, driver: 140 },
  { date: '2024-06-06', user: 294, driver: 250 },
  { date: '2024-06-07', user: 323, driver: 370 },
  { date: '2024-06-08', user: 385, driver: 320 },
  { date: '2024-06-09', user: 438, driver: 480 },
  { date: '2024-06-10', user: 155, driver: 200 },
  { date: '2024-06-11', user: 92, driver: 150 },
  { date: '2024-06-12', user: 492, driver: 420 },
  { date: '2024-06-13', user: 81, driver: 130 },
  { date: '2024-06-14', user: 426, driver: 380 },
  { date: '2024-06-15', user: 307, driver: 350 },
  { date: '2024-06-16', user: 371, driver: 310 },
  { date: '2024-06-17', user: 475, driver: 520 },
  { date: '2024-06-18', user: 107, driver: 170 },
  { date: '2024-06-19', user: 341, driver: 290 },
  { date: '2024-06-20', user: 408, driver: 450 },
  { date: '2024-06-21', user: 169, driver: 210 },
  { date: '2024-06-22', user: 317, driver: 270 },
  { date: '2024-06-23', user: 480, driver: 530 },
  { date: '2024-06-24', user: 132, driver: 180 },
  { date: '2024-06-25', user: 141, driver: 190 },
  { date: '2024-06-26', user: 434, driver: 380 },
  { date: '2024-06-27', user: 448, driver: 490 },
  { date: '2024-06-28', user: 149, driver: 200 },
  { date: '2024-06-29', user: 103, driver: 160 },
  { date: '2024-06-30', user: 446, driver: 400 }
];
const chartConfig = {
  views: {
    label: 'Page Views'
  },
  user: {
    label: 'User',
    color: 'hsl(var(--chart-1))'
  },
  driver: {
    label: 'Driver',
    color: 'hsl(var(--chart-2))'
  }
} satisfies ChartConfig;

export function BarGraph() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>('user');

  const total = React.useMemo(
    () => ({
      user: chartData.reduce((acc, curr) => acc + curr.user, 0),
      driver: chartData.reduce((acc, curr) => acc + curr.driver, 0)
    }),
    []
  );

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Bar Chart - Interactive</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </div>
        <div className="flex">
          {['user', 'driver'].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6"
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[280px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric'
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px]"
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
