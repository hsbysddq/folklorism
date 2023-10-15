import React from "react"
import Navbar from "./Navbar"
import SearchForm from "./SearchForm"
import Category from "./Category/Category"
import ProgressPoint from "./ProgressPoint"
import Tagline from "./Tagline"

const Hero = () => {
  return (
    <div className="bg-[#FEF7C2]">
      <Navbar />
      <div className="container">
        <Tagline />
        {/* <ProgressPoint /> */}
        <SearchForm />
      </div>
      <Category />
    </div>
  )
}

export default Hero
