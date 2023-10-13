import { IoMdColorFilter } from "react-icons/io"

const SearchForm = () => {
  return (
    <div className="pb-16">
      <div className="flex items-center w-full">
        <input
          placeholder="Search Course"
          type="text"
          name="text"
          className="input py-2 px-2 rounded-xl w-11/12"
        />

        <div className="flex justify-center items-center w-8 h-8 bg-[#DAB19D] rounded-lg ml-1.5">
          <IoMdColorFilter className="w-5 h-5 text-[#F3DECC]" />
        </div>
      </div>
    </div>
  )
}

export default SearchForm
