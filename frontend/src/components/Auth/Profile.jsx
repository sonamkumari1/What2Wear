
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("https://what2wear-bsr8.onrender.com/api/user/profile", {
          withCredentials: true,
        });
        if (res.data.success) {
          setUser(res.data.user);
        } else {
          setError("Failed to fetch profile");
        }
      } catch (err) {
        console.error("Profile fetch error:", err.message);
        setError("Error fetching profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleDelete = async (wardrobeId) => {
    if (!window.confirm("Are you sure you want to delete this wardrobe?")) return;

    try {
      const res = await axios.delete(`https://what2wear-bsr8.onrender.com/api/wardrobe/${wardrobeId}`, {
        withCredentials: true,
      });

      if (res.data.success) {
        setUser((prevUser) => ({
          ...prevUser,
          wardrobes: prevUser.wardrobes.filter((w) => w._id !== wardrobeId),
        }));
        toast.success("Wardrobe deleted successfully!");
      } else {
        toast.error("Failed to delete wardrobe");
      }
    } catch (err) {
      console.error("Delete error:", err.message);
      toast.error("Error deleting wardrobe");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading profile...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!user) return <p className="text-center mt-10 text-red-500">No user data</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Profile Header */}
      <div className="p-6 flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start">
        <div className="relative">
          <img
            src={user.photoUrl || "https://github.com/shadcn.png"}
            alt="Profile"
            className="h-28 w-28 sm:h-32 sm:w-32 rounded-full object-cover border-4 border-gray-200"
          />
        </div>
        <div className="flex-1 w-full text-center md:text-left">
          <p className="text-lg font-semibold text-gray-900">
            Name: <span className="font-normal text-gray-600">{user.name}</span>
          </p>
          <p className="text-lg font-semibold text-gray-900 mt-2">
            Email: <span className="font-normal text-gray-600">{user.email}</span>
          </p>
          <p className="text-lg font-semibold text-gray-900 mt-2">
            Role: <span className="font-normal text-gray-600">{user.role || "User"}</span>
          </p>
        </div>
      </div>

      {/* Wardrobe Section */}
      <h2 className="text-xl mt-8 font-bold text-gray-800 mb-4 text-center md:text-left">
        My Saved Wardrobes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mt-6">
        {user.wardrobes.map((wardrobe, wIndex) => (
          <div
            key={wIndex}
            className="bg-gray-50 p-4 rounded-lg shadow relative"
          >
            <button
              onClick={() => handleDelete(wardrobe._id)}
              className="absolute top-3 right-3 text-red-500 hover:text-red-700"
            >
              <FaTrash />
            </button>
            <h3 className="font-semibold text-gray-700 mb-4">
              Wardrobe #{wIndex + 1}
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {wardrobe.outfits && wardrobe.outfits.length > 0 ? (
                wardrobe.outfits.map((outfit, oIndex) => (
                  <div
                    key={oIndex}
                    className="bg-white shadow rounded-lg p-3 flex flex-col items-center w-36 sm:w-40"
                  >
                    <img
                      src={
                        outfit.photo ||
                        outfit.photoUrl ||
                        "https://via.placeholder.com/150"
                      }
                      alt={outfit.item}
                      className="h-28 w-32 sm:h-30 sm:w-48 object-cover rounded-md"
                    />
                    <p className="mt-2 text-gray-700 text-xs sm:text-sm text-center">
                      {outfit.item}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center w-full">
                  No outfits in this wardrobe.
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
