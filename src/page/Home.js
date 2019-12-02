import React from 'react';
import Hero from '../components/Hero';
import bannerImg from '../img/home-banner.png';
import FeaturedProperty from "../components/FeaturedProperty";

class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Hero bannerImg = {bannerImg} caption="Find Your Best Property" info="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                <FeaturedProperty />
            </React.Fragment>
        )
    }
}

export default Home;