import React from "react";
import SectionLayout from "./SectionLayout";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const Customise = () => {
  return (
    <SectionLayout
      title="Customise it to your needs"
      description="Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API."
      titleHighlight
      image={{
        src: 'space-4.png',
        alt: 'space 3',
        className: 'mb-10 py-0 object-cover object-bottom'
      }}
      reverse="flex md:flex-row-reverse sm:flex-col-reverse"
      titleBoxClassName="lg:max-w-[490px] md:max-w-[700px]"
    >
      <Button size="xl" className="bg-primary-light text-white mt-12 p-5">
        Let’s Go <ArrowRight />
      </Button>
    </SectionLayout>
  );
};

export default Customise;
