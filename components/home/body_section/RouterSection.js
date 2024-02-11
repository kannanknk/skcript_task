import React from "react";

const RouterSection = () => {
  return (
    <section className="p-6 relative w-full bg-center bg-no-repeat bg-cover bg-[url(/images/footer_gradient.jpg)]">
      <div className="p-4 flex flex-col items-center justify-center gap-3 pt-24">
        <div className="flex items-center justify-center gap-2 text-4xl font-semibold p-1">
          <img
            className="w-16 rounded-md object-cover"
            src="/images/wallet_pic.jpg"
            alt="logo"
          />
        </div>
        <div className="flex flex-col text-center items-center justify-center gap-1 text-8xl font-semibold">
          <h1>
            Get started <br />
            with Apple Card
          </h1>
          <p className="text-4xl mt-5">
            Apply in minutes to see if you are approved <br />
            with no impact to your credit score.
          </p>
        </div>
        <div className="flex items-center justify-center my-5">
          <button
            type="button"
            className="py-2 px-5 bg-white hover:bg-gray-100 text-gray-800 text-center text-lg shadow-md focus:outline-none  rounded-full"
          >
            Apply now
          </button>
        </div>
      </div>
    </section>
  );
};

export default RouterSection;
