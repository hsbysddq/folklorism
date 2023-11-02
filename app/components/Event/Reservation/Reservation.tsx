import React from "react"

const Reservation = () => {
  return (
    <div className="">
      <div className="flex justify-center">
        <form className="bg-[rgba(255, 255, 255, 1)] max-w-xs rounded-xl p-5">
          <div className="text-center mt-3">
            <span className="text-lg text-black">Choose your plan</span>
            <p className="mt-2 text-base text-slate-300">
              Amet minim mollit non deserunt ullamco est sit .
            </p>
          </div>
          <div className="mt-4 mb-4">
            <input value="free" id="free" name="plan" type="radio" />
            <label className="cursor-pointer overflow-hidden rounded-md bg-slate-400 items-center justify-center py-4 my-3">
              <div className="">
                <span className="plan-cost">$0</span>
                <span className="plan-name">Try Free</span>
              </div>
            </label>
          </div>
          <div className="plan-option">
            <input value="monthly" id="monthly" name="plan" type="radio" />
            <label>
              <div className="flex flex-col ml-4">
                <span className="text-xl text-black">$29/month</span>
                <span className="text-lg text-slate-100">Monthly plan</span>
              </div>
            </label>
          </div>
          <div className="plan-option">
            <input value="annual" id="annual" name="plan" type="radio" />
            <label>
              <div className="plan-info">
                <span className="plan-cost">$19/month</span>
                <span className="plan-name">$228 billed in a year</span>
              </div>
              <span className="reduction inline-block rounded-xl">
                {" "}
                Save 20%{" "}
              </span>
            </label>
          </div>
          <a href="#" title="" className="choose-btn">
            Start
          </a>
        </form>
      </div>
    </div>
  )
}

export default Reservation
