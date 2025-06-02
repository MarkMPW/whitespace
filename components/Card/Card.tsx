import React from "react";
import Image from "next/image";
import Quote from "../../public/icons/Quote.png";
import QuoteWhilte from "../../public/icons/Quote-white.png";
import { CardType } from "@/interface/card";
import { cn } from "@/lib/utils";

const Card = (props: CardType) => {
  const { description, userName, userRole, primary } = props;
  return (
    <div
      className={cn(
        "max-w-sm shadow-[0_2px_8px_0_rgba(0,0,0,0.06),0_-2px_8px_0_rgba(0,0,0,0.06)] py-16 px-6 rounded-lg",
        primary && "bg-primary-light text-white"
      )}
    >
      <div className="flex flex-col gap-8">
        {primary ? (
          <Image src={QuoteWhilte} alt="Quote whilte" />
        ) : (
          <Image src={Quote} alt="Quote" />
        )}

        <p>{description}</p>
        <span className={cn("border-b-2 border-black h-2 w-full inline-block", primary && "border-white")} />
      </div>

      <div className="mt-10 flex items-center gap-x-6">
        <div className="size-22 bg-slate-200 rounded-full flex-shrink-0"></div>
        <div className="min-w-0">
          <h3 className="text-xl font-[600]">{userName}</h3>
          <p className="mt-3 text-sm">{userRole}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
