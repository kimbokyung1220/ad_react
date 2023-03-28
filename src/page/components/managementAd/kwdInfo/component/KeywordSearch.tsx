import React, { Dispatch, useEffect, useState } from 'react';
import { Button, Input } from "antd";
import { useLocation } from "react-router-dom";
import { requestKeywordList } from "../../../../../model/axios";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../../../state";
interface Props {
    setKeywordName: Dispatch<string>
}

const KeywordSearch = ({ setKeywordName }: Props) => {
    const [searchKeywordName, setSearchKeywordName] = useState<string>("");
    const { state } = useLocation();

    // 키워드 리스트 
    const dispatch = useDispatch();
    const { getKeywordList } = bindActionCreators(actionCreators, dispatch);

    const searchKeyword = () => {
        setKeywordName(searchKeywordName)
        requestKeywordList(
            state,
            { 'kwdName': searchKeywordName })
            .then((res) => {
                getKeywordList(res.data)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        searchKeyword();
    }, [])

    return (
        <>
            <section className="wrap-section wrap-tbl">
                <div className="box-header">
                    <div className="box-left">
                        <div className="box-left">
                            <h2 className="fz-24 fc-gray-700">키워드 검색</h2>
                        </div>
                    </div>
                </div>
                <div className="box-body">
                    <div className="tbl">
                        <dl>
                            <dt>
                                <div className="dt-inner">
                                    <span className="fz-15 fc-gray-500">키워드 명 검색</span>
                                </div>
                            </dt>
                            <dd>
                                <div className="form-group">
                                    <Input name="itemName" placeholder="키워드명을 입력하세요."
                                        onChange={(e) => { setSearchKeywordName(e.currentTarget.value); }}
                                        type="text"
                                        value={searchKeywordName}
                                        style={{ width: "500px" }}
                                        onPressEnter={searchKeyword}
                                    />
                                </div>
                            </dd>
                            <dt>
                                <div className="dt-inner">
                                    <Button className="pink" size="large" type="primary"
                                        onClick={searchKeyword}
                                    >
                                        <span>키워드 조회</span>
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

export default KeywordSearch;