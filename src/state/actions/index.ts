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
    type: ActionType.SELECTED_ADGROUP
    payload: string
}
interface SelectedGoupId {
    type: ActionType.SELECTED_ADGROUP_ID
    payload: number
}

interface AdvInfoAction {
    type: ActionType.ADV_INFO
    payload: advInfo
}
interface reAdvInfoAction {
    type: ActionType.RE_ADV_INFO
    payload: advInfo
}
interface AdgroupItemListAction {
    type: ActionType.ADGROUP_ITEM_LIST
    payload: adGroupItem[]
}
interface reAdgroupItemListAction {
    type: ActionType.RE_ADGROUP_ITEM_LIST
    payload: adGroupItem[]
}
interface AdgroupItemAction {
    type: ActionType.ADGROUP_ITEM
    payload: adGroupItem
}

interface reAdgroupItemAction {
    type: ActionType.RE_ADGROUP_ITEM
    payload: adGroupItem
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
    | AdgroupItemListAction
    | reAdgroupItemListAction
    | AdgroupItemAction
    | reAdgroupItemAction
    | SelectedGoupId
