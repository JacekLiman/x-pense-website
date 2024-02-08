import { product } from "../data";

import Card from "./Card";

const Product = () => {
  const { title, subtitle, cards } = product;
  return (
    <section className="pt-12 lg:pt-24 pb-12">
      <div className="container mx-auto">
        <div>
          <div className="flex flex-col lg:flex-row mb-10 lg:mb-20 ">
            <h2 className="title">{title}</h2>
            <p className="lead lg:max-w-[350px]">{subtitle}</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 justify-items-center">
            {cards.map((card, idx) => {
              const { icon, title, subtitle, delay } = card;
              return (
                <Card
                  active={idx === 1 ? true : false}
                  key={idx}
                  icon={icon}
                  title={title}
                  subtitle={subtitle}
                  delay={delay}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
