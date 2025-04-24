export const ProcessCard = ({ index, title, processImage, description }) => {
  return (
    <div className="border border-gray-700 px-3 py-6 rounded-lg">
      <div className="flex justify-around h-[150px]">
        <img
          className="w-24 h-24 p-4 border border-gray-600"
          src={processImage}
          alt=""
        />
        <p className="w-[75%]">{description}</p>
      </div>
      <div className="w-full h-[2px] bg-gradient-to-r from-[#15475D] to-[#54C1A5] my-7 opacity-50" />
      <div className="flex justify-between items-center">
        <h3 className="text-3xl">{title}</h3>
        <h2 className="text-4xl">{index}</h2>
      </div>
    </div>
  );
};
