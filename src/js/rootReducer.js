import { combineReducers } from 'redux';
import HomeReducer from './Components/Home/reducer';
import CheckInReducer from './Components/CheckIn/reducer';

const rootReducer = combineReducers({
    Home: HomeReducer,
    CheckIn: CheckInReducer,
});

export default rootReducer;
