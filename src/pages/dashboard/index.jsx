import React from "react";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Sample data for the dashboard
  const stats = [
    { title: "Total Users", value: "15,223" },
    { title: "Average Sentiment", value: "7.8/10" },
    { title: "Positive Users", value: "92%" },
  ];

  const campaigns = Array(9).fill({
    title: "Sustainable Fashion Awareness",
    lastUpdated: "30-03-2025",
    platforms: ["Twitter", "Instagram", "Website", "Blog", "Reddit"],
  });

  return (
    <>
      <Navbar />

      <div className="bg-gray-50 p-8 min-h-screen">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-gray-500 font-medium text-base mb-2">
                {stat.title}
              </h3>
              <p className="text-gray-800 text-4xl font-semibold">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Campaigns Section Title */}
        <h2 className="text-xl font-bold text-gray-800 mb-4">Total Users</h2>

        {/* Campaigns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {campaigns.map((campaign, index) => (
            <Link
              to={"/company"}
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 mr-3 bg-red-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-red-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 14L12 8L6 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-gray-700 font-medium text-lg">
                  {campaign.title}
                </h3>
              </div>
              <div className="text-gray-500 text-sm mb-3">
                Last Updated : {campaign.lastUpdated}
              </div>
              <div className="flex flex-wrap">
                {campaign.platforms.map((platform, i) => (
                  <span key={i} className="text-gray-500 text-xs mr-2">
                    • {platform}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
