import { ADD_PLACE, SET_PLACE_NAME,  } from './types';

export const addPlace = placeName => {
    return {
        type: ADD_PLACE,
        payload: placeName
    }
}

export const setPlaceName = placeName => {
    return {
        type: SET_PLACE_NAME,
        payload: placeName
    }
}