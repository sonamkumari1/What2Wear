// import React, { useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// function AddOutfit() {
//   const [formData, setFormData] = useState({
//     category: "",
//     gender: "",
//     item: "",
//     photo: null,
//   });
//   const [message, setMessage] = useState("");

//   // Handle text/select inputs
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // Handle file input
//   const handleFileChange = (e) => {
//     setFormData({ ...formData, photo: e.target.files[0] });
//   };

//   // Handle form submit
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Prepare form data for multipart upload
//     const data = new FormData();
//     data.append("category", formData.category);
//     data.append("gender", formData.gender);
//     data.append("item", formData.item);
//     data.append("photo", formData.photo);

//     try {
//       const res = await axios.post("http://localhost:3000/api/outfits/add", data, {
//         withCredentials: true,
//       });
//        toast.success(res.data.message || "Outfit added successfully!");
//       // setMessage(res.data.message);
//       setFormData({ category: "", gender: "", item: "", photo: null });
//     } catch (err) {
//        toast.error(err.response?.data?.message || "Something went wrong");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto bg-white p-10 my-10 rounded-lg shadow-md">
//       <h2 className="text-xl font-bold mb-4">Add Outfit</h2>

//       <form className="space-y-4" onSubmit={handleSubmit}>
//         <div>
//           <label className="block mb-1 font-medium">Category</label>
//           <select
//             name="category"
//             value={formData.category}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-md p-2"
//           >
//             <option value="">Select Category</option>
//             <option>Everyday Outfit</option>
//             <option>Weekend Outfit</option>
//             <option>Work Outfit</option>
//             <option>Party Outfit</option>
//           </select>
//         </div>

//         <div>
//           <label className="block mb-1 font-medium">Gender</label>
//           <select
//             name="gender"
//             value={formData.gender}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-md p-2"
//           >
//             <option value="">Choose Gender</option>
//             <option>Men</option>
//             <option>Women</option>
//           </select>
//         </div>

//         <div>
//           <label className="block mb-1 font-medium">Item</label>
//           <select
//             name="item"
//             value={formData.item}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded-md p-2"
//           >
//             <option value="">Select Item</option>
//             <option>Shirt</option>
//             <option>T-Shirt</option>
//             <option>Top</option>
//             <option>Pant</option>
//             <option>Footwear</option>
            
//             <option>Dress</option>
//           </select>
//         </div>

//         <div>
//           <label className="block mb-1 font-medium">Upload Photo</label>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleFileChange}
//             className="w-full border border-gray-300 rounded-md p-2 file:mr-4 file:py-2 file:px-4 
//                        file:rounded-md file:border-0 file:text-sm file:font-semibold
//                        file:bg-black file:text-white hover:file:bg-gray-800"
//           />
//         </div>
//         {message && <p className="mb-4 text-green-600">{message}</p>}
//         <button
//           type="submit"
//           className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800"
//         >
//           Add Item
//         </button>
//       </form>

      
//     </div>
//   );
// }

// export default AddOutfit;

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function AddOutfit() {
  const [formData, setFormData] = useState({
    category: "",
    gender: "",
    item: "",
    photo: null,
  });
  const [message, setMessage] = useState("");

  // Handle text/select inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file input
  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("category", formData.category);
    data.append("gender", formData.gender);
    data.append("item", formData.item);
    data.append("photo", formData.photo);

    try {
      const res = await axios.post("http://localhost:3000/api/outfits/add", data, {
        withCredentials: true,
      });
      toast.success(res.data.message || "Outfit added successfully!");
      setFormData({ category: "", gender: "", item: "", photo: null });
    } catch (err) {
      toast.error(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="max-w-md w-full sm:w-[90%] mx-auto bg-white p-6 sm:p-8 md:p-10 my-6 sm:my-8 md:my-10 rounded-lg shadow-md">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center md:text-left">
        Add Outfit
      </h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Category */}
        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 text-sm sm:text-base"
          >
            <option value="">Select Category</option>
            <option>Everyday Outfit</option>
            <option>Weekend Outfit</option>
            <option>Work Outfit</option>
            <option>Party Outfit</option>
          </select>
        </div>

        {/* Gender */}
        <div>
          <label className="block mb-1 font-medium">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 text-sm sm:text-base"
          >
            <option value="">Choose Gender</option>
            <option>Men</option>
            <option>Women</option>
          </select>
        </div>

        {/* Item */}
        <div>
          <label className="block mb-1 font-medium">Item</label>
          <select
            name="item"
            value={formData.item}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md p-2 text-sm sm:text-base"
          >
            <option value="">Select Item</option>
            <option>Shirt</option>
            <option>T-Shirt</option>
            <option>Top</option>
            <option>Pant</option>
            <option>Footwear</option>
            <option>Dress</option>
          </select>
        </div>

        {/* File Upload */}
        <div>
          <label className="block mb-1 font-medium">Upload Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded-md p-2 text-sm sm:text-base file:mr-4 file:py-2 file:px-4 
                       file:rounded-md file:border-0 file:text-sm file:font-semibold
                       file:bg-black file:text-white hover:file:bg-gray-800"
          />
        </div>

        {message && <p className="mb-4 text-green-600">{message}</p>}

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800 text-sm sm:text-base"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}

export default AddOutfit;
