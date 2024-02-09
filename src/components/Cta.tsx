import { cta } from "../data";
import { HiOutlineChevronDown } from "react-icons/hi";

const Cta = () => {
  const { title, subtitle, btnText, img1, img2 } = cta;
  return (
    <section className="section bg-cta bg-cover bg-left-top">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="h2 text-white mb-6">{title}</h2>
          <p className="text-2xl lg:text-4xl text-white">{subtitle}</p>
        </div>
        <div className="flex justify-between">
          <img className="hidden xl:flex" src={img1} alt="" />
          <button className="btn btn-md btn-white mt-[40px] lg:text-[22px] gap-x-[10px] mx-auto">
            {btnText} <HiOutlineChevronDown />{" "}
          </button>
          <img className="hidden xl:flex" src={img2} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Cta;
