import { DemoActions } from '../actions/demo';
import { Demo } from '../types/index';
import { DECREMENT_DEMO, INCREMENT_DEMO, RECEIVE_PRODUCTS } from '../constants';
import initState from './initState';

export default function demo (state: Demo = initState.demo, action: DemoActions): Demo {
    switch (action.type) {
        case INCREMENT_DEMO:
            return {
                ...state, 
                test: state.test + 1
            };
        case DECREMENT_DEMO:
            return {
                ...state, 
                test: state.test - 1
            };
        case RECEIVE_PRODUCTS:
            return {
                ...state,
                products: action.products
            };
        default :
            return state;
    }
}
