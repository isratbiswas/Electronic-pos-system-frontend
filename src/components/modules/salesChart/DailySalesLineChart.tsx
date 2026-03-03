"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IDailySales } from "@/types/product";

interface Props {
  data: IDailySales[];
}

// ✅ Updated with Indigo and Purple colors
const chartConfig = {
  totalSales: {
    label: "Revenue",
    color: "#6366f1", // Indigo-500
  },
  orders: {
    label: "Orders",
    color: "#a855f7", // Purple-500
  },
} satisfies ChartConfig;

const DailySalesAreaChart = ({ data }: Props) => {
  const [timeRange, setTimeRange] = React.useState("30d");

  const sortedData = React.useMemo(() => {
    return [...data].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  }, [data]);

  const filteredData = React.useMemo(() => {
    if (!sortedData.length) return [];
    const referenceDate = new Date(sortedData[sortedData.length - 1].date);

    let days = 30;
    if (timeRange === "90d") days = 90;
    if (timeRange === "7d") days = 7;

    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - days);

    return sortedData.filter((item) => new Date(item.date) >= startDate);
  }, [sortedData, timeRange]);

  return (
    <Card className="w-full shadow-xl border-muted/50 bg-card/50 backdrop-blur">
      <CardHeader className="flex items-center gap-2 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle className="text-2xl font-bold tracking-tight text-indigo-500">
            Daily Sales Intelligence
          </CardTitle>
          <CardDescription>
            Performance analytics: Revenue (Indigo) & Orders (Purple)
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="w-[160px] rounded-lg bg-background/50"
            aria-label="Select range"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d">Last 3 months</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="7d">Last 7 days</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer config={chartConfig} className="h-[350px] w-full">
          <AreaChart data={filteredData} margin={{ left: 12, right: 12 }}>
            <defs>
              {/* Indigo Gradient */}
              <linearGradient id="fillSales" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={chartConfig.totalSales.color}
                  stopOpacity={0.4}
                />
                <stop
                  offset="95%"
                  stopColor={chartConfig.totalSales.color}
                  stopOpacity={0}
                />
              </linearGradient>
              {/* Purple Gradient */}
              <linearGradient id="fillOrders" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor={chartConfig.orders.color}
                  stopOpacity={0.4}
                />
                <stop
                  offset="95%"
                  stopColor={chartConfig.orders.color}
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              vertical={false}
              strokeDasharray="3 3"
              className="stroke-muted/30" // Subtle grid lines
            />

            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={12}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />

            <YAxis yAxisId="left" hide />
            <YAxis yAxisId="right" hide />

            <ChartTooltip
              cursor={{
                stroke: "hsl(var(--muted-foreground))",
                strokeWidth: 1,
              }}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) =>
                    new Date(value).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })
                  }
                  indicator="line" // Changed to line for a cleaner professional look
                />
              }
            />

            {/* Indigo Revenue Area */}
            <Area
              yAxisId="left"
              dataKey="totalSales"
              type="monotone"
              fill="url(#fillSales)"
              stroke={chartConfig.totalSales.color}
              strokeWidth={1} // Thicker stroke for visibility
              animationDuration={1200}
            />

            {/* Purple Orders Area */}
            <Area
              yAxisId="right"
              dataKey="orders"
              type="monotone"
              fill="url(#fillOrders)"
              stroke={chartConfig.orders.color}
              strokeWidth={1} // Thicker stroke for visibility
              animationDuration={1200}
            />

            <ChartLegend content={<ChartLegendContent />} className="pt-6" />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default DailySalesAreaChart;
