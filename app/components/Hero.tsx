import React from "react"

import SearchForm from "./SearchForm"
import Category from "./Category/Category"
import ProgressPoint from "./ProgressPoint"
import Tagline from "./Tagline"
import Navbar from "./Navbar/Navbar"
import Nav from "./Nav"
import ProgressCourse from "./ProgressCourse"
import Footer from "./Footer"
import Event from "./Event/Event"

const Hero = () => {
  const user = true

  return (
    <div className="bg-[#FEF7C2]">
      {!user ? <Navbar /> : <Nav />}

      <div className="mx-2 pt-6">
        {!user ? <Tagline /> : <ProgressPoint />}
        <SearchForm />
      </div>
      <ProgressCourse />
      <Category />
      <h1 className="text-center font-extrabold text-4xl pt-6 mb-6 text-[#983820]">
        Event
      </h1>
      <Event />
      <Footer />
    </div>
  )
}

export default Hero
