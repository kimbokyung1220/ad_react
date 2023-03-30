
import { csAdList } from "../../../type/dadDet";
import { AdmActionType } from "../../action-type/admin"; 
import { AdmAction } from "../../actions/admin"; 
// 실제 동작 함수

const init: csAdList[] = []

const reducer = (state: csAdList[] = init, action: AdmAction) => {
    switch (action.type) {
        case AdmActionType.CS_AD_LIST:
            return action.payload
        default:
            return state
    }
}

export default reducer;