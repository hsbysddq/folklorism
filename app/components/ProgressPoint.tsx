import React from "react"

const ProgressPoint = () => {
  return (
    <div className="mx-2">
      <div className="flex justify-between text-sm font-semibold pb-2 text-[#983820]">
        <p>Your Points</p>
        <p>Reedem offer</p>
      </div>

      <div className="progress-loader bg-slate-50 rounded-lg">
        <div className="progress w-5 h-3 rounded-lg bg-[#983820]"></div>
      </div>

      <div className="flex justify-between text-xs font-semibold pt-2 text-[#983820] pb-5">
        <p>2500 points</p>
        <p>7500 points</p>
      </div>
    </div>
  )
}

export default ProgressPoint
