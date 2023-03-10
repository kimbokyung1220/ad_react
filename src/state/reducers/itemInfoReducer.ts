import { item } from "../../components/page/RegContent";
import { ActionType } from "../action-type";
import { Action } from "../actions";
// 실제 동작 함수

interface defaultValue {
    itemNo: "";
    itemName:"";
    adultYn: 0;
    itemOrgCost: 0;
    itemActYn: 0;
}

const init = {} as defaultValue;

const reducer = (state:item = init, action: Action) => {
    switch (action.type) {
        case ActionType.ITEMINFO:
            return action.payload      
        default: 
        return state
    }
}

export default reducer;