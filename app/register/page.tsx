import React from "react"
import Navbar from "../components/Navbar/Navbar"
import Notification from "../components/Navbar/Notification"

const RegisterPage = () => {
  return (
    <div className="bg-[#FEF7C2] overflow-hidden">
      <Navbar />
      <div className="bg-[#FEF7C2] w-screen h-[calc(100vh-3rem)] flex items-center">
        <div className="w-[350px] bg-[#F4DFBA] rounded-xl m-5">
          <div className="">
            <h1 className="text-center font-extrabold text-3xl text-[#983820] pt-4">
              Sign In
            </h1>
            <form action="" className="mt-6 flex flex-col items-center">
              <input
                type="text"
                name="username"
                placeholder="Username"
                className="w-10/12  mt-4 px-4 py-5 rounded-2xl  bg-slate-50 placeholder-[#983820] font-semibold"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-10/12  mt-4 px-4 py-5 rounded-2xl  bg-slate-50 placeholder-[#983820] font-semibold"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-10/12 bg-slate-50 placeholder-[#983820] font-semibold mt-4 px-4 py-5 rounded-2xl"
              />
            </form>
            <div className="pt-4 px-8">
              <p className="pb-8 text-[#983820] font-bold">Forgot Password ?</p>
              <button className="font-bold text-lg bg-[#983820] text-[#DAB19D] p-4 w-full rounded-2xl mb-6">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
