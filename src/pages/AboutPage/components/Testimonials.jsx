import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/a11y";

import { ArrowLeftOutlined } from "@ant-design/icons";
import { ArrowRightOutlined } from "@ant-design/icons";
import TestimonialSlide from "./TestimonialSlide";

const Testimonials = () => {
  return (
    <div className="w-full flex gap-2 items-center">
      <ArrowLeftOutlined className="left-arrow opacity-30 hover:opacity-100  sm:flex hidden  w-12 text-2xl items-center justify-center aspect-square border-2 border-dark rounded-full font-bold bg-[#ccc] hover:bg-primary transition-all duration-300" />
      <Swiper
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          reverseDirection: false,
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        // scrollbar={{ draggable: true }}
        navigation={{
          prevEl: ".left-arrow",
          nextEl: ".right-arrow",
        }}
        a11y={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="sm:w-[85%] "
      >
        <SwiperSlide><TestimonialSlide /></SwiperSlide>
        <SwiperSlide><TestimonialSlide /></SwiperSlide>
        <SwiperSlide><TestimonialSlide /></SwiperSlide>
        <SwiperSlide><TestimonialSlide /></SwiperSlide>
        <SwiperSlide><TestimonialSlide /></SwiperSlide>
      </Swiper>
      <div className="right-arrow opacity-30 hover:opacity-100 sm:flex hidden  w-12 text-2xl items-center justify-center aspect-square border-2 border-dark rounded-full font-bold bg-[#ccc] hover:bg-primary transition-all duration-300">
        <ArrowRightOutlined className="" />
      </div>
    </div>
  );
};

export default Testimonials;
