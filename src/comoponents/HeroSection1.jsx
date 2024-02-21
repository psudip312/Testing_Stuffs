import React from "react";
import Image from "../images/herobg.svg";

const HeroSection1 = () => {
  const text = `Lorem ips o eum illo cupiditate accusamus, fugiat nostrum quaerat. Dignissimos, officiis error amet fuga enim sequi. Suscipit ratione odit labore cum, praesentium sequi!`;
  const words = text.split(" ");

  return (
    <div className="flex justify-center items-center h-screen w-full relative animate-fadeIn">
      <div className="flex flex-wrap-reverse w-full items-center justify-around z-3">
        <div className="w-500 m-5">
          <h1 className="mb-10 text-4xl animate-fadeIn">Heading</h1>
          <h2 className="mb-20">
            {"Lorem ips o eum illo cupiditate accusamus, "
              .split(" ")
              .map((word, i) => (
                <span
                  key={i}
                  className="animate-fadeIn"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {word + ` `}
                </span>
              ))}
          </h2>
          <p className="text">
            {words.map((word, i) => (
              <span
                key={i}
                className="animate-fadeIn"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {word + ` `}
              </span>
            ))}
          </p>
        </div>
        <div className="w-full md:w-500 m-5 md:m-0">
          <img src={Image} alt="bg" className="h-full w-full" />
        </div>
      </div>
      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center filter blur-20 opacity-50 z-1"
        style={{ backgroundImage: `url("../images/pattern.jpg")` }}
      ></div>
    </div>
  );
};

export default HeroSection1;
