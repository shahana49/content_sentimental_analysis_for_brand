import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const SentimentTrendChart = ({ timeFilter }) => {
  // Sample data for the sentiment trend chart
  const data = [
    { name: "Feb", positive: 30, neutral: 15, negative: 10 },
    { name: "Mar", positive: 35, neutral: 18, negative: 12 },
    { name: "Apr", positive: 40, neutral: 20, negative: 15 },
    { name: "May", positive: 45, neutral: 25, negative: 20 },
    { name: "Jun", positive: 50, neutral: 20, negative: 15 },
    { name: "Jul", positive: 55, neutral: 18, negative: 12 },
    { name: "Aug", positive: 60, neutral: 15, negative: 10 },
    { name: "Sep", positive: 55, neutral: 18, negative: 15 },
    { name: "Oct", positive: 50, neutral: 20, negative: 20 },
    { name: "Nov", positive: 55, neutral: 25, negative: 15 },
    { name: "Dec", positive: 60, neutral: 20, negative: 10 },
    { name: "Jan", positive: 65, neutral: 15, negative: 8 },
  ];

  const timeFilters = ["12 Months", "6 Months", "30 Days", "7 Days"];

  return (
    <div>
      <div className="flex items-center mb-4">
        <h3 className="text-sm font-medium mr-6">Sentiment Trend</h3>
        <div className="flex items-center">
          <div className="flex items-center mr-4">
            <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
            <span className="text-xs">Positive</span>
          </div>
          <div className="flex items-center mr-4">
            <div className="w-3 h-3 rounded-full bg-yellow-400 mr-1"></div>
            <span className="text-xs">Neutral</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
            <span className="text-xs">Negative</span>
          </div>
        </div>
      </div>
      <div className="flex space-x-2 mb-4">
        {timeFilters.map((filter) => (
          <button
            key={filter}
            className={`text-xs border rounded px-2 py-1 hover:bg-gray-50 ${
              filter === timeFilter ? "bg-gray-100" : ""
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" tick={{ fontSize: 10 }} />
            <YAxis hide={true} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="negative"
              stackId="1"
              stroke="#f87171"
              fill="#fecaca"
            />
            <Area
              type="monotone"
              dataKey="neutral"
              stackId="1"
              stroke="#fbbf24"
              fill="#fde68a"
            />
            <Area
              type="monotone"
              dataKey="positive"
              stackId="1"
              stroke="#10b981"
              fill="#a7f3d0"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SentimentTrendChart;
