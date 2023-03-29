import { Button, Input, Modal } from 'antd';
import React, { Dispatch, useEffect, useState } from 'react';
import { validation } from '../../../../../store/validation';

interface Props {
    ispKwdModalOpen: boolean
    setIspKwdModalOpen: Dispatch<boolean>
}

const SubToIspKwdModal = ({ ispKwdModalOpen, setIspKwdModalOpen }: Props) => {
    // validation
    const { checkInputSpecial, checkSpace } = validation();

    const [newKwdName, setNewKwdName] = useState<string>("");

    //모달
    const [isOpen, setIsOpen] = useState(false);

    //모달 닫기
    const cancleModalEvent = () => {
        setIsOpen(false);
        setNewKwdName("");
        setIspKwdModalOpen(false);
    };

    useEffect(() => {
        if(ispKwdModalOpen) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    },[ispKwdModalOpen])

    return (
        <>
            <div>
                <Modal title="검수 대상 키워드 등록"
                    open={isOpen}
                    onOk={() => setIsOpen(false)}
                    onCancel={cancleModalEvent}
                    maskClosable={false}
                    width={800}
                    footer={[
                        <Button key="back" type="primary" className="gray" size="large"
                            onClick={cancleModalEvent}> {"취소"} </Button>,
                        <Button key="submit" type="primary" className="pink" size="large"> {"등록"} </Button>,

                    ]}
                >
                    <section className="wrap-section wrap-tbl">
                        <div className="box-body">
                            <div className="tbl">
                                <dl>
                                    <dt>
                                        <div className="dt-inner">
                                            <span className="fz-16 fw-med fc-7">키워드 명<i className="txt-essential"></i></span>
                                        </div>
                                    </dt>
                                    <dd>
                                        <div className="form-group">
                                            <Input type="text"
                                                style={{ width: 380 }}
                                                name="dayLimitBudget"
                                                placeholder="키워드 명을 입력하세요."
                                                // onKeyUp={(e) => checkInput(e.currentTarget.value)}
                                                value={newKwdName}
                                                onChange={(e) => setNewKwdName(e.currentTarget.value)}
                                            // onPressEnter={saveAdGroupEvent}
                                            />
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

export default SubToIspKwdModal;