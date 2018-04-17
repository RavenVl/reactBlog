import blogs from './data';
import {createStore} from 'redux';
function reducer(store=[],action) {
    switch (action.type){
        default: return store;
    }

}
let store = createStore(reducer, blogs);
export default store;