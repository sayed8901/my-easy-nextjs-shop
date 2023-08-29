import React from 'react';
import HeroSlider from './HeroSlider';
import About from './About';
import FeaturedTeaProducts from './FeaturedTeaProducts';
import TeaGridStyle from './TeaGridStyle';
import SuperClients from './SuperClients';

const HomePage = () => {
    return (
        <div>
            <HeroSlider />
            <About />
            <FeaturedTeaProducts />
            <TeaGridStyle />
            <SuperClients />
        </div>
    );
};

export default HomePage;