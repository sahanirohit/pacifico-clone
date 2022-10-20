import React from "react";

import aboutImage from "../assets/images/about.jpg";

function Benefits() {
  return (
    <section className="lg:px-24 px-8 bg-emerald-50">
      <div className="w-full">
        <div className="py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <img
            src={aboutImage}
            alt=""
            className="w-full h-full shadow-2xl object-cover"
          />
          <div className="space-y-6">
            <h1 className="text-3xl font-semibold">
              Get ready to discover all the benefits and secrets of a perfect
              launch
            </h1>
            <p className="">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur netsum
              lorem fugit, sed quia magni dolores eos qui ratione sequi
              nesciunt. Neque et poris ratione sequi enim ipsam voluptatem quia
              volupti tempor ante netsum quia magni.
            </p>
            <div className="">
              <p className="">
                <i className="fa-sharp fa-solid fa-check"></i> Netsum est, qui
                ipsum quiaim netsum sequi net tempor.
              </p>
              <p className="">
                <i className="fa-sharp fa-solid fa-check"></i> Etiam tempor ante
                acu ipsum finibus, atimus urnas.
              </p>
              <p className="">
                <i className="fa-sharp fa-solid fa-check"></i> Atimus urnas
                netsudat, qui ipsum quiaim netsum.
              </p>
              <p className="">
                <i className="fa-sharp fa-solid fa-check"></i> Etiam tempor ante
                acum ipsum et finibus.
              </p>
            </div>
            {/* CTA */}
            <button className=" bg-gradient-to-tl px-6 duration-500 text-white rounded-lg py-4 from-purple-500 to-purple-900 hover:from-purple-900 hover:to-purple-500 font-semibold">
              Discover more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
