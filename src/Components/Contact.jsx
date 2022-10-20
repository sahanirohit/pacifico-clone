import React, { memo } from "react";

function Contact() {
  return (
    <section className="lg:px-24 bg-gray-800">
      <div className="py-16">
        <div className="text-center flex space-y-4 pb-16 flex-col items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Get In Touch</h1>
          <p className="text-lg text-gray-400">
            There are many variations of passages of Lorem Ipsum available, but
            the majority <br />
            have suffered alteration, by injected humour, or new randomised
            words.
          </p>
        </div>

        <div className="flex items-center justify-center flex-col">
          <div className="w-[80%]">
            <form action="" className="">
              <div className="grid md:grid-cols-2 gap-8 text-gray-300">
                <div className="flex flex-col space-y-4 md:space-y-0 justify-between">
                  <input
                    type="text"
                    className="bg-transparent border border-gray-300 px-4 py-3 rounded-md"
                    placeholder="Full Name*"
                  />
                  <input
                    type="text"
                    className="bg-transparent border border-gray-300 px-4 py-3 rounded-md"
                    placeholder="Email Address*"
                  />
                  <input
                    type="text"
                    className="bg-transparent border border-gray-300 px-4 py-3 rounded-md"
                    placeholder="Phone Number*"
                  />
                </div>
                <textarea
                  name=""
                  className="p-4 border border-gray-300 rounded-md bg-transparent "
                  id=""
                  cols="30"
                  placeholder="Your Message..."
                  rows="10"></textarea>
              </div>
              {/* CTA */}
              <div className="text-white flex items-center justify-center w-full p-8">
                <button className="px-6 py-4 bg-gradient-to-tl from-purple-600 to-purple-900 hover:from-purple-900 hover:to-purple-600 rounded-md border border-purple-800">
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Contact);
