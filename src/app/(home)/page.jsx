import React from 'react';
import HeroSlider from './HeroSlider';
import About from './About';
import FeaturedTeaProducts from './FeaturedTeaProducts';
import TeaGridStyle from './TeaGridStyle';

const HomePage = () => {
    return (
        <div>
            <HeroSlider />
            <About />
            <FeaturedTeaProducts />
            <TeaGridStyle />
        </div>
    );
};

export default HomePage;