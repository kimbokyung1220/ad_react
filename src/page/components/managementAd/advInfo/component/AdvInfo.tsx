import Reactm, { useEffect, useState } from 'react';
import { Button, Switch, message} from 'antd';
import { showAdvInfo, updateIngActYn } from '../../../../../model/axios';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, State } from '../../../../../state';

const AdvInfo = () => {
    const dispatch = useDispatch();
    const { getAdvInfo } = bindActionCreators(actionCreators, dispatch);
    const advInfo = useSelector((state: State) => state.advInfo)

    const [switchState, setSwitchState] = useState<boolean>(advInfo.adIngActYn === 1 ? true : false);
    const [messageApi, contextHolder] = message.useMessage();

    const SuccessBtn = () => {
        messageApi.open({
          type: 'success',
          content: '변경 완료 했습니다',
        });
      };

    const swithchEvent = (checked: boolean) => {
        const data = checked ? 1 : 0;
        updateIngActYn({
            'adIngActYn': data
        })
            .then((res) => {
                getAdvInfo(res)
                SuccessBtn();
            })
            .catch((err => console.log(err)))
        setSwitchState(checked)

    }

    useEffect(() => {
        showAdvInfo()
            .then((res) => {
                getAdvInfo(res)
                if (res.adIngActYn === 1) {
                    setSwitchState(true)
                    console.log("res.adIngActYn == 1")
                } else if (res.adIngActYn === 0) {
                    setSwitchState(false)
                    console.log("res.adIngActYn == 0")
                }
            })
            .catch((err) => console.log(err))
    }, [switchState])

    return (
        <>
        { contextHolder }
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
                                            <span>{advInfo.adIngActYn}</span>
                                                <Switch className="pink"
                                                    size="small"
                                                    checkedChildren="on"
                                                    unCheckedChildren="off"
                                                    defaultChecked={switchState}
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
                                    <span className="fz-15 fc-gray-500">일일 허용예산</span>
                                </div>
                            </dt>
                            <dd>
                                <div className="form-group">
                                    <span className="comp-txt">
                                        <span className="table">
                                            <span className="table-cell">

                                                <b className="fz-14 fc-gray-400">{advInfo.dayLimitBudget === 0 ? advInfo.dayLimitBudgetStatus : `${advInfo.dayLimitBudget}원`}</b>
                                                <Button className="pink" size="small" style={{ marginLeft: "10px" }}>일일 허용 예산 설정</Button>
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