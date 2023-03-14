import { item } from "../../components/page/RegContent"
import { adGroup, keywordTable, oneGroup } from "../../model/type"
import { ActionType } from "../action-type"

interface SearchAction {
    type: ActionType.SEARCH
    payload: item[]
}

interface ItemInfoAction {
    type: ActionType.ITEMINFO
    payload: item //뿌려지는
}

interface showAdGroup {
    type: ActionType.ADGROUP
    payload: adGroup[]
}

interface AddAdGroup {
    type: ActionType.ADD_ADGRUOP
    payload: adGroup[]
}

interface SelectAdGroup {
    type: ActionType.SELECT_ADGROUP
    payload: oneGroup
}

interface AddKeywordInfo {
    type: ActionType.ADD_KEYWORDINFO
    payload: AddKeywordInfo[]
}


interface KeywordTableInfo {
    type: ActionType.KEWORD_TABLE_INFO
    payload: keywordTable[]
}


export type Action = SearchAction 
                    | ItemInfoAction 
                    | showAdGroup
                    | AddAdGroup
                    | AddKeywordInfo
                    | KeywordTableInfo
                    | SelectAdGroup