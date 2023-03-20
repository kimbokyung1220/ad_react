import { advInfo, advInfoDefaultValue } from "../../type/adv";
import { ActionType } from "../action-type";
import { Action } from "../actions";

const init = advInfoDefaultValue;

const reducer = (state: advInfo = init, action: Action) => {
    switch (action.type) {
        case ActionType.ADV_INFO:
            return action.payload
        default:
            return state
    }
}

export default reducer;