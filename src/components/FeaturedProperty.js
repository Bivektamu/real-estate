import React from 'react';
import {fetchProperties} from '../action';
import {connect} from 'react-redux';
import PropertyCard from './PropertyCard';


class FeaturedProperty extends React.Component {

    componentDidMount() {
        this.props.fetchProperties();
    }

    renderProperty() {
        const eachProperty = this.props.properties.map(
            property => {
                const {featured} = property;
                if(featured) {
                    return (
                        <PropertyCard property={property} />
                    )
                }
            }
        );

        console.log(eachProperty);
        return eachProperty;
    }

    render() {
        if (!this.props.properties) {
            return ('Loading');
        }
        
        
        return (
            <div>
                {this.renderProperty()}
            </div>
            )
        }
    }

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        properties : Object.values(state.properties)
    }
}

export default connect(mapStateToProps, {fetchProperties})(FeaturedProperty);