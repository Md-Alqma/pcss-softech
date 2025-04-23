export const Hero = () => {
  return (
    <div
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
        <h1 className="text-[9rem]">DESIGN,</h1>
      </div>
      <div className="ml-[30rem]">
        <h1 className="text-[9rem]">DEVELOP,</h1>
      </div>
      <div className="ml-25">
        <h1 className="text-[9rem]">RESOLVE.</h1>
      </div>
    </div>
  );
};
