"use client";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import Image from "next/image";

interface data {
  name: string;
  value: number;
}

const data01: data[] = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const data02: data[] = [
  { name: "A1", value: 100 },
  { name: "A2", value: 300 },
  { name: "B1", value: 100 },
  { name: "B2", value: 80 },
  { name: "B3", value: 40 },
  { name: "B4", value: 30 },
  { name: "B5", value: 50 },
  { name: "C1", value: 100 },
  { name: "C2", value: 200 },
  { name: "D1", value: 150 },
  { name: "D2", value: 50 },
];

export default function MyPieChart() {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* title */}
      <div className="flex items-center justify-between">
        <h1>Test chart</h1>
        <Image src="/moreDark.png" alt="" width={16} height={16} />
      </div>
      {/* chart */}
      <div className="w-full h-[75%]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={400}>
            <Pie
              data={data01}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={60}
              fill="#8884d8"
            />
            <Pie
              data={data02}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={90}
              fill="#82ca9d"
              
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      {/* bottom */}
      <div className=""></div>
    </div>
  );
}
