import { combineReducers } from 'redux';
import itemReducer from "./itemReducer"
import itemInfoReducer from "./itemInfoReducer"


const reducers = combineReducers({
    item: itemReducer,
    itemInfo: itemInfoReducer
});

export default reducers

export type State = ReturnType<typeof reducers>