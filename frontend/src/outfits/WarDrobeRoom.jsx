// import { useLocation, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";

// function WarDrobeRoom() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const outfits = location.state?.outfits || []; // 👈 selected outfits

//   // Helper: categorize outfits
//   const getOutfitByCategory = (categories) => {
//     return outfits.find((o) => categories.includes(o.item));
//   };

//   const top = getOutfitByCategory(["Shirt", "T-Shirt", "Top"]);
//   const middle = getOutfitByCategory(["Pant", "Jeans", "Skirt"]);
//   const bottom = getOutfitByCategory(["Footwear", "Shoes", "Sandals"]);

//   const handleSaveOutfits = async () => {
//     try {
//       const outfitIds = outfits.map((o) => o._id); // only IDs

//       await axios.post(
//         "http://localhost:3000/api/wardrobe/save",
//         { outfits: outfitIds },
//         { withCredentials: true }
//       );

//       toast.success("Wardrobe saved successfully!");
//     } catch (error) {
//       console.error("Error saving wardrobe:", error);
//       alert("Failed to save wardrobe");
//        toast.error("Failed to save wardrobe");
//     }
//   };
//   const handleEdit = () => {
//     const selectedIds = outfits.map((o) => o._id);
//     navigate("/listOutfit", { state: { selectedIds } });
//      toast.info("Redirecting to edit outfits...");
//   };

//   return (
//     <div className="flex justify-center items-center py-6">
//       <div className="bg-white rounded-2xl shadow-lg py-6 w-[200px] flex flex-col items-center space-y-2">
//         {/* TOP section */}
//         <div className="flex items-center justify-center">
//           {top ? (
//             <img
//               src={top.photo}
//               alt={top.item}
//               className="w-40 h-42 rounded-lg shadow"
//             />
//           ) : (
//             <p className="text-gray-400">No Top Selected</p>
//           )}
//         </div>

//         {/* MIDDLE section */}
//         <div className=" flex items-center justify-center">
//           {middle ? (
//             <img
//               src={middle.photo}
//               alt={middle.item}
//               className="w-40 h-56  rounded-lg shadow"
//             />
//           ) : (
//             <p className="text-gray-400">No Pant Selected</p>
//           )}
//         </div>

//         {/* BOTTOM section */}
//         <div className="flex items-center justify-center">
//           {bottom ? (
//             <img
//               src={bottom.photo}
//               alt={bottom.item}
//               className="w-40 h-40  rounded-lg shadow"
//             />
//           ) : (
//             <p className="text-gray-400">No Footwear Selected</p>
//           )}
//         </div>
//       </div>

//       {/* Save Button */}
//       <div className="flex flex-col gap-4 ml-10">
//         <button
//           type="button"
//           onClick={handleSaveOutfits}
//           className="w-28 ml-10 bg-black text-white p-2 rounded-md hover:bg-gray-800 top-2"
//         >
//           Add Outfits
//         </button>
//         <button
//           type="button"
//           onClick={handleEdit}
//           className="w-28 ml-10 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-800"
//         >
//           Edit
//         </button>
//       </div>
//     </div>
//   );
// }

// export default WarDrobeRoom;
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function WarDrobeRoom() {
  const location = useLocation();
  const navigate = useNavigate();
  const outfits = location.state?.outfits || []; // 👈 selected outfits

  // Helper: categorize outfits
  const getOutfitByCategory = (categories) => {
    return outfits.find((o) => categories.includes(o.item));
  };

  const top = getOutfitByCategory(["Shirt", "T-Shirt", "Top"]);
  const middle = getOutfitByCategory(["Pant", "Jeans", "Skirt"]);
  const bottom = getOutfitByCategory(["Footwear", "Shoes", "Sandals"]);

  const handleSaveOutfits = async () => {
    try {
      const outfitIds = outfits.map((o) => o._id); // only IDs

      await axios.post(
        "http://localhost:3000/api/wardrobe/save",
        { outfits: outfitIds },
        { withCredentials: true }
      );

      toast.success("Wardrobe saved successfully!");
    } catch (error) {
      console.error("Error saving wardrobe:", error);
      toast.error("Failed to save wardrobe");
    }
  };

  const handleEdit = () => {
    const selectedIds = outfits.map((o) => o._id);
    navigate("/listOutfit", { state: { selectedIds } });
    toast.info("Redirecting to edit outfits...");
  };

  return (
    <div className="flex flex-col md:flex-row justify-center items-center py-6 px-4 gap-8">
      {/* Outfit Preview */}
      <div className="bg-white rounded-2xl shadow-lg py-6 px-4 w-full max-w-xs flex flex-col items-center space-y-4">
        {/* TOP section */}
        <div className="flex items-center justify-center">
          {top ? (
            <img
              src={top.photo}
              alt={top.item}
              className="w-32 sm:w-40 h-40 object-cover rounded-lg shadow"
            />
          ) : (
            <p className="text-gray-400">No Top Selected</p>
          )}
        </div>

        {/* MIDDLE section */}
        <div className="flex items-center justify-center">
          {middle ? (
            <img
              src={middle.photo}
              alt={middle.item}
              className="w-32 sm:w-40 h-52 object-cover rounded-lg shadow"
            />
          ) : (
            <p className="text-gray-400">No Pant Selected</p>
          )}
        </div>

        {/* BOTTOM section */}
        <div className="flex items-center justify-center">
          {bottom ? (
            <img
              src={bottom.photo}
              alt={bottom.item}
              className="w-32 sm:w-40 h-40 object-cover rounded-lg shadow"
            />
          ) : (
            <p className="text-gray-400">No Footwear Selected</p>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col gap-4 w-full md:w-auto items-center md:items-start">
        <button
          type="button"
          onClick={handleSaveOutfits}
          className="w-40 bg-black text-white p-2 rounded-md hover:bg-gray-800"
        >
          Add Outfits
        </button>
        <button
          type="button"
          onClick={handleEdit}
          className="w-40 bg-blue-600 text-white p-2 rounded-md hover:bg-blue-800"
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default WarDrobeRoom;
