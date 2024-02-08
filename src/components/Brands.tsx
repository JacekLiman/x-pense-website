import { overview } from "../data";

const Brands = () => {
  const { brands } = overview;
  return (
    <section className="py-9">
      <div className="container mx-auto flex gap-7 flex-col lg:flex-row  lg:justify-between items-center">
        {brands.map((item, idx) => {
          const { image } = item;
          return (
            <div key={idx}>
              <img src={image} alt="" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
