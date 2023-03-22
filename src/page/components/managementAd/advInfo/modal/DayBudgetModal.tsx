import React, { useState, useEffect, Dispatch } from 'react';
import { Button, Input, Modal } from "antd";
import { errorAlert, successAlert, warningAlert } from "../../../../alerts/alert";
import { requestUpdateLimitBudget } from "../../../../../model/axios";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../../../state";
interface Props {
    dayLimitBudgetModalOpen: boolean,
    setDayLimitBudgetModalOpen: Dispatch<boolean>
}

const DayBudgetModal = ({dayLimitBudgetModalOpen, setDayLimitBudgetModalOpen}:Props) => {
    const [newDayLimitBudget, setNewDayLimitBudget] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();
    const { getReAdvInfo } = bindActionCreators(actionCreators, dispatch);

    // 일일 허용 예산 변경
    const updateBudgetEvent = () => {
        const dayLimitBudgetStr = newDayLimitBudget.toString();

        if(dayLimitBudgetStr.length >= 2 && dayLimitBudgetStr.substring(dayLimitBudgetStr.length -2, dayLimitBudgetStr.length) !== "00") {
            return  warningAlert("일일 허용 예산은 100원 단위로 변경 가능합니다.");
        }

        if(newDayLimitBudget < 100 && newDayLimitBudget >= 1) {
            return warningAlert("일일 허용 예산은 100원 단위로 변경 가능합니다.");
        }

        requestUpdateLimitBudget({ 'dayLimitBudget': newDayLimitBudget })
        .then((res) => { 
            cancleModalEvent(); 
            successAlert("변경이 완료 되었습니다.");
            getReAdvInfo(res.data);
        })    
        .catch((err) => errorAlert("변경하지 못하였습니다."))
    }
    
    // 모달 닫기
    const cancleModalEvent = () => {
        // 모달 닫기
        setIsOpen(false); 
        setNewDayLimitBudget(0);
        setDayLimitBudgetModalOpen(false);
    }

    useEffect(() => {
        if(dayLimitBudgetModalOpen) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }, [dayLimitBudgetModalOpen])
    return (
        <>
            <div>
                <Modal title="일일 허용 예산 설정"
                    open={isOpen}
                    onOk={() => setIsOpen(false)}
                    onCancel={cancleModalEvent}
                    maskClosable={false}
                    width={800}
                    footer={[
                        <Button key="back" type="primary" className="gray" size="large"
                            onClick={cancleModalEvent}> {"취소"} </Button>,
                        <Button key="submit" type="primary" className="pink" size="large" onClick={updateBudgetEvent}> {"변경"} </Button>,

                    ]}
                >
                    <section className="wrap-section wrap-tbl">
                        <div className="box-body">
                            <div className="tbl">
                                <dl>
                                    <dt>
                                        <div className="dt-inner">
                                            <span className="fz-16 fw-med fc-7">일일 허용 예산<i className="txt-essential"></i></span>
                                        </div>
                                    </dt>
                                    <dd>
                                        <div className="form-group">
                                            <Input type="text"
                                                style={{ width: 380 }}
                                                maxLength={10}
                                                name="dayLimitBudget"
                                                placeholder="일일 허용 예산을 입력해주세요."
                                                value={newDayLimitBudget}
                                                onChange={(e) => setNewDayLimitBudget(Number(e.currentTarget.value))}
                                                onPressEnter={updateBudgetEvent}
                                            />
                                            <span>원</span>
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </section>
                </Modal>
            </div>
        </>
    );
}

export default DayBudgetModal;