import React, { memo, useMemo, useState } from "react";

function Header() {
  const [nav, setNav] = useState(false);
  const [open, setOpen] = useState(false);

  useMemo(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 250 ? setNav(true) : setNav(false);
    });
  });

  return (
    <header
      className={`${
        nav ? "fixed top-0 bg-white shadow-md" : "absolute"
      } h-20 w-full z-50 flex items-center transition-all duration-200 justify-between lg:px-24`}>
      <div className="w-full z-40 lg:w-auto flex items-center justify-between">
        <h1 className="text-3xl font-bold">Pacifico</h1>
        <i
          onClick={() => setOpen(!open)}
          className={`${
            open ? "fa-xmark" : "fa-bars"
          } fa-solid lg:hidden text-xl font-bold`}></i>
      </div>
      <nav className="">
        {/* Desktop Nav */}
        <ul
          className={`lg:flex items-center justify-center ${
            nav ? "text-black" : "text-white"
          } uppercase hidden text-sm font-semibold`}>
          <li className="cursor-pointer px-4 py-2">Home</li>
          <li className="cursor-pointer px-4 py-2">About</li>
          <li className="cursor-pointer px-4 py-2">Gallery</li>
          <li className="cursor-pointer px-4 py-2">Team</li>
          <li className="cursor-pointer px-4 py-2">Services</li>
          <li className="cursor-pointer px-4 py-2">Features</li>
          <li className="cursor-pointer px-4 py-2">Pricing</li>
          <li className="cursor-pointer px-4 py-2">Blog</li>
          <button
            className={`${
              nav
                ? "border-black bg-black text-white hover:text-black hover:bg-white"
                : "hover:bg-black hover:text-white hover:border-black"
            } px-6 py-2 border-2 rounded-md  duration-300`}>
            Get Started
          </button>
        </ul>

        {/* Mobile Nav */}
        <ul
          className={`${
            open ? "translate-y-0" : "-translate-y-full"
          } tranform duration-500 absolute left-0 bg-white w-full text-left top-0 py-20 px-4 text-xl font-bold`}>
          <li className="cursor-pointer px-4 py-2">Home</li>
          <li className="cursor-pointer px-4 py-2">About</li>
          <li className="cursor-pointer px-4 py-2">Gallery</li>
          <li className="cursor-pointer px-4 py-2">Team</li>
          <li className="cursor-pointer px-4 py-2">Services</li>
          <li className="cursor-pointer px-4 py-2">Features</li>
          <li className="cursor-pointer px-4 py-2">Pricing</li>
          <li className="cursor-pointer px-4 py-2">Blog</li>
          <button
            className={`text-white bg-black px-5 ml-3.5 mt-4 hover:text-black hover:bg-white hover:border-black py-1.5 border-2 rounded-md  duration-300`}>
            Get Started
          </button>
        </ul>
      </nav>
    </header>
  );
}

export default memo(Header);
