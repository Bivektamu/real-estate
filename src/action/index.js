import {propertyStore} from '../api/data';

export const fetchProperties = () => (dispatch) => {
    dispatch({
        type: 'FETCH_PROPERTIES',
        payload: propertyStore
    });
}