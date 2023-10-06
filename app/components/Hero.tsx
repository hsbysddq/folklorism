import React from "react"
import Navbar from "./Navbar"
import SearchForm from "./SearchForm"

const Hero = () => {
  return (
    <div className="bg-green-100">
      <Navbar />
      <div className="container">
        <div className="tagline w-5/12">
          <h1 className="text-2xl text-int font-semibold pt-3 pb-16">
            Find events near you
          </h1>
        </div>
        <SearchForm />
      </div>
    </div>
  )
}

export default Hero
