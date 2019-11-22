import { combineReducers } from 'redux';
import { TOGGLE_DARK_MODE } from './types';

const INITIAL_STATE = {
    darkMode: false
};

const appReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_DARK_MODE:
            return { ...state, darkMode: !state.darkMode };
        default:
            return state;
    }
}

export default combineReducers({
    app: appReducer,
});