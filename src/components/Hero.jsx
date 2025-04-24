export const Hero = () => {
  return (
    <section
      className="py-10 mt-6"
      style={{
        backgroundImage: `url(/images/hero.jpg)`,
        backgroundPosition: "center center",
        backgroundSize: "800px 100%",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="ml-25">
        <h1 className="text-[8rem] uppercase">Design,</h1>
      </div>
      <div className="ml-[30rem]">
        <h1 className="text-[8rem] uppercase">Develop,</h1>
      </div>
      <div>
        <h1 className="text-[8rem] uppercase">Resolve.</h1>
      </div>
      <div className="w-[360px] border border-gray-200 px-3 py-6 bg-[#d5d5d53a] rounded-md ml-[60%] -mt-[7rem]">
        <p>
          Unlock the potential of your business with our innovative software
          solutions Our custom software development services are designed to
          meet your specific requirements. Whether you need a mobile app, web
          application, or enterprise software, we leverage the latest
          technologies to create solutions that drive efficiency and growth.
        </p>
      </div>
    </section>
  );
};
