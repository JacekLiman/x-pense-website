import { hero } from "../data";
import { HiOutlineChevronDown } from "react-icons/hi";

const Hero = () => {
  const { title, subtitle, btnText, compText, image } = hero;
  return (
    <section className="pt-32 lg:pt-52 pb-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col">
            <h1 className="title text-center lg:text-left">{title}</h1>
            <p className="text-center lead lg:text-left">{subtitle}</p>
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <button className="btn gap-2 xl:btn-lg btn-sm btn-accent">
                {btnText} <HiOutlineChevronDown />
              </button>
              <p className="text-light lg:lead lg:mb-0">{compText}</p>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <img className="max-w-[350px] sm:max-w-none" src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
