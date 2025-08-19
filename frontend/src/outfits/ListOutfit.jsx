// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { FaEdit, FaTrash } from "react-icons/fa";
// import { useLocation, useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// function ListOutfit() {
//   const [outfits, setOutfits] = useState([]);
//   const [selected, setSelected] = useState([]);
//   const [itemFilter, setItemFilter] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const fetchOutfits = async () => {
//       try {
//         const res = await axios.get("http://localhost:3000/api/outfits", {
//           withCredentials: true,
//         });
//         setOutfits(res.data.outfits || []);

//         if (location.state?.selectedIds) {
//           setSelected(location.state.selectedIds);
//         }
//       } catch (error) {
//         toast.error("Failed to fetch outfits");
//         console.error("Error fetching outfits:", error);
//       }
//     };
//     fetchOutfits();
//   }, [location.state]);

//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this outfit?")) return;
//     try {
//       await axios.delete(`http://localhost:3000/api/outfits/${id}`, {
//         withCredentials: true,
//       });
//       setOutfits(outfits.filter((o) => o._id !== id));
//       setSelected(selected.filter((selId) => selId !== id));
//       toast.success("Outfit deleted successfully!");
//     } catch (error) {
//       toast.error("Error deleting outfit");
//       console.error("Error deleting outfit:", error);
//     }
//   };

//   const toggleSelect = (id) => {
//     setSelected((prev) =>
//       prev.includes(id) ? prev.filter((selId) => selId !== id) : [...prev, id]
//     );
//   };

//   const handleGoToWardrobe = () => {
//     const selectedOutfits = outfits.filter((o) => selected.includes(o._id));
//     navigate("/wardrobeRoom", { state: { outfits: selectedOutfits } });
//   };

//   // Apply filter
//   const filteredOutfits = outfits.filter((e) =>
//     itemFilter ? e.item === itemFilter : true
//   );

//   return (
//     <div className="pb-12 pt-5 max-w-7xl mx-auto">
//       <h1 className="text-4xl text-center font-bold mb-10">
//         My Wardrobe Collections
//       </h1>

//       {/* Filter Buttons */}
//       <div className="flex gap-3 flex-wrap justify-center mb-16 mt-2">
//         {["All", "Shirt", "T-Shirt", "Top", "Pant", "Footwear", "Dress"].map(
//           (item) => (
//             <span
//               key={item}
//               onClick={() => setItemFilter(item === "All" ? "" : item)} // ✅ filter on click
//               className={`px-4 py-1 text-sm font-medium rounded-full cursor-pointer ${
//                 itemFilter === item
//                   ? "bg-blue-600 text-white"
//                   : "bg-black text-white"
//               }`}
//             >
//               {item}
//             </span>
//           )
//         )}
//       </div>

//       {selected.length > 0 && (
//         <div className="flex justify-center mb-6">
//           <button
//             onClick={handleGoToWardrobe}
//             className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
//           >
//             Go to Wardrobe Room ({selected.length})
//           </button>
//         </div>
//       )}

//       {/* Grid */}
//       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6 ">
//         {filteredOutfits.length > 0 ? (
//           filteredOutfits.map((outfit) => (
//             <div
//               key={outfit._id}
//               className={`bg-white rounded-xl p-3 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 relative ${
//                 selected.includes(outfit._id) ? "ring-4 ring-blue-500" : ""
//               }`}
//             >
//               {/* Checkbox */}
//               <div className="absolute top-3 right-3 rounded-full p-1 shadow">
//                 <input
//                   type="checkbox"
//                   checked={selected.includes(outfit._id)}
//                   onChange={() => toggleSelect(outfit._id)}
//                   className="w-5 h-5"
//                 />
//               </div>

//               <img
//                 src={outfit.photo}
//                 alt={outfit.item}
//                 className="w-[180px] h-[150px] object-cover rounded-lg"
//               />

