import {combineReducers} from 'redux';
import _ from 'lodash';

const propertyReducer = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_PROPERTIES':
            return {...state, ..._.mapKeys( action.payload, 'id' ) };
    
        default:
            return state;
    }
}

const sortedPropertyReducer = (state = {}, action) => {
    switch (action.type) {
       
        case 'FETCH_SORTED_PROPERTIES':
            return { ..._.mapKeys(action.payload, 'id')};

        default:
            return state;
    }
}

export default combineReducers({
    properties: propertyReducer,
    sortedOne: sortedPropertyReducer
});

