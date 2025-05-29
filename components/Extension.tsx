import React from "react";
import SectionLayout from "./SectionLayout";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Extension = () => {
  return (
    <SectionLayout
      title="Use as Extension"
      description="Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes."
      titleHighlight
      titleHighlightClassName="md:right-32 sm:bottom-1"
      ventorClassName="w-[250px] sm:w-[250px] lg:w-[350px] lg:h-[20px]"
      image={{
        src: "/space-3.png",
        alt: "space 3",
      }}
      className="bg-primary text-white"
    >
      <Button size="xl" className="bg-primary-light text-white mt-12 p-8">
        Try Whitepace free <ArrowRight />
      </Button>
    </SectionLayout>
  );
};

export default Extension;
