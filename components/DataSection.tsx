import React from "react";
import SectionLayout from "./SectionLayout";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const DataSection = () => {
  return (
    <SectionLayout
      reverse="flex flex-row sm:flex-col-reverse"
      title="100% your data"
      titleHighlight
      titleBoxClassName="sm:mt-12 md:mt-0"
      titleHighlightClassName="md:left-50 sm:bottom-0"
      ventorClassName="lg:w-[280px] sm:w-[240px]"
      description="The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them."
      image={{
        src: "/data.png",
        alt: 'Data image',
        className: 'lg:h-auto md:w-auto sm:w-[400px]'
      }}
    >
      <Button className='bg-primary-light mt-12' size="xl">
        Read more <ArrowRight />
      </Button>
    </SectionLayout>
  );
};

export default DataSection;
