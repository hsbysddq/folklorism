import React from "react"
import Navbar from "./Navbar"
import SearchForm from "./SearchForm"
import Category from "./Category/Category"
import ProgressPoint from "./ProgressPoint"

const Hero = () => {
  return (
    <div className="bg-[#BD4420]">
      <Navbar />
      <div className="container">
        <ProgressPoint />
        <SearchForm />
      </div>
      <Category />
    </div>
  )
}

export default Hero
