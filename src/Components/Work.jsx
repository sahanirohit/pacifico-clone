import React, { memo } from "react";

import aboutImage from "../assets/images/about.jpg";

function Work() {
  return (
    <section className="lg:px-24">
      <div className="py-28 px-8">
        <div className="flex items-center justify-center flex-col text-center space-y-4">
          <h1 className="md:text-4xl text-3xl font-semibold">How It Works</h1>
          <p className="md:text-lg font-normal">
            There are many variations of passages of Lorem Ipsum available, but
            the majority <br />
            have suffered alteration, by injected humour, or new randomised
            words.
          </p>
        </div>
        <div className="grid mt-6 sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 place-items-center place-content-center gap-8 w-full">
          <div className="items-center justify-center  flex flex-col space-y-4 text-center">
            <i className="fa-sharp text-6xl text-sky-400 fa-solid fa-clipboard"></i>
            <h2 className="text-2xl font-semibold">Search Oportunities</h2>
            <p className="text-lg">
              Curabitur quam etsum lacus etsumis nulat iaculis ets vitae etsum
              nisle varius sed aliquam ets vitae dictis netsum.
            </p>
          </div>
          <div className="items-center justify-center flex flex-col space-y-4 text-center">
            <i className="fa-sharp text-6xl text-sky-400 fa-solid fa-chart-simple"></i>
            <h2 className="text-2xl font-semibold">Reach Clients</h2>
            <p className="text-lg">
              Curabitur quam etsum lacus etsumis nulat iaculis ets vitae etsum
              nisle varius sed aliquam ets vitae dictis netsum.
            </p>
          </div>
          <div className="items-center justify-center flex flex-col space-y-4 text-center">
            <i className="fa-solid text-6xl text-sky-400 fa-piggy-bank"></i>
            <h2 className="text-2xl font-semibold">Get Rewarded</h2>
            <p className="text-lg">
              Curabitur quam etsum lacus etsumis nulat iaculis ets vitae etsum
              nisle varius sed aliquam ets vitae dictis netsum.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-emerald-50 px-8 lg:px-0">
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

export default memo(Work);
