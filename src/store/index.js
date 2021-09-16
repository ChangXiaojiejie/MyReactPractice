import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reduer from "./reduer";

const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);

const store = createStore(reduer, enhancer);

export default store;