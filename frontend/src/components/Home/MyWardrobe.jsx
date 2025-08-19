// import React from "react";
// import { Link } from "react-router-dom";

// const outfits = [
//   {
//     label: "Shirt",
//     labelColor: "bg-green-100 text-green-700",
//     image:
//       "https://i.pinimg.com/1200x/a2/70/06/a27006ec7a94c426854b5dde545af1c9.jpg",
//   },
//   {
//     label: "Pant",
//     labelColor: "bg-pink-100 text-pink-700",
//     image:
//       "https://i.pinimg.com/1200x/20/f9/a2/20f9a201e82a2d0cc44c79e4c34fd81b.jpg",
//   },
//   {
//     label: "Top",
//     labelColor: "bg-orange-100 text-orange-700",
//     image:
//       "https://i.pinimg.com/1200x/11/92/cc/1192cc157f0f8877702538fd82f87118.jpg",
//   },
//   {
//     label: "Shoes",
//     labelColor: "bg-purple-100 text-purple-700",
//     image:
//       "https://i.pinimg.com/736x/99/21/76/992176e775eb7b233eec0de1ded5e633.jpg",
//   },
//   {
//     label: "EyeGlasses",
//     labelColor: "bg-green-100 text-green-700",
//     image:
//       "https://i.pinimg.com/736x/da/73/61/da73615c1c6afa0009ef19c3eea76863.jpg",
//   },
//   {
//     label: "Bag",
//     labelColor: "bg-pink-100 text-pink-700",
//     image:
//       "https://i.pinimg.com/736x/41/2f/25/412f256901c0a5d4bf5622487b08fa49.jpg",
//   },
// ];

// function MyWardrobe() {
//   return (
//     <div className="pb-12 pt-32 max-w-7xl mx-auto ">
//       <div className="flex items-center justify-between mb-16">
//         <h1 className="text-4xl font-bold ">My Wardrobe Collections</h1>
//         <Link to="/listOutfit" className="px-6 py-2 bg-black text-white  rounded-lg shadow-md  transition">
//           View All
//         </Link>
//       </div>

//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
//         {outfits.map((outfit, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-xl p-3 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//           >
//             <img
//               src={outfit.image}
//               alt={outfit.label}
//               className="w-[180px] h-[150px] object-cover rounded-lg"
//             />
//             <div className="p-3 flex flex-col">
//               <span
//                 className={`self-start px-3 py-1 text-sm font-medium rounded-full ${outfit.labelColor}`}
//               >
//                 {outfit.label}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default MyWardrobe;

import React from "react";
import { Link } from "react-router-dom";

const outfits = [
  {
    label: "Shirt",
    labelColor: "bg-green-100 text-green-700",
    image:
      "https://i.pinimg.com/1200x/a2/70/06/a27006ec7a94c426854b5dde545af1c9.jpg",
  },
  {
    label: "Pant",
    labelColor: "bg-pink-100 text-pink-700",
    image:
      "https://i.pinimg.com/1200x/20/f9/a2/20f9a201e82a2d0cc44c79e4c34fd81b.jpg",
  },
  {
    label: "Top",
    labelColor: "bg-orange-100 text-orange-700",
    image:
      "https://i.pinimg.com/1200x/11/92/cc/1192cc157f0f8877702538fd82f87118.jpg",
  },
  {
    label: "Shoes",
    labelColor: "bg-purple-100 text-purple-700",
    image:
      "https://i.pinimg.com/736x/99/21/76/992176e775eb7b233eec0de1ded5e633.jpg",
  },
  {
    label: "EyeGlasses",
    labelColor: "bg-green-100 text-green-700",
    image:
      "https://i.pinimg.com/736x/da/73/61/da73615c1c6afa0009ef19c3eea76863.jpg",
  },
  {
    label: "Bag",
    labelColor: "bg-pink-100 text-pink-700",
    image:
      "https://i.pinimg.com/736x/41/2f/25/412f256901c0a5d4bf5622487b08fa49.jpg",
  },
];

function MyWardrobe() {
  return (
    <div className="pb-12 pt-20 sm:pt-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
      {/* Header */}
      <div className="flex flex-row sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
        <h1 className="text-xl sm:text-4xl font-bold">Wardrobe Collections</h1>
        <Link
          to="/listOutfit"
          className="px-2 py-1 sm:px-6 sm:py-2 bg-black text-white rounded-lg shadow-md hover:bg-black/80 transition"
        >
          View All
        </Link>
      </div>

      {/* Grid */}
      <div className="grid gap-2 sm:gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {outfits.map((outfit, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-3 shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={outfit.image}
              alt={outfit.label}
              className="w-full h-40 sm:h-48 rounded-lg"
            />
            <div className="pt-3 flex flex-col items-center justify-center">
              <span
                className={`self-center px-3 py-1 text-sm font-medium rounded-full ${outfit.labelColor}`}
              >
                {outfit.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyWardrobe;
