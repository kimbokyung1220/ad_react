import { adGroup, adGroupItem } from "../../type/adGroup"
import { advInfo } from "../../type/adv"
import { item, mngItem } from "../../type/item"
import { keywordTable, mngKeywordList } from "../../type/keyword"
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

interface MngItemListAction {
    type: ActionType.MNG_ITEM_LIST
    payload: mngItem[]
}

interface reMngItemListAction {
    type: ActionType.RE_MNG_ITEM_LIST
    payload: mngItem[]
}
interface SelectedAdId {
    type: ActionType.SELECTED_AD_ID
    payload: number
}
interface MngKeywordListAction {
    type: ActionType.MNG_KEYWORD_LIST
    payload: mngKeywordList[]
}
interface reMngKeywordListAction {
    type: ActionType.RE_MNG_KEYWORD_LIST
    payload: mngKeywordList[]
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
    | MngItemListAction
    | reMngItemListAction
    | SelectedAdId
    | MngKeywordListAction
    | reMngKeywordListAction
