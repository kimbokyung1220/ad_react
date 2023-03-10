import { item } from "../../components/page/RegContent";
import { ActionType } from "../action-type";
import { Action } from "../actions";


const init: item[] = []

const reducer = (state: item[] = init, action: Action) => {
    switch (action.type) {
        case ActionType.SEARCH:
            return action.payload      
        default: 
        return state
    }
}

export default reducer;