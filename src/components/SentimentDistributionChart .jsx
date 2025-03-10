import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const SentimentDistributionChart = () => {
  // Sample data for the sentiment distribution pie chart
  const data = [
    { name: "Positive", value: 60, color: "#10b981" },
    { name: "Neutral", value: 20, color: "#fbbf24" },
    { name: "Negative", value: 20, color: "#ef4444" },
  ];

  return (
    <div className="flex">
      <div className="w-1/2">
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={70}
              paddingAngle={0}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="w-1/2 flex flex-col justify-center">
        {data.map((item) => (
          <div key={item.name} className="flex items-center mb-2">
            <div
              className="w-3 h-3 rounded-full mr-2"
              style={{ backgroundColor: item.color }}
            ></div>
            <span className="text-xs mr-2">{item.name}</span>
            <span className="text-xs font-medium">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SentimentDistributionChart;
