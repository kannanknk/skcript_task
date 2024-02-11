import React from "react";

const AppNavBar = () => {
  const menus = [
    {
      id: 1,
      title: "Overview",
      url: "/#",
    },
    {
      id: 2,
      title: "Features",
      url: "/#",
    },
    {
      id: 3,
      title: "Family",
      url: "/#",
    },
    {
      id: 4,
      title: "Monthly Installments",
      url: "/#",
    },
    {
      id: 5,
      title: "How-To-Videos",
      url: "/#",
    },
  ];

  return (
    <div className="bg-white w-full py-1 sticky top-0 left-0 opacity-90 z-40 flex items-center justify-center">
      <div className="w-9/12 justify-between flex items-center mx-auto space-x-5">
        <div className="flex-grow-0">
          <a
            className="flex text-black font-bold px-3 py-2 rounded-md text-xl w-full"
            href="/#"
          >
            Apple Card
          </a>
        </div>
        <div className="flex-grow flex items-end justify-end space-x-5">
          {menus?.map((menu) => (
            <a
              key={menu.id}
              className="text-black font-normal px-3 py-2 rounded-md text-xs hover:text-blue-600"
              href={menu.url}
            >
              {menu.title}
            </a>
          ))}
        </div>
        <div className="flex-grow-0">
          <button
            type="button"
            className="py-1 px-3 text-center hover:bg-gray-800 bg-black text-white w-full text-xs shadow-md focus:outline-none  rounded-full"
          >
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppNavBar;
