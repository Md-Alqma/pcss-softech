import "./App.css";

function App() {
  return (
    <>
      <nav className="flex justify-between text-white items-center overflow-hidden">
        <div>
          <img src="/images/logo.png" alt="logo" />
        </div>

        <div className="flex gap-4 items-center">
          <button
            className="relative px-4 py-2 border border-gray-500 font-semibold rounded-lg bg-no-repeat bg-center bg-cover drop-shadow-sm"
            style={{
              backgroundImage: `url(/images/button-1.png'), url('/images/button-2.png')`,
              backgroundPosition: "left center, right center",
              backgroundSize: "80px 80px, 80px 80px",
              backgroundRepeat: "no-repeat, no-repeat",
            }}
          >
            Enquire Now
          </button>
          <div>Menu</div>
        </div>
      </nav>
      <main>
        <header
          className="relative py-8 border border-white"
          style={{
            // background: `url(/images/hero-background.jpg)`,
            // backgroundPosition: "center center",
            // backgroundRepeat: "no-repeat",
            // backgroundSize: "cover",
            // opacity: "50%",
          }}
        >
          {/* <div className="absolute opacity-50">
            <img
              className="w-full"
              src="/images/hero-background.jpg"
              alt="hero background"
            />
          </div> */}

          <div className="absolute top-10 left-30">
            <h1 className="text-[9rem]">DESIGN,</h1>
          </div>
          <div className="absolute top-50 left-130">
            <h1 className="text-[9rem]">DEVELOP,</h1>
          </div>
          <div className="absolute top-90 left-30">
            <h1 className="text-[9rem]">RESOLVE.</h1>
          </div>
        </header>
      </main>
    </>
  );
}

export default App;
