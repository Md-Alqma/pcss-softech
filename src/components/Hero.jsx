export const Hero = () => {
  return (
    <section
      className="py-10 mt-6 section"
      style={{
        backgroundImage: `url(/images/hero.jpg)`,
        backgroundPosition: "center center",
        backgroundSize: "800px 100%",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="ml-25">
        <h1
          className="font-audiowide text-[8rem] uppercase text-[#E7FBFC] drop-shadow-lg drop-shadow-[#05CC98] 
       "
        >
          Design,
        </h1>
      </div>
      <div className="ml-[30rem]">
        <h1 className="font-audiowide text-[8rem] uppercase bg-[linear-gradient(99.31deg,#16375A_-0.2%,#185F73_22.94%,#186B7B_38.12%,#239296_56.54%,#39BEB9_69.84%,#53D0CA_87.58%,#46C4C0_97.65%,#8DE4DC_108.49%)] bg-clip-text text-transparent drop-shadow-lg drop-shadow-white">
          Develop,
        </h1>
      </div>
      <div>
        <h1 className="font-audiowide text-[8rem] uppercase text-[#E7FBFC] drop-shadow-lg drop-shadow-[#05CC98]">
          Resolve.
        </h1>
      </div>
      <div className="lato-font w-[360px] border-2 border-gray-200/30 px-3 py-6 bg-[#d5d5d53a] rounded-md ml-[60%] -mt-[7rem]">
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
