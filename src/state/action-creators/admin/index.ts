import { Dispatch } from "redux";

import { AdmAction } from "../../actions/admin"
import { AdmActionType } from "../../action-type/admin"
import { ispKeywordList } from "../../../type/keyword"
import { csAdList, ispAdKwdList } from "../../../type/dadDet";

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