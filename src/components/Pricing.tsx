

import { pricing } from "../data";

import PricingCards from "./PricingCards";

const Pricing = () => {
  const { title, cards } = pricing;
  return (
    <section className="pt-12 lg:pt-24 pb-12">
      <div className="container mx-auto">
        <div>
          <h2 className="h2 mb-10 lg:mb-20 text-center">{title}</h2>
          <PricingCards cards={cards} />
        </div>
      </div>
    </section>
  );
};

export default Pricing;
