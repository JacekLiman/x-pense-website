import ClientSlider from "./ClientSlider";
import { testimonials } from "../data";

const Testimonilas = () => {
  const { title, clients } = testimonials;
  return (
    <section className="section">
      <div className="container mx-auto">
        <h2 className="title mb-10 lg:mb-20 text-center max-w-[920px] mx-auto">
          {title}
        </h2>
        <div>
          <ClientSlider clients={clients} />
        </div>
      </div>
    </section>
  );
};

export default Testimonilas;
