import React from "react";

const BackCard = ({
  children,
  childrenClassName,
  title,
  description,
  imagePath,
  imageClassName,
  className,
}) => {
  return (
    <div
      className={`hover:cursor-pointer rounded-3xl p-3 grid grid-flow-row grid-cols-${
        imagePath ? "2" : "1"
      } items-center justify-center ${className}`}
      style={{
        boxShadow: "4px 12px 40px 6px rgba(0,0,0,0.09)",
      }}
    >
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="w-9/12 text-sm font-bold text-gray-400">{title}</h1>
        <p className="w-9/12 text-sm font-normal text-gray-600">
          {description}
        </p>
        <div className={`w-9/12 ${childrenClassName}`}> {children}</div>
      </div>
      {imagePath ? (
        <div className={`flex items-center justify-center ${imageClassName}`}>
          <img className="object-cover" src={imagePath} alt="logo" />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default BackCard;
