import React, { useState } from "react";
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter your email and password");
      return;
    }

    const storedUser = localStorage.getItem("registeredUser");

    console.log("Stored user:", storedUser);

    if (!storedUser) {
      setError("No registered account found");
      return;
    }

    const registeredUser = JSON.parse(storedUser);

    console.log("Registered user object:", registeredUser);
    console.log("Entered email:", email);
    console.log("Entered password:", password);
    if (
      email !== registeredUser.email ||
      password !== registeredUser.password
    ) {
      setError("Invalid email or password");
      return;
    }

    setError("");
    console.log("Login successful");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 pt-2 pb-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-1">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Login to your account to continue
        </p>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/**Email */}
            <div>
              <label className="block mb-2 font-medium">Email</label>

              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 transition"
                />
              </div>
            </div>

            {/**Password */}
            <div>
              <label className="block mb-2 font-medium">Password</label>

              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 transition"
                />

                {showPassword ? (
                  <FaEye
                    className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                    onClick={() => setShowPassword((previous) => !previous)}
                  />
                ) : (
                  <FaEyeSlash
                    className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                    onClick={() => setShowPassword((previous) => !previous)}
                  />
                )}
              </div>
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2.5 mt-4 rounded-lg font-medium hover:bg-green-700 transition"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
