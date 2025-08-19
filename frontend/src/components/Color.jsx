// import React from "react";

// const outfits = [
//   {
//     image:
//       "https://i.pinimg.com/736x/fe/88/e6/fe88e6be03af2188f8474ca2e0e88e6d.jpg",
//   },
//   {
//     image:
//       "https://i.pinimg.com/736x/d0/83/47/d08347512f3624e304b30b3553dd2eca.jpg",
//   },
//   {
//     image:
//       "https://i.pinimg.com/736x/35/79/36/357936b4d056b79e808be455fcf38ec8.jpg",
//   },
//   {
//     image:
//       "https://i.pinimg.com/736x/d1/2a/48/d12a48374f8820e298b12b8aafd8a5a2.jpg",
//   },
//   {
//     image:
//       "https://i.pinimg.com/736x/d7/39/df/d739dfb4980aa5a00994eb135200a392.jpg",
//   },
//   {
//     image:
//       "https://i.pinimg.com/736x/5b/56/90/5b569030a786b3ea3e4dcc2c577cd4bf.jpg",
//   },
//   {
//     image:"https://i.pinimg.com/1200x/bc/21/af/bc21aff72f91c005466c0e0acaa3a77e.jpg",
//   },
//   {
//     image:
//       "https://i.pinimg.com/736x/c0/9d/7b/c09d7b4b2f044c47bfae4e1158227946.jpg",
//   },
//   {
//     image:
//       "https://i.pinimg.com/736x/39/ad/1e/39ad1e9bcc0fbea573837fe8ed67c5cd.jpg",
//   },
//   {
//     image:
//       "https://i.pinimg.com/736x/e1/2a/f7/e12af76f8761e0c3eded7b6c23a56cf6.jpg",
//   },
//   {
//     image:
//       "https://i.pinimg.com/736x/99/97/2d/99972d90fbd3eef8c63f4858229cbfe7.jpg",
//   },
//   {
//     image:
//       "https://i.pinimg.com/736x/2c/da/f9/2cdaf9c6dea0c5419b532434df6eb0cb.jpg",
//   },
//   {
//     image:
//       "https://i.pinimg.com/736x/b4/92/b7/b492b7f7251e5361071c4b177021a018.jpg",
//   },
//   {
//     image:"https://i.pinimg.com/736x/b4/8c/6f/b48c6f77940d2b09a5492bd068829590.jpg",
//   },
//   {
//     image:
//       "https://i.pinimg.com/736x/50/54/4b/50544b5ea04d346e00d195c47fcad6a6.jpg",
//   },
//   {
//     image:
//       "https://i.pinimg.com/736x/60/c6/9c/60c69ce60c11e3aab42f726863efb581.jpg",
//   },
//   {
//     image:
//       "https://i.pinimg.com/1200x/25/22/3b/25223bfcc37afe6898ab66d99fafe5c9.jpg",
//   },
//   {
//     image:
//       "https://i.pinimg.com/1200x/4f/f9/67/4ff967a83e89011d3bbca75c242aed38.jpg",
//   },
//   {
//     image:
//       "https://i.pinimg.com/1200x/0a/05/eb/0a05ebe5c8efd434cac4ab5fdcb57f29.jpg",
//   },
//   {
//     image:
//       "https://i.pinimg.com/736x/2c/93/a6/2c93a621b4657dd3d293f9479396e2f2.jpg",
//   },
//   {
//     image:
//       "https://i.pinimg.com/736x/4c/9f/f0/4c9ff08ab9c5c1dbc0c78569a65845f1.jpg",
//   },
//   {
//     image:
//       "https://i.pinimg.com/736x/45/99/4b/45994b8e76394ca8d721e93dd153d77e.jpg",
//   },
//   {
//     image:"https://i.pinimg.com/1200x/53/92/d5/5392d5d5d12e1859ebe048fb1d3d6275.jpg",
//   },

//   {
//     image:
//       "https://i.pinimg.com/736x/cf/63/a7/cf63a74b472fdf7767f5cd29a53d7585.jpg",
//   },
//   {
//     image:
//       "https://i.pinimg.com/736x/0e/3e/5e/0e3e5eb2288ec4e81b0b91682724414e.jpg",
//   },
//   {
//     image:
//       "https://i.pinimg.com/1200x/fe/69/24/fe69245123d8a1b4fa2ce35ca73884bb.jpg",
//   },
//   {
//     image:
//       "https://i.pinimg.com/1200x/2f/05/d9/2f05d919b9de045f9e34219d83a06444.jpg",
//   },

