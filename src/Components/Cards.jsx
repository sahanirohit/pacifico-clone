import React, { memo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";

// import required modules
import { Autoplay, Pagination } from "swiper";

const projectImage = [
  require("../assets/images/showcase1.jpg"),
  require("../assets/images/showcase2.jpg"),
  require("../assets/images/showcase3.jpg"),
  require("../assets/images/showcase4.jpg"),
  require("../assets/images/showcase5.jpg"),
  require("../assets/images/showcase6.jpg"),
];

function Cards() {
  return (
    <section className="py-20 px-8 lg:px-24 bg-purple-800 text-white overflow-hidden w-full">
      <div className="space-y-4 pb-16 text-center">
        <h1 className="text-4xl font-bold">Explore Latest Projects</h1>
        <p className="">
          There are many variations of passages of Lorem Ipsum available, but
          the majority
          <br />
          have suffered alteration, by injected humour, or new randomised words.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            468: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper">
          {projectImage.map((item, index) => {
            return (
              <div className="" key={index}>
                <SwiperSlide className="">
                  <img src={item} alt="" className="border-8 border-gray-300" />
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default memo(Cards);
