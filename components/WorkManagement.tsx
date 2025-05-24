import { ArrowRight } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const WorkManagement = () => {
  return (
    <div className="md:p-8 px-3 h-screen flex items-center justify-center">
      <div className="gird grid-cols-2 md:grid justify-between items-center w-full">

        {/* Circle element */}
        <div className="relative flex items-center justify-center max-w-[583px] h-[583px]">
          {/* out side cirlce */}
          <div className="absolute border-2 border-dashed rounded-full size-[460px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            <div className="absolute size-[370px] rotate-0 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
              <div className="absolute bg-[#FFDC4D] size-12 rounded-full"></div>
            </div>
            <div className="absolute size-[370px] rotate-80 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
              <div className="absolute bg-[#37A3FF] size-12 rounded-full"></div>
            </div>
            <div className="absolute size-[370px] rotate-150 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
              <div className="absolute bg-[#00CA75] size-12 rounded-full"></div>
            </div>
            <div className="absolute size-[370px] rotate-255 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
              <div className="absolute bg-[#37A3FF] size-12 rounded-full"></div>
            </div>
          </div>

          {/* inside cirlce */}
          <div className="absolute border-2 border-dashed rounded-full size-[300px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            <div className="absolute size-[255px] rotate-45 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
              <div className="absolute bg-[#00CA75] size-12 rounded-full"></div>
            </div>
            <div className="absolute size-[255px] rotate-135 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
              <div className="absolute bg-[#37A3FF] size-12 rounded-full"></div>
            </div>
            <div className="absolute size-[255px] rotate-225 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
              <div className="absolute bg-[#FFBF60] size-12 rounded-full"></div>
            </div>
            <div className="absolute size-[255px] rotate-315 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
              <div className="absolute bg-[#37A3FF] size-12 rounded-full"></div>
            </div>
          </div>

          <Image
            src="/icons/white-space-icon.png"
            alt="Whitepace"
            width={150}
            height={150}
            className="z-10"
          />
        </div>

        {/* Text content */}
        <div className="text-center md:text-left lg:max-w-[630px] md:max-w-[527px]">
          <div className="relative mb-6">
            <h1 className=" relative z-10 mb-4 text-4xl leading-tight sm:text-5xl md:text-6xl lg:text-6xl font-bold sm:leading-normal md:leading-snug lg:leading-20 ">
              Work together
            </h1>
            <div className="absolute bottom-0 z-0 right-40">
              <Image
                src="/vertor.png"
                alt="ventor"
                width={450}
                height={500}
                className="block lg:block sm:block md:hidden w-[200px] sm:w-[350px] lg:w-[300px]"
              />
              <Image
                src="/vertor-md.png"
                alt="ventor md"
                width={200}
                height={200}
                className="hidden lg:hidden sm:hidden md:block"
              />
            </div>
          </div>
          <p className="text-lg mb-6">
            With whitepace, share your notes with your colleagues and
            collaborate on them. You can also publish a note to the internet and
            share the URL with others.
          </p>
          <Button size="xl" className="bg-primary-light text-white py-7">
            Try it now <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WorkManagement;
