import { ActionType } from "../action-type";
import { Action } from "../actions";
// 실제 동작 함수

const init = 0

const reducer = (state: number = init, action: Action) => {
    switch (action.type) {
        case ActionType.SELECTED_ADGROUP_ID:
            return action.payload
        default:
            return state
    }
}

export default reducer;