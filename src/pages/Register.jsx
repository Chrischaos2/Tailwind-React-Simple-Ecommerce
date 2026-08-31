import React, { useState } from "react";

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error message on input change
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
      lastName: formData.lastName.trim() === "" ? "Last name is required" : "",
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

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Create Account</h1>
      {success && (
        <div className="fixed top-20 right-5 z-50 bg-green-600 text-white px-4 py-3 rounded-lg shadow-md transition duration-300">
          Your account has been created.
        </div>
      )}
      <form
        className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block mb-2 font-medium">First Name</label>

            <input
              type="text"
              name="firstName"
              placeholder="First name"
              className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm">{errors.firstName}</span>
            )}
          </div>

          <div>
            <label className="block mb-2 font-medium">Last Name</label>

            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            {errors.lastName && (
              <span className="text-red-500 text-sm">{errors.lastName}</span>
            )}
          </div>
        </div>

        <div className="mt-4">
          <label className="block mb-2 font-medium">Email</label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}
        </div>

        <div className="mt-4">
          <label className="block mb-2 font-medium">Password</label>

          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && (
            <span className="text-red-500 text-sm">{errors.password}</span>
          )}
        </div>

        <div className="mt-4">
          <label className="block mb-2 font-medium">Confirm Password</label>

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm your password"
            className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.confirmPassword}
            onChange={handleInputChange}
          />
          {errors.confirmPassword && (
            <span className="text-red-500 text-sm">
              {errors.confirmPassword}
            </span>
          )}
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};
export default Register;