//               <div className="p-3 flex items-center justify-between">
//                 <span className="px-3 py-1 text-sm text-white font-medium rounded-full bg-black">
//                   {outfit.item}
//                 </span>
//                 <div className="flex gap-4">
//                   <button
//                     onClick={() => handleDelete(outfit._id)}
//                     className="text-red-500 hover:text-red-700"
//                   >
//                     <FaTrash />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="col-span-full text-center text-gray-500">
//             No outfits found
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ListOutfit;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function ListOutfit() {
  const [outfits, setOutfits] = useState([]);
  const [selected, setSelected] = useState([]);
  const [itemFilter, setItemFilter] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchOutfits = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/outfits", {
          withCredentials: true,
        });
        setOutfits(res.data.outfits || []);

        if (location.state?.selectedIds) {
          setSelected(location.state.selectedIds);
        }
      } catch (error) {
        toast.error("Failed to fetch outfits");
        console.error("Error fetching outfits:", error);
      }
    };
    fetchOutfits();
  }, [location.state]);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this outfit?")) return;
    try {
      await axios.delete(`http://localhost:3000/api/outfits/${id}`, {
        withCredentials: true,
      });
      setOutfits(outfits.filter((o) => o._id !== id));
      setSelected(selected.filter((selId) => selId !== id));
      toast.success("Outfit deleted successfully!");
    } catch (error) {
      toast.error("Error deleting outfit");
      console.error("Error deleting outfit:", error);
    }
  };

  const toggleSelect = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((selId) => selId !== id) : [...prev, id]
    );
  };

  const handleGoToWardrobe = () => {
    const selectedOutfits = outfits.filter((o) => selected.includes(o._id));
    navigate("/wardrobeRoom", { state: { outfits: selectedOutfits } });
  };

  const filteredOutfits = outfits.filter((e) =>
    itemFilter ? e.item === itemFilter : true
  );

  return (
    <div className="pb-12 pt-5 max-w-7xl mx-auto px-4 sm:px-6">
      <h1 className="text-3xl sm:text-4xl text-center font-bold mb-10">
        My Wardrobe Collections
      </h1>

      {/* Filter Buttons */}
      <div className="flex gap-3 flex-wrap justify-center mb-10">
        {["All", "Shirt", "T-Shirt", "Top", "Pant", "Footwear", "Dress"].map(
          (item) => (
            <span
              key={item}
              onClick={() => setItemFilter(item === "All" ? "" : item)}
              className={`px-4 py-1 text-sm font-medium rounded-full cursor-pointer ${
                itemFilter === item
                  ? "bg-blue-600 text-white"
                  : "bg-black text-white"
              }`}
            >
              {item}
            </span>
          )
        )}
      </div>

      {selected.length > 0 && (
        <div className="flex justify-center mb-6">
          <button
            onClick={handleGoToWardrobe}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
          >
            Go to Wardrobe Room ({selected.length})
          </button>
        </div>
      )}

      {/* Responsive Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {filteredOutfits.length > 0 ? (
          filteredOutfits.map((outfit) => (
            <div
              key={outfit._id}
              className={`bg-white rounded-xl p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 relative ${
                selected.includes(outfit._id) ? "ring-4 ring-blue-500" : ""
              }`}
            >
              {/* Checkbox */}
              <div className="absolute top-3 right-3 p-1 ">
                <input
                  type="checkbox"
                  checked={selected.includes(outfit._id)}
                  onChange={() => toggleSelect(outfit._id)}
                  className="w-5 h-5"
                />
              </div>

              {/* Outfit Image */}
              <div className="w-full aspect-[4/3]">
                <img
                  src={outfit.photo}
                  alt={outfit.item}
                  className="w-full h-full sm:w-full sm:h-40 object-cover rounded-lg"
                />
              </div>

              {/* Card Footer */}
              <div className="p-3 flex items-center justify-between">
                <span className="px-3 py-1 text-sm text-white font-medium rounded-full bg-black">
                  {outfit.item}
                </span>
                <button
                  onClick={() => handleDelete(outfit._id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No outfits found
          </p>
        )}
      </div>
    </div>
  );
}

export default ListOutfit;
