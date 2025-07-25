import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; // ✅ added

const Login = () => {
  const navigate = useNavigate(); // ✅ init

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);

    // Save user data correctly
    localStorage.setItem("email", data.email);
    localStorage.setItem("password", data.password);
    localStorage.setItem("user", JSON.stringify("Logdin")); // ✅ JSON valid

    // ✅ redirect to /course
    navigate("/course");

     window.location.reload();
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white/5 backdrop-blur-md text-white rounded-2xl shadow-2xl border border-white/10">
        <h2 className="text-3xl font-bold text-center">
          Sign in to <span className="text-cyan-300">WebVeda</span>
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              {...register("email", { required: "Email is required" })}
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder:text-gray-300"
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              {...register("password", { required: "Password is required" })}
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 text-white placeholder:text-gray-300"
            />
            {errors.password && (
              <p className="text-red-400 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all text-white font-medium py-2 rounded-lg"
          >
            Sign In
          </button>
        </form>

        <p className="text-sm text-center text-gray-300">
          Hey! Welcome to WebVeda
        </p>
      </div>
    </div>
  );
};

export default Login;
