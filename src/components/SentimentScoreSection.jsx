import { ChevronDown } from "lucide-react";
import SentimentDistributionChart from "./SentimentDistributionChart ";
import SentimentTrendChart from "./SentimentTrendChart ";

// Sentiment Score Section Component
const SentimentScoreSection = ({ timeFilter, setTimeFilter }) => {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Overall Sentiment Score
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl border border-[#E4E4E7] p-5">
          <SentimentTrendChart />
        </div>
        <div className="bg-white p-5 rounded-xl border border-[#E4E4E7]">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-medium">Sentiment Distribution</h3>
            <div className="relative">
              <button className="flex items-center text-sm border rounded-md px-3 py-1">
                {timeFilter}
                <ChevronDown className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
          <SentimentDistributionChart />
        </div>
      </div>
    </div>
  );
};

export default SentimentScoreSection;
