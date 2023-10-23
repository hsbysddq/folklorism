import Link from "next/link"
import React from "react"
import Menu from "./Menu"

import Image from "next/image"

const Navbar = () => {
  const user = false

  return (
    <div className="h-12 text-[#983820] p-4 flex items-center justify-between border-b-2 border-[#983820] bg-[#F4DFBA] uppercase md:24 lg:px-20 xl:px-40">
      {/* LEFT LINK */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Homepage</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
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
      <div className="hidden md:flex gap-4 items-center justify-end flex-1">
        <div className="md:absolute top-3 r-2 lg:static flex items-center gap-2 cursor-pointer bg-orange-300 px-1 rounded-md">
          <Image src="/phone.png" alt="" width={20} height={20}></Image>
          <span>+62 838 341</span>
        </div>
        {!user ? (
          <Link href="/">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
      </div>
    </div>
  )
}

export default Navbar