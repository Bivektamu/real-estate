import React from 'react';
import {fetchProperties} from '../action';
import {connect} from 'react-redux';
import PropertyCard from './PropertyCard';


class FeaturedProperty extends React.Component {

    componentDidMount() {
        this.props.fetchProperties();
    }

    renderProperty = () =>  {
        const eachProperty = this.props.properties.map( property => {
                const {featured, id} = property;
                if(featured) {
                    return (
                        <PropertyCard property={property} key= {id} />
                    )
                }
            }
        );

        return eachProperty;
    }

    render() {
        if (!this.props.properties) {
            return ('Loading');
        }
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <h1 className="my-5 text-center">{this.props.title}</h1>
                </div>
                <div className="row">
                    {this.renderProperty()}
                </div>
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