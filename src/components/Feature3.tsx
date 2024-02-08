import { features } from "../data";

const Feature3 = () => {
  const { feature3 } = features;
  const { pretitle, title, subtitle, btnLink, btnIcon, image } = feature3;

  return (
    <section className="pt-12 lg:pt-24 pb-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex flex-col">
            <p className="pretitle">{pretitle}</p>
            <h2 className="title">{title}</h2>
            <p className="lead">{subtitle}</p>
            <div className="flex items-center gap-2 hover:gap-3 transition-all ">
              <a className="inline-block btn-link" href="">{btnLink}</a>
              <img src={btnIcon} alt="" />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <img className="max-w-[350px] sm:max-w-none w-full" src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature3;