import { csAdList, ispAdKwdList } from "../../../type/dadDet"
import { ispKeywordList } from "../../../type/keyword"
import { dadRptDetail } from "../../../type/report"
import { taskReqList } from "../../../type/taskReq"
import { AdmActionType } from "../../action-type/admin"

interface SearchIspKwdAction {
    type: AdmActionType.SEARCH_ISP_KWD
    payload: ispKeywordList[]
}

interface SearchIspAdKwdAction {
    type: AdmActionType.SEARCH_ISPAD_KWD
    payload: ispAdKwdList[]
}

interface CsAdListAction {
    type: AdmActionType.CS_AD_LIST
    payload: csAdList[]
}

interface TaskReqListAction {
    type: AdmActionType.TASK_REQ_LIST
    payload: taskReqList[]
}

interface DadRptDetailAction {
    type: AdmActionType.DAD_RPT_DETAIL
    payload: dadRptDetail[]
}


export type AdmAction = SearchIspKwdAction
    | SearchIspAdKwdAction
    | CsAdListAction
    | TaskReqListAction
    | DadRptDetailAction