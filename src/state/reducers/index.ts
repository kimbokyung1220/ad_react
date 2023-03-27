import { combineReducers } from 'redux';
import itemReducer from "./itemReducer"
import itemInfoReducer from "./itemInfoReducer"
import adGroupReducer from "./adGroupReducer"
import addAdGroupReducer from "./addAdGroupReducer"
import addKeywordInfoReducer from './addKeywordInfoReducer';
import keywordTableReducer from './keywordTableReducer';
import selectedAdGroupReducer from './selectedAdGroupReducer';
import selectedAdGroupIdReducer from './selectedAdGroupIdReducer';
import advInfoReducer from './advInfoReducer';
import adGroupItemListReducer from './adGroupItemListReducer';
import adGroupItemReducer from './adGroupItemReducer';
import mngItemListReducer from './mngItemListReducer';
import selectedAdIdReducer from './selectedAdIdReducer';
import mngKeyworldListReducer from './mngKeyworldListReducer';

const reducers = combineReducers({
    item: itemReducer,
    itemInfo: itemInfoReducer,
    adGroup: adGroupReducer,
    addAdGroup: addAdGroupReducer,
    addKeywordInfo: addKeywordInfoReducer,
    keywordTableInfo: keywordTableReducer,
    selectedAdGroup: selectedAdGroupReducer,
    selectedAdGroupId: selectedAdGroupIdReducer,
    advInfo: advInfoReducer,
    adGroupItemList: adGroupItemListReducer,
    adGroupItem: adGroupItemReducer,
    mngItemList: mngItemListReducer,
    selectedAdId: selectedAdIdReducer,
    mngKeyworldList: mngKeyworldListReducer
    
});

export default reducers

export type State = ReturnType<typeof reducers>