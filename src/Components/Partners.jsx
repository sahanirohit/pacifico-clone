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
      <div className="container bg-gray-200 mx-auto flex items-center justify-evenly flex-wrap w-full py-8">
        {partnerImage.map((item, index) => {
          return (
            <div className="" key={index}>
              <img src={item} alt="" className="w-full h-8 object-contain" />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Partners;
