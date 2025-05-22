import { ArrowRight } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";

const WorkManagement = () => {
  return (
    <div className='md:p-8 px-3 h-screen flex items-center justify-center'>
      <div className='flex justify-between items-center w-full'>
        <div className='relative flex items-center justify-center w-[583px] h-[583px]'>
          <div className='absolute border-2 rounded-full size-[440px]'></div>
          <div className='absolute border-2 rounded-full size-[250px]'></div>

          <div className='absolute top-[140px] border-2 rounded-full size-[50px] bg-[#00CA75]'></div>
          <div className='absolute bottom-[140px] border-2 rounded-full size-[50px] bg-[#FFBF60]'></div>
          <div className='absolute left-[140px] border-2 rounded-full size-[50px] bg-[#37A3FF]'></div>
          <div className='absolute right-[140px] border-2 rounded-full size-[50px] bg-[#37A3FF]'></div>

          <div className='absolute top-[50px] left-[50px] border-2 rounded-full size-[40px] bg-[#FF6B6B]'></div>
          <div className='absolute bottom-[50px] border-2 rounded-full size-[40px] bg-[#4ECDC4]'></div>
          <div className='absolute left-[50px] border-2 rounded-full size-[40px] bg-[#FFD93D]'></div>
          <div className='absolute right-[50px] border-2 rounded-full size-[40px] bg-[#FFD93D]'></div>

          <Image 
            src="/icons/white-space-icon.png"
            alt="Whitepace"
            width={100}
            height={100}
            className="relative z-10"
          />
        </div>
        <div className='text-center md:text-left max-w-[630px]'>
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
