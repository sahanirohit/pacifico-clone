import React, { memo } from "react";

const teamImage = [
  {
    name: "JOHNATHAN HAWKINS",
    title: "Head of SEO",
    img: require("../assets/images/team1a.jpg"),
  },
  {
    name: "ALEXANDRA SMITHS",
    title: "SEO Specialist",
    img: require("../assets/images/team2a.jpg"),
  },
  {
    name: "ELISA JOHANSON",
    title: "Marketing Manager",
    img: require("../assets/images/team3a.jpg"),
  },
];

function Team() {
  return (
    <section className="lg:px-24 py-16 px-8">
      <div className="flex flex-col pb-16 space-y-4 items-center justify-center text-center">
        <h1 className="text-4xl font-bold">The Team Behind Pacifico</h1>
        <p className="">
          There are many variations of passages of Lorem Ipsum available, but
          the majority
          <br />
          have suffered alteration, by injected humour, or new randomised words.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 bg-white w-full gap-8">
        {teamImage.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-gray-100 rounded-md group hover:bg-gray-800 duration-300">
              <div className="flex items-center justify-center w-full flex-col py-16 space-y-4">
                <div className="p-2 relative rounded-full w-32 h-32 bg-gray-300">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="text-center flex flex-col justify-center items-center space-y-3 px-8">
                  <h1 className="text-xl font-bold group-hover:text-white">
                    {item.name}
                  </h1>
                  <i className="group-hover:text-gray-200 text-gray-400">
                    {item.title}
                  </i>
                  <div className="w-14 h-[3px] bg-gradient-to-l from-purple-400 to bg-purple-900"></div>
                  <p className="text-gray-500 group-hover:text-gray-300">
                    Johnathan is our co-founder and has developed search
                    strategies for a variety of clients from international
                    brands to medium sized businesses for over five years.
                  </p>
                  <div className="text-2xl">
                    <i className="fa-brands cursor-pointer duration-200 hover:-translate-y-2 p-2 fa-twitter text-sky-500"></i>
                    <i className="fa-brands cursor-pointer duration-200 hover:-translate-y-2 p-2 fa-pinterest text-red-600"></i>
                    <i className="fa-brands cursor-pointer duration-200 hover:-translate-y-2 p-2 fa-facebook text-blue-600"></i>
                    <i className="fa-brands cursor-pointer duration-200 hover:-translate-y-2 p-2 fa-youtube text-red-600"></i>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default memo(Team);
