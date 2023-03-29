import { ispKeywordList } from "../../../type/keyword"
import { AdmActionType } from "../../action-type/admin"

interface SearchIspKwdAction {
    type: AdmActionType.SEARCH_ISP_KWD
    payload: ispKeywordList[]
}


export type AdmAction = SearchIspKwdAction 