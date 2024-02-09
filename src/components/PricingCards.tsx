import { useState } from "react";
import { HiCheck, HiOutlineArrowNarrowRight } from "react-icons/hi";


type PricingCardsProps = {
  cards: {
    icon: string;
    title: string;
    services: {
      name: string;
    }[];
    price: string;
    userAmount: string;
    btnText: string;
    delay: number;
  }[];
};

const PricingCards = ({ cards }: PricingCardsProps) => {
  const [index, setIndex] = useState(1);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-5 lg:gap-0">
      {cards.map((card, idx) => {
        const { icon, title, services, price, userAmount, btnText } = card;
        return (
          <div key={idx} onClick={()=>setIndex(idx)} className={`${index === idx ? "shadow-2xl":" shadow-transparent shadow-2xl"} rounded-[12px] w-[340px] pt-8 pb-16 px-7 space-y-5 cursor-pointer transition-all`}>
            <img src={icon} alt="" />
            <h3 className="text-[30px] font-medium">{title}</h3>
            <ul>
              {services.map((service, idx) => {
                return (
                  <li key={idx} className="flex items-center gap-2">
                    <div className="text-light">
                      <HiCheck />
                    </div>
                    <p className="text-[16px]">{service.name}</p>
                  </li>
                );
              })}
            </ul>
            <p className="text-[22px]">{price}/<small className="text-light">year</small></p>
            <small className="text-light">{userAmount}</small>
            <button className={`${index === idx ? "btn-accent":"btn-outline"}  px-3 py-1 flex items-center rounded-lg`}>{btnText} <HiOutlineArrowNarrowRight/></button>
          </div>
        );
      })}
    </div>
  );
};

export default PricingCards;
