import React from "react"

const Footer = () => {
  return (
    <div className="max-w-screen-2xl mx-auto">
      <footer className="p-4 bg-[#FEF7C2] rounded-lg shadow md:px-6 md:py-8">
        <div className="">
          <ul className="flex flex-wrap items-center justify-center mb-6 sm:mb-0 text-[#983820]">
            <li>
              <a
                href="#"
                className="mr-4 text-sm text-[#983820] hover:underline md:mr-6"
              >
                About
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 text-sm  hover:underline md:mr-6 ">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 text-sm  hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="text-sm  hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto border-[#983820] lg:my-8" />
        <span className="flex justify-center text-sm text-[#983820] sm:text-center ">
          © 2023
          <a
            href="https://flowbite.com"
            target="_blank"
            className="hover:underline mx-2"
          >
            Folkrism™
          </a>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  )
}

export default Footer
