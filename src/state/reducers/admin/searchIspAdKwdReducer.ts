import { ispAdKwdList } from "../../../type/dadDet";
import { AdmActionType } from "../../action-type/admin"; 
import { AdmAction } from "../../actions/admin"; 
// 실제 동작 함수

const init: ispAdKwdList[] = []

const reducer = (state: ispAdKwdList[] = init, action: AdmAction) => {
    switch (action.type) {
        case AdmActionType.SEARCH_ISPAD_KWD:
            return action.payload
        default:
            return state
    }
}

export default reducer;