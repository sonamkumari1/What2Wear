import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/authSlice";

function Header() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [openMenu, setOpenMenu] = useState(false); 
  const [mobileMenu, setMobileMenu] = useState(false); 
  const navigate = useNavigate();

  const firstLetter = user?.name?.[0]?.toUpperCase();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    setOpenMenu(false);
    setMobileMenu(false);
  };

  return (
    <>
      <div className="hidden md:flex w-full bg-gray-200 rounded-full border-gray-400 py-2 px-4 items-center justify-between">
        {/* Left: Logo + Brand */}
        <div className="flex items-center space-x-3">
          <img
            src="logo.png"
            alt="Logo"
            className="w-14 md:w-20 rounded-full"
          />
          <Link to="/" className="font-bold text-xl md:text-2xl">
            What2Wear
          </Link>
        </div>

        {/* Desktop View */}
        <div className=" items-center">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setOpenMenu(!openMenu)}
                className="ml-4 px-5 py-2 bg-black text-white rounded-full"
              >
                {firstLetter}
              </button>
              {openMenu && (
                <div className="absolute mt-2 right-0 w-28 bg-white rounded-lg shadow-lg z-10">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setOpenMenu(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="ml-4 px-5 py-2 bg-black text-white rounded-full hover:bg-black/70"
            >
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div className="w-full md:hidden bg-gray-200 border-gray-400 flex justify-between rounded-full py-2 px-4 max-w-2xl">
        <div className="flex items-center space-x-3">
          <img
            src="logo.png"
            alt="Logo"
            className="w-14 md:w-20 rounded-full"
          />
          <Link to="/" className="font-bold text-xl md:text-2xl">
            What2Wear
          </Link>
        </div>
        <div className="flex items-center">
          {user ? (
            <div className="">
              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="ml-4 px-5 py-2 bg-black text-white rounded-full"
              >
                {firstLetter}
              </button>
              {mobileMenu && (
                <div className="absolute mt-2 right-0 w-28 bg-white rounded-lg shadow-lg z-10">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setMobileMenu(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="ml-4 px-5 py-2 bg-black text-white rounded-full hover:bg-black/70"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
