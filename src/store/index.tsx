import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
// import { Stores } from '../types/index';

const configureStore = () => {
    const store = createStore(
        rootReducer,
        compose(
            applyMiddleware(thunk, createLogger)
        )
    );

    return store;
};

export default configureStore;