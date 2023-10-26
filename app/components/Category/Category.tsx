import { BsMenuButtonWideFill } from "react-icons/bs"
import Card from "../Category/Card"
import Event from "../Event/Event"

const Category = () => {
  return (
    <div>
      <div className="bg-[#F4DFBA] w-screen h-full rounded-t-[42px]">
        <div className="mx-5 flex justify-between pt-6 font-semibold text-[#983820]">
          <p>COURSE</p>
          <p>VIew All</p>
        </div>
        <div className="flex items-center text-sm mx-4 pb-6">
          <button className="bg-[#BD4420] py-2 px-2 rounded-2xl mt-5 text-[#F4DFBA]">
            Videos
          </button>
          <button className="bg-[#DAB19D] py-2 px-2 rounded-2xl mt-5  ml-4 text-[#983820]">
            Podcast
          </button>
          <button className="bg-[#DAB19D] py-2 px-2 rounded-2xl mt-5  ml-4 text-[#983820]">
            Blogs
          </button>
        </div>
        <Card />
        <Event />
        {/* <div>
          <div className="card bg-white rounded-2xl w-48 h-56 mx-4">
            <div className="img w-full h-1/2 bg-indigo-400 rounded-t-2xl">
              <div className="save"></div>
            </div>

            <div className="text">
              <p className="h3"> Meeting your Colleagues </p>
              <p className="p"> 6 Video - 40 min </p>

              <div className="icon-box">
                <p className="span">Business Trip</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Category
