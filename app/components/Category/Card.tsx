import Image from "next/image"
import Link from "next/link"
import React from "react"
import { GoArrowRight } from "react-icons/go"

const course = [
  {
    id: 1,
    title: "Festival Ogoh Ogoh",
    chapter: "3 Chapters",
    duration: "30 Minutes",
    url: "/ogoh.jpeg",
  },
  {
    id: 2,
    title: "Karapan sapi",
    chapter: "5 Chapters",
    duration: "120 Minutes",
    url: "/kerapan.jpeg",
  },
  {
    id: 3,
    title: "Gamelan Festival",
    chapter: "3 Chapters",
    duration: "90 Minutes",
    url: "/gamelan.jpeg",
  },
]

const Card = () => {
  return (
    <div className="flex flex-col md:flex-row xl:flex-row items-center pb-2">
      {course.map((video) => (
        <div className="w-11/12 md:ml-7 xl:ml-10 mb-7">
          <div className="h-4 bg-transparent">
            <Image
              key={video.id}
              src={video.url}
              alt=""
              className="w-full h-[210px] bg-contain rounded-t-3xl"
            />
          </div>
          <div className="bg-slate-50 rounded-b-3xl mt-[200px] pb-2 font-montserrat flex flex-col">
            <div className="font-montserrat px-3 pt-4 text-[#983820] flex flex-col">
              <p className="font-semibold">{video.title}</p>
              <p className="pt-3 font-medium pb-2">{video.chapter}</p>
              <p className="font-medium pb-2">{video.duration}</p>
              <button className="font-extrabold text-lg bg-[#e6ccbe]  text-[#983820] p-2 w-4/12 rounded-2xl mb-2 ml-52">
                Start
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Card
