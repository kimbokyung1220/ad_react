import { dadRptDetail } from "../../../type/report";
import { AdmActionType } from "../../action-type/admin"; 
import { AdmAction } from "../../actions/admin"; 
// 실제 동작 함수

const init: dadRptDetail[] = []

const reducer = (state: dadRptDetail[] = init, action: AdmAction) => {
    switch (action.type) {
        case AdmActionType.DAD_RPT_DETAIL:
            return action.payload
        default:
            return state
    }
}

export default reducer;