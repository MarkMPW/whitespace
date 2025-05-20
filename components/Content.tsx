import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import SectionLayout from "./SectionLayout";

const Content = () => {
  return (
    <SectionLayout
      backgroundImage={{
        desktop: "/background.png",
        width: 200,
        height: 200,
        className: 'absolute top-0 left-0'
      }}
      title="Project Management"
      titleBoxClassName="lg:max-w-[562px] md:max-w-[540px]"
      titleHighlight={true}
      description="Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note."
      buttonText="Get Started"
      buttonIcon={<ArrowRight />}
      buttonClassName="bg-primary-light text-white mt-12 p-5"
      image={{
        src: "/space-2.png",
        alt: "Whitepace",
        className: 'w-full sm:w-[500px] sm:h-[267px] md:w-[550px] md:h-[367px] lg:w-[720px] lg:h-[456px] object-cover'
      }}
      className="bg-white text-black"
    >
      <Button size="xl" className="bg-primary-light text-white mt-12 p-5">
        Get Started <ArrowRight />
      </Button>
    </SectionLayout>
  );
};

export default Content;