//   {
//     image:"https://i.pinimg.com/736x/69/0c/20/690c200524f5b71be5a6ca71ce4d544b.jpg",
//   },

// ];

// function Color() {
//   return (
//     <div className="py-10 max-w-7xl mx-auto">
//       {/* Header Row */}
//       <div className="flex items-center justify-center mb-16">
//         <h1 className="text-4xl font-bold ">Some Color Outfit Tips</h1>

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
//   );
// }

// export default Color;
import React from "react";

const outfits = [
  {
    image:
      "https://i.pinimg.com/736x/fe/88/e6/fe88e6be03af2188f8474ca2e0e88e6d.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/d0/83/47/d08347512f3624e304b30b3553dd2eca.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/35/79/36/357936b4d056b79e808be455fcf38ec8.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/d1/2a/48/d12a48374f8820e298b12b8aafd8a5a2.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/d7/39/df/d739dfb4980aa5a00994eb135200a392.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/5b/56/90/5b569030a786b3ea3e4dcc2c577cd4bf.jpg",
  },
  {
    image:
      "https://i.pinimg.com/1200x/bc/21/af/bc21aff72f91c005466c0e0acaa3a77e.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/c0/9d/7b/c09d7b4b2f044c47bfae4e1158227946.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/39/ad/1e/39ad1e9bcc0fbea573837fe8ed67c5cd.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/e1/2a/f7/e12af76f8761e0c3eded7b6c23a56cf6.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/99/97/2d/99972d90fbd3eef8c63f4858229cbfe7.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/2c/da/f9/2cdaf9c6dea0c5419b532434df6eb0cb.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/b4/92/b7/b492b7f7251e5361071c4b177021a018.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/b4/8c/6f/b48c6f77940d2b09a5492bd068829590.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/50/54/4b/50544b5ea04d346e00d195c47fcad6a6.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/60/c6/9c/60c69ce60c11e3aab42f726863efb581.jpg",
  },
  {
    image:
      "https://i.pinimg.com/1200x/25/22/3b/25223bfcc37afe6898ab66d99fafe5c9.jpg",
  },
  {
    image:
      "https://i.pinimg.com/1200x/4f/f9/67/4ff967a83e89011d3bbca75c242aed38.jpg",
  },
  {
    image:
      "https://i.pinimg.com/1200x/0a/05/eb/0a05ebe5c8efd434cac4ab5fdcb57f29.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/2c/93/a6/2c93a621b4657dd3d293f9479396e2f2.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/4c/9f/f0/4c9ff08ab9c5c1dbc0c78569a65845f1.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/45/99/4b/45994b8e76394ca8d721e93dd153d77e.jpg",
  },
  {
    image:
      "https://i.pinimg.com/1200x/53/92/d5/5392d5d5d12e1859ebe048fb1d3d6275.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/cf/63/a7/cf63a74b472fdf7767f5cd29a53d7585.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/0e/3e/5e/0e3e5eb2288ec4e81b0b91682724414e.jpg",
  },
  {
    image:
      "https://i.pinimg.com/1200x/fe/69/24/fe69245123d8a1b4fa2ce35ca73884bb.jpg",
  },
  {
    image:
      "https://i.pinimg.com/1200x/2f/05/d9/2f05d919b9de045f9e34219d83a06444.jpg",
  },
  {
    image:
      "https://i.pinimg.com/736x/69/0c/20/690c200524f5b71be5a6ca71ce4d544b.jpg",
  },
];

function Color() {
  return (
    <div className="py-10 max-w-7xl mx-auto px-4">
      {/* Header Row */}
      <div className="flex items-center justify-center mb-16">
        <h1 className="text-4xl font-bold text-center">
          Some Color Outfit Tips
        </h1>
      </div>

      {/* Outfit Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {outfits.map((outfit, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-3 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex justify-center"
          >
            <img
              src={outfit.image}
              alt={`outfit-${index}`}
              className="w-full h-[500px]  rounded-lg sm:h-72 lg:w-[300px] lg:h-[300px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Color;
