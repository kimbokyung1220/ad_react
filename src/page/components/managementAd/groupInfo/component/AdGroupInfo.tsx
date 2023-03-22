import { Button, Switch } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { requestAgroupItemList } from '../../../../../model/axios';
import { actionCreators, State } from '../../../../../state';

const AdGroupInfo = () => {
    const navigate = useNavigate();
    const adGroupName = useSelector((state: State) => state.selectedAdGroup);
    const dispatch = useDispatch();
    const { getAdgroupItem } = bindActionCreators(actionCreators, dispatch);
    const adGroupItemList = useSelector((state: State) => state.adGroupItem[0]);

    useEffect(() => {
        requestAgroupItemList({
            'agroupName': adGroupName,
        })
            .then((res) => getAdgroupItem(res.data[0]))
            .catch((err) => console.log(err))
    }, [])
    return (
        <>
            <section className="wrap-section wrap-tbl">
                <div className="box-header">
                    <div className="box-left">
                        <div className="box-left">
                            <h2 className="fz-24 fc-gray-700">{adGroupItemList.agroupName}그룹 설정 및 정보</h2>
                        </div>
                    </div>
                </div>
                <div className="box-body">
                    <div className="tbl">
                        <dl>
                            <dt style={{ width: '50%', textAlign: 'center' }}>
                                <div className="dt-inner">
                                    <span className="fz-15 fc-gray-500">그룹명</span>
                                </div>
                            </dt>
                            <dd>
                                <div className="form-group">
                                    <span className="comp-txt">
                                        <span className="table">
                                            <span className="table-cell">
                                                <b className="fz-14 fc-gray-400">{adGroupItemList.agroupName}그룹</b>
                                                <Button type="primary" className="pink" size="small" style={{ marginLeft: "10px" }}>그룹명 변경</Button>
                                            </span>
                                        </span>
                                    </span>
                                </div>
                            </dd>
                        </dl>
                        <dl>
                            <dt style={{ width: '50%', textAlign: 'center' }}>
                                <div className="dt-inner">
                                    <span className="fz-2 fc-gray-500">그룹 ON/OFF</span>
                                </div>
                            </dt>
                            <dd>
                                <div className="form-group">
                                    <span className="comp-txt">
                                        <span className="table">
                                            <span className="table-cell">
                                                <Switch className="pink"
                                                    size="small"
                                                    checkedChildren="on"
                                                    unCheckedChildren="off"
                                                    checked
                                                    onChange={(checked: boolean) => console.log(`switch to ${checked}`)} />
                                            </span>
                                        </span>
                                    </span>
                                </div>
                            </dd>
                        </dl>
                        <dl>
                            <dt style={{ width: '50%', textAlign: 'center' }}>
                                <div className="dt-inner">
                                    <span className="fz-15 fc-gray-500">광고상품 수</span>
                                </div>
                            </dt>
                            <dd>
                                <div className="form-group">
                                    <span className="comp-txt">
                                        <span className="table">
                                            <span className="table-cell">
                                                <b className="fz-14 fc-gray-400">{adGroupItemList.adUseConfigYn}개</b>
                                                <Button type="primary" className="pink" size="small" style={{ marginLeft: "10px" }}
                                                        onClick={() => navigate('/adv/reg')}
                                                >광고 상품 등록</Button>
                                            </span>
                                        </span>
                                    </span>
                                </div>
                            </dd>
                        </dl>
                        <dl>
                            <dt style={{ width: '50%', textAlign: 'center' }}>
                                <div className="dt-inner">
                                    <span className="fz-15 fc-gray-500">그룹 생성 시간</span>
                                </div>
                            </dt>
                            <dd>
                                <div className="form-group">
                                    <span className="comp-txt">
                                        <span className="table">
                                            <span className="table-cell">
                                                <b className="fz-14 fc-gray-400">{adGroupItemList.regTime}</b>
                                            </span>
                                        </span>
                                    </span>
                                </div>
                            </dd>
                        </dl>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AdGroupInfo;