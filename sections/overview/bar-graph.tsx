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
  { date: '2024-10-24', user: 12, driver: 2 },
  { date: '2024-10-25', user: 6, driver: 3 },
  { date: '2024-10-26', user: 14, driver: 5 },
  { date: '2024-10-27', user: 15, driver: 2 },
  { date: '2024-10-28', user: 12, driver: 5 },
  { date: '2024-10-29', user: 13, driver: 2 },
  { date: '2024-10-30', user: 10, driver: 4 },
  { date: '2024-10-31', user: 8, driver: 3 },
  { date: '2024-11-01', user: 10, driver: 4 },
  { date: '2024-11-02', user: 11, driver: 2 },
  { date: '2024-11-03', user: 14, driver: 4 },
  { date: '2024-11-04', user: 12, driver: 3 },
  { date: '2024-11-05', user: 13, driver: 5 },
  { date: '2024-11-06', user: 10, driver: 2 },
  { date: '2024-11-07', user: 14, driver: 4 },
  { date: '2024-11-08', user: 15, driver: 5 }
];

const chartConfig = {
  views: {
    label: 'Người dùng'
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
