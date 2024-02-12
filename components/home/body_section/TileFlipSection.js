import React from "react";
import TileTemplate from "./TileTemplate";
import BackCard from "./BackCard";
import TiltTemplate from "./TiltTemplate";
import { InView } from "react-intersection-observer";

const TileFlipSection = () => {
  return (
    <section className="w-full mb-10">
      <div className="grid grid-flow-rows grid-cols-2 w-10/12 m-auto gap-5">
        <TiltTemplate
          className={"w-full col-span-2 h-[600px]"}
          childrenFront={
            <InView>
              {({ inView, ref, entry }) => (
                <TileTemplate
                  ref={ref}
                  iconClassName={"bg-black group-hover:opacity-80"}
                  iconStroke={"currentColor"}
                  className={`${
                    inView ? "animate-drop-up" : ""
                  } col-span-2 h-[600px] text-4xl font-semibold`}
                >
                  <div
                    className={`w-full absolute bottom-0 left-0 flex items-center justify-center`}
                  >
                    <div
                      className="w-[696px] h-[492px]"
                      style={{
                        backgroundImage:
                          "url(https://www.apple.com/v/apple-card/l/images/overview/built_for_iphone__d59h2lf8xtiu_medium.jpg)",
                      }}
                    ></div>
                    <h1 className="absolute right-40 top-10">
                      Created by Apple.
                      <br />
                      Powered by iPhone.
                    </h1>
                  </div>
                </TileTemplate>
              )}
            </InView>
          }
          childrenBack={
            <BackCard
              title={"Built for iPhone"}
              description={
                "Apple Card lives on your iPhone, in the Wallet app. You can sign up in as little as a minute and start using it right away with Apple Pay. Your transactions, payments, and account details are all in one place, where only you can see them. You even make your payments right in the Wallet app — just select your amount, tap, and it’s done."
              }
              imagePath={"/images/build_for_iphone.png"}
            />
          }
        />

        <TiltTemplate
          className={"w-full h-[800px]"}
          childrenFront={
            <InView>
              {({ inView, ref, entry }) => (
                <TileTemplate
                  ref={ref}
                  className={`${
                    inView ? "animate-drop-up" : ""
                  } w-full h-[800px] m-auto`}
                  iconClassName={"bg-white group-hover:opacity-80"}
                  iconStroke={"pink"}
                  bg="radial-gradient(ellipse at 5% 5%, #fec833 0%, rgba(254,200,51,0) 75%),radial-gradient(ellipse at 95% 5%, #fdc1a7 0%, rgba(253,193,167,0) 75%),radial-gradient(ellipse at 95% 95%, #e4699a 15%, rgba(228,105,154,0) 75%),radial-gradient(ellipse at 5% 95%, #eb5551 30%, rgba(235,85,81,0) 75%)"
                >
                  <div className="flex items-center justify-center h-full px-9 py-4">
                    <div className="text-9xl text-white font-bold">
                      <h1>No fees.</h1>
                      <h1>Not</h1>
                      <h1>even</h1>
                      <h1>hidden ones.</h1>
                    </div>
                  </div>
                </TileTemplate>
              )}
            </InView>
          }
          childrenBack={
            <BackCard
              className={"w-full h-[800px]"}
              title={"No Fees"}
              description={
                "We want to make it easier to pay down your balance, not harder. So Apple Card doesn’t have any fees. No annual, over-the-limit, foreign-transaction, or late fees. No fees. Really. Because your credit card should work for you, not against you."
              }
            />
          }
        />

        <TiltTemplate
          className={"w-full h-[800px]"}
          childrenFront={
            <InView>
              {({ inView, ref, entry }) => (
                <TileTemplate
                  ref={ref}
                  className={`${
                    inView ? "animate-drop-up" : ""
                  } w-full h-[800px] m-auto`}
                  iconClassName={"bg-black group-hover:opacity-80"}
                  iconStroke={"currentColor"}
                >
                  <div className="flex items-center justify-center h-full px-9 py-4">
                    <div className="text-7xl text-black font-bold">
                      <h1>
                        The first credit card that actually encourages you to
                        pay less interest.
                      </h1>
                    </div>
                    <img
                      className="object-cover absolute top-0"
                      src="/images/interest_wheel.jpg"
                      alt="logo"
                    />
                  </div>
                </TileTemplate>
              )}
            </InView>
          }
          childrenBack={
            <BackCard
              className={"w-full h-[800px]"}
              title={"Pay Less Interest"}
              description={
                "Most credit cards emphasize your minimum amount due. But when you pay only your minimum each month, it costs you a lot in interest over time. Apple Card is different. When you’re ready to make a payment, Apple Card estimates the interest you’ll wind up paying, based on any payment amount you choose. And it does that in real time, so you can make an informed decision about how much of your balance to pay down."
              }
            />
          }
        />

        <TiltTemplate
          className={"w-full col-span-2 h-[800px]"}
          childrenFront={
            <InView>
              {({ inView, ref, entry }) => (
                <TileTemplate
                  ref={ref}
                  iconClassName={`bg-white group-hover:opacity-80`}
                  iconStroke={"black"}
                  className={"col-span-2 h-[800px] "}
                  bg="black"
                >
                  <img
                    className="object-cover absolute top-20 right-28"
                    src="/images/daily_cash_endframe.jpg"
                    alt="logo"
                  />
                  <div
                    className={`${
                      inView ? "animate-drop-up" : ""
                    } absolute left-10 bottom-40`}
                  >
                    <h1 className="text-8xl font-bold text-white ">
                      Unlimited
                      <br />
                      Daily Cash back.
                    </h1>
                    <p
                      className="text-4xl mt-7 font-bold bg-clip-text text-transparent"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, #61a87b, #69bf74 25%, #b8ce66 84%)",
                      }}
                    >
                      Real cash you can use right away.
                    </p>
                  </div>
                </TileTemplate>
              )}
            </InView>
          }
          childrenBack={
            <BackCard
              className={"w-full h-[800px]"}
              title={"Unlimited Daily Cash"}
              description={
                "When you buy something using Apple Card, you get a percentage of your purchase back in Daily Cash — not a month from now, but every day. It’s real cash, so unlike rewards, it never expires or loses its value. You can choose to have it automatically deposited onto your Apple Cash card in the Wallet app, and it’s ready to send or spend however you’d like. Or you can open a Savings account with Apple Card and route your Daily Cash directly into the account, where it can earn interest. And there’s no limit to how much Daily Cash you can get. Use it to buy things in stores, on websites, and in apps. Make a payment on your Apple Card. Pay back a friend. Or save it up and watch it grow over time."
              }
              imagePath={"/images/unlimited_daily_cash.png"}
            />
          }
        />

        <TiltTemplate
          className={"w-full h-[800px]"}
          childrenFront={
            <InView>
              {({ inView, ref, entry }) => (
                <TileTemplate
                  ref={ref}
                  className={`${
                    inView ? "animate-drop-up" : ""
                  } w-full h-[800px] m-auto`}
                  iconClassName={"bg-black group-hover:opacity-80"}
                  iconStroke={"currentColor"}
                >
                  <div className="flex items-center justify-center h-full px-9 py-4">
                    <div className="text-6xl text-black font-bold">
                      <h1
                        className=" bg-clip-text text-transparent"
                        style={{
                          backgroundImage:
                            "linear-gradient(90deg, #90ca5a, #d7d65a 50%, #dac355 70%)",
                        }}
                      >
                        Get 3% Daily Cash back at Apple. And at select merchants
                        when you use Apple Pay.
                      </h1>
                      <img
                        className="w-9/12 object-cover mt-8"
                        src="/images/company_logos.PNG"
                        alt="logo"
                      />
                    </div>
                  </div>
                </TileTemplate>
              )}
            </InView>
          }
          childrenBack={
            <BackCard
              className={"w-full h-[800px]"}
              title={"3% Daily Cash"}
              description={
                "Apple Card gives you unlimited 3% Daily Cash back on everything you buy at Apple — whether it’s a new Mac, an iPhone case, games from the App Store, or even a service like Apple Music or Apple TV+. You also get 3% Daily Cash back on purchases you make at select merchants when you use Apple Card with Apple Pay."
              }
            >
              {/* Todo */}
            </BackCard>
          }
        />

        <TiltTemplate
          className={"w-full h-[800px]"}
          childrenFront={
            <InView>
              {({ inView, ref, entry }) => (
                <TileTemplate
                  ref={ref}
                  className={`${
                    inView ? "animate-drop-up" : ""
                  } w-full h-[800px] m-auto`}
                  iconClassName={"bg-white group-hover:opacity-80"}
                  iconStroke={"blue"}
                  bg="radial-gradient(ellipse at 5% 5%, #7bcf6a 0%, rgba(123,207,106,0) 75%),radial-gradient(ellipse at 95% 5%, #aec154 0%, rgba(174,193,84,0) 75%),radial-gradient(ellipse at 95% 95%, #68a9bb 0%, rgba(104,169,187,0) 75%),radial-gradient(ellipse at 5% 95%, #5fc28a 0%, rgba(95,194,138,0) 75%)"
                >
                  <div className="flex flex-col gap-14 items-center justify-center h-full px-9 py-4">
                    <div className="text-5xl text-white font-bold">
                      <h1>
                        Get 2% Daily Cash back when you use Apple Card with
                        Apple Pay.
                      </h1>
                    </div>
                    <img
                      className="w-9/12 object-cover mt-8"
                      src="/images/cash_back.png"
                      alt="logo"
                    />
                  </div>
                </TileTemplate>
              )}
            </InView>
          }
          childrenBack={
            <BackCard
              className={"w-full h-[800px]"}
              title={"2% Daily Cash"}
              description={
                "The best way to use Apple Card is with Apple Pay — the secure payment technology built into iPhone, Apple Watch, iPad, and Mac and accepted at 85 percent of merchants in the United States. Apple Pay is a safer way to pay that helps you avoid touching buttons or exchanging cash. And with every purchase you make using your Apple Card with Apple Pay, you get 2% Daily Cash back. No points to calculate. No limits or deadlines. Just real cash you can spend, send, or save and grow over time."
              }
            >
              {/* Todo */}
            </BackCard>
          }
        />

        <TiltTemplate
          className={"w-full col-span-2 h-[800px]"}
          childrenFront={
            <InView>
              {({ inView, ref, entry }) => (
                <TileTemplate
                  ref={ref}
                  iconClassName={`bg-white group-hover:opacity-80`}
                  iconStroke={"black"}
                  className={"col-span-2 h-[800px] "}
                  bg="black"
                >
                  <div
                    className={`${inView ? "animate-drop-up" : ""} px-16 py-10`}
                  >
                    <h1 className="text-9xl font-bold text-white ">
                      Grow your
                    </h1>
                    <h1
                      className="text-9xl font-bold text-white bg-clip-text text-transparent"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, #61a87b, #69bf74 25%, #b8ce66 84%)",
                      }}
                    >
                      Daily Cash
                    </h1>
                    <h1 className="text-9xl font-bold text-white ">
                      over time.
                    </h1>
                    <p className="text-4xl mt-7 text-white font-bold ">
                      Automatically save it and earn interest.
                    </p>
                  </div>
                  <img
                    className="w-full object-cover mt-8 absolute bottom-0 left-0 rounded-3xl"
                    src="/images/daily_cash_graph.jpg"
                    alt="logo"
                  />
                </TileTemplate>
              )}
            </InView>
          }
          childrenBack={
            <BackCard
              className={"w-full h-[800px]"}
              title={"Save and Earn Interest"}
              description={
                "With Savings, you can choose to grow your Daily Cash in a high-yield savings account. It takes just a few steps to set up your account and start saving. Your Daily Cash is deposited automatically. Your account information lives right in Wallet. And you can even add funds from Apple Cash and other bank accounts to build your savings more quickly."
              }
              imagePath={"/images/dashboard_savings.png"}
            >
              {/* Todo */}
            </BackCard>
          }
        />

        <TiltTemplate
          className={"w-full col-span-2 h-[800px]"}
          childrenFront={
            <InView>
              {({ inView, ref, entry }) => (
                <TileTemplate
                  ref={ref}
                  iconClassName={`bg-black group-hover:opacity-80`}
                  iconStroke={"white"}
                  className={"col-span-2 h-[800px] "}
                  bg="white"
                >
                  <div
                    className={`${
                      inView ? "animate-drop-up" : ""
                    } px-16 py-16 mb-16 absolute bottom-0 left-0`}
                  >
                    <p className="text-3xl mt-7 text-black font-bold ">
                      Apple Card Family
                    </p>
                    <h1 className="text-8xl font-bold text-black ">
                      Healthy finances.
                    </h1>
                    <h1 className="text-8xl font-bold text-black ">
                      Family style.
                    </h1>
                  </div>
                  <img
                    className="w-full h-1/2 object-cover absolute top-0 left-0 rounded-3xl"
                    src="/images/apple_card_family.jpg"
                    alt="logo"
                  />
                </TileTemplate>
              )}
            </InView>
          }
          childrenBack={
            <BackCard
              className={"w-full h-[800px]"}
              title={"Apple Card Family"}
              description={
                "Apple Card Family brings all the great features and benefits of Apple Card to your entire family — whether that’s your immediate family, extended family, or whoever you call family."
              }
              imagePath={"/images/apple_family_card.png"}
            >
              {/* Todo */}
            </BackCard>
          }
        />

        <TiltTemplate
          className={"w-full col-span-2 h-[800px]"}
          childrenFront={
            <InView>
              {({ inView, ref, entry }) => (
                <TileTemplate
                  ref={ref}
                  iconClassName={`${
                    inView ? "animate-drop-up" : ""
                  } bg-white group-hover:opacity-80`}
                  iconStroke={"black"}
                  className={"col-span-2 h-[800px] "}
                  bg="grey"
                >
                  <img
                    className="w-full h-full object-cover absolute top-0 left-0 rounded-3xl"
                    src="/images/titanium_card_endframe.jpg"
                    alt="logo"
                  />
                  <div
                    className={`${
                      inView ? "animate-drop-up" : ""
                    } absolute left-10 bottom-28`}
                  >
                    <h1 className="text-8xl font-bold text-white ">
                      Goodbye, plastic.
                      <br />
                      Hello, titanium.
                    </h1>
                  </div>
                </TileTemplate>
              )}
            </InView>
          }
          childrenBack={
            <BackCard
              className={"w-full h-[800px]"}
              title={"Titanium Card"}
              description={
                "With laser etching and clean styling, Apple Card is designed with the same craftsmanship we bring to all our products. And it’s the only credit card made of titanium — a sustainable metal known for its beauty and durability. When you use the card, you’ll get 1% Daily Cash back on every purchase. Since Mastercard is our global payment network, you can use it all over the world. For apps and websites that don’t take Apple Pay yet, just enter the virtual card number stored securely in your Wallet app. And when you’re using Safari, it even autofills for you."
              }
              imagePath={"/images/titanium_card.jpg"}
            />
          }
        />

        <TiltTemplate
          className={"w-full col-span-2 h-[800px]"}
          childrenFront={
            <InView>
              {({ inView, ref, entry }) => (
                <TileTemplate
                  ref={ref}
                  iconClassName={` bg-white group-hover:opacity-80`}
                  iconStroke={"orange"}
                  className={"col-span-2 h-[800px] "}
                  bg="radial-gradient(ellipse at 5% 5%, #f0acad 0%, rgba(240,172,173,0) 75%),radial-gradient(ellipse at 95% 5%, #f8ae4b 0%, rgba(248,174,75,0) 75%),radial-gradient(ellipse at 95% 95%, #dbb048 -15%, rgba(219,176,72,0) 75%),radial-gradient(ellipse at 5% 95%, #c284e9 50%, rgba(194,132,233,0) 75%)"
                >
                  <div
                    className={`${
                      inView ? "animate-drop-up" : ""
                    } absolute left-10 bottom-40`}
                  >
                    <p className="text-3xl mt-7 text-white font-bold ">
                      Privacy and Security
                    </p>
                    <h1 className="text-9xl font-bold text-white ">
                      Your card.
                      <br />
                      Your info.
                      <br />
                      Your business.
                    </h1>
                  </div>
                </TileTemplate>
              )}
            </InView>
          }
          childrenBack={
            <BackCard
              className={"w-full h-[800px]"}
              title={"Privacy and Security"}
              description={
                "Apple takes your privacy and security seriously. It’s not just a philosophy, it’s built into all our products. And Apple Card is no different. With advanced security technologies like Face ID, Touch ID, and unique transaction codes, Apple Card with Apple Pay is designed to make sure you’re the only one who can use it. The titanium card has no visible numbers. Not on the front. Not on the back. Which gives you an enhanced level of security. And your data isn’t sold to third parties for marketing or advertising."
              }
            />
          }
        />

        <TiltTemplate
          className={"w-full col-span-2 h-[800px]"}
          childrenFront={
            <InView>
              {({ inView, ref, entry }) => (
                <TileTemplate
                  ref={ref}
                  iconClassName={` bg-black group-hover:opacity-80`}
                  iconStroke={"white"}
                  className={"col-span-2 h-[800px] "}
                  bg="white"
                >
                  <div className="grid grid-cols-2 grid-flow-col h-full items-center">
                    <img
                      className={`${
                        inView ? "animate-drop-up" : ""
                      } col-span-1 w-full object-cover`}
                      src="/images/acmi_tile.jpg"
                      alt="logo"
                    />
                    <div className="px-20 py-16 mb-16">
                      <h1 className="text-6xl font-bold text-black ">
                        Pay for your new Apple products over time, interest-free
                      </h1>
                      <p className="text-3xl mt-7 text-black font-bold ">
                        when you choose to check out with Apple Card Monthly
                        Installments.
                      </p>
                    </div>
                  </div>
                </TileTemplate>
              )}
            </InView>
          }
          childrenBack={
            <BackCard
              className={"w-full h-[800px]"}
              title={"Apple Card Monthly Installments"}
              description={
                "You can buy a new Mac, iPhone, iPad, Apple Watch, and more with interest-free monthly payments on purchases at Apple. Just choose Apple Card Monthly Installments and then check out. Your installment automatically appears on your Apple Card statement alongside your everyday Apple Card purchases in the Wallet app. If you have an eligible device to trade in, you’ll pay even less per month. And you’ll get 3% Daily Cash back on the purchase price of each product, all up front. If you have Apple Card already, there’s no additional application. If you don’t, you can apply in as little as a minute during checkout, from the privacy of your iPhone."
              }
              imagePath={"/images/monthly_installments.png"}
            >
              {/* Todo */}
            </BackCard>
          }
        />

        <TiltTemplate
          className={"w-full h-[800px]"}
          childrenFront={
            <InView>
              {({ inView, ref, entry }) => (
                <TileTemplate
                  ref={ref}
                  className={`${
                    inView ? "animate-drop-up" : ""
                  }  w-full h-[800px] m-auto`}
                  iconClassName={"bg-white group-hover:opacity-80"}
                  iconStroke={"black"}
                  bg="black"
                >
                  <div className="flex flex-col gap-14 items-center justify-center h-full px-9 py-4">
                    <div className="text-7xl text-white font-bold">
                      <h1>
                        Tools to help you make financially healthy choices.
                      </h1>
                    </div>
                  </div>
                </TileTemplate>
              )}
            </InView>
          }
          childrenBack={
            <BackCard
              className={"w-full h-[800px]"}
              title={"Financial Health"}
              description={
                "To see how much you’re spending or saving, there’s no need to log in to a separate website or app. Your spending totals are automatically added up in the Wallet app, ready to view by week or by month. Color-coded categories make it easy to spot trends in your spending so you can decide if you want to change them. And Apple Card uses Maps to pinpoint where you bought something. No mysterious merchant codes. No guessing. If you choose to route your Daily Cash to Savings, you have anytime access to your account details and the interest you’ve received. You can even transfer money in and out at any time."
              }
            >
              {/* Todo */}
            </BackCard>
          }
        />

        <TiltTemplate
          className={"w-full h-[800px]"}
          childrenFront={
            <InView>
              {({ inView, ref, entry }) => (
                <TileTemplate
                  ref={ref}
                  className={`${
                    inView ? "animate-drop-up" : ""
                  } w-full h-[800px] m-auto`}
                  iconClassName={"bg-gray-400 group-hover:opacity-80"}
                  iconStroke={"currentColor"}
                >
                  <img
                    className="w-32 object-cover mt-16 absolute top-18 right-20"
                    src="/images/logo_mastercard.png"
                    alt="logo"
                  />
                  <h1 className="text-gray-400 text-5xl font-semibold absolute top-16 left-14">
                    Goldman
                    <br />
                    Sachs
                  </h1>
                  <div className="flex items-center justify-center h-full px-9 py-4">
                    <div className="text-7xl text-gray-400 font-bold">
                      <h1>
                        Trusted partners for a different kind of credit card.
                      </h1>
                    </div>
                  </div>
                </TileTemplate>
              )}
            </InView>
          }
          childrenBack={
            <BackCard
              className={"w-full h-[800px]"}
              title={"Partnerships"}
              description={
                "To create Apple Card, we needed an issuing bank and a global payment network. Apple Card is the first consumer credit card Goldman Sachs has issued, and they were open to doing things in a new way. And the strength of the Mastercard network means Apple Card is accepted all over the world."
              }
            >
              {/* Todo */}
            </BackCard>
          }
        />
      </div>
    </section>
  );
};

export default TileFlipSection;
