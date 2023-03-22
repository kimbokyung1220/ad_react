
import { Dispatch } from "redux";
import { adGroup, adGroupItem } from "../../type/adGroup";
import { advInfo } from "../../type/adv";
import { item } from "../../type/item";
import { keywordTable } from "../../type/keyword";
import { ActionType } from "../action-type";
import { Action } from "../actions/index"

export const showItemList = (item: item[]) => {
    return (dispatch: Dispatch<Action>) => { //dispatch : 전달
        dispatch({
            type: ActionType.SEARCH,
            payload: item
        })
    }
}

export const showItemInfo = (item: item) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ITEMINFO,
            payload: item
        })
    }
}

export const showAdGroup = (adGroupArr: adGroup[]) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADGROUP,
            payload: adGroupArr
        })
    }
}

export const createAdGroup = (adGroupArr: adGroup[]) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADGROUP,
            payload: adGroupArr
        })
    }
}

export const showKeywordTableInfo = (tableInfoArr: keywordTable[]) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.KEWORD_TABLE_INFO,
            payload: tableInfoArr
        })
    }
}

export const selectedAdGroup = (adGroupNm: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SELECTED_ADGTOUP,
            payload: adGroupNm
        })
    }
}

export const getAdvInfo = (advInfo: advInfo) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADV_INFO,
            payload: advInfo
        })
    }
}

export const getReAdvInfo = (advInfo: advInfo) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.RE_ADV_INFO,
            payload: advInfo
        })
    }
}

export const getAdgroupItem = (adGroupItem: adGroupItem[]) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.ADGROUP_ITEM,
            payload: adGroupItem
        })
    }
}

export const getReAdgroupItem = (adGroupItem: adGroupItem[]) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.RE_ADGROUP_ITEM,
            payload: adGroupItem
        })
    }
}


