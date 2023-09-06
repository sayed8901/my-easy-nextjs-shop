import React from "react";
import HeroSlider from "./HeroSlider";
import About from "./About";
import FeaturedTeaProducts from "./FeaturedTeaProducts";
import TeaGridStyle from "./TeaGridStyle";
import SuperClients from "./SuperClients";
import Contact from "./Contact";
import Categories from "./Categories";

const HomePage = () => {
  return (
    <div>
      <HeroSlider />
      <div className="hero min-h-screen">
        <About />
      </div>
      <div className="hero min-h-screen -mt-36">
        <Categories />
      </div>
      <div className="hero min-h-screen">
        <FeaturedTeaProducts />
      </div>
      <div className="hero min-h-screen">
        <TeaGridStyle />
      </div>
      <SuperClients />
      <Contact />
    </div>
  );
};

export default HomePage;
