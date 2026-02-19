import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submitHandler(e) {
    e.preventDefault();

    const res = await axios.post(
      "http://localhost:3000/api/auth/login",
      {
        email,
        password,
      },
      { withCredentials: true },
    );

    console.log(res.data);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-900 via-slate-900 to-black px-4">
      <form
        onSubmit={submitHandler}
        className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8 space-y-6"
      >
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-white tracking-tight">
            Welcome Back
          </h1>
          <p className="text-gray-300 text-sm">
            Login to continue to your account
          </p>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="text-sm text-gray-300">Email or Username</label>
          <input
            onInput={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 
        text-white placeholder-gray-400 
        focus:outline-none focus:ring-2 focus:ring-indigo-500 
        focus:border-indigo-500 transition duration-300"
          />
        </div>

        {/* Password */}
        <div className="space-y-2">
          <label className="text-sm text-gray-300">Password</label>
          <input
            onInput={(e) => setPassword(e.target.value)}
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 
        text-white placeholder-gray-400 
        focus:outline-none focus:ring-2 focus:ring-indigo-500 
        focus:border-indigo-500 transition duration-300"
          />
        </div>

        {/* Remember + Forgot */}
        {/* <div className="flex items-center justify-between text-sm text-gray-400">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input type="checkbox" className="accent-indigo-500" />
            <span>Remember me</span>
          </label>

          <button
            type="button"
            className="hover:text-indigo-400 transition duration-300"
          >
            Forgot password?
          </button>
        </div> */}

        {/* Login Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-xl font-semibold text-white 
      bg-linear-to-r from-indigo-600 to-purple-600 
      hover:from-indigo-500 hover:to-purple-500 
      shadow-lg hover:shadow-indigo-500/40 
      transition-all duration-300 active:scale-[0.98]"
        >
          Login
        </button>

        {/* Divider */}
        {/* <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-white/20"></div>
          <span className="text-gray-400 text-sm">OR</span>
          <div className="flex-1 h-px bg-white/20"></div>
        </div> */}

        {/* Social Login */}
        {/* <button
          type="button"
          className="w-full py-3 rounded-xl bg-white text-black font-medium 
      hover:bg-gray-200 transition duration-300"
        >
          Continue with Google
        </button> */}

          <p className="text-center text-gray-400 text-sm">
            Don't have an account?
      <Link to={'/register'} className="text-indigo-400 hover:text-indigo-300 cursor-pointer ml-1">
        sign up
      </Link>
      </p>
      </form>
        
    </div>
  );
};

export default Login;
