import React, { useState, useEffect } from 'react';
import { Button, Input } from 'antd';
import { requestMngItemList } from '../../../../../model/axios';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../../../state";


const ItemSearch = () => {
    const { state } = useLocation();
    const [searchItemName, setSearchItemName] = useState<string>("");
    const [searchItemNo, setSearchItemNo] = useState<string>("");

    const dispatch = useDispatch();
    const { getMngItemList } = bindActionCreators(actionCreators, dispatch);

    const searchItemList = () => {
        requestMngItemList(
            state,
            { 'itemNo': searchItemNo, 'itemName': searchItemName, }
        )
            .then((res) => getMngItemList(res.data))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        searchItemList()
    }, [])

    return (
        <>
            <section className="wrap-section wrap-tbl">
                <div className="box-header">
                    <div className="box-left">
                        <div className="box-left">
                            <h2 className="fz-24 fc-gray-700">상품 검색</h2>
                        </div>
                    </div>
                </div>
                <div className="box-body">
                    <div className="tbl">
                        <dl>
                            <dt style={{ width: "15%", borderRight: "0px" }} >
                                <div className="dt-inner">
                                    <span className="fz-15 fc-gray-500">상품명 검색</span>
                                </div>
                            </dt>
                            <dd style={{ width: "20%" }}>
                                <div className="form-group">
                                    <Input name="itemName" placeholder="상품명을 입력하세요."
                                        onChange={(e) => { setSearchItemName(e.currentTarget.value); setSearchItemName(e.currentTarget.value) }}
                                        type="text"
                                        value={searchItemName}
                                        style={{ width: "300px" }}
                                    onPressEnter={searchItemList}
                                    />
                                </div>
                            </dd>
                            <dt style={{ width: "15%", borderRight: "0px", marginLeft: "5%" }}>
                                <div className="dt-inner">
                                    <span className="fz-15 fc-gray-500">상품번호 검색</span>
                                </div>
                            </dt>
                            <dd>
                                <div className="form-group">
                                    <Input name="itemNo" placeholder="상품번호를 입력하세요."
                                        onChange={(e) => { setSearchItemNo(e.currentTarget.value); setSearchItemNo(e.currentTarget.value) }}
                                        type="text"
                                        value={searchItemNo}
                                        style={{ width: "300px" }}
                                    onPressEnter={searchItemList}
                                    />
                                </div>
                            </dd>
                            <dt>
                                <div className="dt-inner">
                                    <Button className="pink" size="large" type="primary"
                                    onClick={searchItemList}
                                    >
                                        <span>상품 조회</span>
                                    </Button>
                                </div>
                            </dt>
                        </dl>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ItemSearch;