import { useSelector } from "react-redux"
import { State } from "../../../../state"

export const useRegContent = () => {
    const items = useSelector((state: State) => state.item)

    return {
        items
    }
}