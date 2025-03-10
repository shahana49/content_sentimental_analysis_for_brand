import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ sentiment, bg = false }) => {
  const sentimentColors = [
    {
      positive: "bg-green-600",
      neutral: "bg-yellow-500",
      negative: "bg-red-500",
    },
    {
      positive: "text-green-600",
      neutral: "text-yellow-500",
      negative: "text-red-500",
    },
  ];

  const sentimentText = `28% ${
    sentiment.charAt(0).toUpperCase() + sentiment.slice(1)
  }`;

  return (
    <Link
      to={"/dashboard/productDetail"}
      className="flex flex-col bg-white rounded-xl shadow-md p-4"
    >
      <div className=" rounded-lg h-[170px] relative overflow-hidden mb-2">
        <img
          src="/images/dress.jpeg"
          alt="T-shirt on hangers"
          className="w-full h-full object-cover"
        />
        <div
          className={`absolute w-3 h-3 rounded-full
           ${sentimentColors[0][sentiment]} top-2 right-2 z-30`}
        ></div>
      </div>
      <span className="text-sm font-medium mb-1">T shirt</span>
      <span className={`text-xs ${sentimentColors[1][sentiment]}`}>
        {sentimentText}
      </span>
    </Link>
  );
};

export default ProductCard;
