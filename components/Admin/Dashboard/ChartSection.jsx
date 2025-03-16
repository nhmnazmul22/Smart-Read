"use client";
import { dailyViewsData } from "@/db/chartsData";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ChartSection = () => {
  return (
    <div className="w-full h-[500px] bg-white py-10 px-5 mt-10 rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-5">Monthly Viewers</h3>
      <ResponsiveContainer width="100%" height={350}>
        <AreaChart
          data={dailyViewsData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="day" tick={{ fontSize: 12 }} />
          <YAxis />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Area
            type="monotone"
            dataKey="views"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorViews)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartSection;
