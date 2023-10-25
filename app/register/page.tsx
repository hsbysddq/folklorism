import React from "react"
import Link from "next/link"
import Navbar from "../components/Navbar/Navbar"

const RegisterPage = () => {
  return (
    <div className="bg-[#FEF7C2] overflow-hidden">
      <Navbar />
      <div className="bg-[#FEF7C2] w-screen h-[calc(100vh-3rem)] flex items-center">
        <div className="w-[350px] bg-[#F4DFBA] rounded-xl m-5">
          <div className="">
            <h1 className="text-center font-extrabold text-3xl text-[#983820] pt-10">
              Register
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
              <div className="flex">
                <p className="pb-8 text-[#983820] font-bold mr-2">
                  Do you have account ?
                </p>
                <Link href="/" className="text-[#983820] font-bold">
                  Login
                </Link>
              </div>

              <button className="font-bold text-lg bg-[#983820] text-[#DAB19D] p-4 w-full rounded-2xl mb-8">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
