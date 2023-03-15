import { keywordTable } from "../../type/keyword";
import { ActionType } from "../action-type";
import { Action } from "../actions";
// 실제 동작 함수

const init: keywordTable[] = []

const reducer = (state: keywordTable[] = init, action: Action) => {
    switch (action.type) {
        case ActionType.ADD_KEYWORDINFO:
            return action.payload
        default:
            return state
    }
}

export default reducer;