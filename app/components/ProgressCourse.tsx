import Image from "next/image"
import Link from "next/link"
import React from "react"
import { GoArrowRight } from "react-icons/go"

const ProgressCourse = () => {
  return (
    <div className="pb-8">
      {/* HEADING */}
      <div className="container font-montserrat flex items-center justify-between mb-8">
        <h1 className="font-medium text-lg">My Progress</h1>
        <div className="flex items-center text-[#983820] font-semibold text-sm">
          <Link href="">SEE ALL</Link>
          <GoArrowRight />
        </div>
      </div>

      {/* CARD */}

      <div className="w-[95%] h-80 bg-slate-50 rounded-2xl ml-2">
        <Image
          src="/hero.jpeg"
          alt=""
          width={50}
          height={50}
          className="rounded-full"
        />
        {/* HEADER CARD */}
        <div className="container">
          <div className="font-montserrat px-6 py-6">
            <p className="font-semibold">Keberagaman Indonesia</p>
            <p className="mt-2 font-medium">2 of 6 chapters</p>
          </div>
        </div>
      </div>

      {/* Icons */}
      <div className="container">
        <div className="flex justify-between px-6 py-6">
          <div>
            <Link href="">6 tasks</Link>
          </div>

          <div>
            <button>Lanjutkan</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgressCourse
