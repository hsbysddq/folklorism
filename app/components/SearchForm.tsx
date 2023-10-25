import { BiFilterAlt } from "react-icons/bi"
import { BsSearch } from "react-icons/bs"

const SearchForm = () => {
  return (
    <div className="pb-6">
      <div className="flex items-center w-full">
        <input
          placeholder="Search Course"
          type="text"
          name="text"
          className="input py-3 px-3 rounded-xl w-11/12 placeholder-[#98382089] font-semibold"
        />

        <div className="flex justify-center items-center w-8 h-8 bg-[#DAB19D] rounded-lg ml-3">
          <BiFilterAlt className="w-5 h-5 text-[#983820]" />
        </div>
      </div>
    </div>
  )
}

export default SearchForm
