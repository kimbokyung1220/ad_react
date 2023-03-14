import { adGroup, adGroupDefaultValue } from "../../model/type";
import { ActionType } from "../action-type";
import { Action } from "../actions";
// 실제 동작 함수

const init = adGroupDefaultValue

const reducer = (state: adGroup = init, action: Action) => {
    switch (action.type) {
        case ActionType.SELECT_ADGROUP:
            return action.payload      
        default: 
        return state
    }
}

export default reducer;