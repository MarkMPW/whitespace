import { PRICING_TICKERS } from "@/constant/pricing";
import { PricingTicker } from "@/interface/pricingTicker";
import PricePlan from "./Prices/PricePlan";

const Pricing = () => {
  return (
    <section className="h-screen">
      <div className="text-center">
        <h1 className="text-6xl font-bold">Choose Your Plan</h1>
        <p className="max-w-[900px] mx-auto mt-5">
          Whether you want to get organized, keep your personal life on track,
          or boost workplace productivity, Evernote has the right plan for you.
        </p>
      </div>

      <div className="py-8 px-2 mt-10 flex gap-6 justify-center items-center min-h-[800px]">
        {PRICING_TICKERS.map((item: PricingTicker) => (
          <PricePlan
            key={item.title}
            title={item.title}
            description={item.description}
            price={item.price}
            buttonText={item.buttonText}
            features={item.features}
            popular={item.popular}
          />
        ))}
      </div>
    </section>
  );
};

export default Pricing;
