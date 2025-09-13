import React from "react";

function LoginCmp() {
  return (
    
      <form className="max-w-sm mx-auto mt-6 p-6 border rounded-lg shadow-md bg-white">
      
      {/* User ID / Email */}
      <div className="mb-4 text-left">
        <label htmlFor="email" className="block font-medium mb-1">
          Email / User ID
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Enter your email or user ID"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Password */}
      <div className="mb-6 text-left">
        <label htmlFor="password" className="block font-medium mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter password"
          className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-700 text-white font-bold py-2 rounded hover:bg-blue-800 transition"
      >
        Login
      </button>
      </form>
     

  );
}

export default LoginCmp;
