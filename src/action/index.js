import {propertyStore} from '../api/data';

export const fetchProperties = () => (dispatch) => {
    dispatch({
        type: 'FETCH_PROPERTIES',
        payload: propertyStore
    });
}



export const fetchSortedProperties = (location, bed, bath, price, pets) => (dispatch) => {
    

    let properties = propertyStore;
    
    // console.log(location, bed);

    if(location !== undefined && location !== "all") {
        properties = properties.filter(property => property.location === location);
    }

    if( bed !== undefined && bed !== "all") {
        properties = properties.filter(property => property.bed === parseInt(bed));
    }

    if( bath !== undefined && bath !== "all") {
        properties = properties.filter(property => property.bath === parseInt(bath));
    }

    if(price !== undefined) {
        properties = properties.filter(property => property.price <=price )
    }

    if(pets !== undefined && pets!==false) {
        properties = properties.filter(property => property.pets === true )
    }


    dispatch({
        type: 'FETCH_SORTED_PROPERTIES',
        payload: properties
    });
}