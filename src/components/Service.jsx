import { ServiceCard } from "./ServiceCard";

export const Service = () => {
  const services = [
    {
      index: "1",
      title: "Design and Development",
      tags: ["Web", "Mobile", "Desktop"],
    },
    {
      index: "2",
      title: "Machine Learning And AI",
      tags: ["Web", "Mobile", "IOS"],
    },
    {
      index: "3",
      title: "Digital Marketing",
      tags: ["Web", "Mobile", "IOS"],
    },
  ];
  return (
    <section className="mt-32">
      <div className="text-center">
        <h3 className="uppercase text-2xl">Our Services</h3>
        <h1
          className="uppercase text-6xl mt-8"
          style={{
            backgroundImage: `linear-gradient(45deg, #FFFFFF , #000000 85%)`,
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Pushing the best outcomes
        </h1>
      </div>
      <div>
        {services?.map((service, i) => (
          <ServiceCard
            key={i}
            index={service.index}
            title={service.title}
            tags={service.tags}
            length={services.length}
          />
        ))}
      </div>
    </section>
  );
};
