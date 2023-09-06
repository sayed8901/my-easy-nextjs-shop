import React from 'react';
import HeroSlider from './HeroSlider';
import About from './About';
import FeaturedTeaProducts from './FeaturedTeaProducts';
import TeaGridStyle from './TeaGridStyle';
import SuperClients from './SuperClients';
import Contact from './Contact';
import Categories from './Categories';

const HomePage = () => {
    return (
        <div>
            <HeroSlider />
            <About />
            <Categories />
            <FeaturedTeaProducts />
            <TeaGridStyle />
            <SuperClients />
            <Contact />
        </div>
    );
};

export default HomePage;