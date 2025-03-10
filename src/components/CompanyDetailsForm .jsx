import React, { useState } from "react";
import Navbar from "./Navbar";
import Bookshelf from "./Loading";
import ProductCard from "./ProductCard ";
import { Link } from "react-router-dom";

const CompanyDetailsForm = () => {
  const [campaignName, setCampaignName] = useState(
    "Eco-Friendly Collection Launch"
  );
  const [isLoading, setLoading] = useState(false);
  const [platforms, setPlatforms] = useState({
    Twitter: true,
    Instagram: true,
    Website: true,
    Blog: false,
    Reddit: false,
  });

  const handlePlatformChange = (platform) => {
    setPlatforms({
      ...platforms,
      [platform]: !platforms[platform],
    });
  };
  if (isLoading) {
    return <Bookshelf />;
  }
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen p-6 px-10">
        <div className="max-w-screen-2xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 mb-2">
            Add Your Company Details
          </h1>
          <p className="text-gray-600 text-sm mb-8">
            Enter your company details to get started. This information helps us
            set up your business profile and provide a seamless experience.
            Ensure all details are accurate for smooth onboarding.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Company Details
            </h2>

            <div className="mb-6">
              <label
                htmlFor="campaignName"
                className="block text-sm text-gray-700 mb-2"
              >
                Campaign Name
              </label>
              <input
                type="text"
                id="campaignName"
                value={campaignName}
                onChange={(e) => setCampaignName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg
              text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <h4 className=" font-medium text-gray-800 mb-2">
                Product/Services
              </h4>
              {/* proudct list section  */}
              <div className="grid grid-cols-2 mt-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
                {/* product card  */}
                <div
                  to={"/dashboard/productDetail"}
                  className="flex flex-col bg-white rounded-xl "
                >
                  <div className=" rounded-lg h-[170px] relative overflow-hidden mb-2">
                    <img
                      src="/images/dress.jpeg"
                      alt="T-shirt on hangers"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium mb-1">
                    Cotton Polo Shirt
                  </span>
                  <span className="text-[#7D7B7B] text-sm">T Shirt</span>
                </div>
                {/* product card  */}
                <div
                  to={"/dashboard/productDetail"}
                  className="flex flex-col bg-white rounded-xl "
                >
                  <div className=" rounded-lg h-[170px] relative overflow-hidden mb-2">
                    <img
                      src="/images/dress.jpeg"
                      alt="T-shirt on hangers"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium mb-1">
                    Cotton Polo Shirt
                  </span>
                  <span className="text-[#7D7B7B] text-sm">T Shirt</span>
                </div>
                {/* product card  */}
                <div
                  to={"/dashboard/productDetail"}
                  className="flex flex-col bg-white rounded-xl "
                >
                  <div className=" rounded-lg h-[170px] relative overflow-hidden mb-2">
                    <img
                      src="/images/dress.jpeg"
                      alt="T-shirt on hangers"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium mb-1">
                    Cotton Polo Shirt
                  </span>
                  <span className="text-[#7D7B7B] text-sm">T Shirt</span>
                </div>
                {/* product card  */}
                <div
                  to={"/dashboard/productDetail"}
                  className="flex flex-col bg-white rounded-xl "
                >
                  <div className=" rounded-lg h-[170px] relative overflow-hidden mb-2">
                    <img
                      src="/images/dress.jpeg"
                      alt="T-shirt on hangers"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium mb-1">
                    Cotton Polo Shirt
                  </span>
                  <span className="text-[#7D7B7B] text-sm">T Shirt</span>
                </div>
                {/* product card  */}
                <div
                  to={"/dashboard/productDetail"}
                  className="flex flex-col bg-white rounded-xl "
                >
                  <div className=" rounded-lg h-[170px] relative overflow-hidden mb-2">
                    <img
                      src="/images/dress.jpeg"
                      alt="T-shirt on hangers"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium mb-1">
                    Cotton Polo Shirt
                  </span>
                  <span className="text-[#7D7B7B] text-sm">T Shirt</span>
                </div>
                {/* product card  */}
                <div
                  to={"/dashboard/productDetail"}
                  className="flex flex-col bg-white rounded-xl "
                >
                  <div className=" rounded-lg h-[170px] relative overflow-hidden mb-2">
                    <img
                      src="/images/dress.jpeg"
                      alt="T-shirt on hangers"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium mb-1">
                    Cotton Polo Shirt
                  </span>
                  <span className="text-[#7D7B7B] text-sm">T Shirt</span>
                </div>
                {/* product card  */}
                <div
                  to={"/dashboard/productDetail"}
                  className="flex flex-col bg-white rounded-xl "
                >
                  <div className=" rounded-lg h-[170px] relative overflow-hidden mb-2">
                    <img
                      src="/images/dress.jpeg"
                      alt="T-shirt on hangers"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-medium mb-1">
                    Cotton Polo Shirt
                  </span>
                  <span className="text-[#7D7B7B] text-sm">T Shirt</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">
              Platform Selection
            </h2>

            <div className="flex flex-wrap gap-6">
              {Object.keys(platforms).map((platform) => (
                <div key={platform} className="flex items-center">
                  <input
                    type="checkbox"
                    id={platform}
                    checked={platforms[platform]}
                    onChange={() => handlePlatformChange(platform)}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <label
                    htmlFor={platform}
                    className="ml-2 text-sm text-gray-700"
                  >
                    {platform}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
              Cancel
            </button>
            <button
              onClick={() => setLoading(true)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Start Analysis
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyDetailsForm;
