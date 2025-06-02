import React from "react";
import Card from "./Card/Card";
import Image from "next/image";
import VertorMd from "../public/vertor-md.png";

const ClientSection = () => {
  return (
    <section className="min-h-screen py-20 px-5">
      <div>
        <h1 className="text-4xl leading-tight sm:text-5xl md:text-6xl lg:text-6xl font-bold sm:leading-normal md:leading-snug lg:leading-20 relative text-center">
          What Our Client Says
          <Image
            src={VertorMd}
            alt="vertor md"
            className="absolute bottom-0 sm:right-5 md:-translate-x-1/4 md:right-1/4 -z-10"
          />
        </h1>
      </div>

      <div className="mt-12 overflow-x-auto">
        <div className='flex gap-10 items-center justify-center flex-nowrap min-w-[800px] sm:w-max md:w-full sm:pb-5 pb-0'>
          <Card
            description="Whitepate is designed as a collaboration tool for businesses that is a full project management solution."
            userName="Oberon Shaw, MCH"
            userRole="Head of Talent Acquisition, North America"
          />
          <Card
            description="Whitepate is designed as a collaboration tool for businesses that is a full project management solution."
            userName="Oberon Shaw, MCH"
            userRole="Head of Talent Acquisition, North America"
            primary
          />
          <Card
            description="Whitepate is designed as a collaboration tool for businesses that is a full project management solution."
            userName="Oberon Shaw, MCH"
            userRole="Head of Talent Acquisition, North America"
            primary
          />
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
