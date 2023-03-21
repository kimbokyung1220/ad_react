import { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { requestItemAllList } from "../../../../model/axios";
import { actionCreators } from "../../../../state";

export const useSearchPrd = () => {

    const dispatch = useDispatch();
    const { showItemList } = bindActionCreators(actionCreators, dispatch);

    // const authCtx = useContext(AuthContext);
    const [itemNo, setItemNo] = useState('');
    const [itemName, setItemName] = useState('');

    const searchEvent = () => {
        console.log("searchEvent")
        const data = {
            'itemNo': itemNo,
            'itemName': itemName
        };
        requestItemAllList(data).then(res => {
            if (res !== null) {
                showItemList(res)
            }
        }).catch(error => {
            console.log("search error");
            console.log(error);
        })
    }
    // 변수
    const state = { itemNo, itemName };
    // 함수
    const handlers = { setItemNo, setItemName, searchEvent };

    return {
        ...state,
        ...handlers,
    };

}