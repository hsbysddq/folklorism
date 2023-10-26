import Image from "next/image"
import Link from "next/link"
import React from "react"
import { MdOutlineDateRange, MdOutlineLocationOn } from "react-icons/md"

const course = [
  {
    id: 1,
    title: "Java Culture",
    chapter: "13 October 2023",
    duration:
      "Jl. Jend. Sudirman, Senayan, Kec. Kby. Baru, Kota Jakarta Selatan",
    url: "/java.jpeg",
  },
  {
    id: 1,
    title: "Jakarta Culture",
    chapter: "01 November 2023",
    duration:
      "Jl. Jenderal Basuki Rachmat, Kec. Tegalsari, Surabaya, Jawa Timur",
    url: "/jakarta.jpeg",
  },
]

const ProgressCourse = () => {
  return (
    <div className="w-full flex flex-col items-center pb-2">
      <h1 className="font-extrabold text-4xl mb-6 text-[#983820]">Event</h1>
      {course.map((video) => (
        <div className="w-full mb-7">
          <div className="w-screen h-2 bg-transparent">
            <img
              src={video.url}
              alt=""
              className="w-full h-[210px] bg-contain rounded-t-3xl"
            />
          </div>
          <div className="bg-slate-50 w-screen rounded-b-3xl mt-[200px] pb-2 font-montserrat flex flex-col">
            <div className="font-montserrat px-3 pt-4 text-[#983820] flex flex-col">
              <p className="font-semibold text-2xl">{video.title}</p>
              <div className="flex items-center text-sm font-medium">
                <MdOutlineDateRange className="w-5 h-5 pl-1 pt-1" />
                <p className="pt-3 font-medium pb-2 pl-2">{video.chapter}</p>
              </div>

              <div className="flex items-center text-sm font-medium">
                <MdOutlineLocationOn className="w-7 h-7" />
                <p className="pt-3 font-medium pb-2 pl-2">{video.duration}</p>
              </div>
              <button className="font-extrabold text-lg bg-[#e6ccbe]  text-[#983820] p-2 w-11/12 rounded-2xl mb-4 ml-4 mt-4">
                Reservation
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProgressCourse
