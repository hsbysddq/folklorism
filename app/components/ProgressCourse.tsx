import Image from "next/image"
import Link from "next/link"
import React from "react"
import { GoArrowRight } from "react-icons/go"

const ProgressCourse = () => {
  return (
    <div className="w-full flex flex-col items-center pb-8 md:hidden">
      <div className="container font-montserrat flex items-center justify-between mb-4">
        <h1 className="font-medium text-lg">My Progress</h1>
        <div className="flex items-center text-[#983820] font-semibold text-sm">
          <Link href="">SEE ALL</Link>
          <GoArrowRight />
        </div>
      </div>
      {/* <img src="..." className="card-img-top" alt="..."> */}
      <div className="w-full h-2 bg-transparent">
        <img
          src="/hero.jpeg"
          alt=""
          className="w-full h-[210px] bg-contain rounded-t-3xl"
        />
      </div>
      <div className="bg-slate-50 w-full rounded-b-2xl mt-[200px] pb-2 font-montserrat flex flex-col">
        <div className="font-montserrat px-3 pt-4 text-[#983820]">
          <p className="font-semibold">Keberagaman Indonesia</p>
          <p className="pt-4 font-medium pb-2">2 of 6 chapters</p>
          <button className="font-bold text-lg bg-[#e6ccbe]  text-[#983820] p-2 w-4/12 rounded-2xl mb-2 ml-56">
            Continue
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProgressCourse
