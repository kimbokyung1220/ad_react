import Reactm, { Dispatch, useEffect, useState } from 'react';
import { Button, Switch, message } from 'antd';
import { requestAdvInfo, requestUpdateIngActYn } from '../../../../../model/axios';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../../../../state';
import { successAlert } from "../../../../alerts/alert";
interface Props {
    setDayLimitBudgetModalOpen: Dispatch<boolean>
}

const AdvInfo = ({ setDayLimitBudgetModalOpen }: Props) => {

    const dispatch = useDispatch();
    const { getAdvInfo } = bindActionCreators(actionCreators, dispatch);

    // 광고주 정보
    const advInfo = useSelector((state: State) => state.advInfo)
    const [switchState, setSwitchState] = useState<boolean>(false);

    // 광고 설정 변경
    const swithchEvent = (checked: boolean) => {
        const data = checked ? 1 : 0;
        //axios
        requestUpdateIngActYn({
            'adIngActYn': data
        })
            .then((res) => {
                getAdvInfo(res)
                successAlert("변경 완료! 🙌")
            })
            .catch((err => console.log(err)))
        setSwitchState(checked)
    }

    useEffect(() => {
        if (advInfo.advId !== "") {
            advInfo.adIngActYn === 1
                ? setSwitchState(true)
                : setSwitchState(false);
            return;
        }

        requestAdvInfo()
            .then((res) => {
                getAdvInfo(res);

                res.adIngActYn === 1
                    ? setSwitchState(true)
                    : setSwitchState(false);
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <>
            <section className="wrap-section wrap-tbl">
                <div className="box-header">
                    <div className="box-left">
                        <div className="box-left">
                            <h2 className="fz-24 fc-gray-700">광고주 계정 설정 및 정보</h2>
                        </div>
                    </div>
                </div>
                <div className="box-body">
                    <div className="tbl">
                        <dl>
                            <dt style={{ width: '50%', textAlign: 'center' }}>
                                <div className="dt-inner">
                                    <span className="fz-2 fc-gray-500">광고 설정</span>
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
                                    <span className="fz-15 fc-gray-500">충전금 잔액</span>
                                </div>
                            </dt>
                            <dd>
                                <div className="form-group">
                                    <span className="comp-txt">
                                        <span className="table">
                                            <span className="table-cell">
                                                <b className="fz-14 fc-gray-400">{advInfo.balance}원</b>
                                            </span>
                                        </span>
                                    </span>
                                </div>
                            </dd>
                        </dl>
                        <dl>
                            <dt style={{ width: '50%', textAlign: 'center' }}>
                                <div className="dt-inner">
                                    <span className="fz-15 fc-gray-500">이벤트 머니 잔액</span>
                                </div>
                            </dt>
                            <dd>
                                <div className="form-group">
                                    <span className="comp-txt">
                                        <span className="table">
                                            <span className="table-cell">
                                                <b className="fz-14 fc-gray-400">{advInfo.eventMoneyBalance}원</b>
                                            </span>
                                        </span>
                                    </span>
                                </div>
                            </dd>
                        </dl>
                        <dl>
                            <dt style={{ width: '50%', textAlign: 'center' }}>
                                <div className="dt-inner">
                                    <span className="fz-15 fc-gray-500">잔액 상태</span>
                                </div>
                            </dt>
                            <dd>
                                <div className="form-group">
                                    <span className="comp-txt">
                                        <span className="table">
                                            <span className="table-cell">
                                                <b className="fz-14 fc-gray-400">{advInfo.chargingAmountStatus}</b>
                                            </span>
                                        </span>
                                    </span>
                                </div>
                            </dd>
                        </dl>
                        <dl>
                            <dt style={{ width: '50%', textAlign: 'center' }}>
                                <div className="dt-inner">
                                    <span className="fz-15 fc-gray-500">일일 허용 예산</span>
                                </div>
                            </dt>
                            <dd>
                                <div className="form-group">
                                    <span className="comp-txt">
                                        <span className="table">
                                            <span className="table-cell">

                                                <b className="fz-14 fc-gray-400">{advInfo.dayLimitBudget === 0 ? advInfo.dayLimitBudgetStatus : `${advInfo.dayLimitBudget}원`}</b>
                                                <Button className="pink" size="middle" style={{ marginLeft: "20px" }} onClick={() => setDayLimitBudgetModalOpen(true)}>일일 허용 예산 설정</Button>
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

export default AdvInfo;