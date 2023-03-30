import { csAdList, ispAdKwdList } from "../../../type/dadDet"
import { ispKeywordList } from "../../../type/keyword"
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

export type AdmAction = SearchIspKwdAction
    | SearchIspAdKwdAction
    | CsAdListAction