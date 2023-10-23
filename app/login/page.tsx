import React from "react"
import Navbar from "../components/Navbar"

const LoginPage = () => {
  return (
    <div className="bg-[#FEF7C2] w-screen h-screen flex items-center">
      <div className="w-[350px] bg-[#F4DFBA] rounded-xl m-5">
        <div className="">
          <h1 className="text-center font-extrabold text-3xl text-[#983820] pt-4">
            Sign In
          </h1>
          <form action="" className="mt-6 flex flex-col items-center">
            <input
              type="email"
              name="email"
              placeholder="email"
              className="w-10/12 bg-white mt-4 px-4 py-5 rounded-2xl"
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              className="w-10/12 bg-white mt-4 px-4 py-5 rounded-2xl"
            />
          </form>
          <div className="pt-4 px-8">
            <p className="pb-8 text-[#983820] font-bold">Forgot Password ?</p>
            <button className="font-bold text-lg bg-slate-300 p-4 w-full rounded-2xl mb-6">
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
