import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

function FilteredOutfits() {
  const { category } = useParams();
  const decodedCategory = decodeURIComponent(category);
  const [outfits, setOutfits] = useState([]);
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOutfits = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/outfits", {
          withCredentials: true,
        });
        console.log(res.data);

        const filtered = res.data.outfits.filter(
          (o) => o.category === decodedCategory
        );
        setOutfits(filtered);
      } catch (error) {
        console.error("Error fetching outfits:", error);
      }
    };
    fetchOutfits();
  }, [category]);

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

  return (
    <div className="pb-12 pt-5 max-w-7xl mx-auto">
      <h1 className="text-4xl text-center font-bold mb-10">
        {category} Outfits
      </h1>

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

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {outfits.length > 0 ? (
          outfits.map((outfit) => (
            <div
              key={outfit._id}
              className={`bg-white rounded-xl p-3 shadow-lg hover:shadow-xl transition-shadow duration-300 relative ${
                selected.includes(outfit._id) ? "ring-4 ring-blue-500" : ""
              }`}
            >
             <div className="absolute top-3 right-3  p-1 ">
                <input
                  type="checkbox"
                  checked={selected.includes(outfit._id)}
                  onChange={() => toggleSelect(outfit._id)}
                  className="w-5 h-5"
                />
              </div>

              <div className="w-full aspect-[4/3]">
                <img
                  src={outfit.photo}
                  alt={outfit.item}
                  className="w-[180px] h-[150px] object-cover rounded-lg"
                />
              </div>
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
            No {category} outfits found
          </p>
        )}
      </div>
    </div>
  );
}

export default FilteredOutfits;
