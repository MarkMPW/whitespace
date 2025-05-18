import React from "react";
import Image from "next/image";
import { ArrowRight, Menu } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className="bg-primary py-4 px-8 text-white w-full">
      <div className="flex items-center justify-between">
        <Image src="/logos/logo.png" alt="Logo" width={190} height={67} />

        <div className="flex items-center gap-20">
          <nav className="hidden lg:flex">
            <ul className="flex gap-10">
              <li>
                <a href="/">Products</a>
              </li>
              <li>
                <a href="/about">Solutions</a>
              </li>
              <li>
                <a href="/services">Resources</a>
              </li>
              <li>
                <a href="/contact">Pricing</a>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <div className='hidden md:flex items-center gap-4'> 
              <Button
                className="bg-secondary text-primary py-6 px-7"
                variant="secondary"
              >
                Login
              </Button>
              <Button className="flex items-center gap-2 bg-primary-light p-6 text-white">
                Try Whitepace free
                <ArrowRight className="size-4" />
              </Button>

            </div>
            <div className="lg:hidden">
              <Menu className="size-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
