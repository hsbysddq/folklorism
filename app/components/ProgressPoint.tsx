import React from "react"

const ProgressPoint = () => {
  return (
    <div>
      <div className="flex justify-between text-sm font-semibold pb-2 text-[#F4DFBA]">
        <p>Your Points</p>
        <p>Reedem offer</p>
      </div>

      <div className="progress-loader bg-slate-100 rounded-lg">
        <div className="progress w-5 h-3 rounded-lg bg-[#F4DFBA]"></div>
      </div>

      <div className="flex justify-between text-xs font-semibold pt-2 text-[#F4DFBA] pb-5">
        <p>2500 points</p>
        <p>7500 points</p>
      </div>
    </div>
  )
}

export default ProgressPoint
