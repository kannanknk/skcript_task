import React from "react";

const RouterCard = ({
  className,
  title,
  subTitle1,
  subTitle2,
  imagePath,
  isTextWhite,
}) => {
  return (
    <div className={`rounded-3xl p-5 m-5 ${className}`}>
      <div className="flex items-center justify-center flex-col gap-3">
        <h1
          className={`font-semibold text-xl text-center ${
            isTextWhite ? "text-white" : ""
          }`}
        >
          {title}
        </h1>
        <h2
          className={`font-semibold text-2xl text-center ${
            isTextWhite ? "text-white" : ""
          }`}
        >
          {subTitle1}
        </h2>
        <h2
          className={`font-semibold text-2xl text-center ${
            isTextWhite ? "text-white" : ""
          }`}
        >
          {subTitle2}
        </h2>
        <h2
          className={`font-medium text-center text-gray-600 hover:cursor-pointer ${
            isTextWhite ? "text-white" : ""
          }`}
        >
          Learn more <span>{">"}</span>
        </h2>
        <img
          className=" m-4 rounded-2xl object-cover"
          src={imagePath}
          alt="logo"
        />
      </div>
    </div>
  );
};

export default RouterCard;
