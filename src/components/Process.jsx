import { ProcessCard } from "./ProcessCard";

export const Process = () => {
  const processes = [
    {
      index: "01",
      title: "Requirement Analysis:",
      processImage: "/images/mind-map.png",
      description:
        "Requirement analysis is a foundational process in software development life cycle SDLC.We understand your requirements and business goals to deliver best, reliable and feasible solution. We strongly focus on your Intellectual Property IP & Unique Selling Price USP, to outperform, your competitors.",
    },
    {
      index: "02",
      title: "Architecture Designing:",
      processImage: "/images/radial-bar-chart.png",
      description:
        "Architecture designing refers to the high-level structuring of software systems.To achieve qualities attributes,  risk management or structure orientation and blueprinting for the software development process",
    },
  ];
  return (
    <section>
      <div className="text-center">
        <h3 className="lato-font uppercase text-2xl">Our Process</h3>
        <h1 className="font-audiowide uppercase text-6xl mt-8 title-gradient">
          Pushing the best outcomes
        </h1>
      </div>
      <div className="lato-font grid grid-cols-2 gap-8 mt-20">
        {processes.map((process) => (
          <ProcessCard
            key={process.index}
            index={process.index}
            title={process.title}
            processImage={process.processImage}
            description={process.description}
          />
        ))}
      </div>
    </section>
  );
};
