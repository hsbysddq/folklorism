import Image from "next/image"
import { TiThMenu } from "react-icons/ti"
const Navbar = () => {
  return (
    <div className="bg-transparent">
      <div className="container flex items-center py-6 justify-between">
        <div className="flex items-center">
          <Image
            src="/avatar.png"
            alt=""
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="font-semibold pl-3 text-[#F3DECC]">
            <p className="text-sm">Hello</p>
            <p className="text-base">Hasbi Siddiqi</p>
          </div>
        </div>
        <div className="flex justify-center items-center w-8 h-8 bg-[#F3DECC] rounded-lg">
          <TiThMenu className="w-5 h-5 text-[#983820]" />
        </div>
      </div>
    </div>
  )
}

export default Navbar
