import React, { Dispatch, useEffect, useState } from 'react';
import { Button, Input, Modal, Select } from "antd";
import { ispAdKwdList, ispAdKwdListDefaultValue } from '../../../../../type/dadDet';
import { requestIspAdDetail, requestUpdateCnrIngStatus } from '../../../../../model/adminAxios';
import { errorAlert, successAlert } from '../../../../alerts/alert';
import { CnrFailCauseType } from './CnrFailCause';
import { createImportSpecifier } from 'typescript';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { admActionCreators } from '../../../../../state';

interface Props {
    cnrProcessModalOpen: boolean
    setCnrProcessModalOpen: Dispatch<boolean>
    recode: ispAdKwdList
}
const CnrProcessModal = ({ cnrProcessModalOpen, setCnrProcessModalOpen, recode }: Props) => {
    const dispatch = useDispatch();
    // reload
    const { getSearchIspAdKwdList } = bindActionCreators(admActionCreators, dispatch);

    const reasonForIsp = recode.reasonForIsp = `검수 대상 키워드: ${recode.itemName}`
    const [ispAdDetailInfo, setIspAdDetailInfo] = useState(ispAdKwdListDefaultValue)

    // select-box
    const [cnrFailValue, setCnrFailValue] = useState("");
    const [cnrFailComment, setCnrFailComment] = useState("");
    const selectedDefault = cnrFailValue === "" ? null : cnrFailValue;

    //모달
    const [isOpen, setIsOpen] = useState(false);


    // select-box 값
    const onSelectedEvent = (value: string) => {
        console.log(value)
        setCnrFailValue(value)
    }

    // 승인&반려 처리
    const updateToCnrIngStatusEvent = (cnrIngStatus: string) => {

        if(cnrIngStatus === "REJECT" && cnrFailValue === "") {
            errorAlert("반려사유를 선택해주세요.")
            return false;
        }

        requestUpdateCnrIngStatus({
            'dadDetId':recode.dadDetId,
            'cnrReqId': recode.cnrReqId,
            'cnrIngStatus': cnrIngStatus,
            'cnrFailCause': cnrFailValue,
            'cnrFailComt': cnrFailComment
        })
        .then((res) => {
            getSearchIspAdKwdList(res.data)
            cancleModalEvent()
            if(cnrIngStatus === "REJECT") successAlert("반려 완료! ✍")
            if(cnrIngStatus === "APPROVAL") successAlert("승인 완료! ✍")
        })
        .catch((err) => {errorAlert("처리 실패")})

    }


    //모달 닫기
    const cancleModalEvent = () => {
        setCnrFailValue("")
        setCnrFailComment("");
        setIsOpen(false);
        setCnrProcessModalOpen(false);
    };

    useEffect(() => {
        if (cnrProcessModalOpen) {
            console.log(213)
            setIsOpen(true)

            requestIspAdDetail(recode.dadDetId)
                .then((res) => { setIspAdDetailInfo(res.data); })
                .catch((err) => { errorAlert("정보를 불러오지 못했습니다."); console.log(err); })
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
                        <Button key="back" type="primary" className="gray" size="large" onClick={() => updateToCnrIngStatusEvent("REJECT")}> {"반려"} </Button>,
                        <Button key="submit" type="primary" className="pink" size="large" onClick={() => updateToCnrIngStatusEvent("APPROVAL")}> {"승인"} </Button>,

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
                                            <span className="fz-16 fw-med fc-7">{ispAdDetailInfo.itemName}<i className="txt-essential"></i></span>
                                        </div>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>
                                        <div className="dt-inner">
                                            <span className="fz-16 fw-med fc-7">키워드 명<i className="txt-essential"></i></span>
                                        </div>
                                    </dt>
                                    <dd>
                                        <div className="form-group">
                                            <span className="fz-16 fw-med fc-7">{ispAdDetailInfo.kwdName}<i className="txt-essential"></i></span>
                                        </div>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>
                                        <div className="dt-inner">
                                            <span className="fz-16 fw-med fc-7">검수 사유<i className="txt-essential"></i></span>
                                        </div>
                                    </dt>
                                    <dd>
                                        <div className="form-group">
                                            <span className="fz-16 fw-med fc-7">{reasonForIsp}<i className="txt-essential"></i></span>
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </section>

                    {/* 반려 사유 입력 from */}
                    <section className="wrap-section wrap-tbl">
                        <div className="box-body">
                            <div className="tbl">
                                <dl>
                                    <dt>
                                        <div className="dt-inner">
                                            <span className="fz-16 fw-med fc-7">검수 실패 이유<i className="txt-essential"></i></span>
                                        </div>
                                    </dt>
                                    <dd>
                                        <div className="form-group">
                                            <Select
                                                style={{ width: "250px" }}
                                                placeholder="반려사유를 선택해주세요"
                                                onChange={onSelectedEvent}
                                                value={selectedDefault}
                                                options={[{ value: CnrFailCauseType.AN_INAPPROPRIATE_KEYWORD, label: CnrFailCauseType.AN_INAPPROPRIATE_KEYWORD },
                                                { value: CnrFailCauseType.TEST, label: CnrFailCauseType.TEST },
                                                ]}
                                            >
                                            </Select>
                                        </div>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>
                                        <div className="dt-inner">
                                            <span className="fz-16 fw-med fc-7">검수 실패 코멘트<i className="txt-essential"></i></span>
                                        </div>
                                    </dt>
                                    <dd>
                                        <div className="form-group">
                                            <Input type="text"
                                                style={{ width: 380 }}
                                                name="cnrFailCause"
                                                placeholder="(선택) 코멘트를 작성해주세요."
                                                // onKeyUp={(e) => checkInput(e.currentTarget.value)}
                                                value={cnrFailComment}
                                                onChange={(e) => setCnrFailComment(e.currentTarget.value)}
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

export default CnrProcessModal;