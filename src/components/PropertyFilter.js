import React from 'react';
import {fetchProperties, fetchSortedProperties} from '../action';
import {connect} from 'react-redux';

class PropertyFilter extends React.Component {

    

    sortProperty = (event) => {
        console.log('asdf'+this.props.filteredProperties);
        return this.props.fetchSortedProperties(event.target.name, event.target.value);
        

    }
    
    getUnique = (items, value) => {
        return [...new Set( items.map(item => item[value] ) )]
    }
    

    render() {


        let types = this.getUnique(this.props.properties, 'bed');
        types=['all',...types];
        types = types.map((item, index) => {
            return (<option value={item} key={index}>{item}</option>)
        });


        return (
            <div className="container">
                <form className="bg-primary">
                    <label>Property Type</label>
                    <select name="bed" onChange={this.sortProperty}>
                        {types}
                    </select>
                </form>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        properties : Object.values(state.properties),
        filteredProperties: Object.values(state.sortedOne)
    }
}

export default connect(mapStateToProps, {fetchSortedProperties})(PropertyFilter);