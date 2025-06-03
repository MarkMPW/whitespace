import Image from "next/image";
import React from "react";
import WhiltespaceLogo from "../../public/logos/Logo.png";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="">
      <div className="max-w-7xl mx-auto md:px-6 px-2">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-16 gap-y-16 pt-30 pb-25">
          <div className="col-span-3 flex flex-col gap-5">
            <Image src={WhiltespaceLogo} alt="whitepace" className='md:w-[200px] sm:w-[300px] h-auto'/>
            <p className="leading-7 w-full sm:w-[85%]">
              whitepace was created for 
              the new ways we live and 
              work. We make a better 
              workspace around the world
            </p>
          </div>

          <div className="col-span-2">
            <h2 className="font-bold">Product</h2>
            <ul className="grid gap-3 mt-3">
              <li>Overview</li>
              <li>Pricing</li>
              <li>Customer stories</li>
            </ul>
          </div>

          <div className="col-span-2">
            <h2 className="font-bold">Resources</h2>
            <ul className="grid gap-3 mt-3">
              <li>Blog</li>
              <li>Guides & tutorials</li>
              <li>Help center</li>
            </ul>
          </div>

          <div className="col-span-2">
            <h2 className="font-bold">Company</h2>
            <ul className="grid gap-3 mt-3">
              <li>About us</li>
              <li>Careers</li>
              <li>Media kit</li>
            </ul>
          </div>

          <div className="col-span-3 flex flex-col gap-3">
            <h1 className="font-bold text-3xl">Try It Today</h1>
            <p>
              Get started for free. Add your <br />
              whole team as your needs grow.
            </p>
            <Button size="xl" className="bg-primary-light w-fit">
              Start today <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
