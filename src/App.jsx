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
        <div
          className="py-10 mt-6"
          style={{
            backgroundImage: `url(/images/hero.jpg)`,
            backgroundPosition: "center center",
            backgroundSize: "720px 100%",
            backgroundRepeat: "no-repeat",
            backgroundBlendMode: "color-burn",
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
      </main>
    </>
  );
}

export default App;
