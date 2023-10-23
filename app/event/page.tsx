import Image from "next/image"
import React from "react"

const EventPage = () => {
  return (
    <div className=" lg:p-20 xl:p-40 h-screen flex flex-col bg-[#FDF5E9] md:flex-row md:gap-8 md:items-center">
      {/* IMAGE CONTAINER */}

      <div className="flex flex-col justify-center relative w-full h-1/2 md:h-[70%] ">
        <div>
          <p className="text-center font-young font-bold text-5xl text-[#B02027]">
            Est Java
          </p>
        </div>

        <div className="flex justify-center pt-8">
          <Image src="human.svg" alt="" width={100} height={100} />
        </div>
      </div>

      {/* TEXT CONTAINER */}
      <div className="h-1/2 flex flex-col gap-4 bg-[#B02027] md:[70%] md:justify-center md:gap-6 xl:gap-8">
        <div className="border-gray-50 borde-1">
          <h1 className="text-3xl font-bold uppercase xl:text-5xl">
            Tari Reog Ponorogo
          </h1>
          <p>Sunday, October 16,2023</p>
          <p>10:00 AM</p>
          <p>Ketintang Baru, Wonokromo</p>
          <div className="deskripsi">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
              eos enim repudiandae voluptas laboriosam, magnam quae ipsa vero
              eum atque.
            </p>
            <button>Read More</button>

            <div className="tag">
              <p>Tags</p>
              <button>Read More</button>
              <button>Read More</button>
              <button>Read More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventPage
