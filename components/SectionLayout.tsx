import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface SectionLayoutProps {
  backgroundImage?: {
    desktop: string;
    mobile?: string;
    width: number;
    height: number;
    mobileWidth?: number;
    mobileHeight?: number;
    className?: string;
  };
  title: string;
  titleBoxClassName?: string;
  titleHighlight?: boolean;
  titleHighlightClassName?: string;
  ventorClassName?: string;
  ventorMdClassName?: string;
  description: string;
  buttonText?: string;
  buttonIcon?: React.ReactNode;
  buttonClassName?: string;
  image: {
    src: string;
    alt: string;
    className?: string;
  };
  className?: string;
  children?: React.ReactNode;
}

const SectionLayout = ({
  backgroundImage,
  title,
  titleBoxClassName,
  titleHighlight,
  titleHighlightClassName,
  ventorClassName,
  ventorMdClassName,
  description,
  buttonText,
  buttonIcon,
  buttonClassName,
  image,
  className = "",
  children,
}: SectionLayoutProps) => {
  return (
    <div className={`py-20 md:px-8 relative px-3 overflow-hidden ${className}`}>
      {backgroundImage && (
        <div className={cn("absolute z-0", backgroundImage.className)}>
          <Image
            src={backgroundImage.desktop}
            alt="Background"
            width={backgroundImage.width}
            height={backgroundImage.height}
            className="hidden md:block"
          />
          {backgroundImage.mobile && (
            <Image
              src={backgroundImage.mobile}
              alt="Background"
              width={backgroundImage.mobileWidth || backgroundImage.width}
              height={backgroundImage.mobileHeight || backgroundImage.height}
              className="block rotate-20 sm:rotate-0 md:hidden"
            />
          )}
        </div>
      )}

      <div className="justify-between items-center relative z-10 flex flex-col md:flex-row">
        <div
          className={cn(
            "lg:max-w-[691px] md:max-w-[562px] text-center md:text-left relative",
            titleBoxClassName
          )}
        >
          <h1 className="text-4xl leading-tight sm:text-5xl md:text-6xl lg:text-6xl font-bold sm:leading-normal md:leading-snug lg:leading-20 relative">
            <p className="relative z-10">{title}</p>
            {titleHighlight && (
              <div
                className={cn(
                  "absolute z-0 -bottom-2 right-10 sm:right-20 sm:-bottom-1 md:right-40",
                  titleHighlightClassName
                )}
              >
                <Image
                  src="/vertor.png"
                  alt="ventor"
                  width={450}
                  height={500}
                  className={cn(
                    "block lg:block sm:block md:hidden w-[250px] sm:w-[350px] lg:w-[450px]",
                    ventorClassName
                  )}
                />
                <Image
                  src="/vertor-md.png"
                  alt="ventor md"
                  width={200}
                  height={200}
                  className={cn(
                    "hidden lg:hidden sm:hidden md:block",
                    ventorMdClassName
                  )}
                />
              </div>
            )}
          </h1>
          <p className="mt-5 leading-7 text-[17px] md:ml-1 relative z-10">
            {description}
          </p>

          {children}
        </div>

        <div className="mt-12 md:mt-0 relative z-10">
          <img
            src={image.src}
            alt={image.alt}
            className={
              image.className ??
              "w-full sm:w-[500px] sm:h-[267px] md:w-[550px] md:h-[367px] lg:w-[685px] lg:h-[456px] object-cover"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SectionLayout;
