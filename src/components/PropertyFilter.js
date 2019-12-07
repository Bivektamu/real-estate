import React from 'react';
import {fetchSortedProperties} from '../action';
import {connect} from 'react-redux';
import Loader from './Loader';

class PropertyFilter extends React.Component {

constructor(props) {
    super(props);
    this.sortProperty = this.sortProperty.bind(this);

    this.state = { 
        location:"all",
        bed:"all",
        bath:"all",
        price:undefined,
        pets:false,
    };
}
      
    sortProperty = (event) => {
        let location =this.state.location, 
            bed = this.state.bed,
            bath = this.state.bath,
            pets = this.state.pets,
            price = this.state.price;

            console.log(event.target.name);

        switch (event.target.name) {
            case 'location':
                location = event.target.value;
                break;

            case 'bed':
                bed = event.target.value;
                break;

            case 'bath':
                bath = event.target.value;
                break;

            case 'price':
                price = event.target.value;
                break;

            case 'pets':
                pets = !pets;
                console.log('asdfsdf');
                break;
        
            default:
                break;
        }

        this.setState({
            location : location,
            bed: bed,
            bath: bath,
            price: price,
            pets: pets,
        });

        // console.log("location", "bed", "price", "pets");
        // console.log(location, bed, price, pets);
        return this.props.fetchSortedProperties(location, bed, bath, price, pets);
    }
    
    getUnique = (items, value) => {
        return [...new Set( items.map(item => item[value] ) )]
    }
    
    sortTypes = (type) => {
        let types = this.getUnique(this.props.properties, type);
        types = ['all',...types];
        types = types.map((item, index) => {
            return (<option value={item} key={index}>{item}</option>)
        });

        return types;
    }

    render() {

        if(!this.props.filteredProperties) {
            return (<Loader />);
        }

        let maxPrice=0, minPrice=0;
        if(this.props.properties[0] !==undefined) {
             minPrice = this.props.properties[0].price;
        }
        this.props.properties.map((property) => {
            const {price} = property;
            maxPrice = (maxPrice > price)? maxPrice:price; 
            minPrice = (minPrice < price)? minPrice:price; 
        });

        if(!this.props.filteredProperties) {
            return (<Loader />);
        }

        if(maxPrice === 0 && minPrice === 0 ) {
            return (<Loader />);
        }
        
        return (
            <div className="container">
                <div className="row">
                    {/* <h1 id="search-title">Search Property</h1> */}
                    <form id="filter-form" className="container-md px-4 py-4 " onChange={this.sortProperty} >
                        <div className="row justify-content-between">
                            <div className=" col-sm-12 col-md-auto">
                                <label>Location</label>
                                <select name="location" >
                                    {this.sortTypes('location')}
                                </select>
                            </div>

                            <div className="col-sm-12 col-md-auto">
                                <label>Bed Room</label>
                                <select name="bed" className="pr-5">
                                    {this.sortTypes('bed')}
                                </select>
                            </div>

                            <div className="col-sm-12 col-md-auto">
                                <label>Bath Room</label>
                                <select name="bath" className="pr-5">
                                    {this.sortTypes('bath')}
                                </select>
                            </div>

                            <div className="col-sm-12 col-md-auto">
                                <label>Price ($)</label>
                                <div id="range-wrapper">
                                    <span id="min">{minPrice}k</span>
                                    <input className="custom-range" id="customRange2" type="range" name="price" min={minPrice} max={maxPrice}></input>
                                    <span id="max">{maxPrice}k</span>
                                </div>
                            </div>

                            <div className="col-sm-12 col-md-auto">
                                <label>Pets</label>
                                <input name="pets" type="checkbox"></input>
                            </div>

                        
                        </div>
                    </form>
                </div>
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