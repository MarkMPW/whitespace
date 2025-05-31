import React from "react";
import Image from "next/image";
import Ticker from "../../assets/ticker.png";
import { Button } from "../ui/button";
import { PricingTicker } from "@/interface/pricingTicker";

const PricePlan = ({
  title,
  description,
  price,
  buttonText,
  popular,
  features,
}: PricingTicker) => {
  return (
    <div className="p-10 w-[430px] border-1 border-[#FFE492] rounded-lg">
      <div className="flex flex-col gap-4">
        <h4 className="text-2xl font-bold">{title}</h4>
        <span className="text-4xl font-bold">${price}</span>
        <p className="text-black">{description}</p>
      </div>

      <div className="mt-4 flex flex-col gap-5">
        <div className="flex items-center gap-4">
          <Image src={Ticker} alt="Plan Ticker" width={20} height={20} />
          <p>Sync unlimited devices</p>
        </div>
      </div>

      <Button className="mt-6 p-6 bg-white border-1 border-[#FFE492] text-black">
        Get Started
      </Button>
    </div>
  );
};

export default PricePlan;
