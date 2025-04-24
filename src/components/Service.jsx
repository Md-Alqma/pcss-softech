import { ServiceCard } from "./ServiceCard";

export const Service = () => {
  const services = [
    {
      index: "1",
      title: "Design And Development",
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
    <section className="mt-32 section p-16 pt-32 relative overflow-hidden">
      <div className="w-[300px] h-[300px] bg-[#27C59B] rounded-full absolute -left-20 blur-[275px] -z-10"></div>
      <div className="text-center">
        <h3 className="uppercase text-2xl">Our Services</h3>
        <h1 className="font-audiowide uppercase text-6xl mt-8 title-gradient">
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
