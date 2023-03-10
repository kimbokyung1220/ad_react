import { item } from "../../page/RegContent"
import { Dispatch } from "redux";
import { Action } from "../actions/index"
import { ActionType } from "../action-types";

export const showItemList = (item: item[]) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type:ActionType.SEARCH,
            payload: item
        })
    }
}