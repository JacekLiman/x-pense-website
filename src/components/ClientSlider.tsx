import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper/modules";

type ClientProps = {
  clients: {
    message: string;
    image: string;
    name: string;
    position: string;
    borderColor: string;
  }[];
};

const ClientSlider = ({ clients }: ClientProps) => {
  return (
    <Swiper
      modules={[Autoplay]}
      grabCursor={true}
      autoplay={true}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        1170: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {clients.map((client, idx) => {
        const { message, image, name, position, borderColor } = client;
        return (
          <SwiperSlide key={idx}>
            <div
              style={{ borderTopColor: borderColor }}
              className="border border-t-[10px]  rounded-t-[12px] w-full mx-auto py-6 px-[30px] max-w-[340px] md:max-w-none"
            >
              <p className="mb-[30px]">{message}</p>
              <div className="flex gap-[10px] items-center ">
                <img src={image} alt="" />
                <p className="font-bold">{name}</p>
                <p className="text-light">{position}</p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ClientSlider;
