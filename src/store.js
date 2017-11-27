import { createStore, applyMiddleware } from 'redux';
import { createLogger as createLoggerMiddleware } from 'redux-logger';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducer';

const loggerMiddleware = createLoggerMiddleware({});
const routerMiddleware = createRouterMiddleware(browserHistory);

export default createStore(
	rootReducer,
	applyMiddleware(thunkMiddleware, loggerMiddleware, routerMiddleware)
);
