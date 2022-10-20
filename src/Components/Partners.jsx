import React, { memo } from "react";

const partnerImage = [
  require("../assets/images/envato.png"),
  require("../assets/images/behance.png"),
  require("../assets/images/dribbble.png"),
  require("../assets/images/linkedin.png"),
  require("../assets/images/wordpress.png"),
];

function Partners() {
  return (
    <section className="relative z-[1] w-full flex items-end justify-end h-full">
      <div className="bg-gray-200 flex space-x-0 sm:space-x-8 space-y-4 items-center justify-around flex-wrap w-full py-8 px-24">
        {partnerImage.map((item, index) => {
          return (
            <div className="h-8 lg:h-10" key={index}>
              <img src={item} alt="" className="w-full h-full object-contain" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default memo(Partners);
