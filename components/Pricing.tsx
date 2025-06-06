import { PRICING_TICKERS } from "@/constant/pricing";
import { PricingTicker } from "@/interface/pricingTicker";
import PricePlan from "./Prices/PricePlan";

const Pricing = () => {
  return (
    <section className="sm:py-10 md:py-0 md:px-8 px-3">
      <div className='container'>
        <div className="text-center">
          <h1 className="text-6xl font-bold">Choose Your Plan</h1>
          <p className="max-w-[900px] mx-auto mt-5">
            Whether you want to get organized, keep your personal life on track,
            or boost workplace productivity, Evernote has the right plan for you.
          </p>
        </div>
        <div className="overflow-auto">
          <div className="sm:flex sm:flex-row justify-center min-w-[800px] sm:w-max md:w-full">
            <div className="py-8 px-2 mt-10 flex gap-6 justify-center items-center min-h-[800px]">
              {PRICING_TICKERS.map((item: PricingTicker) => (
                <div key={item.title} className='sm:w-[430px] md:w-auto'>
                  <PricePlan
                    title={item.title}
                    description={item.description}
                    price={item.price}
                    buttonText={item.buttonText}
                    features={item.features}
                    popular={item.popular}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
