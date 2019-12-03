import {propertyStore} from '../api/data';

export const fetchProperties = () => (dispatch) => {
    dispatch({
        type: 'FETCH_PROPERTIES',
        payload: propertyStore
    });
}

export const fetchSortedProperties = (type, value) => (dispatch) => {
    
    if(type  === "bed"  && value === "all") {
        dispatch({
            type: 'FETCH_SORTED_PROPERTIES',
            payload: propertyStore
        });
    }

    else {

        const  filtered = propertyStore.filter(property => property.bed === parseInt(value));
        dispatch({
            type: 'FETCH_SORTED_PROPERTIES',
            payload: filtered
        });
    }
}