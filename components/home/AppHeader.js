import React, { useState } from "react";
import FooterList from "./FooterList";

const AppHeader = () => {
  const [isDropMenu, setIsDropMenu] = useState(false);
  const [dropMenuHovered, setDropMenuHovered] = useState(0);

  const menus = [
    {
      id: 1,
      title: "Store",
      url: "/#",
    },
    {
      id: 2,
      title: "Mac",
      url: "/#",
    },
    {
      id: 3,
      title: "iPad",
      url: "/#",
    },
    {
      id: 4,
      title: "iPhone",
      url: "/#",
    },
    {
      id: 5,
      title: "Watch",
      url: "/#",
    },
    {
      id: 6,
      title: "Vision",
      url: "/#",
    },
    {
      id: 7,
      title: "AirPods",
      url: "/#",
    },
    {
      id: 8,
      title: "TV & Home",
      url: "/#",
    },
    {
      id: 9,
      title: "Entertainment",
      url: "/#",
    },
    {
      id: 10,
      title: "Accessories",
      url: "/#",
    },
    {
      id: 11,
      title: "Support",
      url: "/#",
    },
  ];

  const drop_menu_contents = [
    {
      id: 1,
      col1: {
        title: "Shop",
        items: [
          "Shop the Latest",
          "Mac",
          "iPad",
          "iPhone",
          "Apple Watch",
          "Apple Vision Pro",
          "Accessories",
        ],
      },
      col2: {
        title: "Quick Links",
        items: ["Find a Store", "Order Status", "Apple Trade In", "Financing"],
      },
      col3: {
        title: "Shop Special Stores",
        items: [
          "Certified Refurbished",
          "Education",
          "Business",
          "Veterans and Military",
          "Government",
        ],
      },
    },
    {
      id: 2,
      col1: {
        title: "Explore Mac",
        items: [
          "Explore All Mac",
          "MacBook Air",
          "MacBook Pro",
          "iMac",
          "Mac mini",
          "Mac Studio",
          "Mac Pro",
          "Displays",
          "Compare Mac",
          "Mac Does That",
        ],
      },
      col2: {
        title: "Shop Mac",
        items: ["Shop Mac", "Mac Accessories", "Apple Trade In", "Financing"],
      },
      col3: {
        title: "More from Mac",
        items: [
          "Mac Support",
          "AppleCare+ for Mac",
          "macOS Sonoma",
          "Apps by Apple",
          "Continuity",
          "iCloud+",
          "Mac for Business",
          "Education",
        ],
      },
    },
    {
      id: 3,
      col1: {
        title: "Explore All iPad",
        items: [
          "iPad Pro",
          "iPad Air",
          "iPad",
          "iPad mini",
          "Apple Pencil",
          "Keyboards",
          "Compare iPad",
          "Why iPad",
        ],
      },
      col2: {
        title: "Shop iPad",
        items: ["Shop iPad", "iPad Accessories", "Apple Trade In", "Financing"],
      },
      col3: {
        title: "More from iPad",
        items: [
          "iPad Support",
          "AppleCare+ for iPad",
          "iPadOS 17",
          "Apps by Apple",
          "iCloud+",
          "Education",
        ],
      },
    },
    {
      id: 4,
      col1: {
        title: "Explore iPhone",
        items: [
          "Explore All iPhone",
          "iPhone 15 Pro",
          "iPhone 15",
          "iPhone 14",
          "iPhone 13",
          "iPhone SE",
          "Compare iPhone",
          "Switch from Android",
        ],
      },
      col2: {
        title: "Shop iPhone",
        items: [
          "Shop iPhone",
          "iPhone Accessories",
          "Apple Trade In",
          "Carrier Deals at Apple",
          "Financing",
        ],
      },
      col3: {
        title: "More from iPhone",
        items: [
          "iPhone Support",
          "AppleCare+ for iPhone",
          "iOS 17",
          "Apps by Apple",
          "iPhone Privacy",
          "iCloud+",
          "Wallet, Pay, Card",
          "Siri",
        ],
      },
    },
    {
      id: 5,
      col1: {
        title: "Explore Watch",
        items: [
          "Explore All Apple Watch",
          "Apple Watch Series 9",
          "Apple Watch Ultra 2",
          "Apple Watch SE",
          "Apple Watch Nike",
          "Apple Watch Hermès",
          "Compare Watch",
          "Why Apple Watch",
        ],
      },
      col2: {
        title: "Shop Watch",
        items: [
          "Shop Apple Watch",
          "Apple Watch Studio",
          "Apple Watch Bands",
          "Apple Watch Accessories",
          "Apple Trade In",
          "Financing",
        ],
      },
      col3: {
        title: "More from Watch",
        items: [
          "Apple Watch Support",
          "AppleCare+",
          "watchOS 10",
          "Apps by Apple",
          "Apple Fitness+",
        ],
      },
    },
    {
      id: 6,
      col1: {
        title: "Apple Vision Pro",
        items: ["Apple Vision Pro", "Guided Tour", "Tech Specs"],
      },
      col2: {
        title: "Shop Vision",
        items: [
          "Shop Apple Vision Pro",
          "Apple Vision Pro Accessories",
          "Book a Demo",
        ],
      },
      col3: {
        title: "More from Vision",
        items: ["Apple Vision Pro Support", "AppleCare+"],
      },
    },
    {
      id: 7,
      col1: {
        title: "Explore AirPods",
        items: [
          "Explore All AirPods",
          "AirPods Pro 2nd generation",
          "AirPods 2nd generation",
          "AirPods 3rd generation",
          "AirPods Max",
          "Compare AirPods",
        ],
      },
      col2: {
        title: "Shop AirPods",
        items: ["Shop AirPods", "AirPods Accessories"],
      },
      col3: {
        title: "More from AirPods",
        items: ["AirPods Support", "AppleCare+ for Headphones", "Apple Music"],
      },
    },
    {
      id: 8,
      col1: {
        title: "Explore TV & Home",
        items: ["Explore TV & Home", "Apple TV 4K", "HomePod", "HomePod mini"],
      },
      col2: {
        title: "Shop TV & Home",
        items: [
          "Shop Apple TV 4K",
          "Shop HomePod",
          "Shop HomePod mini",
          "Shop Siri Remote",
          "TV & Home Accessories",
        ],
      },
      col3: {
        title: "More from TV & Home",
        items: [
          "Apple TV Support",
          "HomePod Support",
          "AppleCare+",
          "Apple TV app",
          "Apple TV+",
          "Home app",
          "Apple Music",
          "Siri",
          "AirPlay",
        ],
      },
    },
    {
      id: 9,
      col1: {
        title: "Explore Entertainment",
        items: [
          "Explore Entertainment",
          "Apple One",
          "Apple TV+",
          "Apple Music",
          "Apple Arcade",
          "Apple Fitness+",
          "Apple News+",
          "Apple Podcasts",
          "Apple Books",
          "App Store",
        ],
      },
      col2: {
        title: "Support",
        items: ["Apple TV+ Support", "Apple Music Support"],
      },
      col3: {
        title: "",
        items: [],
      },
    },
    {
      id: 10,
      col1: {
        title: "Shop Accessories",
        items: [
          "Shop All Accessories",
          "Mac",
          "iPad",
          "iPhone",
          "Apple Watch",
          "Apple Vision Pro",
          "AirPods",
          "TV & Home",
        ],
      },
      col2: {
        title: "Explore Accessories",
        items: ["Made by Apple", "Beats by Dr. Dre", "AirTag"],
      },
      col3: {
        title: "",
        items: [],
      },
    },
    {
      id: 11,
      col1: {
        title: "Explore Support",
        items: [
          "iPhone",
          "Mac",
          "iPad",
          "Watch",
          "Apple Vision Pro",
          "AirPods",
          "Music",
          "TV",
          "Explore Support",
        ],
      },
      col2: {
        title: "Get Help",
        items: ["Community", "Check Coverage", "Repair", "Contact Us"],
      },
      col3: {
        title: "Helpful Topics",
        items: [
          "Get AppleCare+",
          "Apple ID & Password",
          "Billing & Subscriptions",
          "Find My",
          "Accessibility",
        ],
      },
    },
  ];

  return (
    <div>
      <nav
        onMouseLeave={() => {
          setIsDropMenu(false);
          setDropMenuHovered(0);
        }}
        className="bg-gray-50 w-full p-1 flex items-center justify-center relative"
      >
        <div className="justify-between flex items-center space-x-5">
          {/* logo */}
          <a className="flex-shrink-0" href="/">
            <img
              className="w-3 h-4 object-cover"
              src="/images/apple_logo.svg"
              alt="logo"
            />
          </a>

          {/* menus */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-4">
              {menus?.map((menu) => (
                <a
                  onMouseOver={() => {
                    setIsDropMenu(true);
                    setDropMenuHovered(menu.id);
                  }}
                  key={menu.id}
                  className="text-black font-normal px-3 py-2 rounded-md text-xs"
                  href={menu.url}
                >
                  {menu.title}
                </a>
              ))}
            </div>
          </div>

          {/* search */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>

          {/* shopping */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </div>
        </div>
        {isDropMenu ? (
          <div className="px-44 bg-gray-50 absolute p-7 top-0 left-0 z-50 mt-10 w-full grid grid-flow-col grid-cols-3 justify-between">
            {/* Todo */}
            {/* {drop_menu_contents?.find(menu=>menu.id===dropMenuHovered)} */}
            <FooterList
              data={
                drop_menu_contents?.find((menu) => menu.id === dropMenuHovered)
                  ?.col1
              }
            />
            <FooterList
              data={
                drop_menu_contents?.find((menu) => menu.id === dropMenuHovered)
                  ?.col2
              }
            />
            <FooterList
              data={
                drop_menu_contents?.find((menu) => menu.id === dropMenuHovered)
                  ?.col3
              }
            />
          </div>
        ) : (
          <></>
        )}
      </nav>
    </div>
  );
};

export default AppHeader;
