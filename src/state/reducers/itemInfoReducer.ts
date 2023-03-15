import { item, itemDefaultValue } from "../../type/item";
import { ActionType } from "../action-type";
import { Action } from "../actions";
// 실제 동작 함수

const init = itemDefaultValue;

const reducer = (state: item = init, action: Action) => {
    switch (action.type) {
        case ActionType.ITEMINFO:
            return action.payload
        default:
            return state
    }
}

export default reducer;