import React from 'react';
import Hero from '../components/Hero';
import FeaturedProperty from "../components/FeaturedProperty";


class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Hero page="home" caption="Find Your Best Property" info="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                <FeaturedProperty title="Popular Properties" />
            </React.Fragment>
        )
    }
}

export default Home;