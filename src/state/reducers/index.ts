import { combineReducers } from 'redux';
import itemReducer from "./itemReducer"
import itemInfoReducer from "./itemInfoReducer"
import adGroupReducer from "./adGroupReducer"
import addAdGroupReducer from "./addAdGroupReducer"
import addKeywordInfoReducer from './addKeywordInfoReducer';
import keywordTableReducer from './keywordTableReducer';
import selectedAdGroup from './selectedAdGroupReducer';

const reducers = combineReducers({
    item: itemReducer,
    itemInfo: itemInfoReducer,
    adGroup: adGroupReducer,
    addAdGroup: addAdGroupReducer,
    addKeywordInfo: addKeywordInfoReducer,
    keywordTableInfo: keywordTableReducer,
    selectedAdGroup: selectedAdGroup,
});

export default reducers

export type State = ReturnType<typeof reducers>