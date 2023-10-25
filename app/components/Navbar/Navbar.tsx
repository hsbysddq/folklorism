import Link from "next/link"
import React from "react"
import Menu from "./Menu"

import Image from "next/image"

const Navbar = () => {
  const user = false

  return (
    <div className="font-montserrat h-20 md:h-16 text-[#983820] p-4 flex items-center justify-between border-b-2 border-[#983820] bg-transparent uppercase md:24 lg:px-20 xl:px-40">
      {/* LEFT LINK */}
      <div className="hidden md:flex gap-4 flex-1 md:font-semibold md:gap-8 md:my-1">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Media</Link>
        <Link href="/">Event</Link>
      </div>
      {/* LOGO */}
      <div className="text-xl md:font-bold flex-1 md:text-center font-bold font-montserrat">
        <Link href="/">Folkarism</Link>
      </div>
      {/* MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* RIGHT LINK */}
      <div className="hidden md:flex gap-4 md:gap-8 md:font-semibold items-center justify-end flex-1">
        <Link href="/">Comunity</Link>

        <Link href="/orders">Showcase</Link>
      </div>
    </div>
  )
}

export default Navbar
