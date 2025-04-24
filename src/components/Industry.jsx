export const Industry = () => {
  const industryImages = [
    {
      title: "Automobile",
      imageUrl: "/images/industry-1.png",
    },
    {
      title: "Health",
      imageUrl: "/images/industry-2.png",
    },
    {
      title: "School",
      imageUrl: "/images/industry-7.png",
    },
    {
      title: "Finance",
      imageUrl: "/images/industry-4.png",
    },
    {
      title: "Tourism",
      imageUrl: "/images/industry-5.png",
    },
    {
      title: "Software",
      imageUrl: "/images/industry-6.png",
    },
    {
      title: "Finance",
      imageUrl: "/images/industry-3.png",
    },
    {
      title: "Health",
      imageUrl: "/images/industry-8.png",
    },
  ];
  return (
    <section>
      <div className="flex justify-between items-center">
        <h1 className="sor-font uppercase text-6xl title-gradient flex-1/3">
          Industries we serve
        </h1>
        <p className="text-lg flex-1/2">
          At PCSS SOFTECH, we focus on building strong client relationships by
          understanding your needs and working closely with you. Our expert team
          transforms your ideas into custom software solutions, ensuring
          success. Using an Agile approach, we deliver high-quality software on
          time and within budget, with continuous feedback and adaptation to
          your evolving requirements.
        </p>
      </div>
      <div className="flex flex-wrap gap-4 mt-12">
        {industryImages.map((industry, i) => (
          <div className="relative" key={i}>
            <img
              className={`w-[300px] h-[200px] opacity-70 -ml-[10] rounded-lg`}
              src={industry.imageUrl}
              alt=""
            />
            <h2 className="absolute bottom-4 left-18 text-4xl">
              {industry.title}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};
