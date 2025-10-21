"use client"

import { Pie, PieChart } from "recharts"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartLegend, ChartLegendContent } from "@/components/ui/chart"

export const description = "A pie chart with a legend"

const chartData = [
  { category: "recruitment", visitors: 275, fill: "var(--color-recruitment)" },
  { category: "training", visitors: 200, fill: "var(--color-training)" },
  { category: "performance", visitors: 187, fill: "var(--color-performance)" },
  { category: "wellness", visitors: 173, fill: "var(--color-wellness)" },
  { category: "compensation", visitors: 90, fill: "var(--color-compensation)" },
  { category: "compliance", visitors: 90, fill: "var(--color-compliance)" },
  { category: "hris", visitors: 90, fill: "var(--color-hris)" },
  { category: "other", visitors: 90, fill: "var(--color-other)" },
]

const chartConfig = {
  recruitment: { label: "Recruitment & Selection", color: "var(--chart-1)" },
  training: { label: "Training & Development", color: "var(--chart-2)" },
  performance: { label: "Performance Management", color: "var(--chart-3)" },
  wellness: { label: "Employee Wellness", color: "var(--chart-4)" },
  compensation: { label: "Compensation & Benefits", color: "var(--chart-5)" },
  compliance: { label: "HR Compliance", color: "var(--chart-4)" },
  hris: { label: "HRIS", color: "var(--chart-5)" },
  other: { label: "Other", color: "var(--chart-4)" },
} satisfies ChartConfig

export function Chart3() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>HR Department Distribution</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[300px]">
          <PieChart>
            <Pie data={chartData} dataKey="visitors" />
            <ChartLegend content={<ChartLegendContent nameKey="category" />} className="" />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
