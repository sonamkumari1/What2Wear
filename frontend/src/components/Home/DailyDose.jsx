import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const outfits = [
  {
    label: "Everyday Outfit",
    labelColor: "bg-green-100 text-green-700",
    image: "/outfit-1.jpg",
    rotate: "rotate-5",
    category: "Everyday Outfit",
  },
  {
    label: "Weekend Outfit",
    labelColor: "bg-pink-100 text-pink-700",
    image: "/outfit-2.jpg",
    rotate: "-rotate-7",
    category: "Weekend Outfit",
  },
  {
    label: "Work Outfit",
    labelColor: "bg-orange-100 text-orange-700",
    image: "/outfit-8.jpg",
    rotate: "rotate-5",
    category: "Work Outfit",
  },
  {
    label: "Party Outfit",
    labelColor: "bg-purple-100 text-purple-700",
    image: "/outfit-3.jpg",
    rotate: "-rotate-8",
    category: "Party Outfit",
  },
];

function DailyDose() {
  const navigate = useNavigate();

  return (
    <div id="dailyDose" className="p-3 sm:p-10 max-w-7xl">
      <div className="flex flex-col items-center justify-center text-center pb-10 px-4 ">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Get Your Daily Dose of Outfit Inspiration
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          Stay formal, stay casual, mix any item — wardrobe outfits for various
          occasions.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 py-10">
        {outfits.map((outfit, index) => (
          <div
            key={index}
            onClick={() => navigate(`/filtered-outfits/${outfit.category}`)} // ✅ go to new page with category
            className={`bg-white rounded-xl shadow-lg p-5 w-64 transform ${outfit.rotate} hover:rotate-0 transition-transform duration-300 cursor-pointer`}
          >
            <img
              src={outfit.image}
              alt={outfit.label}
              className="w-64 h-76  mb-3"
            />
            <span
              className={`px-3 py-1 text-sm font-medium rounded-full ${outfit.labelColor}`}
            >
              {outfit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DailyDose;
