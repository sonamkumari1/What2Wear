import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Section() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center px-4 sm:px-6 lg:px-12 pb-10">
      {/* Big Box */}
      <div className="flex flex-col items-center justify-center text-center py-12 w-full">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 leading-snug">
          Your Style, Your Space – All in One Place
        </h1>

        {/* Paragraph */}
        <p className="text-base sm:text-lg text-gray-600 max-w-3xl mb-12 px-2">
          From your personal wardrobe collection to adding new statement pieces
          and discovering perfect color pairings — manage your entire fashion
          world in one stylish dashboard.
        </p>

        {/* Three Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10 sm:px-16  w-full">
          {/* Card 1 - My Wardrobe */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition flex flex-col items-center text-center">
            <h2 className="text-xl sm:text-xl font-semibold mb-3">
              👗 My Wardrobe
            </h2>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              View and manage your wardrobe collection.
            </p>
            <Link
              to="/listOutfit"
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition w-full sm:w-auto"
            >
              View My Outfits
            </Link>
          </div>

          {/* Card 2 - Add Items */}
          <div className="bg-white rounded-xl p-6 my-8 sm:my-0 md:my-0 shadow-lg hover:shadow-2xl transition flex flex-col items-center text-center">
            <h2 className="text-xl sm:text-xl font-semibold mb-3">
              ➕ Add Items
            </h2>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              Add new outfits or accessories to your wardrobe.
            </p>
            <button
              onClick={() => navigate("/addOutfit")}
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition w-full sm:w-auto"
            >
              Add Now
            </button>
          </div>

          {/* Card 3 - Color Combinations */}
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition flex flex-col items-center text-center">
            <h2 className="text-xl sm:text-xl font-semibold mb-3">
              🎨 Outfits Tips
            </h2>
            <p className="text-gray-700 mb-4 text-sm sm:text-base">
              Explore the best color matches for your dresses.
            </p>
            <Link
              to="/color"
              className="bg-black text-white px-6 py-2 rounded-lg hover:bg-green-600 transition w-full sm:w-auto"
            >
              Explore Outfits
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
