
import { taskReqList } from "../../../type/taskReq";
import { AdmActionType } from "../../action-type/admin"; 
import { AdmAction } from "../../actions/admin"; 
// 실제 동작 함수

const init: taskReqList[] = []

const reducer = (state: taskReqList[] = init, action: AdmAction) => {
    switch (action.type) {
        case AdmActionType.TASK_REQ_LIST:
            return action.payload
        default:
            return state
    }
}

export default reducer;