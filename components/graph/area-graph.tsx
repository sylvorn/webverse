"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis, Tooltip } from "recharts";
import { TrendingUp } from "lucide-react";
import { dateRange } from "@/lib/currMonth";

interface ChartData {
  month: string;
  [key: string]: number | string; // Allows for dynamic keys
}

interface ChartConfig {
  [key: string]: {
    label: string;
    color: string;
  };
}

interface AreaGraphProps {
  title: string;
  description?: string;
  data: ChartData[];
}

export function AreaGraph({ title, description = `Showing data till current months`, data }: AreaGraphProps) {
  if (data.length > 0) {
    const dataKeys = Object.keys(data[0]).filter((key) => key !== "month");

    const generateChartConfig = (keys: string[]): ChartConfig => {
      const colors = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))"];
      return keys.reduce((config, key, index) => {
        config[key] = {
          label: key.charAt(0).toUpperCase() + key.slice(1),
          color: colors[index % colors.length],
        };
        return config;
      }, {} as ChartConfig);
    };

    const chartConfig = generateChartConfig(dataKeys);

    return (
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig} className="aspect-auto h-[310px] w-full">
            <AreaChart
              accessibilityLayer
              data={data}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} tickFormatter={(value) => value.slice(0, 3)} />
              <Tooltip cursor={false} content={<ChartTooltipContent indicator="dot" />} />
              {dataKeys.map((key) => (
                <Area key={key} dataKey={key} type="natural" fill={chartConfig[key].color} fillOpacity={0.4} stroke={chartConfig[key].color} stackId="a" />
              ))}
            </AreaChart>
          </ChartContainer>
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 font-medium leading-none">
                <TrendingUp className="h-4 w-4" /> Average : %
              </div>
              <div className="flex items-center gap-2 leading-none text-muted-foreground">{dateRange}</div>
            </div>
          </div>
        </CardFooter>
      </Card>
    );
  } else {
    return (
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="aspect-ratio h-[310px] w-full flex justify-center items-center font-bold text-black dark:text-white leading-none">
            <p>No Data To Display</p>
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex w-full items-start gap-2 text-sm">
            <div className="grid gap-2">
              <div className="flex items-center gap-2 font-medium leading-none">
                <TrendingUp className="h-4 w-4" /> Average : 0.00 %
              </div>
              <div className="flex items-center gap-2 leading-none text-muted-foreground">{dateRange}</div>
            </div>
          </div>
        </CardFooter>
      </Card>
    );
  }
}
