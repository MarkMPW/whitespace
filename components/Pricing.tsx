import Ticker from "../public/tick.svg";
import Image from "next/image";
import { Button } from "./ui/button";

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

      <div className="py-8 px-2 mt-10 border-2 flex gap-6 items-center justify-center">
        <div className="p-10 w-[430px] border-1 border-[#FFE492] rounded-lg">
          <div className="flex flex-col gap-4">
            <h4 className="text-2xl font-bold">Free</h4>
            <span className="text-4xl font-bold">$0</span>
            <p className="text-black">Capture ideas and find them quickly</p>
          </div>

          <div className="mt-4 flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <Image src={Ticker} alt="Plan Ticker" width={20} height={20} />
              <p>Sync unlimited devices</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={Ticker} alt="Plan Ticker" width={20} height={20} />
              <p>Sync unlimited devices</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={Ticker} alt="Plan Ticker" width={20} height={20} />
              <p>Sync unlimited devices</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={Ticker} alt="Plan Ticker" width={20} height={20} />
              <p>Sync unlimited devices</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={Ticker} alt="Plan Ticker" width={20} height={20} />
              <p>Sync unlimited devices</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={Ticker} alt="Plan Ticker" width={20} height={20} />
              <p>Customize Home dashboard and access extra widgets</p>
            </div>
          </div>

          <Button className="mt-6 p-6 bg-white border-1 border-[#FFE492] text-black">Get Started</Button>
        </div>

        <div className="p-10 w-[430px] border-1 bg-primary rounded-lg text-white">
          <div className="flex flex-col gap-4">
            <h4 className="text-2xl font-bold">Personal</h4>
            <span className="text-4xl font-bold">$11.99</span>
            <p>Keep home and family on track</p>
          </div>

          <div className="mt-4 flex flex-col gap-5">
            <div className="flex items-center gap-4">
              {/* <Ticker /> */}
              <Image src={Ticker} alt="Plan Ticker" width={20} height={20} className='text-[#FFE492]'/>
              <p>Sync unlimited devices</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={Ticker} alt="Plan Ticker" width={20} height={20} />
              <p>Sync unlimited devices</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={Ticker} alt="Plan Ticker" width={20} height={20} />
              <p>Sync unlimited devices</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={Ticker} alt="Plan Ticker" width={20} height={20} />
              <p>Sync unlimited devices</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={Ticker} alt="Plan Ticker" width={20} height={20} />
              <p>Sync unlimited devices</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={Ticker} alt="Plan Ticker" width={20} height={20} />
              <p>Customize Home dashboard and access extra widgets</p>
            </div>
          </div>

          <Button className="mt-6 p-6 bg-white border-1 border-[#FFE492] text-black">Get Started</Button>
        </div>

        <div className="p-10 w-[430px] border-1 border-[#FFE492] rounded-lg">
          <div className="flex flex-col gap-4">
            <h4 className="text-2xl font-bold">Free</h4>
            <span className="text-4xl font-bold">$0</span>
            <p className="text-black">Capture ideas and find them quickly</p>
          </div>

          <div className="mt-4 flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <Image src={Ticker} alt="Plan Ticker" width={20} height={20} />
              <p>Sync unlimited devices</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={Ticker} alt="Plan Ticker" width={20} height={20} />
              <p>Sync unlimited devices</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={Ticker} alt="Plan Ticker" width={20} height={20} />
              <p>Sync unlimited devices</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={Ticker} alt="Plan Ticker" width={20} height={20} />
              <p>Sync unlimited devices</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={Ticker} alt="Plan Ticker" width={20} height={20} />
              <p>Sync unlimited devices</p>
            </div>
            <div className="flex items-center gap-2">
              <Image src={Ticker} alt="Plan Ticker" width={20} height={20} />
              <p>Customize Home dashboard and access extra widgets</p>
            </div>
          </div>

          <Button className="mt-6 p-6 bg-white border-1 border-[#FFE492] text-black">Get Started</Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
