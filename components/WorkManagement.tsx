import { ArrowRight } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const WorkManagement = () => {
  return (
    <div className="md:p-8 px-3 h-screen flex items-center justify-center">
      <div className="flex justify-between items-center w-full">
        <div className="relative flex items-center justify-center w-[583px] h-[583px] border-2">
          <div className="absolute border-2 border-dashed rounded-full size-[500px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
            <div className="absolute size-[400px] rotate-0 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
              <div className="absolute bg-[#FFDC4D] size-12 rounded-full"></div>
            </div>
            <div className="absolute size-[400px] rotate-80 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
              <div className='absolute bg-[#37A3FF] size-12 rounded-full'></div>
            </div>
            <div className="absolute size-[400px] rotate-150 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
              <div className='absolute bg-[#00CA75] size-12 rounded-full'></div>
            </div>
            <div className="absolute size-[400px] rotate-255 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
              <div className='absolute bg-[#37A3FF] size-12 rounded-full'></div>
            </div>
          </div>

          <div className="absolute border-2 border-dashed rounded-full size-[300px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 ">
            <div className="absolute size-[255px] rotate-45 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
              <div className="absolute bg-[#00CA75] size-12 rounded-full"></div>
            </div>
              <div className="absolute size-[255px] rotate-135 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
              <div className='absolute bg-[#37A3FF] size-12 rounded-full'></div>
            </div>
            <div className="absolute size-[255px] rotate-225 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
              <div className='absolute bg-[#FFBF60] size-12 rounded-full'></div>
            </div>
            <div className="absolute size-[255px] rotate-315 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
              <div className='absolute bg-[#37A3FF] size-12 rounded-full'></div>
            </div>
          </div>

          <Image
            src="/icons/white-space-icon.png"
            alt="Whitepace"
            width={100}
            height={100}
            className="z-10"
          />
        </div>
        <div className="text-center md:text-left max-w-[630px]">
          <h1 className="text-3xl font-bold mb-4">Work together</h1>
          <p className="text-lg mb-6">
            With whitepace, share your notes with your colleagues and
            collaborate on them. You can also publish a note to the internet and
            share the URL with others.
          </p>
          <Button size="xl" className="bg-primary-light text-white">
            Try it now <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WorkManagement;
