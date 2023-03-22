import { ActionType } from "../action-type";
import { Action } from "../actions";
// 실제 동작 함수

const init = ""

const reducer = (state: string = init, action: Action) => {
    switch (action.type) {
        case ActionType.ADD_ADGRUOP:
            return action.payload
        default:
            return state
    }
}

export default reducer;