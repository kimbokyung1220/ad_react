import { keywordTable, mngKeywordList, mngKeywordListDefaultValue } from "../../type/keyword";
import { ActionType } from "../action-type";
import { Action } from "../actions";
// 실제 동작 함수

const init: mngKeywordList[] = []

const reducer = (state: mngKeywordList[] = init, action: Action) => {
    switch (action.type) {
        case ActionType.MNG_KEYWORD_LIST:
            return action.payload
        case ActionType.RE_MNG_KEYWORD_LIST:
            return action.payload
        default:
            return state
    }
}

export default reducer;