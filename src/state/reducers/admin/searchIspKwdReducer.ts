
import { ispKeywordList } from "../../../type/keyword";
import { AdmActionType } from "../../action-type/admin"; 
import { AdmAction } from "../../actions/admin"; 
// 실제 동작 함수

const init: ispKeywordList[] = []

const reducer = (state: ispKeywordList[] = init, action: AdmAction) => {
    switch (action.type) {
        case AdmActionType.SEARCH_ISP_KWD:
            return action.payload
        default:
            return state
    }
}

export default reducer;