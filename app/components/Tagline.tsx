import Image from "next/image"
import React from "react"

const Tagline = () => {
  return (
    <div className="flex items-center mb-4 justify-between">
      <div className="w-7/12">
        <h1 className="text-3xl text-[#BB2B32] font-semibold">
          Find Events Near You
        </h1>
      </div>
      <div className="w-3/12">
        <div className="">
          <Image src="human.svg" alt="" width={60} height={60} />
        </div>
      </div>
    </div>
  )
}

export default Tagline
