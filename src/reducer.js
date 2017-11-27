import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import reposReducer from './features/repos/reducer';
import contributorsReducer from './features/contributors/reducer';
import authReducer from './features/auth/reducer';
import starsReducer from './features/stars/reducer';

const rootReducer = combineReducers({
	routing: routerReducer,
	repos: reposReducer,
	contributors: contributorsReducer,
	auth: authReducer,
	stars: starsReducer
});

export default rootReducer;
