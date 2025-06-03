import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import AndroidLogo from "../public/logos/androidLogo.png";
import WindowLogo from "../public/logos/windowsLogo.png";
import AppleLogo from "../public/logos/AppleLogo.png";
import Image from "next/image";
import Footer from "./Footer/Footer";

const FooterSection = () => {
  return (
    <section className="bg-primary min-h-screen text-white pt-20 px-0 sm:px-3">
      <div className="md:text-center sm:text-start">
        <div className="max-w-[600px] mx-auto flex flex-col gap-8">
          <h1 className="text-5xl md:text-7xl font-bold leading-20">Try Whitepace today</h1>
          <p className='text-xl'>
            Get started for free. <br /> Add your whole team as your needs grow.
          </p>
          <div>
            <Button size="xl" className="bg-primary-light w-auto">
              Try for free
              <ArrowRight />
            </Button>
          </div>
          <p className='text-xl'>On a big team? Contact sales</p>
          <div className='flex md:justify-center gap-10 sm:justify-start'>
            <div>
              <Image src={AppleLogo} alt="Apple Logo" width={48} height={48} />
            </div>
            <div>
              <Image src={WindowLogo} alt="Apple Logo" width={60} height={48} />
            </div>
            <div>
              <Image src={AndroidLogo} alt="Apple Logo" width={60} height={50} />
            </div>
          </div>
        </div>
      </div>
      <span className='w-full h-2 border-b-1 border-slate-500 inline-block mt-4 opacity-[0.5]'/>

      <Footer />
    </section>
  );
};

export default FooterSection;
