import React from "react";

const blogData = [
  {
    name: "Paul Smith",
    title: "Affinity Designer Quick Start",
    img: require("../assets/images/blog1.jpg"),
  },
  {
    name: "John Doe",
    title: "Solid HTML Form Structure",
    img: require("../assets/images/blog2.jpg"),
  },
  {
    name: "Jenny Lee",
    title: "New WordPress Theme",
    img: require("../assets/images/blog3.jpg"),
  },
];

function Blog() {
  return (
    <section className="lg:px-24 bg-[#f2f7f8]">
      <div className="py-20">
        <div className="">
          <div className="text-center pb-16 flex flex-col items-center justify-center space-y-4">
            <h1 className="text-4xl font-bold">Our Latest News</h1>
            <p className="text-lg">
              There are many variations of passages of Lorem Ipsum available,
              but the majority <br />
              have suffered alteration, by injected humour, or new randomised
              words.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {blogData.map((item, index) => {
              return (
                <div className="space-y-4" key={index}>
                  <img src={item.img} alt="img" className="" />
                  <h2 className="font-bold text-xl">{item.title}</h2>
                  <h3 className="text-gray-500">
                    {item.name} |{" "}
                    <span className="text-gray-400">Web Design</span>
                  </h3>
                  <p className="text-gray-400">
                    Quis autem velis etis reprehender etims quiste voluptate
                    velite esse quam nihil etsa illum sedit consequatur quias
                    quiste varias netsum.
                  </p>
                  <button className="px-6 py-3 rounded-md hover:from-purple-500 hover:to-purple-800  text-white font-semibold bg-gradient-to-tl from-purple-800 to-purple-500">
                    Read More
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
