import Image from "next/image"
import { FaRegBell } from "react-icons/fa"
const Navbar = () => {
  return (
    <div className="bg-transparent">
      <div className="container flex items-center py-6 justify-between">
        <div className="flex items-center">
          <Image
            src="/avatar.png"
            alt=""
            width={40}
            height={40}
            className="rounded-full"
          />
          <p className="font-semibold pl-3">Hi, Hasby Siddiqi</p>
        </div>
        <FaRegBell className="w-6 h-6" />
      </div>
    </div>
  )
}

export default Navbar
