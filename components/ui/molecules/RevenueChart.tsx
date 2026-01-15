"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", currentWeek: 13, projection: null, previousWeek: 8 },
  { month: "Feb", currentWeek: 8, projection: null, previousWeek: 18 },
  { month: "Mar", currentWeek: 10, projection: null, previousWeek: 16 },
  { month: "Apr", currentWeek: 16, projection: 16, previousWeek: 12 },
  { month: "May", currentWeek: null, projection: 20, previousWeek: 10 },
  { month: "Jun", currentWeek: null, projection: 21, previousWeek: 25 },
];

export function RevenueChart() {
  return (
    <div className="w-full max-w-165.5 p-5 h-78 bg-sky-100/20 rounded-lg">
      <div className="flex items-center mb-3 gap-6">
        <h3 className="text-[14px] font-semibold text-black">Revenue</h3>
        <p className="text-black/10 font-semibold">|</p>
        <div className="flex text-[12px] items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="size-1.5  rounded-full bg-black"></div>
            <span className="text-gray-600">
              Current Week{" "}
              <span className="font-semibold pl-1 text-black">$58,211</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-1.5 rounded-full bg-[#A5C4D4]"></div>
            <span className="text-gray-600">
              Previous Week{" "}
              <span className="font-semibold pl-1 text-black">$68,788</span>
            </span>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={232}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
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
            padding={{ left: 30, right: 30 }}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9CA3AF", fontSize: 13, fontWeight: 400 }}
            tickFormatter={(value) => (value === 0 ? "0" : `${value}M`)}
            ticks={[0, 10, 20, 30]}
            domain={[0, 30]}
            tickMargin={8}
            width={40}
          />

          <Line
            type="natural"
            dataKey="previousWeek"
            stroke="#A5C4D4"
            strokeWidth={2.5}
            dot={false}
            activeDot={false}
            connectNulls
          />

          <Line
            type="natural"
            dataKey="currentWeek"
            stroke="#000000"
            strokeWidth={2.5}
            dot={false}
            activeDot={false}
            connectNulls
          />

          <Line
            type="natural"
            dataKey="projection"
            stroke="#000000"
            strokeWidth={2.5}
            strokeDasharray="6 4"
            dot={false}
            activeDot={false}
            connectNulls
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
