import React from "react";
import { ChevronDown, TrendingUp, ArrowRight, BarChart3 } from "lucide-react";
import Navbar from "../../components/Navbar";

const DetailedSentimentAnalysis = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen px-10 p-6">
        <div className=" ">
          <h1 className="text-xl font-semibold text-gray-900 mb-6">
            Overall Sentiment Score of "Tshirt"
          </h1>

          {/* Sentiment Score Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <SentimentCard
              type="positive"
              percentage={78}
              change={"+2.5% from yesterday"}
              icon={<TrendingUp className="h-6 w-6 text-white" />}
            />
            <SentimentCard
              type="neutral"
              percentage={20}
              change={"-0.5% from yesterday"}
              icon={<BarChart3 className="h-6 w-6 text-white" />}
            />
            <SentimentCard
              type="negative"
              percentage={40}
              change={"+5% from yesterday"}
              icon={<ArrowRight className="h-6 w-6 text-white" />}
            />
          </div>

          {/* Main Content Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Reviews Section */}
            <div className="lg:col-span-2 bg-white rounded-xl">
              <div className="flex justify-between border-b border-[#DDDDDD] items-center mb-4 px-5 py-6">
                <h2 className=" font-medium text-gray-800">
                  Recent Reviews & Social Media Sentiment
                </h2>
                <div className="relative">
                  <button className="flex items-center text-sm text-green-600 border border-green-600 rounded-md px-3 py-1">
                    Positive
                    <ChevronDown className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="">
                <ReviewCard
                  name="Sarah Johnson"
                  review="Love the sustainability focus! The products are eco-friendly and the packaging is minimal. Great initiative!"
                  time="2 hours ago"
                  rating={4}
                />
                <ReviewCard
                  name="Sarah Johnson"
                  review="Love the sustainability focus! The products are eco-friendly and the packaging is minimal. Great initiative!"
                  time="2 hours ago"
                  rating={4}
                />
                <ReviewCard
                  name="Sarah Johnson"
                  review="Love the sustainability focus! The products are eco-friendly and the packaging is minimal. Great initiative!"
                  time="2 hours ago"
                  rating={4}
                />
              </div>
            </div>

            {/* Keywords Section */}
            <div className="bg-white py-6 px-4 rounded-xl">
              <h2 className="font-semibold text-gray-800 mb-4">
                Common Keywords
              </h2>
              <div className="flex flex-wrap gap-2">
                <Keyword text="Sustainable" />
                <Keyword text="Eco-friendly" />
                <Keyword text="Organic" />
                <Keyword text="Fashion" />
                <Keyword text="Quality" />
                <Keyword text="Stylish" />
                <Keyword text="Comfort" />
                <Keyword text="Ethical" />
                <Keyword text="Materials" />
                <Keyword text="Design" />
                <Keyword text="Durable" />
                <Keyword text="Green" />
                <Keyword text="Trendy" />
                <Keyword text="Conscious" />
                <Keyword text="Fabric" />
                <Keyword text="Modern" />
                <Keyword text="Responsible" />
                <Keyword text="Innovative" />
                <Keyword text="Chic" />
                <Keyword text="Planet" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Sentiment Card Component
const SentimentCard = ({ type, percentage, change, icon }) => {
  const colors = {
    positive: {
      bg: "bg-green-500",
      text: "text-green-600",
      changeText: change.startsWith("+") ? "text-green-600" : "text-red-600",
    },
    neutral: {
      bg: "bg-orange-500",
      text: "text-orange-600",
      changeText: change.startsWith("+") ? "text-green-600" : "text-red-600",
    },
    negative: {
      bg: "bg-red-500",
      text: "text-red-600",
      changeText: change.startsWith("+") ? "text-green-600" : "text-red-600",
    },
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-start mb-4">
        <div className={`${colors[type].bg} rounded-full p-2`}>{icon}</div>
        <div className="text-right">
          <div className="text-gray-600 font-medium capitalize">{type}</div>
          <div className={`text-3xl font-bold ${colors[type].text}`}>
            {percentage}%
          </div>
        </div>
      </div>
      <div className={colors[type].changeText}>{change}</div>
    </div>
  );
};

// Review Card Component
const ReviewCard = ({ name, review, time, rating }) => {
  return (
    <div className="border-b pb-4  border-[#DDDDDD] py-6 px-4">
      <div className="flex items-start">
        <img
          src="/images/person.jpeg"
          alt={name}
          className="w-10 h-10 rounded-full mr-3"
        />
        <div className="flex-1">
          <div className="flex justify-between items-center mb-1">
            <h3 className="font-medium text-gray-800">{name}</h3>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < rating ? "text-yellow-400" : "text-gray-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-600">{review}</p>
          <span className="text-xs text-gray-500">{time}</span>
        </div>
      </div>
    </div>
  );
};

// Keyword Component
const Keyword = ({ text }) => {
  return (
    <span className="bg-blue-100 text-blue-800 text-sm rounded-md px-3 py-1">
      {text}
    </span>
  );
};

export default DetailedSentimentAnalysis;
