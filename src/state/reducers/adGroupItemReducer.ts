import { adGroupItem } from "../../type/adGroup";
import { ActionType } from "../action-type";
import { Action } from "../actions";


const init: adGroupItem[] = []

const reducer = (state: adGroupItem[] = init, action: Action) => {
    switch (action.type) {
        case ActionType.ADGROUP_ITEM:
            return action.payload
        case ActionType.RE_ADGROUP_ITEM:
            console.log("action.payload" + action.payload)
            return action.payload
        default:
            return state
    }
}

export default reducer;