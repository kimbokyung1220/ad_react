import React, { useState, useEffect, useContext } from 'react';
import { Button, Input, Modal } from "antd";
import { ModalContext } from "../hooks/ModalsContext";


const DayBudgetModal = () => {

    const [dayLimitBudget, setDayLimitBudget] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
    }, [isModalOpen])

    return (
        <>
            <div>
                <Modal title="일일 허용 예산 설정"
                    open={isModalOpen}
                    onOk={() => setIsModalOpen(false)}
                    onCancel={() => { setIsModalOpen(false); setDayLimitBudget(0); }}
                    maskClosable={false}
                    width={800}
                    footer={[
                        <Button key="back" type="primary" className="gray" size="large"
                            onClick={() => { setIsModalOpen(false); setDayLimitBudget(0); }}> {"취소"} </Button>,
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
                                                onChange={(e) => setDayLimitBudget(Number(e.currentTarget.value))}
                                            > {"원"}</Input>
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