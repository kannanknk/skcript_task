import React, { useState } from "react";

const TiltTemplate = ({ className, childrenFront, childrenBack }) => {
  const [isRotate, setIsRotate] = useState(false);

  return (
    <div
      className={className}
      onMouseLeave={() => {
        setIsRotate(false);
      }}
    >
      <div className="group w-full">
        <div
          className={`w-full relative ${
            isRotate ? "[transform:rotateY(180deg)]" : ""
          } transition-all duration-1000 [transform-style:preserve-3d]`}
        >
          <div
            onClick={() => {
              setIsRotate(true);
            }}
            className="w-full absolute top-0 [backface-visibility:hidden]"
          >
            {childrenFront}
          </div>
          <div
            onClick={() => {
              setIsRotate(false);
            }}
            className="w-full [transform:rotateY(180deg)] absolute top-0 [backface-visibility:hidden]"
          >
            {childrenBack}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TiltTemplate;
