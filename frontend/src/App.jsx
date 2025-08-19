import { Route, Routes } from "react-router-dom";
import Layout from "./MainLayout/Layout";
import HomePage from "./pages/HomePage";

import AddOutfit from "./outfits/AddOutfit";
import ListOutfit from "./outfits/ListOutfit";
import WarDrobeRoom from "./outfits/WarDrobeRoom";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Profile from "./components/Auth/Profile";
import Color from "./components/Color";
import { loginSuccess } from "./redux/slices/authSlice";
import FilteredOutfits from "./components/FilteredOutfits";

import { ToastContainer } from "react-toastify";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");
    if (user && token) {
      dispatch(loginSuccess({ user, token }));
    }
  }, [dispatch]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/addOutfit" element={<AddOutfit />} />
          <Route path="/listOutfit" element={<ListOutfit />} />

          <Route path="/wardrobeRoom" element={<WarDrobeRoom />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/color" element={<Color />} />
          <Route
            path="/filtered-outfits/:category"
            element={<FilteredOutfits />}
          />
        </Route>
      </Routes>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
