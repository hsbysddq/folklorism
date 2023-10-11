import React from "react"
import Navbar from "./Navbar"
import SearchForm from "./SearchForm"
import Category from "./Category/Category"

const Hero = () => {
  return (
    <div className="bg-[#FEF7C2]">
      <Navbar />
      <div className="container">
        <div className="tagline w-5/12">
          <h1 className="text-2xl text-int font-semibold pt-3 pb-16">
            Find events near you
          </h1>
        </div>
        <SearchForm />
        <Category />
      </div>
    </div>
  )
}

export default Hero
