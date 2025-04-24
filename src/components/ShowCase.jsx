import React from "react";
import showcase from "../assets/showcase.jpg";

const ShowCase = () => {
  return (
    <div className="max-w-[1360px] mx-auto p-16 relative overflow-hidden mt-20">
      <div className="w-[300px] h-[300px] bg-[#27C59B] rounded-full absolute -left-20 blur-[275px] -z-10"></div>

      <div className="flex items-center justify-between gap-4">
        <h1 className="font-audiowide text-6xl font-bold uppercase tracking-wide title-gradient">
          Our Showcase
        </h1>
        <p className="lato-font text-lg font-semibold cursor-pointer text-[#E7FBFC] opacity-80">
          MORE WORK
        </p>
      </div>

      <div className="grid grid-cols-3 gap-16 mt-14">
        {[0, 1, 2].map((_, id) => (
          <div
            key={id}
            className="border-2 border-gray-500/70 shadow rounded-2xl overflow-hidden"
          >
            <ShowCaseCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowCase;

const ShowCaseCard = () => {
  return (
    <>
      <div>
        <img src={showcase} alt="" className="h-[235px] object-cover" />
      </div>
      <div className="p-5 pb-3">
        <h3 className="text-xl soro-font tracking-wide uppercase">
          Drone Inspections: The Future of Powerline In...
        </h3>
        <p className="mt-5 text-sm text-white/80 lato-font">
          For decades, power companies have relied on traditional methods of
          inspecting the...
        </p>
        <div className="flex flex-row  items-center justify-between gap-5 mt-5">
          {" "}
          <div className="inline-block p-[1px] rounded-lg bg-[linear-gradient(103.26deg,#163E5E_0%,#4DCCC6_58.46%,#76DAD3_84.82%)] ">
            <button className="px-4 py-1 rounded-lg bg-white dark:bg-black text-sm cursor-pointer soro-font">
              <p className="bg-[linear-gradient(103.26deg,#163E5E_0%,#4DCCC6_58.46%,#76DAD3_84.82%)] bg-clip-text text-transparent">
                Case studies
              </p>
            </button>
          </div>
          <p className="sor-font text-lg opacity-70 ">Dec 29, 2021</p>
        </div>
      </div>
    </>
  );
};
