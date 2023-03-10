
import { Dispatch } from "redux";
import { item } from "../../components/page/RegContent";
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