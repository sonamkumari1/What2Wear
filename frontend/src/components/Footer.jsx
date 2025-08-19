// import React from "react";

// function Footer() {
//   return (
//     <footer className="bg-gray-200  mt-12 ">
//       <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-8 px-28">
//         <div>
//           <h2 className="text-2xl font-bold">MyWardrobe</h2>
//           <p className=" text-md mt-4 ">
//             Your personal style companion — choose, match, and shine every day!
//           </p>
//         </div>

//         <div>
//           <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
//           <ul className="space-y-2 ">
//             <li>
//               <a href="/">Home</a>
//             </li>
//             <li>
//               <a href="/listOutfit">My Wardrobe</a>
//             </li>
//             <li>
//               <a href="#dailyDose">Daily Dose</a>
//             </li>
//             <li>
//               <a href="#form">Contact</a>
//             </li>
//           </ul>
//         </div>

//         {/* Newsletter */}
//         <div>
//           <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
//           <form className="flex flex-col sm:flex-row sm:items-center gap-2">
//             <input
//               type="email"
//               placeholder="Enter your email"
//               className="px-4 py-2 rounded-lg border border-gray-500 focus:outline-none text-black"
//             />
//             <button
//               type="submit"
//               className="px-4 py-2 rounded-lg bg-black text-white transition"
//             >
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-gray-700 mt-8 py-4 text-center text-sm ">
//         © {new Date().getFullYear()} MyWardrobe. All rights reserved.
//       </div>
//     </footer>
//   );
// }

// export default Footer;
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-200 mt-12">
      <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-6 sm:px-12 lg:px-28">
        {/* Brand / Info */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">MyWardrobe</h2>
          <p className="text-md mt-4 max-w-sm mx-auto md:mx-0">
            Your personal style companion — choose, match, and shine every day!
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/listOutfit" className="hover:underline">
                My Wardrobe
              </a>
            </li>
            <li>
              <a href="#dailyDose" className="hover:underline">
                Daily Dose
              </a>
            </li>
            <li>
              <a href="#form" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
          <form className="flex flex-col sm:flex-row sm:items-center gap-2 justify-center md:justify-start">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg border border-gray-500 focus:outline-none text-black w-full sm:w-auto"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-black text-white transition hover:bg-black/80 w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-400 mt-8 py-4 text-center text-sm px-4">
        © {new Date().getFullYear()} MyWardrobe. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
