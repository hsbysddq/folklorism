"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { BiMenuAltLeft } from "react-icons/bi"
import { MdOutlineClose } from "react-icons/md"

const links = [
  { id: 1, title: "Homepage", url: "/" },
  { id: 2, title: "Course", url: "/menu" },
  { id: 3, title: "Event", url: "/" },
  { id: 4, title: "Comunity", url: "/" },
]
const Menu = () => {
  const [open, setOpen] = useState(false)
  const user = false

  return (
    <div>
      {!open ? (
        <BiMenuAltLeft onClick={() => setOpen(true)} className="w-7 h-7" />
      ) : (
        <MdOutlineClose onClick={() => setOpen(false)} className="w-7 h-7" />
      )}

      {open && (
        <div className="bg-[#F4DFBA] text-[#983820] font-montserrat absolute left-0 top-12 w-full h-[calc(100vh)] flex flex-col gap-8 items-center justify-center text-3xl z-10">
          {links.map((item) => (
            <Link key={item.id} href={item.url} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}

          {!user ? (
            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href="/orders" onClick={() => setOpen(false)}>
              Showcase
            </Link>
          )}
        </div>
      )}
    </div>
  )
}

export default Menu
