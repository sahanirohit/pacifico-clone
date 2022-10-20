import React, { memo } from "react";

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
    </section>
  );
}

export default memo(Work);
