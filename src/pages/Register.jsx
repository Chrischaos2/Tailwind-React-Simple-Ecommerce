import React, { useEffect, useState } from "react";

import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaCheck,
  FaCircle,
} from "react-icons/fa";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [success, setSuccess] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const nameRegex = /^[A-Za-z]+$/;

  const validateForm = () => {
    const newErrors = {
      firstName:
        formData.firstName.trim() === ""
          ? "First name is required"
          : !nameRegex.test(formData.firstName)
            ? "First name should only contain letters"
            : "",

      lastName:
        formData.lastName.trim() === ""
          ? "Last name is required"
          : !nameRegex.test(formData.lastName)
            ? "Last name should only contain letters"
            : "",

      email:
        formData.email.trim() === ""
          ? "Email is required"
          : !emailRegex.test(formData.email)
            ? "Please enter a valid email"
            : "",

      password:
        formData.password.trim() === ""
          ? "Password is required"
          : formData.password.length < 8
            ? "Password must be at least 8 characters long"
            : !/[A-Z]/.test(formData.password)
              ? "Password must contain at least one uppercase letter"
              : !/[a-z]/.test(formData.password)
                ? "Password must contain at least one lowercase letter"
                : !/[0-9]/.test(formData.password)
                  ? "Password must contain at least one number"
                  : !/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)
                    ? "Password must contain at least one special character"
                    : "",

      confirmPassword:
        formData.confirmPassword.trim() === ""
          ? "Please confirm your password"
          : formData.password !== formData.confirmPassword
            ? "Passwords do not match"
            : "",
    };

    setErrors(newErrors);

    return Object.values(newErrors).every((error) => error === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setSuccess(true);
    }
  };

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [success]);

  {
    /*Password Strength*/
  }
  const hasMinLength = formData.password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(formData.password);
  const hasLowerCase = /[a-z]/.test(formData.password);
  const hasNumber = /[0-9]/.test(formData.password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(formData.password);

  return (
    <div className="min-h-screen bg-gray-50 px-6 pt-2 pb-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-center text-green-600 mb-1">
          Create Account
        </h1>

        <p className="text-center text-gray-500 mb-6 text-sm">
          Please fill in the form to create an account.
        </p>

        {success && (
          <div className="fixed top-20 right-5 z-50 bg-green-600 text-white px-4 py-3 shadow-md transition duration-300">
            Your account has been created.
          </div>
        )}

        <form
          className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-200"
          onSubmit={handleSubmit}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Name */}
            <div>
              <label className="block mb-2 font-medium">First Name</label>

              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 transition"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>

              {errors.firstName && (
                <span className="text-red-500 text-sm">{errors.firstName}</span>
              )}
            </div>

            {/* Last Name */}
            <div>
              <label className="block mb-2 font-medium">Last Name</label>

              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 transition"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>

              {errors.lastName && (
                <span className="text-red-500 text-sm">{errors.lastName}</span>
              )}
            </div>
          </div>

          {/* Email */}
          <div className="mt-4">
            <label className="block mb-2 font-medium">Email</label>

            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 transition"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </div>

          {/* Password */}
          <div className="mt-4">
            <label className="block mb-2 font-medium">Password</label>

            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 transition"
                value={formData.password}
                onChange={handleInputChange}
              />
              <button
                type="button"
                onClick={() => setShowPassword((previous) => !previous)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {errors.password && (
              <span className="text-red-500 text-sm">{errors.password}</span>
            )}
          </div>

          {/*Display Password requirements*/}
          {formData.password && (
            <div className="mt-2 text-sm space-y-1">
              <p className={hasMinLength ? "text-green-600" : "text-gray-500"}>
                {hasMinLength ? <FaCheck /> : <FaCircle />} At least 8
                Characters
              </p>
              <p className={hasUpperCase ? "text-green-600" : "text-gray-500"}>
                {hasUpperCase ? <FaCheck /> : <FaCircle />} One Uppercase letter
              </p>
              <p className={hasLowerCase ? "text-green-600" : "text-gray-500"}>
                {hasLowerCase ? <FaCheck /> : <FaCircle />} One lowercase letter
              </p>
              <p className={hasNumber ? "text-green-600" : "text-gray-500"}>
                {hasNumber ? <FaCheck /> : <FaCircle />} Has one Number
              </p>
              <p className={hasSpecial ? "text-green-600" : "text-gray-500"}>
                {hasNumber ? <FaCheck /> : <FaCircle />} Has one Special
                character
              </p>
            </div>
          )}

          {/* Confirm Password */}
          <div className="mt-4">
            <label className="block mb-2 font-medium">Confirm Password</label>

            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm your password"
                className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 transition"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword((previous) => !previous)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">
                {errors.confirmPassword}
              </span>
            )}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
