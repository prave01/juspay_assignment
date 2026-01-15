"use client";

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
    { name: "Direct", value: 300.56, color: "#1C1C1C" },
    { name: "Affiliate", value: 135.18, color: "#BAEDBD" },
    { name: "Sponsored", value: 154.02, color: "#95A4FC" },
    { name: "E-mail", value: 48.96, color: "#B1E3FF" },
];

export function TotalSales() {
    return (
        <div className="w-full max-w-[240px] bg-sky-100/20 h-[344px] rounded-lg p-6 gap-4 flex flex-col justify-between">
            <h3 className="text-[14px] font-semibold text-black">Total Sales</h3>

            <div className="h-[160px] w-full relative flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={50}
                            outerRadius={65}
                            paddingAngle={5}
                            dataKey="value"
                            cornerRadius={40}
                            stroke="none"
                            startAngle={90}
                            endAngle={-270}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                <div className="absolute top-[65%] left-[10%] bg-black/80 text-white text-[10px] font-medium px-2 py-1 rounded-md transform -translate-y-1/2 z-10">
                    38.6%
                </div>
            </div>

            <div className="space-y-4 px-4">
                {data.map((item) => (
                    <div key={item.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: item.color }}
                            />
                            <span className="text-xs text-gray-600">{item.name}</span>
                        </div>
                        <span className="text-xs font-normal text-gray-600">
                            ${item.value.toFixed(2)}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
