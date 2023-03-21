import { adGroup, adGroupItem } from "../../type/adGroup"
import { advInfo } from "../../type/adv"
import { item } from "../../type/item"
import { keywordTable } from "../../type/keyword"
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

interface AddKeywordInfo {
    type: ActionType.ADD_KEYWORDINFO
    payload: AddKeywordInfo[]
}


interface KeywordTableInfo {
    type: ActionType.KEWORD_TABLE_INFO
    payload: keywordTable[]
}

interface SelectedGoup {
    type: ActionType.SELECTED_ADGTOUP
    payload: string
}

interface AdvInfoAction {
    type: ActionType.ADV_INFO
    payload: advInfo
}
interface reAdvInfoAction {
    type: ActionType.RE_ADV_INFO
    payload: advInfo
}
interface AdgroupItem {
    type: ActionType.ADGROUP_ITEM
    payload: adGroupItem[]
}
interface reAdgroupItem {
    type: ActionType.RE_ADGROUP_ITEM
    payload: adGroupItem[]
}

export type Action = SearchAction
    | ItemInfoAction
    | showAdGroup
    | AddAdGroup
    | AddKeywordInfo
    | KeywordTableInfo
    | SelectedGoup
    | AdvInfoAction
    | reAdvInfoAction
    | AdgroupItem
    | reAdgroupItem
