import React from "react";

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
      <div className="bg-gray-200 flex items-center justify-between px-80 flex-wrap w-full py-8">
        {partnerImage.map((item, index) => {
          return (
            <div className="" key={index}>
              <img src={item} alt="" className="w-full h-6 object-contain" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Partners;
