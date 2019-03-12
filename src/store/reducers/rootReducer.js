import authReducer from './authReducer';
import characterReducer from './characterReducer';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    characterRes: characterReducer
});

export default rootReducer;