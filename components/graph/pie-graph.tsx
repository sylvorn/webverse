"use client";
import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

interface ChartData {
  [key: string]: number | string; // Allows for dynamic keys
}

interface PieGraphProps {
  title: string;
  description?: string;
  data: ChartData[];
  dtKey: string; // Dynamic data key for values
  nmKey: string; // Dynamic name key for labels
}

const generateColor = (index: number) => {
  const colors = ["hsl(var(--chart-1))", "hsl(var(--chart-2))", "hsl(var(--chart-3))", "hsl(var(--chart-4))", "hsl(var(--chart-5))"];
  return colors[index % colors.length];
};

const generateChartConfig = (data: ChartData[]) => {
  const keys = Object.keys(data[0]).filter((key) => key !== "browser" && key !== "month");
  return keys.reduce((config, key, index) => {
    config[key] = {
      label: key.charAt(0).toUpperCase() + key.slice(1),
      color: generateColor(index),
    };
    return config;
  }, {} as { [key: string]: { label: string; color: string } });
};

export function PieGraph({ title, description = "Showing total visitors for the last 6 months", data, dtKey, nmKey }: PieGraphProps) {
  const chartConfig = React.useMemo(() => generateChartConfig(data), [data]);
  const totalVisitors = React.useMemo(() => {
    return data.reduce((acc, curr) => acc + (curr[dtKey] as number), 0);
  }, [data, dtKey]);

  const dataWithColors = data.map((d, index) => ({
    ...d,
    fill: generateColor(index),
  }));

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer className="mx-auto aspect-square max-h-[360px]" config={chartConfig}>
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie data={dataWithColors} dataKey={dtKey} nameKey={nmKey} innerRadius={60} strokeWidth={5}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle" dominantBaseline="middle">
                        <tspan x={viewBox.cx} y={viewBox.cy} className="fill-foreground text-3xl font-bold">
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan x={viewBox.cx} y={(viewBox.cy || 0) + 24} className="fill-muted-foreground">
                          Visitors
                        </tspan>
                      </text>
                    );
                  }
                  return null;
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">{description}</div>
      </CardFooter>
    </Card>
  );
}
