import React, { memo } from "react";

import heroImage from "../assets/images/heroSection.jpg";
import Partners from "./Partners";

function Hero() {
  return (
    <section className="relative w-full h-screen">
      <img
        src={heroImage}
        alt=""
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-slate-600/70 w-full h-full"></div>
      <div className="z-40 absolute px-4 space-y-6 flex w-full h-full flex-col justify-center items-center">
        <h1 className="md:text-5xl text-3xl text-center font-bold text-white">
          Do Not Wait - Launch Your Startup Today!
        </h1>
        <p className="text-white md:text-lg font-semibold text-center">
          Design and style should always work toward making you look good and
          feel good without <br /> a lot of efforts so you can get on with the
          things that truly matters to you.
        </p>
        <div className="flex text-white w-[80%] md:w-1/2 flex-col md:space-y-0 space-y-2 md:flex-row items-center justify-center ring-0 md:ring-2 ring-purple-600">
          <input
            type="text"
            className="px-6 placeholder:text-black flex-1 text-black focus:outline-none py-4"
            placeholder="Enter Your Email Address"
          />
          <button className=" bg-gradient-to-tl px-6 py-4 from-purple-500 to-purple-900 hover:from-purple-900 hover:to-purple-500">
            Get Started!
          </button>
        </div>
      </div>
      <Partners />
    </section>
  );
}

export default memo(Hero);
