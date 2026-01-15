"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", actual: 18, projection: 2 },
  { month: "Feb", actual: 20, projection: 5 },
  { month: "Mar", actual: 17, projection: 4 },
  { month: "Apr", actual: 21, projection: 6 },
  { month: "May", actual: 14, projection: 4 },
  { month: "Jun", actual: 20, projection: 5 },
];

export function ProjectionsVsActualsChart() {
  return (
    <div className="w-full max-w-108 h-full bg-white rounded-lg p-6">
      <h3 className="text-lg font-bold text-black mb-6">
        Projections vs Actuals
      </h3>

      <ResponsiveContainer width="100%" height={168}>
        <BarChart
          data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          barGap={8}
          barCategoryGap="20%"
        >
          <CartesianGrid
            vertical={false}
            stroke="#E5E7EB"
            strokeDasharray="0"
          />

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9CA3AF", fontSize: 13, fontWeight: 400 }}
            tickMargin={12}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9CA3AF", fontSize: 13, fontWeight: 400 }}
            tickFormatter={(value) => (value === 0 ? "0" : `${value}M`)}
            ticks={[0, 10, 20, 30]}
            domain={[0, 30]}
            tickMargin={4}
            width={40}
          />

          <Bar
            dataKey="actual"
            stackId="stack"
            fill="#A5BECD"
            radius={[0, 0, 0, 0]}
            barSize={20}
            isAnimationActive={false}
          />

          <Bar
            dataKey="projection"
            stackId="stack"
            fill="#C5D9E5"
            radius={[4, 4, 0, 0]}
            barSize={24}
            isAnimationActive={false}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
