import { keywordTable } from "../../model/type";
import { ActionType } from "../action-type";
import { Action } from "../actions";
// 실제 동작 함수

const init: keywordTable[] = []

const reducer = (state: keywordTable[] = init, action: Action) => {
    switch (action.type) {
        case ActionType.KEWORD_TABLE_INFO:
            return action.payload      
        default: 
        return state
    }
}

export default reducer;