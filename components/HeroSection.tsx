import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import SectionLayout from "./SectionLayout";

const HeroSection = () => {
  return (
    <SectionLayout
      backgroundImage={{
        desktop: "/element.png",
        mobile: "/element-tablet.png",
        width: 3000,
        height: 1000,
        mobileWidth: 1500,
        mobileHeight: 800,
        className: 'md:top-24 md:left-0 z-0 -left-12'
      }}
      title="Get More Done with whitepace"
      description="Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks"
      image={{
        src: "/white-space.png",
        alt: "Whitepace"
      }}
      className="bg-primary text-white"
    >
      <Button 
        size="xl"
        className="bg-primary-light text-white mt-12 p-8"
      >
        Try Whitepace free <ArrowRight />
      </Button>
    </SectionLayout>
  );
};

export default HeroSection;
