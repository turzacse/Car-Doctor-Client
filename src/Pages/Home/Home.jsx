import React from 'react';
import Banner from './Banner';
import About from './About';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <h2>This is Home</h2>
        </div>
    );
};

export default Home;