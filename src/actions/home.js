import { createStore } from 'redux';
import show from '../reducers/home'
const store = createStore(show);

export function showN(data, callback) {

    return ({
        type: 'SWITCH',
        payload: data.data
    });
}