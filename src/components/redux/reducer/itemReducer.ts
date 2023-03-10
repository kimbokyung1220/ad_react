import { item } from "../../page/RegContent";
import { Action } from "../actions";
import { ActionType } from "../action-types";



const reducer = (state: item, action: Action) => {
    switch (action.type) {
        case ActionType.SEARCH:
            return action.payload
       
        default: 
        return state
    }
}

export default reducer;