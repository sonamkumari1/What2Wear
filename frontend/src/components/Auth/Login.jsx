import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  loginFail,
  loginStart,
  loginSuccess,
} from "../../redux/slices/authSlice";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(loginStart());
      const res = await axios.post(
        "https://what2wear-bsr8.onrender.com/api/user/login",
        { email, password },
        { withCredentials: true }
      );
      dispatch(loginSuccess(res.data));
      toast.success("Logged in successfully!");
      navigate("/");
    } catch (error) {
      dispatch(loginFail(error.response?.data?.error || "Login failed"));
      toast.error(error.response?.data?.error || "Login failed");
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 px-4 mt-10">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-sm">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 text-center">
          Login
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-medium text-sm sm:text-base">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 sm:p-3 text-sm sm:text-base"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-sm sm:text-base">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-2 sm:p-3 text-sm sm:text-base"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white p-2 sm:p-3 rounded-md text-sm sm:text-base hover:bg-gray-800 transition"
          >
            Login
          </button>
          <p className="text-xs sm:text-sm text-gray-600 text-center mt-4">
            Don’t have an account?{" "}
            <a href="/register" className="text-black hover:underline">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
