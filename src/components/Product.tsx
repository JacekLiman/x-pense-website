import { product } from "../data";

const Product = () => {
  const { title, subtitle } = product;
  return (
    <section className="pt-12 lg:pt-24 pb-12">
      <div className="container mx-auto">
        <div>       
          <div className="flex flex-col lg:flex-row mb-10 lg:mb-20 ">
            <h2 className="title">{title}</h2>
            <p className="lead lg:max-w-[350px]">{subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
