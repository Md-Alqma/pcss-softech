import { FiArrowRight } from "react-icons/fi";
export const ServiceCard = ({ index, title, tags, length }) => {
  let titleArray = title.split(" ");
  const firstTitle = titleArray.slice(0, titleArray.length / 2).join(" ");
  const secondTitle = titleArray.slice(titleArray.length / 2).join(" ");

  return (
    <div className="relative mt-6">
      <div className="absolute top-0 left-10 w-full h-[1px] bg-gradient-to-r from-white to-black rounded-t-3xl" />
      <div className="absolute bottom-0 left-0 w-[90%] h-[1px] bg-gradient-to-r from-black to-white rounded-b-3xl" />
      <div className="flex items-center justify-between px-8 py-12 rounded-3xl mt-6 border">
        <div className="flex justfy-center gap-8">
          <h3 className="text-3xl -mt-[0.5rem]">
            {index}/ <span className="opacity-50">{length}</span>
          </h3>
          <div>
            <h2
              className="text-5xl/14"
              style={{
                backgroundImage: `linear-gradient(45deg, #FFFFFF , #000000 85%)`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {firstTitle} <br /> {secondTitle}
            </h2>
            <div className="flex gap-4 mt-6">
              {tags?.map((tag, i) => (
                <p
                  key={i}
                  className="relative border px-4 py-2 border-[#4dccc6] rounded-3xl pl-8 before:content-[''] before:absolute before:left-3 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-white before:rounded-full text-xl"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg,rgba(22, 62, 94, 1) 0%, rgba(77, 204, 198, 1) 50%, rgba(118, 218, 211, 1) 100%)",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {tag}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <p className="text-2xl">View Details</p>
          <p className="p-8  border border-gray-400 text-6xl rounded-full -rotate-45">
            <FiArrowRight />
          </p>
        </div>
      </div>
    </div>
  );
};
