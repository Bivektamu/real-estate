import React from 'react';
import Hero from '../components/Hero';
import SortedProperty from "../components/SortedProperty";


class Property extends React.Component {
    render() {
        return (
            <main id="main">
                <Hero page="property" />
                <SortedProperty />
            </main>
        )
    }
}

export default Property;