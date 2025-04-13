import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const HeroSection = () => {
  const images = [
    "/images/slide1.jpg",
    "/images/slide2.jpg",
    "/images/slide3.jpg",
    "/images/slide4.jpg",
    "/images/slide5.jpg",
  ];

  return (
    <div className="w-full cliped h-screen" dir="ltr">
      <div className="h-[50px] sm:h-20 bg-red-900"></div>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="w-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-screen object-fill "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
