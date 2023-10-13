import React from "react"
import Navbar from "./Navbar"
import SearchForm from "./SearchForm"
import Category from "./Category/Category"
import ProgressPoint from "./ProgressPoint"

const Hero = () => {
  return (
    <div className="bg-[#F3DECC]">
      <Navbar />
      <div className="container">
        <ProgressPoint />
        <SearchForm />
      </div>
    </div>
  )
}

export default Hero
