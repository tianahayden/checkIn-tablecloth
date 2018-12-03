import { combineReducers } from 'redux';
import HomeReducer from './Components/Home/reducer';

const rootReducer = combineReducers({
    Home: HomeReducer,
});

export default rootReducer;
