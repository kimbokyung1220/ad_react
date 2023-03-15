
import { Dispatch } from "redux";
import { item } from "../../components/page/RegContent";
import { adGroup, keywordTable, oneGroup } from "../../model/type";
import { ActionType } from "../action-type";
import { Action } from "../actions/index"

export const showItemList = (item: item[]) => {
    return (dispatch: Dispatch<Action>) => { //dispatch : 전달
        dispatch({
            type:ActionType.SEARCH,
            payload: item
        })
    }
}

export const showItemInfo = (item: item) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type:ActionType.ITEMINFO,
            payload: item
        })
    }
}

export const showAdGroup = (adGroupArr: adGroup[]) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type:ActionType.ADGROUP,
            payload: adGroupArr
        })
    }
}

export const createAdGroup = (adGroupArr: adGroup[]) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type:ActionType.ADGROUP,
            payload: adGroupArr
        })
    }
}

export const selectAdGroup = (one: oneGroup) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type:ActionType.SELECT_ADGROUP,
            payload: one
        })
    }
}

export const showKeywordTableInfo = (tableInfoArr: keywordTable[]) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type:ActionType.KEWORD_TABLE_INFO,
            payload: tableInfoArr
        })
    }
}


