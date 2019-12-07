import React from 'react';
import Hero from '../components/Hero';
import FeaturedProperty from "../components/FeaturedProperty";


class Home extends React.Component {
    render() {
        return (
            <main id="main">
                <Hero page="home" caption="Find Your Best Property" info="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                <FeaturedProperty title="Popular Properties" />
            </main>
        )
    }
}

export default Home;