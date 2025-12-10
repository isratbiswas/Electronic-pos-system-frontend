"use client"

import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { IDailySales,  } from "@/types/product"

interface Props {
  data: IDailySales[]
}

const chartConfig = {
  totalSales: {
    label: "Total Sales",
    color: "var(--chart-1)",
  },
  orders: {
    label: "Orders",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig

const DailySalesAreaChart = ({ data }: Props) => {
  const [timeRange, setTimeRange] = React.useState("90d")

  // ✅ sort by date (important)
  const sortedData = React.useMemo(() => {
    return [...data].sort(
      (a, b) =>
        new Date(a.date).getTime() - new Date(b.date).getTime()
    )
  }, [data])

  // ✅ filter by range
  const filteredData = React.useMemo(() => {
    if (!sortedData.length) return []

    const referenceDate = new Date(
      sortedData[sortedData.length - 1].date
    )

    let days = 90
    if (timeRange === "30d") days = 30
    if (timeRange === "7d") days = 7

    const startDate = new Date(referenceDate)
    startDate.setDate(startDate.getDate() - days)

    return sortedData.filter(
      (item) => new Date(item.date) >= startDate
    )
  }, [sortedData, timeRange])

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Daily Sales - Interactive</CardTitle>
          <CardDescription>
            Sales & orders based on selected time range
          </CardDescription>
        </div>

        {/* ✅ Time Range Select */}
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger className="w-[160px] rounded-lg">
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="90d">Last 3 months</SelectItem>
            <SelectItem value="30d">Last 30 days</SelectItem>
            <SelectItem value="7d">Last 7 days</SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>

      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="h-[280px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="fillSales" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-totalSales)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-totalSales)"
                  stopOpacity={0.1}
                />
              </linearGradient>

              <linearGradient id="fillOrders" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-orders)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-orders)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>

            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) =>
                new Date(value).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })
              }
            />

            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />

            <Area
              dataKey="totalSales"
              type="natural"
              fill="url(#fillSales)"
              stroke="var(--color-totalSales)"
              stackId="a"
            />

            <Area
              dataKey="orders"
              type="natural"
              fill="url(#fillOrders)"
              stroke="var(--color-orders)"
              stackId="a"
            />

            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default  DailySalesAreaChart
