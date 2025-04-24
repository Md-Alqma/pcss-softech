import { FiMenu } from "react-icons/fi";

export const Navbar = () => {
  return (
    <nav className="flex justify-between text-white items-center overflow-hidden px-72 py-2 lato-font">
      <div>
        <img src="/images/logo.png" alt="logo" />
      </div>

      <div className="flex gap-8 items-center">
        <div className="relative overflow-hidden rounded-lg">
          <img
            className="w-24 h-32 absolute -left-[20px] top-1/2 -translate-y-1/2"
            src="/images/button-1.png"
            alt=""
          />
          <button className="relative px-4 py-2 font-semibold rounded-lg outline-none z-99 cursor-pointer">
            Enquire Now
          </button>
          <img
            className="w-24 h-32 absolute  -right-[20px] top-1/2 -translate-y-1/2"
            src="/images/button-1.png"
            alt=""
          />
        </div>

        <div className="text-5xl">
          <FiMenu />
        </div>
      </div>
    </nav>
  );
};
