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
const chartData = [
  { month: 'January', member: 100, gold: 150, diamond: 200 },
  { month: 'February', member: 120, gold: 180, diamond: 250 },
  { month: 'March', member: 110, gold: 160, diamond: 220 },
  { month: 'April', member: 130, gold: 190, diamond: 270 },
  { month: 'May', member: 140, gold: 200, diamond: 300 },
  { month: 'June', member: 150, gold: 220, diamond: 330 }
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

export function AreaGraph() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue by Service Type</CardTitle>
        <CardDescription>Showing the last 6 months</CardDescription>
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
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
