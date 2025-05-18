import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="bg-primary py-20 md:px-8 text-white relative px-3 overflow-hidden">
      <div className="absolute md:top-40 md:left-0 z-10 -left-12">
        <Image 
          src="/element.png"
          alt="Elements"
          width={3000}
          height={1000}
          className='hidden md:block'
        />
        <Image 
          src="/element-tablet.png"
          alt="Elements"
          width={1500}
          height={800}
          className='block rotate-20 sm:rotate-0 md:hidden'
        />
      </div>
      <div className='justify-between items-center relative z-20 flex flex-col md:flex-row'>
        <div className="lg:max-w-[691px] md:max-w-[562px] text-center md:text-left">
          <h1 className="text-4xl leading-tight sm:text-5xl md:text-5xl lg:text-6xl font-bold sm:leading-normal md:leading-snug lg:leading-20">
            Get More Done with whitepace
          </h1>
          <p className="mt-5 leading-7 text-[17px] md:ml-1">
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks
          </p>

          <Button 
            size="xl"
            className="bg-primary-light text-white mt-12 p-8"
          >
            Try Whitepace free <ArrowRight />
          </Button>
        </div>

        <div className="mt-20 md:mt-0">
          <img
            src="/white-space.png"
            alt="Whitepace"
            className="w-full sm:w-[500px] sm:h-[267px] md:w-[550px] md:h-[367px] lg:w-[685px] lg:h-[456px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
