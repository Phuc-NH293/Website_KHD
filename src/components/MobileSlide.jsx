import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

import slide1 from "@/assets/slide1.png";
import slide2 from "@/assets/slide2.png";
import slide3 from "@/assets/slide3.png";
import slide4 from "@/assets/slide4.png";
import slide5 from "@/assets/slide5.png";
import slide6 from "@/assets/slide6.png";

const MobileSlider = () => {
  return (
    <div className="relative block sm:hidden w-full rounded-xl overflow-hidden">
      <div className="pointer-events-none absolute top-0 left-0 w-16 h-full z-10 bg-gradient-to-r from-white/90 to-transparent" />
      <div className="pointer-events-none absolute top-0 right-0 w-16 h-full z-10 bg-gradient-to-l from-white/90 to-transparent" />

      <Swiper
        spaceBetween={10}
        slidesPerView={"2.6"}
        centeredSlides
        pagination={{ clickable: true }}
        loop
        className="px-8"
      >
        {[slide1, slide2, slide3, slide4, slide5, slide6].map((img, i) => (
          <SwiperSlide key={i} className="">
            <img
              src={img}
              alt={`banner ${i + 1}`}
              className="w-full h-auto rounded-xl object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MobileSlider;
