import { Dispatch } from "redux";

import { AdmAction } from "../../actions/admin"
import { AdmActionType } from "../../action-type/admin"
import { ispKeywordList } from "../../../type/keyword"
import { csAdList, ispAdKwdList } from "../../../type/dadDet";
import { taskReqList } from "../../../type/taskReq";
import { dadRptDetail } from "../../../type/report";

export const getSearchIspKwdList = (ispKeywordList: ispKeywordList[]) => {
    return (dispatch: Dispatch<AdmAction>) => { //dispatch : 전달
        dispatch({
            type: AdmActionType.SEARCH_ISP_KWD,
            payload: ispKeywordList
        })
    }
}
export const getSearchIspAdKwdList = (ispAdKeywordList: ispAdKwdList[]) => {
    return (dispatch: Dispatch<AdmAction>) => { //dispatch : 전달
        dispatch({
            type: AdmActionType.SEARCH_ISPAD_KWD,
            payload: ispAdKeywordList
        })
    }
}
export const getCsAdList = (csAdList: csAdList[]) => {
    return (dispatch: Dispatch<AdmAction>) => { //dispatch : 전달
        dispatch({
            type: AdmActionType.CS_AD_LIST,
            payload: csAdList
        })
    }
}
export const getTaskReqList = (taskReqList: taskReqList[]) => {
    return (dispatch: Dispatch<AdmAction>) => { //dispatch : 전달
        dispatch({
            type: AdmActionType.TASK_REQ_LIST,
            payload: taskReqList
        })
    }
}
export const getDadRptDetail = (dadRptDetail: dadRptDetail[]) => {
    return (dispatch: Dispatch<AdmAction>) => { //dispatch : 전달
        dispatch({
            type: AdmActionType.DAD_RPT_DETAIL,
            payload: dadRptDetail
        })
    }
}