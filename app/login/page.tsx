import React from "react"
import Navbar from "../components/Navbar/Navbar"

const LoginPage = () => {
  return (
    <div className="bg-[#FEF7C2] overflow-hidden">
      <Navbar />
      <div className="bg-[#FEF7C2] w-screen h-[calc(100vh-4rem)] flex items-center">
        <div className="md:hidden w-[350px] bg-[#F4DFBA] rounded-xl m-5">
          <div className="">
            <h1 className="text-center font-extrabold text-3xl text-[#983820] pt-10">
              Login
            </h1>
            <form action="" className="mt-6 flex flex-col items-center">
              <input
                type="text"
                name="username"
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
              <button className="font-bold text-lg bg-[#983820] text-[#DAB19D] p-4 w-full rounded-2xl mb-8">
                Login
              </button>
            </div>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex md:bg-[#F4DFBA] md:mx-56 md:w-8/12 md:h-[70%] md:rounded-[40px]">
          <div className="hidden md:flex w-full">
            <div className="flex flex-col w-6/12">
              <h1 className="text-center font-extrabold text-3xl text-[#983820] pt-10">
                Login
              </h1>
              <form action="" className="mt-6 flex flex-col items-center">
                <input
                  type="text"
                  name="username"
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
                <p className="pb-8 text-[#983820] font-bold">
                  Forgot Password ?
                </p>
                <button className="font-bold text-lg bg-[#983820] text-[#DAB19D] p-4 w-full rounded-2xl mb-8">
                  Login
                </button>
              </div>
            </div>

            <div className="flex flex-col items-center bg-[#983820] rounded-[40px] rounded-s-[110px] justify-center">
              <p className="font-montserrat font-bold text-3xl text-[#dbac94]">
                Hello, Friend!
              </p>
              <p className="w-10/12 py-2 text-center font-medium font-montserrat text-[#dbac94] mb-2">
                Register with your personal details to use all of site features
              </p>

              <button className="font-bold text-lg bg-[#e6ccbe]  text-[#983820] p-4 w-4/12 rounded-2xl mb-8">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
