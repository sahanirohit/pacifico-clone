import React, { memo } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/bundle";

// import required modules
import { Autoplay, Pagination } from "swiper";

const reviewImage = [
  {
    name: "Jennifer Doe",
    title: "App Magazine Editor",
    img: require("../assets/images/testimonials1.jpg"),
  },
  {
    name: "Jenny",
    title: "Web Developer",
    img: require("../assets/images/testimonials2.jpg"),
  },
  {
    name: "John",
    title: "Web Designer",
    img: require("../assets/images/testimonials3.jpg"),
  },
];

function Review() {
  return (
    <section className="lg:px-24">
      <div className="py-20">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper review">
          {reviewImage.map((item, index) => {
            return (
              <div className="" key={index}>
                <SwiperSlide className="">
                  <div className="flex flex-col items-center justify-center text-center p-16 space-y-4">
                    <div className="w-28 h-28 p-1.5 bg-gray-400 rounded-full">
                      <img
                        src={item.img}
                        alt=""
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <p className="">
                      The attention of a traveller, should be particularly
                      turned, in the first palce to the various <br /> works of
                      Nature, to mark the distinctions of the climates he may
                      explore, and to offer <br /> such useful observations on
                      the different productions as may occur.
                    </p>
                    <h2 className=" font-bold">
                      {item.name} -{" "}
                      <span className=" text-gray-400">{item.title}</span>
                    </h2>
                  </div>
                </SwiperSlide>
              </div>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
}

export default memo(Review);
