import React, { Dispatch, useEffect, useState } from 'react';
import { Button, Modal } from "antd";

interface Props {
    cnrProcessModalOpen: boolean
    setCnrProcessModalOpen: Dispatch<boolean>
}
const CnrProcessModal = ({ cnrProcessModalOpen, setCnrProcessModalOpen }: Props) => {

    //모달
    const [isOpen, setIsOpen] = useState(false);

    //모달 닫기
    const cancleModalEvent = () => {
        setIsOpen(false);
        // setNewKwdName("");
        setCnrProcessModalOpen(false);
    };

    useEffect(() => {
        if (cnrProcessModalOpen) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }, [cnrProcessModalOpen])
    return (
        <>
            <div>
                <Modal title="검수 처리"
                    open={isOpen}
                    onOk={() => setIsOpen(false)}
                    onCancel={cancleModalEvent}
                    maskClosable={false}
                    width={800}
                    footer={[
                        <Button key="back" type="primary" className="gray" size="large"
                            onClick={cancleModalEvent}> {"취소"} </Button>,
                        <Button key="submit" type="primary" className="pink" size="large" > {"승인"} </Button>,

                    ]}
                >
                    <section className="wrap-section wrap-tbl">
                        <div className="box-body">
                            <div className="tbl">
                                <dl>
                                    <dt>
                                        <div className="dt-inner">
                                            <span className="fz-16 fw-med fc-7">상품 명<i className="txt-essential"></i></span>
                                        </div>
                                    </dt>
                                    <dd>
                                        <div className="form-group">
                                            
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

export default CnrProcessModal;