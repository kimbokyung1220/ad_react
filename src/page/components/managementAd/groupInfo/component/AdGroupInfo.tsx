import { Button, message, Switch } from 'antd';
import React, { Dispatch, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { requestAgroupItem, requestUpdateAgUseConfig } from '../../../../../model/axios';
import { actionCreators, State } from '../../../../../state';
interface Props {
    setUpdateAdGroupNmModalOpen: Dispatch<boolean>
    setAdGroupName: Dispatch<string>
    setAdGroupId: Dispatch<number>
}


const AdGroupInfo = ({ setUpdateAdGroupNmModalOpen, setAdGroupName, setAdGroupId }: Props) => {
    const navigate = useNavigate();
    const { state } = useLocation();

    const dispatch = useDispatch();
    const { getAdgroupItem } = bindActionCreators(actionCreators, dispatch);
    const { getReAdgroupItem } = bindActionCreators(actionCreators, dispatch);
    const adGroupItemInfo = useSelector((state: State) => state.adGroupItem);

    const [switchState, setSwitchState] = useState<boolean>(false);
    const [messageApi, contextHolder] = message.useMessage();

    const SuccessBtn = () => {
        messageApi.open({
            type: 'success',
            content: '변경 완료 했습니다',
        });
    };

    // 광고 설정 변경
    const swithchEvent = (checked: boolean) => {
        const data = checked ? 1 : 0;

        // 광고그룹 사용설정여부 변경(1개)
        requestUpdateAgUseConfig({
            'agroupId': adGroupItemInfo.agroupId,
            'agroupUseConfigYn': data
        })
            .then((res) => {
                SuccessBtn()
                requestAgroupItem({ 'agroupName': adGroupItemInfo.agroupName })
                    .then((res) => getReAdgroupItem(res))
                    .catch((err) => console.log(err))
                setSwitchState(checked)

            })
            .catch((err) => console.log(err))
    }

    // 모달 오픈
    const openModalEvent = () => {
        setAdGroupName(adGroupItemInfo.agroupName)
        setAdGroupId(adGroupItemInfo.agroupId);
        setUpdateAdGroupNmModalOpen(true)
    }

    useEffect(() => {
        console.log(adGroupItemInfo.agroupName);
        console.log(state);

        requestAgroupItem({
            'agroupId': state,
        })
            .then((res) => {
                getAdgroupItem(res);
                if (res.agroupUseConfigYn === 1) {
                    setSwitchState(true)
                } else if (res.agroupUseConfigYn === 0) {
                    setSwitchState(false)
                }

            })
            .catch((err) => console.log(err))
    }, [])


    return (
        <>
            {contextHolder}
            <section className="wrap-section wrap-tbl">
                <div className="box-header">
                    <div className="box-left">
                        <div className="box-left">
                            <h2 className="fz-24 fc-gray-700">{adGroupItemInfo.agroupName}그룹 설정 및 정보</h2>
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
                                                <b className="fz-14 fc-gray-400">{adGroupItemInfo.agroupName}그룹</b>
                                                <Button type="primary" className="pink" size="small" style={{ marginLeft: "10px" }} onClick={openModalEvent}>그룹명 변경</Button>
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
                                                    checked={switchState}
                                                    onChange={(checked: boolean) => swithchEvent(checked)} />
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
                                                <b className="fz-14 fc-gray-400">{adGroupItemInfo.adActYn}개</b>
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
                                                <b className="fz-14 fc-gray-400">{adGroupItemInfo.regTime}</b>
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