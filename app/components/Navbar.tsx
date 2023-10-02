import Image from "next/image"
const Navbar = () => {
  return (
    <div className="container">
      <div className="flex items-center py-4">
        <Image
          src="/avatar.png"
          alt=""
          width={40}
          height={40}
          className="rounded-full"
        />
        <p className="font-semibold pl-3">Hi, Hasbi Siddiqi</p>
      </div>
    </div>
  )
}

export default Navbar
