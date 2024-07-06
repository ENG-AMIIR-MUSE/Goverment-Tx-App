import React from "react";
import logo from "../assets/logo2.png";

export default function Register() {
  return (
    <div className="flex justify-center h-screen items-center">
      <div className="w-full max-w-5xl shadow-2xl p-4 mx-auto  bg-white border border-gray-200 rounded-lg  max-h-max sm:p-6 md:p-9 px-4 sm:px-6">
        <div className="flex justify-center h-[156px] mb-6">
          <img src={logo} className="h-full object-cover" alt="Logo" />
        </div>
        <form className="grid gap-3 grid-cols-1 sm:grid-cols-3">
          <div className="w-full flex flex-col gap-3">
            <input
              type="text"
              className="border border-gray-300 p-3 rounded-md w-full"
              placeholder="Enter Business Name"
            />
            <input
              type="text"
              className="border border-gray-300 p-3 rounded-md w-full"
              placeholder="Enter Phone"
            />
            <input
              type="email"
              className="border border-gray-300 p-3 rounded-md w-full"
              placeholder="Enter Email"
            />
          </div>
         <div className="w-full flex flex-col gap-3">
         <input
            type="text"
            className="border border-gray-300 p-3 rounded-md w-full"
            placeholder="Enter Type"
          />
          <input
            type="text"
            className="border border-gray-300 p-3 rounded-md w-full"
            placeholder="Enter Main Income"
          />
          <input
            type="text"
            className="border border-gray-300 p-3 rounded-md w-full"
            placeholder="Enter Max Income"
          />
        
         </div>
         
          <div className="w-full  flex flex-col gap-3">
          <input
            type="text"
            className="border border-gray-300 p-3 w-full rounded-md"
            placeholder="Enter City"
          />
            <input
              type="text"
              className="border border-gray-300 p-3 rounded-md w-full"
              placeholder="Enter State"
            />
            <input
              type="text"
              className="border border-gray-300 p-3 rounded-md w-full"
              placeholder="Enter Country"
            />
          </div>
          <div>
          <input
            type="password"
            className="border border-gray-300 p-3 rounded-md w-full"
            placeholder="Enter Password"
          />
          </div>
        </form>
        <div className="flex gap-3 flex-col justify-center items-center mt-6">
          <button className="bg-[#3F26DF] px-4 py-2 w-full sm:w-1/2 text-center text-white rounded-md">
            Register
          </button>
          <div className="flex items-center">
            <h1 className="text-slate-500">Already have an account?</h1>
            <span className="text-xl text-[#3F26DF] mx-3">Sign In</span>
          </div>
        </div>
      </div>
    </div>
  );
}
