import React from "react";
import Image from "next/image";
import ApplieLogo from "../public/logos/apple-black-logo.png";
import MicrosoftLogo from "../public/Microsoft.png";
import SlackLogo from "../public/Slack.png";
import GoogleLogo from "../public/Google.png";
import Vertor from "../public/vertor-md.png";

const Sponsors = () => {
  return (
    <section className="py-20">
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

      <div className="mt-12">
        <div className="flex justify-evenly -translate-x-0">
          <div>
            <Image src={ApplieLogo} alt="Android Logo" className="w-[55px]" />
          </div>
          <div>
            <Image
              src={MicrosoftLogo}
              alt="Microsoft Logo"
              className="w-[260px]"
            />
          </div>
          <div>
            <Image src={SlackLogo} alt="Slack Logo" className="w-[260px]" />
          </div>
          <div>
            <Image src={GoogleLogo} alt="Google Logo" className="w-[210px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
