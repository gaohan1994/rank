import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers';

const configureStore = () => {
    const store = createStore(
        rootReducer,
        // preloadedState,
        compose(
            applyMiddleware(createLogger)
        )
    );

    return store;
};

export default configureStore;