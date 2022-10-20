import React, { memo } from "react";

function Footer() {
  return (
    <section className="lg:px-24 bg-gray-200">
      <div className="py-16 w-full space-y-4 flex flex-col items-center justify-center text-center">
        <p className="">
          Copyright &copy; 2022 Pacifico Clone. Designed by{" "}
          <strong className="text-sky-400 cursor-pointer font-bold underline">
            Rohit Sahani
          </strong>
        </p>
        <div className="text-2xl space-x-6">
          <i className="fa-brands cursor-pointer duration-200 hover:-translate-y-2 p-2 fa-twitter text-sky-500"></i>
          <i className="fa-brands cursor-pointer duration-200 hover:-translate-y-2 p-2 fa-pinterest text-red-600"></i>
          <i className="fa-brands cursor-pointer duration-200 hover:-translate-y-2 p-2 fa-facebook text-blue-600"></i>
          <i className="fa-brands cursor-pointer duration-200 hover:-translate-y-2 p-2 fa-youtube text-red-600"></i>
        </div>
      </div>
    </section>
  );
}

export default memo(Footer);
