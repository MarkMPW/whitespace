import React from "react";
import Image from "next/image";
import ApplieLogo from "../public/logos/apple-black-logo.png";
import MicrosoftLogo from "../public/Microsoft.png";
import SlackLogo from "../public/Slack.png";
import GoogleLogo from "../public/Google.png";
import Vertor from "../public/vertor-md.png";

const Sponsors = () => {
  const logos = [
    { src: ApplieLogo, alt: "Apple Logo" },
    { src: MicrosoftLogo, alt: "Microsoft Logo" },
    { src: SlackLogo, alt: "Slack Logo" },
    { src: GoogleLogo, alt: "Google Logo" },
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-tight sm:leading-normal md:leading-snug lg:leading-[5rem]">
            <span className="relative inline-block">
              Our sponsors
              <Image
                src={Vertor}
                alt="vector"
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-[80%] max-w-none -z-10"
              />
            </span>
          </h1>
        </div>

        <div className="mt-12 overflow-x-auto">
          <div className="flex items-center gap-12 min-w-max px-4">
            {...new Array(2).fill(0).map((_, index) => (
              <React.Fragment key={index}>
                {logos.map((logo, logoIndex) => (
                  <div
                    key={logoIndex}
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
