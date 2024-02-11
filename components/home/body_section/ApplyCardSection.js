import React from "react";

const ApplyCardSection = () => {
  return (
    <section
      className="relative"
      style={{
        background:
          "linear-gradient(90deg, #E9BCF2 7%, #F8B7C5, #FEC49A, #FFD493, #FFEDBE 80%, #FFF7E0)",
      }}
    >
      <div className="p-4 flex flex-col items-center justify-center gap-3 pt-24 pb-80">
        <div className="flex items-center justify-center gap-2 text-4xl font-semibold p-1">
          <img
            className="w-6 h-8 object-cover"
            src="/images/apple_logo.svg"
            alt="logo"
          />
          <h1>Card</h1>
        </div>
        <div className="flex flex-col text-center items-center justify-center gap-1 text-8xl font-semibold">
          <h1>The simplicity of Apple.</h1>
          <h1>In a credit card.</h1>
        </div>
        <div className="flex items-center justify-center my-5">
          <button
            type="button"
            className="py-2 px-5 bg-gray-800 hover:bg-gray-700 text-white text-center text-lg shadow-md focus:outline-none  rounded-full"
          >
            Apply now
          </button>
        </div>
      </div>
      <div className="absolute w-full p-3 bg-white opacity-70 top-0 left-0 flex items-center justify-center">
        <p>
          With every purchase, get up to 3% Daily Cash back to spend or save.{" "}
          <span className="text-blue-600 hover:underline hover:cursor-pointer">
            Apply now
          </span>{" "}
          <span className="text-blue-600 hover:cursor-pointer">{">"}</span>
        </p>
      </div>
      <div className="w-full absolute bottom-0 left-0 flex items-center justify-center">
        <div
          style={{
            height: "270px",
            width: "359px",
            backgroundImage:
              "url(https://www.apple.com/v/apple-card/l/images/overview/hero_iphone__errwhundjmky_medium.png)",
          }}
        ></div>
      </div>
    </section>
  );
};

export default ApplyCardSection;
