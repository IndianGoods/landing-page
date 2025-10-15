// This template requires the Embla Auto Scroll plugin to be installed:
//
// npm install embla-carousel-auto-scroll

"use client";

import * as React from "react";
import AutoScroll from "embla-carousel-auto-scroll";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading = "Trusted by leading businesses across India",
  logos = [
    {
      id: "logo-1",
      description: "Razorpay",
      image: "https://razorpay.com/assets/razorpay-logo.svg",
      className: "h-8 w-auto",
    },
    {
      id: "logo-2",
      description: "Shiprocket",
      image:
        "https://shiprocket.in/wp-content/uploads/2019/07/shiprocket-logo.png",
      className: "h-8 w-auto",
    },
    {
      id: "logo-3",
      description: "Paytm",
      image:
        "https://logos-world.net/wp-content/uploads/2020/11/Paytm-Logo.png",
      className: "h-8 w-auto",
    },
    {
      id: "logo-4",
      description: "PhonePe",
      image: "https://www.phonepe.com/webstatic/6.8.0/images/logo.svg",
      className: "h-8 w-auto",
    },
    {
      id: "logo-5",
      description: "Zomato",
      image:
        "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png",
      className: "h-8 w-auto",
    },
    {
      id: "logo-6",
      description: "Swiggy",
      image: "https://1000logos.net/wp-content/uploads/2021/05/Swiggy-logo.png",
      className: "h-8 w-auto",
    },
    {
      id: "logo-7",
      description: "Flipkart",
      image:
        "https://logos-world.net/wp-content/uploads/2020/11/Flipkart-Logo.png",
      className: "h-6 w-auto",
    },
    {
      id: "logo-8",
      description: "Amazon",
      image:
        "https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png",
      className: "h-8 w-auto",
    },
    {
      id: "logo-9",
      description: "Myntra",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/b/bc/Myntra_Logo.png",
      className: "h-8 w-auto",
    },
    {
      id: "logo-10",
      description: "BigBasket",
      image: "https://www.bigbasket.com/media/uploads/p/l/bb-logo-website.png",
      className: "h-8 w-auto",
    },
  ],
}: Logos3Props) => {
  const [isPaused, setIsPaused] = React.useState(false);

  const togglePause = () => {
    setIsPaused(!isPaused);
  };
  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="w-full flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold uppercase tracking-wide mb-8">
          {heading}
        </h2>
      </div>
      <div className="pt-6 md:pt-8 w-full">
        <div className="relative w-full flex items-center justify-center overflow-hidden">
          <Carousel
            opts={{ loop: true }}
            plugins={[
              AutoScroll({
                playOnInit: !isPaused,
                speed: 1,
                stopOnMouseEnter: true,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="ml-0 pb-8">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
                >
                  <div className="mx-8 flex shrink-0 items-center justify-center pb-4">
                    <div
                      className="text-center cursor-pointer hover:scale-105 transition-transform transform-gpu"
                      onClick={togglePause}
                    >
                      <img
                        src={logo.image}
                        alt={logo.description}
                        className={logo.className}
                        onError={(e) => {
                          e.currentTarget.src = `https://via.placeholder.com/120x40/0f172a/ffffff?text=${logo.description}`;
                        }}
                      />
                      <p className="text-sm text-[#0f172a]/80 mt-3 font-medium">
                        {logo.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Pause indicator */}
        {isPaused && (
          <div className="text-center mt-4">
            <span className="text-xs text-[#0f172a]/50 bg-[#0f172a]/5 px-3 py-1 rounded-full">
              Paused - Click any logo to resume
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export { Logos3 };
