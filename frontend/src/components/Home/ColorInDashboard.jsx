// import React from 'react'
// import { Link } from 'react-router-dom'
// const outfits = [
//     {
//       image:
//         "https://i.pinimg.com/736x/fe/88/e6/fe88e6be03af2188f8474ca2e0e88e6d.jpg",
//     },
//     {
//       image:
//         "https://i.pinimg.com/736x/d0/83/47/d08347512f3624e304b30b3553dd2eca.jpg",
//     },
//     {
//       image:
//         "https://i.pinimg.com/736x/35/79/36/357936b4d056b79e808be455fcf38ec8.jpg",
//     },
//     {
//       image:
//         "https://i.pinimg.com/736x/d1/2a/48/d12a48374f8820e298b12b8aafd8a5a2.jpg",
//     },
//     {
//       image:
//         "https://i.pinimg.com/736x/d7/39/df/d739dfb4980aa5a00994eb135200a392.jpg",
//     },
//     {
//       image:
//         "https://i.pinimg.com/736x/5b/56/90/5b569030a786b3ea3e4dcc2c577cd4bf.jpg",
//     },
   
// ]
// function ColorInDashboard() {
//   return (
//     <div className="py-16 max-w-7xl mx-auto">
//       {/* Header Row */}
//       <div className="flex items-center justify-between mb-16">
//         <h1 className="text-4xl font-bold ">Some Color Outfit Tips</h1>
//         <Link to="/color" className="px-6 py-2 bg-black text-white  rounded-lg shadow-md  transition">
//           View All
//         </Link>
//       </div>

//       {/* Outfit Grid */}
//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
//         {outfits.map((outfit, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-xl p-3 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//           >
//             <img
//               src={outfit.image}
//               alt={outfit.label}
//               className="w-[250px] h-[250px] object-cover rounded-lg"
//             />
           
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default ColorInDashboard
import React from 'react'
import { Link } from 'react-router-dom'

const outfits = [
  { image: "https://i.pinimg.com/736x/fe/88/e6/fe88e6be03af2188f8474ca2e0e88e6d.jpg" },
  { image: "https://i.pinimg.com/736x/d0/83/47/d08347512f3624e304b30b3553dd2eca.jpg" },
  { image: "https://i.pinimg.com/736x/35/79/36/357936b4d056b79e808be455fcf38ec8.jpg" },
  { image: "https://i.pinimg.com/736x/d1/2a/48/d12a48374f8820e298b12b8aafd8a5a2.jpg" },
  { image: "https://i.pinimg.com/736x/d7/39/df/d739dfb4980aa5a00994eb135200a392.jpg" },
  { image: "https://i.pinimg.com/736x/5b/56/90/5b569030a786b3ea3e4dcc2c577cd4bf.jpg" },
]

function ColorInDashboard() {
  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
      {/* Header Row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-10 gap-4">
        <h1 className="text-3xl sm:text-4xl font-bold">Some Color Outfit Tips</h1>
        <Link
          to="/color"
          className="px-6 py-2 bg-black text-white rounded-lg shadow-md hover:bg-black/80 transition"
        >
          View All
        </Link>
      </div>

      {/* Outfit Grid */}
      <div className="grid gap-2 sm:gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {outfits.map((outfit, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-3 shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={outfit.image}
              alt={`outfit-${index}`}
              className="w-full h-48 sm:h-56 md:h-56  rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ColorInDashboard
