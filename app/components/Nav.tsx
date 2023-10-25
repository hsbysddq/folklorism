import Image from "next/image"
import { MdWavingHand } from "react-icons/md"
import Menu from "./Navbar/Menu"

const Nav = () => {
  return (
    <div className="mx-4 flex items-center">
      <div className="bg-transparent">
        {/* NAVBAR LOGIN */}
        <div className="flex items-center pt-6 justify-between">
          <div className="flex items-center">
            <div className="flex">
              <Image
                src="/avatar.png"
                alt=""
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="font-semibold pl-3 text-[#983820]">
                <p className="text-sm">Hello</p>
                <div className="flex">
                  <p className="text-base mr-2">Hasbi Siddiqi</p>
                  <MdWavingHand className="text-amber-500" />
                </div>
              </div>
            </div>

            <div className="text-[#983820] ml-[136px] md:hidden">
              <Menu />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav
