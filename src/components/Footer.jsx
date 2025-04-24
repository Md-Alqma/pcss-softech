import React from "react";
import footerLogo from "../assets/footer-logo.png";
import footerHeading from "../assets/footer-heading.png";
const Footer = () => {
  return (
    <>
      <div className="max-w-[1360px] mx-auto mt-28">
        <div className=" bg-white p-14 py-16 rounded-3xl text-gray-900 ">
          <div>
            <img src={footerHeading} alt="footer-heading" />
          </div>
          <p className=" text-lg text-[#505759] lato-font md:w-[70%] mt-10">
            {" "}
            Working with PCSS Softech is a great way to improve your business's
            position in the market and be successful. Contact our team to find
            out how we can help your business achieve maximum results.{" "}
          </p>{" "}
          <div className="flex flex-row gap-8 mt-6 items-center">
            <div className="relative py-3 px-7 rounded-xl bg-gradient-to-r from-[#15475d] to-[#54c1a5] overflow-hidden">
              <div className="w-16 h-12 absolute -left-2 top-0 rounded-full bg-[linear-gradient(103.26deg,#15475D_20.03%,#54C1A5_84.82%)] filter blur-[10px]"></div>

              <div className="w-10 h-8 absolute top-1.5 left-18 rounded-full bg-[linear-gradient(103.26deg,#15475D_20.03%,#54C1A5_84.82%)] filter blur-[6px]"></div>

              <p className="text-sm font-semibold text-white relative">
                Contact Us
              </p>
            </div>

            <div className="soro-font text-lg text-[#505759]">or</div>
            <div className="rinline-block p-[1px] rounded-lg bg-[linear-gradient(103.26deg,#163E5E_0%,#4DCCC6_58.46%,#76DAD3_84.82%)] ">
              <button className="px-7 py-3 rounded-lg bg-white text-sm cursor-pointer soro-font ">
                <p className=" font-sm bg-[linear-gradient(99.31deg,#16375A_-0.2%,#185F73_22.94%,#186B7B_38.12%,#239296_56.54%,#39BEB9_69.84%,#53D0CA_87.58%,#46C4C0_97.65%,#8DE4DC_108.49%)] bg-clip-text text-transparent">
                  {" "}
                  InfoPcss@gmail.com
                </p>
              </button>
            </div>
          </div>
          <hr className=" bg-[#333F48] my-12" />
          <FooterList />
        </div>
      </div>
      <div className=" text-center mt-2 py-4 lato-font text-sm">
        PCSS SOFTECH © 2024. All rights reserved.
      </div>
    </>
  );
};
export default Footer;
const FooterList = () => {
  return (
    <>
      {" "}
      <div className="grid grid-cols-5">
        {" "}
        <div className=" col-span-2">
          <img src={footerLogo} alt="" className="-mt-6" />
        </div>
        <div className="col-span-3">
          <div className="grid grid-cols-3">
            {listData?.map((data, id) => (
              <div className="">
                <h3
                  key={id}
                  className=" uppercase text-[#0C0D0F] text-lg font-normal soro-font"
                >
                  {data.title}
                </h3>
                <div>
                  {data?.list?.map((listName, id) => {
                    return (
                      <>
                        {console.log(listName.name)}
                        <p
                          key={id}
                          className="text-[#505759] capitalize text-sm my-1.5 cursor-pointer soro-font tracking-wide mt-3.5"
                        >
                          {listName.name}
                        </p>
                      </>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>{" "}
    </>
  );
};
const listData = [
  {
    title: "Company",
    list: [
      { name: "about", url: "/about" },
      { name: "services", url: "/services" },
      { name: "career", url: "/career" },
    ],
  },
  {
    title: "support",
    list: [
      { name: "contact us", url: "/contact-us" },
      { name: "Privacy policy", url: "/privacy-policy" },
    ],
  },
  { title: "Social media", list: [{ name: "linkdin", url: "/linkdin" }] },
];
