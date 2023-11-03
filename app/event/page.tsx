import React from "react"
import Event from "../components/Event/Event"
import Nav from "../components/Nav"

const Loginpage = () => {
  return (
    <div className="bg-[#F4DFBA] w-full h-screen">
      <Nav />
      <div className="pt-8">
        <Event />
      </div>
    </div>
  )
}

export default Loginpage
