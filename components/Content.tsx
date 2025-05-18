import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Content = () => {
  return (
    <div className="bg-white py-28 md:px-8 text-black relative px-3 overflow-hidden">
      <div className="absolute md:top-0 md:left-0 z-10">
         <Image
          src="/background.png"
          alt="Elements"
          width={200}
          height={200}
          className="hidden md:block"
        />
      </div>
      <div className="justify-between items-center relative z-20 flex flex-col md:flex-row">
        <div className="lg:max-w-[600px] md:max-w-[562px] text-center md:text-left">
          <h1 className="text-4xl leading-tight sm:text-5xl md:text-5xl lg:text-6xl font-bold sm:leading-normal md:leading-snug lg:leading-20">
            Project Management
          </h1>
          <p className="mt-5 leading-7 text-[17px] md:ml-1">
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>

          <Button size="xl" className="bg-primary-light text-white mt-12 p-5">
            Get Started <ArrowRight />
          </Button>
        </div>

        <div className="mt-20 md:mt-0">
          <img
            src="/space-2.png"
            alt="Whitepace"
            className="w-full sm:w-[500px] sm:h-[267px] md:w-[550px] md:h-[367px] lg:w-[720px] lg:h-[456px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;
