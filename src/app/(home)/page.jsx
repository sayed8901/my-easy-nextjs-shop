import React from "react";
import HeroSlider from "./HeroSlider";
import About from "./About";
import FeaturedTeaProducts from "./FeaturedTeaProducts";
import TeaGridStyle from "./TeaGridStyle";
import SuperClients from "./SuperClients";
import Contact from "./Contact";
import Categories from "./Categories";
import CommonFAQ from "./CommonFAQ";
import ImageGallery from "./ImageGallery";

const HomePage = () => {
  return (
    <div>
      <HeroSlider />
      <div className="my-12 xl:my-48">
        <About />
      </div>
      <div className="mb-12 xl:mb-48">
        <Categories />
      </div>
      {/* <ImageGallery /> */}
      <div className="mb-12 xl:mb-48">
        <FeaturedTeaProducts />
      </div>
      <div className="my-12 xl:my-48">
        <TeaGridStyle />
      </div>
      <SuperClients />
      <CommonFAQ />
      <Contact />
    </div>
  );
};

export default HomePage;
