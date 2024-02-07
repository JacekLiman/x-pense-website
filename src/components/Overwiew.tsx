import { overview } from "../data";

const Overwiew = () => {
  const { productImg } = overview;
  return (
    <section className=" bg-overview bg-no-repeat bg-cover pt-[30px] lg:pt-[87px]">
      <div className="container mx-auto flex justify-center items-end h-full ">
       
          <img className="w-full" src={productImg} alt="" />
       
      </div>
    </section>
  );
};

export default Overwiew;
