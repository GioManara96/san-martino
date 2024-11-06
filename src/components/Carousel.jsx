import React from "react";
import Slider from "react-slick";
import { imagesGallery } from "../data/imagesGallery";

export default function Carousel({ onOpenGallery }) {
  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    swipeToSlide: true,
  };
  let i = 0;

  return (
    <div className="slider-container lg:hidden">
      <p className="mb-3 text-sm">Scopri la nostra galleria</p>
      <h2 className="text-2xl lg:text-4xl font-bold mb-5">Galleria completa</h2>
      <Slider {...settings}>
        {imagesGallery.map((item) => {
          i++;
          return (
            <div key={i} className="overflow-hidden h-[220px]" role="button" onClick={() => onOpenGallery(true)}>
              <img src={item.src} alt={item.name} className="w-[95%] h-full object-contain" loading="lazy" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
