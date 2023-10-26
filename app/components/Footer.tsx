import React from "react"

const Footer = () => {
  return (
    <div className="flex flex-col mx-6 py-6 font-bold font-montserrat text-[#983820]">
      <div className="flex justify-between">
        <div>
          <h1 className="pb-4">Contact</h1>
          <p>hello@folkrism.com</p>
          <p>+628369865</p>
        </div>

        <div>
          <h1 className="pb-4">Terms & Policy</h1>
          <p>Privacy policy</p>
          <p>Terms of use</p>
          <p className="pb-2">Accessibillity</p>
        </div>
      </div>

      <div className="pt-2 pb-2 flex justify-center">
        <h1>Copy Right By @FOLKARSM</h1>
      </div>
    </div>
  )
}

export default Footer
