import { Button, Input, Modal } from "antd";
import React, { Dispatch, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { actionCreators, State } from "../../../../../state";
import { errorAlert, successAlert, warningAlert } from "../../../../alerts/alert";
import { requesSaveAgroup, requestAgroupItemList } from '../../../../../model/axios';
import { bindActionCreators } from "redux";
import { validation } from "../../../../../store/validation";

interface Props {
    adGroupModalOpen: boolean,
    setAdGroupModalOpen: Dispatch<boolean>
}

const AdGroupModal = ({ adGroupModalOpen, setAdGroupModalOpen }: Props) => {

    // validation
    const { checkInputSpecial, checkSpace } = validation();

    const dispatch = useDispatch();
    const { getReAdgroupItemList } = bindActionCreators(actionCreators, dispatch);

    // 그룹정보 및 상품갯수
    const adGroupItemList = useSelector((state: State) => state.adGroupItemList);
    const [isOpen, setIsOpen] = useState(false);
    const [newAdGroupName, setNewAdGroupName] = useState("");

    // 광고그룹 등록
    const saveAdGroupEvent = () => {

        const sameAdGroupExist = adGroupItemList.filter(adGroup => adGroup.agroupName === newAdGroupName);

        if (sameAdGroupExist.length !== 0) {
            warningAlert("동일한 그룹명이 존재합니다.");
            return false;
        }

        if (newAdGroupName === "") {
            warningAlert("광고그룹명을 입력해주세요.");
            return false;
        }

        if (checkInputSpecial(newAdGroupName)) {
            warningAlert("특수문자는 제외해주세요.")
            return false;
        }

        if (checkSpace(newAdGroupName)) {
            warningAlert("공백은 제외해주세요.")
            return false;
        }
        //axios
        requesSaveAgroup({ 'agroupName': newAdGroupName })
            .then((res) => {
                if (res.data === null) {
                    errorAlert(res.error.message);
                    return false;
                }
                cancleModalEvent();
                successAlert("광고그룹을 등록 완료 🙌");
                // reload
                requestAgroupItemList({ 'agroupName': "" })
                    .then((res) => getReAdgroupItemList(res))
                    .catch((err) => console.log(err))
            }).catch(error => {
                console.log("login error");
                console.log(error);

            })
    }

    //모달 닫기
    const cancleModalEvent = () => {
        setIsOpen(false);
        setNewAdGroupName("");
        setAdGroupModalOpen(false);
    };

    useEffect(() => {
        if (adGroupModalOpen) {
            setIsOpen(true)
        } else {
            setIsOpen(false)
        }
    }, [adGroupModalOpen])

    return (
        <>
            <div>
                <Modal title="광고그룹 등록"
                    open={isOpen}
                    onOk={() => setIsOpen(false)}
                    onCancel={cancleModalEvent}
                    maskClosable={false}
                    width={800}
                    footer={[
                        <Button key="back" type="primary" className="gray" size="large"
                            onClick={cancleModalEvent}> {"취소"} </Button>,
                        <Button key="submit" type="primary" className="pink" size="large" onClick={saveAdGroupEvent}> {"등록"} </Button>,

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
                                                placeholder="등록할 광고그룹 명을 입력하세요."
                                                // onKeyUp={(e) => checkInput(e.currentTarget.value)}
                                                value={newAdGroupName}
                                                onChange={(e) => setNewAdGroupName(e.currentTarget.value)}
                                                onPressEnter={saveAdGroupEvent
                                                }
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

export default AdGroupModal;