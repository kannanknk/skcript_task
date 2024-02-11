import React from "react";
import RouterCard from "./RouterCard";

const RouterCardSection = () => {
  return (
    <section className=" p-5 bg-gray-200">
      <div className="w-10/12 m-auto flex items-center justify-center p-12">
        <h1 className="text-black text-6xl font-bold">
          More for your finances.
        </h1>
      </div>
      <div className="w-10/12 m-auto grid grid-flow-row grid-cols-3 pb-5">
        <RouterCard
          className={"bg-[#D9D6CC]"}
          imagePath={"/images/wallet_pic.jpg"}
          title="Wallet"
          subTitle1={"Carry one thing."}
          subTitle2={"Everything."}
        />
        <RouterCard
          className={"bg-[#007AFF]"}
          imagePath={"/images/apple_pay.jpg"}
          title="Apple Pay"
          subTitle1={"Pay the Apple way."}
          subTitle2={""}
          isTextWhite
        />
        <RouterCard
          className={"bg-[#1E1E1F]"}
          imagePath={"/images/apple_cash.jpg"}
          title="Apple Cash"
          subTitle1={"Send it."}
          subTitle2={"Spend it. Stash it."}
          isTextWhite
        />
      </div>
    </section>
  );
};

export default RouterCardSection;
