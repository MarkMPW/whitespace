import Image from "next/image";
import React from "react";
import WhiltespaceLogo from "../../public/logos/Logo.png";
import { Button } from "../ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";
import GLobalLogo from "../../public/Global-white.png";
import FacebookLogo from "../../public/icons/Facebook.png";
import TwitterLogo from "../../public/icons/Twitter.png";
import LinkedinebookLogo from "../../public/icons/Linkedin.png";

const Footer = () => {
  return (
    <footer className="md:px-6 px-2">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-16 gap-y-16 pt-30 pb-12">
          <div className="col-span-3 flex flex-col gap-5">
            <Image
              src={WhiltespaceLogo}
              alt="whitepace"
              className="md:w-[200px] sm:w-[300px] h-auto"
            />
            <p className="leading-7 w-full sm:w-[85%]">
              whitepace was created for the new ways we live and work. We make a
              better workspace around the world
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
        <span className="w-full h-2 border-b-1 border-slate-500 inline-block opacity-[0.5]" />
      </div>
      <div className="flex md:flex-row sm:flex-col justify-between py-5">
        <div>
          <ul className="flex flex-col md:flex-row items-center gap-6 md:gap-16">
            <li className="flex items-center gap-2">
              <Image
                src={GLobalLogo}
                alt="Global Logo White"
                width={24}
                height={24}
              />
              Endlish
              <ArrowDown width={24} height={24} />
            </li>
            <li>Terms & privacy</li>
            <li>Security</li>
            <li>Status</li>
            <li>©2021 Whitepace LLC.</li>
          </ul>
        </div>

        <ul className="flex gap-5 items-center justify-center mt-5 md:mt-0">
          <li>
            <Image src={FacebookLogo} alt="Facebook logo" />
          </li>
          <li>
            <Image src={TwitterLogo} alt="Facebook logo" />
          </li>
          <li>
            <Image src={LinkedinebookLogo} alt="Facebook logo" />
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
