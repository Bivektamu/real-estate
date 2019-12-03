import React from 'react';
import Hero from '../components/Hero';
import SortedProperty from "../components/SortedProperty";


class Property extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Hero page="property" caption="Find Your Best Property" info="Lorem Ipsum is simply dummy text of the printing and typesetting industry." />
                <SortedProperty title="Popular Properties" />
            </React.Fragment>
        )
    }
}

export default Property;