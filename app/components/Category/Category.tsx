import Card from "../Category/Card"

const Category = () => {
  return (
    <div className="bg-[#F4DFBA] w-screen h-full rounded-[42px]">
      <div className="mx-6 flex justify-between pt-6 font-semibold text-[#983820]">
        <p>COURSE</p>
        <p>VIew All</p>
      </div>
      <div className="mx-4 flex flex-col items-center">
        <div className="flex items-center text-sm pb-6">
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
      </div>
    </div>
  )
}

export default Category
