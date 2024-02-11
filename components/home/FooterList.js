import React from "react";

const FooterList = ({ data }) => {
  return (
    <div>
      <h1 className="text-gray-600 text-sm font-medium my-1">{data?.title}</h1>
      <div>
        {data?.items?.map((item, itemIndex) => (
          <p
            key={itemIndex}
            className="text-sm my-1 hover:underline hover:cursor-pointer"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default FooterList;
