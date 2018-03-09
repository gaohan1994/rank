import * as constants from '../constants/index';
import { Dispatch } from 'redux';

export interface IncrementDemo {
    type: constants.INCREMENT_DEMO;
}

export interface DecrementDemo {
    type: constants.DECREMENT_DEMO;
}

export type DemoActions = IncrementDemo | DecrementDemo;

export const incrementDemo = (dispatch: Dispatch<DemoActions>) => {
    return dispatch({type: constants.INCREMENT_DEMO});
};

export const decrementDemo = (): DecrementDemo => ({
    type: constants.DECREMENT_DEMO
});
