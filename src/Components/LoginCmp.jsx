import React, { useState } from "react";
import PopUpComponent from "./PopUpComponent";
import { useNavigate } from "react-router-dom";

function LoginCmp() {
  const [msg, setMsg] = useState("");
  const [userName, setUserName] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();

  const verifyUser = (e) => {
    e.preventDefault(); // prevent form reload

    const username = userName.trim();
    const password = pwd.trim();

    let newMsg = "";

    if (username !== "imawadh" && password !== "123") {
      newMsg = "Both Username and Password are incorrect";
    } else if (username !== "imawadh") {
      newMsg = "Missing Correct User Name";
    } else if (password !== "123") {
      newMsg = "Missing Correct Pwd";
    } else {
      newMsg = "Login Successful";
      setTimeout(() => {
        navigate("/"); // redirect after 2 seconds
      }, 2000);
    }

    // Reset message first to force re-render even for repeated errors
    setMsg("");
    setTimeout(() => setMsg(newMsg), 10);

    // Clear input fields
    setUserName("");
    setPwd("");
  };

  return (
    <>
      {/* Popup renders here */}
      {msg && <PopUpComponent msg={msg} />}

      <form
        className="max-w-sm mx-auto mt-6 p-6 border rounded-lg shadow-md bg-white"
        onSubmit={verifyUser}
      >
        {/* User Name */}
        <div className="mb-4 text-left">
          <label htmlFor="username" className="block font-medium mb-1">
            User Name
          </label>
          <input type="text" id="username" name="username" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Enter your user name" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required
          />
        </div>

        {/* Password */}
        <div className="mb-6 text-left">
          <label htmlFor="password" className="block font-medium mb-1">
            Password
          </label>
          <input type="password" id="password" name="password" value={pwd} onChange={(e) => setPwd(e.target.value)} placeholder="Enter password" className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required
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
    </>
  );
}

export default LoginCmp;
