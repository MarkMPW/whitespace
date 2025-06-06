import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import SidebarElement from "@/public/side-bar-element.png";
import HighlightBlue from "@/public/highlight-blue.png";

const BarLayout = () => {
  return (
    <section className="relative bg-primary text-white px-6 sm:px-5 lg:px-20 py-24 flex flex-col items-start lg:items-center">
      <div className="absolute -top-36 left-0 hidden sm:hidden md:block lg:block">
        <Image
          src={SidebarElement}
          width={200}
          height={200}
          alt="side bar element"
          className="opacity-[0.5]"
        />
      </div>
      <div className="text-start lg:text-center max-w-[650px] sm:max-w-[600px] lg:max-w-5xl w-full">
        <h1 className="relative text-4xl sm:text-5xl md:text-6xl font-bold leading-tight z-10">
          Your work, everywhere you are
          <div className="absolute md:right-0 lg:bottom-0 -z-10 sm:bottom-0">
            <Image
              src={HighlightBlue}
              width={300}
              height={300}
              alt="Highlight blue"
            />
          </div>
        </h1>
        <p className="mt-4">
          Access your notes from your computer, phone or tablet by synchronising
          with various services, including whitespace, Dropbox and OneDrive. The
          app is available on Windows, macOS, Linux, Android and iOS. A terminal
          app is also available!
        </p>
        <Button className="mt-10 bg-primary-light" size="xl">
          Try Taskey <ArrowRight />
        </Button>
      </div>
    </section>
  );
};

export default BarLayout;
