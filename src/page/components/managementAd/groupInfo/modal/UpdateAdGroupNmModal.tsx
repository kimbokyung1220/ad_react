import React, { useState, useEffect, Dispatch } from 'react';
import { Button, Input, Modal } from "antd";
import { requestAgroupItem, requestUpdateAgName } from "../../../../../model/axios";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../../../state";
import { errorAlert, successAlert } from '../../../../alerts/alert';

interface Props {
    updateAdGroupNmModalOpen: boolean,
    setUpdateAdGroupNmModalOpen: Dispatch<boolean>
    adGroupName: string
    adGroupId: number
}


const UpdateAdGroupNmModal = ({ updateAdGroupNmModalOpen, setUpdateAdGroupNmModalOpen, adGroupName, adGroupId }: Props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [newAdGroupName, setNewAdGroupName] = useState<string>("");

    const dispatch = useDispatch();
    const { getReAdgroupItem } = bindActionCreators(actionCreators, dispatch);


    //모달 닫기
    const cancleModalEvent = () => {
        setIsOpen(false);
        setNewAdGroupName("");
        setUpdateAdGroupNmModalOpen(false);
    };

    // 광고그룹명 변경
    const updateAdGroupNameEvent = () => {
        requestUpdateAgName({
            'agroupName': adGroupName,
            'newAgroupName': newAdGroupName,
        })
            .then((res) => {
                console.log(res.data)
                if(res.data === null) {
                    errorAlert(res.error.message)
                    return false;
                }
                successAlert(res.data)
                //reload
                requestAgroupItem({
                    'agroupId': adGroupId,
                })
                    .then((res) => {
                        getReAdgroupItem(res);
                        cancleModalEvent();

                    })
                    .catch((err) => console.log(err))

            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        if (updateAdGroupNmModalOpen) {
            setNewAdGroupName(adGroupName)
            setIsOpen(true)
        } else {
            setNewAdGroupName("")
            setIsOpen(false)
        }
    }, [updateAdGroupNmModalOpen])

    return (
        <>
            <div>
                <Modal title="광고그룹명 변경"
                    open={isOpen}
                    onOk={() => setIsOpen(false)}
                    onCancel={cancleModalEvent}
                    maskClosable={false}
                    width={800}
                    footer={[
                        <Button key="back" type="primary" className="gray" size="large"
                            onClick={cancleModalEvent}> {"취소"} </Button>,
                        <Button key="submit" type="primary" className="pink" size="large"
                            onClick={updateAdGroupNameEvent}
                        > {"변경"} </Button>,

                    ]}
                >
                    <section className="wrap-section wrap-tbl">
                        <div className="box-body">
                            <div className="tbl">
                                <dl>
                                    <dt>
                                        <div className="dt-inner">
                                            <span className="fz-16 fw-med fc-7">광고그룹 명<i className="txt-essential"></i></span>
                                        </div>
                                    </dt>
                                    <dd>
                                        <div className="form-group">
                                            <Input type="text"
                                                style={{ width: 380 }}
                                                name="dayLimitBudget"
                                                placeholder="변경할 광고그룹 명을 입력하세요."
                                                value={newAdGroupName}
                                                onChange={(e) => setNewAdGroupName(e.currentTarget.value)}
                                            // onPressEnter={}
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

export default UpdateAdGroupNmModal;