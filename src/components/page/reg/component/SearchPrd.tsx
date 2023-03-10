import React, { useState, useContext } from 'react';
import { Input, Button } from 'antd';
import { getItemList } from '../../../../model/axios';
import AuthContext from '../../../../store/auth-context';
import { item } from "../../RegContent";
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../redux";

interface itemProps {
    setItems: React.Dispatch<React.SetStateAction<item[]>>
}

const dispatch = useDispatch();
const { showItemList } = bindActionCreators(actionCreators, dispatch);

const SearchPrd = ({setItems}:itemProps) => {
    const authCtx = useContext(AuthContext);
    const [itemNo, setItemNo] = useState('');
    const [itemName, setItemName] = useState('');

    

    const searchEvent = () => {
        console.log("searchEvent")
        const data = {
            'itemNo': itemNo,
            'itemName': itemName
        };
        getItemList(data).then(res => {
            if (res !== null) {
                // console.log("상품 리스트")
                // console.log(res)
                setItems(res)
                showItemList(res)
                // authCtx.ItemList(res);
            }
        }).catch(error => {
            console.log("search error");
            console.log(error);
        })
    }

    return (
        <>
            <section className="wrap-section wrap-tbl">
                <div className="box-header">
                    <div className="box-left">
                        <div className="box-left">
                            <h2 className="fz-24 fc-gray-700">상품 조회</h2>
                        </div>
                    </div>
                </div>
                <div className="box-body">
                    <div className="tbl">
                        <dl>
                            <dt>
                                <div className="dt-inner">
                                    <span className="fz-15 fc-gray-500">상품명</span>
                                </div>
                            </dt>
                            <dd>
                                <div className="form-group">
                                    <Input name="itemName" placeholder="상품명을 입력하세요."
                                        // className="ant-input css-dev-only-do-not-override-1me4733" 
                                        onChange={(e) => setItemName(e.currentTarget.value)}
                                        type="text"
                                        value={itemName}
                                        style={{ width: "500px" }} />
                                </div>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <div className="dt-inner">
                                    <span className="fz-15 fc-gray-500">상품번호</span>
                                </div>
                            </dt>
                            <dd>
                                <div className="form-group">
                                    <Input name="itemNo" placeholder="상품번호을 입력하세요."
                                        // className="ant-input css-dev-only-do-not-override-1me4733"
                                        onChange={(e) => setItemNo(e.currentTarget.value)}
                                        type="text"
                                        value={itemNo}
                                        style={{ width: "500px" }} />
                                </div>
                            </dd>
                        </dl>
                    </div>
                </div>
                <div className="box-footer">
                    <div className="box-center">
                        <Button className="pink" size="large" type="primary" onClick={searchEvent}>
                            <span>조회</span>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SearchPrd;