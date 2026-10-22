
import React from "react";
import { useForm } from "react-hook-form";

const HookForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();

  const formSubmit = (data) => {
    console.log(data);
    alert("Signup successful!");
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Signup Form
        </h2>

        {/* Name */}
        <input
          type="text"
          placeholder="Enter name"
          autoFocus
          {...register("name", {
            required: "Name is mandatory"
          })}
          className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1 mb-3">
            {errors.name.message}
          </p>
        )}

        {/* Age */}
        <input
          type="number"
          placeholder="Enter age"
          {...register("age", {
            required: "Age is mandatory",
            valueAsNumber: true,
            min: {
              value: 18,
              message: "Age should be at least 18"
            }
          })}
          className="w-full p-3 mt-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.age && (
          <p className="text-red-500 text-sm mt-1 mb-3">
            {errors.age.message}
          </p>
        )}

        {/* Email */}
        <input
          type="email"
          placeholder="Enter email"
          {...register("email", {
            required: "Email is mandatory",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@gmail\.com$/,
              message: "Enter a valid Gmail address"
            }
          })}
          className="w-full p-3 mt-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1 mb-3">
            {errors.email.message}
          </p>
        )}

        {/* Password */}
        <input
          type="password"
          placeholder="Enter password"
          {...register("password", {
            required: "Password is mandatory",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long"
            }
          })}
          className="w-full p-3 mt-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1 mb-3">
            {errors.password.message}
          </p>
        )}

        <button
          type="submit"
          className="w-full mt-6 bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 active:scale-95 transition duration-200"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default HookForm;
