import React from "react";
import logo from "../assets/logo2.png";

export default function Login() {
  return (
    <div className="w-full max-w-md  shadow-2xl p-4  m-auto mt-32 bg-white border border-gray-200 rounded-lg h-[454px] max-h-max sm:p-6 md:p-9">
      <div className="flex justify-center h-[156px]">
        <img src={logo} className="  h-full object-cover" alt="Logo" />
      </div>
      <input
        type="text"
        className="border w-full mb-4 border-gray-300 p-3 rounded-md "
        placeholder="Enter Username"
      />
      <input
        type="text"
        className="border w-full mb-4 border-gray-300 p-3 rounded-md "
        placeholder="Enter Username"
      />
      <div className="flex gap-3 flex-col justify-center items-center">
        <button className="bg-[#3F26DF] px-4 py-2 w-1/2 text-center text-white rounded-md ">
          Sign In
        </button>
        <div className="flex items-center ">
          <h1 className="text-slate-500">If You Don't Have an Account ? </h1>
          <span className="text-xl text-[#3F26DF]  mx-3">Sign Up</span>
        </div>
      </div>
    </div>
  );
}
