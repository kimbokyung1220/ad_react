import { mngItem } from "../../type/item";
import { ActionType } from "../action-type";
import { Action } from "../actions";

const init: mngItem[] = []

const reducer = (state: mngItem[] = init, action: Action) => {
    switch (action.type) {
        case ActionType.MNG_ITEM_LIST:
            return action.payload
        case ActionType.RE_MNG_ITEM_LIST:
            return action.payload
        default:
            return state
    }
}
export default reducer;