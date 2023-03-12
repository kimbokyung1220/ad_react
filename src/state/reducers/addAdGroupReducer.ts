import { item } from "../../components/page/RegContent";
import { adGroup } from "../../model/type";
import { ActionType } from "../action-type";
import { Action } from "../actions";
// 실제 동작 함수

const init: adGroup[] = []

const reducer = (state: adGroup[] = init, action: Action) => {
    switch (action.type) {
        case ActionType.ADD_ADGRUOP:
            return action.payload      
        default: 
        return state
    }
}

export default reducer;