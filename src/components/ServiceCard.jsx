import { FiArrowRight } from "react-icons/fi";
export const ServiceCard = ({ index, title, tags, length }) => {
  let titleArray = title.split(" ");
  const firstTitle = titleArray.slice(0, titleArray.length / 2).join(" ");
  const secondTitle = titleArray.slice(titleArray.length / 2).join(" ");

  return (
    <div className="relative mt-6">
      <div className="absolute top-0 left-10 w-full h-[1px] bg-gradient-to-r from-white/10 to-black rounded-t-3xl" />
      <div className="absolute bottom-0 left-0 w-[90%] h-[1px] bg-gradient-to-r from-black to-white/10 rounded-b-3xl" />
      <div className="flex items-center justify-between px-8 py-12 rounded-3xl mt-6 border border-white/50">
        <div className="flex justfy-center gap-8">
          <h3 className="text-3xl -mt-[0.5rem]">
            {index}/ <span className="opacity-50">{length}</span>
          </h3>
          <div>
            <h2 className="font-audiowide text-5xl/14 title-gradient">
              {firstTitle} <br /> {secondTitle}
            </h2>
            <div className="lato-font flex gap-4 mt-6">
              {tags?.map((tag, i) => (
                <p
                  key={i}
                  className="relative border text-gradient px-4 py-2 border-[#4dccc6] rounded-3xl pl-8 before:content-[''] before:absolute before:left-3 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-white before:rounded-full text-xl"
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 lato-font ">
          <p className="text-2xl">View Details</p>
          <p className="p-8  border border-gray-400 text-6xl rounded-full -rotate-45">
            <FiArrowRight />
          </p>
        </div>
      </div>
    </div>
  );
};
