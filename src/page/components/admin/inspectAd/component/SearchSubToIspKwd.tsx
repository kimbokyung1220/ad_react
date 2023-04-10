import { Button, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { requestSearchIspAdList } from "../../../../../model/adminAxios";
import { admActionCreators } from "../../../../../state";
import { errorAlert } from "../../../../alerts/alert";

const SearchSubToIspKwd = () => {
    const [searchSubToIspKwd, setSearchSubToIspKwd] = useState("")

    const dispatch = useDispatch();
    const { getSearchIspAdKwdList } = bindActionCreators(admActionCreators, dispatch);

    const SearchSubToIspKwdEvent = () => {
        requestSearchIspAdList({ 'kwdName': searchSubToIspKwd })
            .then((res) => {
                if (res.data === null) {
                    errorAlert(res.error.message)
                    return false;
                }
                getSearchIspAdKwdList(res.data)
            })
            .catch((err) => {
                console.log(err);
                if (err.code === 'ERR_NETWORK') {
                    errorAlert("인터넷 연결상태를 확인해주세요");
                    return false;
                }
            })
    }


    useEffect(() => {
        SearchSubToIspKwdEvent()
    }, [])
    return (
        <>
            <section className="wrap-section wrap-tbl">
                <div className="box-header">
                    <div className="box-left">
                        <div className="box-left">
                            <h2 className="fz-24 fc-gray-700">검수 대상 키워드 조회</h2>
                        </div>
                    </div>
                </div>
                <div className="box-body">
                    <div className="tbl">
                        <dl>
                            <dt>
                                <div className="dt-inner">
                                    <span className="fz-15 fc-gray-500">키워드명</span>
                                </div>
                            </dt>
                            <dd>
                                <div className="form-group">
                                    <Input name="itemName" placeholder="키워드명을 입력해주세요."
                                        onChange={(e) => { setSearchSubToIspKwd(e.currentTarget.value); }}
                                        type="text"
                                        value={searchSubToIspKwd}
                                        style={{ width: "500px" }}
                                        onPressEnter={SearchSubToIspKwdEvent}
                                    />
                                </div>
                            </dd>
                            <dt>

                            </dt>
                        </dl>
                    </div>
                </div>
                <div className="box-footer">
                    <div className="box-center">
                        <Button className="pink" size="large" type="primary" onClick={SearchSubToIspKwdEvent}>
                            <span>키워드 조회</span>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SearchSubToIspKwd;