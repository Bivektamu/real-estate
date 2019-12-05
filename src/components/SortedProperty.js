import React from 'react';
import {connect} from 'react-redux';
import PropertyCard from './PropertyCard';
import PropertyFilter from './PropertyFilter';
import {fetchProperties, fetchSortedProperties} from '../action';



class SortedProperty extends React.Component {

    componentDidMount() {
        this.props.fetchProperties();
        this.props.fetchSortedProperties();
    }
    
    renderProperty = () =>  {
        const eachProperty = this.props.filteredProperties.map( property => {
            const {id} = property;
            return (
                    <PropertyCard property={property} key= {id} />
                )
            }
        );

        return eachProperty;
    }

    render() {

        if (!this.props.filteredProperties) {
            return ('Loading');
        }

        const renderTitle = () => {
            const totalFiltered = this.props.filteredProperties.length;
            if(totalFiltered < 1) {
                return ('Sorry! No Properties found')
            }
            else if(totalFiltered < 2) {
                return ('1 Property found')
            }
            else {
                return (
                    <span>
                        {totalFiltered} Properties found
                    </span>)
            }
        };

        return (
            <React.Fragment>
                <div id="property-filter">
                    {<PropertyFilter />}
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                    <h3 className="mb-5 text-center">{renderTitle()}</h3>
                    </div>
                    <div className="row">
                        {this.renderProperty()}
                    </div>
                </div>
            </React.Fragment>
            )
        }
    }

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        properties : Object.values(state.properties),
        filteredProperties : Object.values(state.sortedOne)
    }
}

export default connect(mapStateToProps, {fetchProperties, fetchSortedProperties})(SortedProperty);