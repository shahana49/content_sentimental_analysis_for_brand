import React, { useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import ProductsSection from "./ProductsSection";
import SentimentScoreSection from "./SentimentScoreSection";
import CampaignHeader from "./CampaignHeader";
import Navbar from "./Navbar";

// Main Dashboard Component
const SustainableFashionDashboard = () => {
  const [timeFilter, setTimeFilter] = useState("Today");
  const [productFilter, setProductFilter] = useState("Positive");

  return (
    <>
      <Navbar />
      <div className="bg-[#F8F9FA] min-h-screen px-10 p-6">
        <CampaignHeader />
        <SentimentScoreSection
          timeFilter={timeFilter}
          setTimeFilter={setTimeFilter}
        />
        <ProductsSection
          productFilter={productFilter}
          setProductFilter={setProductFilter}
        />
      </div>
    </>
  );
};

export default SustainableFashionDashboard;
