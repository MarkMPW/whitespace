import Image from "next/image";
import { cn } from "@/lib/utils";
import Ticker from "../../public/tick.svg";
import TickerPopular from "../../public/tick-popular.svg";
import { Button } from "../ui/button";
import { PricingTicker } from "@/interface/pricingTicker";

const PricePlan = (props: PricingTicker) => {
  const { title, description, price, buttonText, popular, features } = props;

  return (
    <div
      className={cn(
        "p-10 border border-[#FFE492] rounded-lg",
         popular
      ? "bg-primary text-white min-h-[750px] flex flex-col justify-center"
      : "h-auto"
      )}
    >
      <div className="flex flex-col gap-4">
        <h4 className="text-2xl font-bold">{title}</h4>
        <span className={cn("text-4xl font-bold", popular && "text-[#FFE492]")}>
          {price}
        </span>
        <p className={cn("text-black", popular && "text-white")}>
          {description}
        </p>
      </div>

      <div className="mt-4 flex flex-col gap-5">
        {features.map((feature) => (
          <div className="flex items-center gap-4" key={feature}>
            {popular ? (
              <Image
                src={TickerPopular}
                alt="Plan Ticker"
                width={20}
                height={20}
              />
            ) : (
              <Image src={Ticker} alt="Plan Ticker" width={20} height={20} />
            )}
            <p>{feature}</p>
          </div>
        ))}
      </div>

      <Button
        className={cn(
          "mt-6 p-6 bg-white border-1 border-[#FFE492] text-black self-start",
          popular && "border-0 bg-primary-light text-white"
        )}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default PricePlan;
