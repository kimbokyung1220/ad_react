import { combineReducers } from 'redux';
import itemReducer from "./itemReducer"
import itemInfoReducer from "./itemInfoReducer"
import adGroupReducer from "./adGroupReducer"
import addAdGroupReducer from "./addAdGroupReducer"
import addKeywordInfoReducer from './addKeywordInfoReducer';
import keywordTableReducer from './keywordTableReducer';
import selectedAdGroupReducer from './selectedAdGroupReducer';
import advInfoReducer from './advInfoReducer';
import adGroupItemReducer from './adGroupItemReducer';

const reducers = combineReducers({
    item: itemReducer,
    itemInfo: itemInfoReducer,
    adGroup: adGroupReducer,
    addAdGroup: addAdGroupReducer,
    addKeywordInfo: addKeywordInfoReducer,
    keywordTableInfo: keywordTableReducer,
    selectedAdGroup: selectedAdGroupReducer,
    advInfo: advInfoReducer,
    adGroupItem: adGroupItemReducer,
});

export default reducers

export type State = ReturnType<typeof reducers>