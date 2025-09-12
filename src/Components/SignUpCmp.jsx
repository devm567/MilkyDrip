import React from "react";

function SignUpCmp() {
    let verifyUser = ()=>{
        // let username = document.getElementById("username").value;
        // let pwd = document.getElementById("password").value;
        // let cnfPwd = document.getElementById("confirmPassword").value;
        // let fullName = document.getElementById("name").value;
        // for (let i = 0; i < localStorage.length; i++) {
        //     const key = localStorage.key(i);
        //     if(key===username){
        //         console.log("User Alreday Present .... ");
        //     }else{
                
        //     }
        // }

    }
    return (
      <form className="max-w-sm mx-auto mt-6 p-6 border rounded-lg shadow-md bg-white">
       

        {/* Username */}
        <div className="mb-4 text-left">
          <label htmlFor="username" className="block font-medium mb-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Name */}
        <div className="mb-4 text-left">
          <label htmlFor="name" className="block font-medium mb-1">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your full name"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4 text-left">
          <label htmlFor="password" className="block font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter password"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Confirm Password */}
        <div className="mb-6 text-left">
          <label htmlFor="confirmPassword" className="block font-medium mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Re-enter password"
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit" onClick={()=>verifyUser}
          className="w-full bg-green-700 text-white font-bold py-2 rounded hover:bg-green-800 transition"
        >
          Sign Up
        </button>
      </form>
    );
}

export default SignUpCmp;
