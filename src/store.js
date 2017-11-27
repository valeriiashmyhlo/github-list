import { createStore, applyMiddleware } from 'redux';
// import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import rootEpic from './epic';

// const epicMiddleware = createEpicMiddleware(rootEpic);
const loggerMiddleware = createLogger({});
const middleware = routerMiddleware(browserHistory);

export default createStore(rootReducer, applyMiddleware(thunk, loggerMiddleware, middleware));
