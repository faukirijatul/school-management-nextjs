"use client";
import Image from "next/image";
import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// #region Sample data
const data = [
  {
    name: "Mon",
    present: 60,
    absent: 40,
  },
  {
    name: "Tue",
    present: 70,
    absent: 60,
  },
  {
    name: "Wed",
    present: 60,
    absent: 30,
  },
  {
    name: "Thu",
    present: 55,
    absent: 65,
  },
  {
    name: "Fri",
    present: 73,
    absent: 35,
  },
];

// #endregion
const AttendanceChart = () => {
  return (
    <div className="bg-white rounded-xl w-full h-full p-4">
      {/* TITLE */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src="/moreDark.png" alt="more" width={20} height={20} />
      </div>

      {/* CHART */}
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#DDD" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#D1D5DB" }}
            tickLine={false}
          />
          <YAxis
            width="auto"
            axisLine={false}
            tick={{ fill: "#D1D5DB" }}
            tickLine={false}
          />
          <Tooltip contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }} />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "30px" }}
          />
          <Bar
            dataKey="present"
            fill="#C3EBFA"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
          <Bar
            dataKey="absent"
            fill="#FAE27C"
            legendType="circle"
            radius={[10, 10, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
