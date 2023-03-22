import { adGroupItem } from "../../type/adGroup";
import { ActionType } from "../action-type";
import { Action } from "../actions";


const init: adGroupItem[] = []

const reducer = (state: adGroupItem[] = init, action: Action) => {
    switch (action.type) {
        case ActionType.ADGROUP_ITEM_LIST:
            return action.payload
        case ActionType.RE_ADGROUP_ITEM_LIST:
            console.log("action.payload" + action.payload)
            return action.payload
        default:
            return state
    }
}

export default reducer;