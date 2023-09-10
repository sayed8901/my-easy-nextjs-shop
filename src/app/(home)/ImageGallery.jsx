"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";

import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";



const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch("/products-images.json")
      .then((res) => res.json())
      .then((data) => setImages(data));
  }, []);

//   console.log(images.length);


  return (
    <div className="my-12 xl:my-48" name="hero">
      <div className="sm:w-3/4 mx-auto">
        <h2 className="text-2xl lg:text-4xl font-bold text-center mt-16">
          Products <span className="text-gradient">Gallery</span>
        </h2>
        <p className="py-12 text-center">
          Here you can find your desired one our top products collection.
        </p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides
        loop
        navigation
        effect="fade"
        autoplay
        // install Swiper modules
        modules={[Navigation, EffectFade, Autoplay]}
      >
        {images.map((image) => (
          <SwiperSlide key={image} className="h-60">
            <Image src={image} alt="image" width={300} height={400} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageGallery;
