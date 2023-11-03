import Image from "next/image"
import React from "react"
import DetailEvent from "./DetailEvent"

const OrderEvent = () => {
  return (
    <div className="w-full h-screen bg-[#F4DFBA]">
      <div className="w-full h-6/12">
        <Image src="" alt="" />
      </div>

      <div className="w-full h-6/12">
        <DetailEvent />
      </div>
    </div>
  )
}

export default OrderEvent
