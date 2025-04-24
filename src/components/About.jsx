import React from "react";

export const About = () => {
  return (
    <section className="section p-16">
      <div className="flex justify-between items-center">
        <h1 className="uppercase text-6xl title-gradient flex-1/3">
          About PCSS
        </h1>
        <p className="text-lg flex-1/2">
          PCSS SOFTECH PVT. LTD., established on July 13, 2023, is a premier IT
          service and product development company. We specialize in software
          design and development, leveraging market research, innovative design,
          competitor analysis, and a deep understanding of UI/UX. Our approach
          ensures unique, sustainable, and market-ready software solutions that
          exceed client expectations and set new industry standards.
        </p>
      </div>
      <div className="mt-16 w-full h-[418px] relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            boxShadow: "inset 200px 100px 400px rgba(0, 0, 0, 0.8)",
          }}
        />
        <img
          className="w-full h-[418px] object-cover z-0 rounded-3xl border border-gray-50/50"
          src="/images/about.jpg"
          alt=""
        />
      </div>
    </section>
  );
};
