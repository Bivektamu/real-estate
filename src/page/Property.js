import React from 'react';
import Hero from '../components/Hero';
import SortedProperty from "../components/SortedProperty";


class Property extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Hero page="property" />
                <SortedProperty />
            </React.Fragment>
        )
    }
}

export default Property;