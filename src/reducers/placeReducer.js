import { ADD_PLACE, SET_PLACE_NAME } from '../actions/types';

const initialState = {
    placeName: '',
    places: []
}

const placeReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    value: action.payload
                }),
                placeName: ''
            };
        case SET_PLACE_NAME:
            return {
                ...state,
                placeName: action.payload
            };
        default:
            return state;
    }
}

export default placeReducer;
