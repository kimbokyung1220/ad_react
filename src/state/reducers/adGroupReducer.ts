import { adGroup } from "../../type/adGroup";
import { ActionType } from "../action-type";
import { Action } from "../actions";
// 실제 동작 함수

const init: adGroup[] = []

const reducer = (state: adGroup[] = init, action: Action) => {
    switch (action.type) {
        case ActionType.ADGROUP:
            return action.payload
        default:
            return state
    }
}

export default reducer;