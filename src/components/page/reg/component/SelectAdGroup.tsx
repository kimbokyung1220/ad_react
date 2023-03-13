import React, { useState, useRef, useEffect } from 'react';
import { Button, Select, Modal, Input } from "antd";
import { useSelector } from 'react-redux';
import { State } from '../../../../state';
import { createAgroup } from '../../../../model/axios';
import AdKeywordList from "./AdKeywordList";
const { Option } = Select;

const SelectAdGroup = () => {
    // 광고목록 
    const adGroups = useSelector((state: State) => state.adGroup)

    // 모달
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newAdGroupName, setNewAdGroupName] = useState("");
    // select-box

    const modalCancleEvent = () => {
        setIsModalOpen(false)
        setNewAdGroupName("")
    }

    const regAdGroupEvent = () => {
        createAgroup(
            {
                'agroupName': newAdGroupName
            }
        ).then(res => {
            if (res !== null) {
                console.log("광고그룹 생성")
                console.log(res)
                setIsModalOpen(false)
                setNewAdGroupName("")
            }
        }).catch(error => {
            console.log("login error");
            console.log(error);

        })

    }

    return (
        <>
            <section className="wrap-section wrap-tbl">
                <div className="box-header">
                    <div className="box-left">
                        <h2 className="fz-24 fc-gray-700">광고 그룹 선택</h2>
                    </div>
                    <div className="box-right">
                        <Button type="primary" className="gray" size="large" onClick={() => setIsModalOpen(true)}>
                            <span>신규 그룹 생성</span>
                        </Button>
                    </div>
                </div>
                <div className="box-body">
                    <div className="tbl">
                        <dl>
                            <dt>
                                <div className="dt-inner">
                                    <span className="fz-15 fc-gray-500">광고 그룹</span>
                                </div>
                            </dt>
                            <dd>
                                <div className="form-group">
                                    <Select
                                        style={{ width: "250px" }}
                                        placeholder="광고그룹을 선택해주세요"
                                        onChange={(value) => console.log(`selected ${value}`)}
                                        options={adGroups.map((option) => {
                                            return { value: option.agroupId, label: option.agroupName }
                                        })}
                                    >
                                    </Select>
                                </div>
                            </dd>
                        </dl>
                    </div>
                </div>
            </section>

            <div>
                <Modal title="신규 광고 그룹 생성"
                    open={isModalOpen} onOk={() => setIsModalOpen(false)} onCancel={modalCancleEvent} maskClosable={false}
                    width={800}
                    footer={[
                        <Button key="back" type="primary" className="gray" size="large" onClick={modalCancleEvent}> {"취소"} </Button>,
                        <Button key="submit" type="primary" className="pink" size="large" onClick={regAdGroupEvent}> {"등록"} </Button>,

                    ]}
                >

                    <section className="wrap-section wrap-tbl">
                        <div className="box-body">
                            <div className="tbl">
                                <dl>
                                    <dt>
                                        <div className="dt-inner">
                                            <span className="fz-16 fw-med fc-7">신규 광고그룹 명<i className="txt-essential"></i></span>
                                        </div>
                                    </dt>
                                    <dd>
                                        <div className="form-group">
                                            <Input type="text" name="groupName"
                                                value={newAdGroupName}
                                                onChange={(e) => setNewAdGroupName(e.currentTarget.value)}
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

export default SelectAdGroup;