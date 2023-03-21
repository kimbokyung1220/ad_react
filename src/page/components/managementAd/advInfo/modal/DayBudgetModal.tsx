import React, { useState, useEffect, useContext, Dispatch } from 'react';
import { Button, Input, Modal } from "antd";
import { ModalContext } from "../hooks/ModalsContext";
interface Props {
    isModalOpen: boolean,
    setIsModalOpen: Dispatch<boolean>
}

const DayBudgetModal = ({isModalOpen, setIsModalOpen}:Props) => {

    const [dayLimitBudget, setDayLimitBudget] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const cancleModalEvent = () => {
        setIsOpen(false); 
        setIsModalOpen(false);
    }

    useEffect(() => {
        if(isModalOpen) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }, [isModalOpen])
    console.log("isOpen******")
    console.log(isOpen)
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
                        <Button key="submit" type="primary" className="pink" size="large" > {"변경"} </Button>,

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
                                                name="dayLimitBudget"
                                                placeholder="일일 허용 예산을 입력해주세요."
                                                value={dayLimitBudget}
                                                onChange={(e) => console.log(e)}
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