import Image from "next/image"
import { TiThMenu } from "react-icons/ti"
import { MdWavingHand } from "react-icons/md"
const Navbar = () => {
  return (
    <div className="bg-transparent">
      <div className="container flex items-center py-5 justify-between">
        <div className="flex items-center">
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
        <div className="flex justify-center items-center w-8 h-8 bg-[#DAB19D] rounded-lg">
          <TiThMenu className="w-5 h-5 text-[#F3DECC]" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
