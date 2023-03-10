import { item } from "../../page/RegContent"
import { ActionType } from "../action-types"

interface SearchAction {
    type: ActionType.SEARCH
    payload: item[]
}

export type Action = SearchAction