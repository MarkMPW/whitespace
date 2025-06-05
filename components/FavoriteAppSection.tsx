import React from "react";
import SectionLayout from "./SectionLayout";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const FavoriteAppSection = () => {
  return (
    <SectionLayout
      reverse="flex md:flex-row-reverse sm:flex-col-reverse"
      title="Work with Your Favorite Apps Using whitepace"
      titleBoxClassName="mt-0 sm:mt-10"
      description="Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success."
      backgroundImage={{
        desktop: "/bg-favorite.png",
        mobile: '/bg-favorite.png',
        width: 2000,
        height: 800,
        className: "md:top-0 left-0 right-0"
      }}
      image={{
        src: "/Apps.png",
        alt: "App",
        className: "lg:w-[500px]"
      }}
      className="bg-primary text-white min-h-screen"
    >
      <Button size="xl" className="bg-primary-light text-white mt-12">
        Read more <ArrowRight />
      </Button>
    </SectionLayout>
  );
};

export default FavoriteAppSection;
