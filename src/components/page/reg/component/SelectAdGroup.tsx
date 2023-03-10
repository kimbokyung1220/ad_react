import React, { useState, useRef, useEffect } from 'react';
import { Button, Select, Modal, Input } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators, State } from '../../../../state';
import { createAgroup, getAgroupList } from '../../../../model/axios';
import { bindActionCreators } from 'redux';
import AdKeywordList from './AdKeywordList';
import { adGroupDefaultValue } from '../../../../model/type';
import { getValue } from '@testing-library/user-event/dist/utils';
const { Option } = Select;

const SelectAdGroup = () => {
    // 광고목록 
    const adGroups = useSelector((state: State) => state.adGroup)
    // 광고그룹 저장
    const dispatch = useDispatch();
    const { selectAdGroup } = bindActionCreators(actionCreators, dispatch);

    // 모달
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // 옵션값
    // const options = 
    // const [adgroupList, setAdgroupList] = useState([{label:"광고그룹을 선택해 주세요.", value:0}]);

    const [newAdGroupName, setNewAdGroupName] = useState("");
    const [selected, setSelected] = useState({label:"광고그룹을 선택해 주세요.", value:0});
    // console.log(options)

    // select-box

     const regAdGroupEent = () => {
        // const pushAgroup = {label:newAdGroupName, value:0}
        // setAdgroupList([...adgroupList, pushAgroup])
        // setSelected(pushAgroup)
        // setIsModalOpen(false)
        // setNewAdGroupName("")
    }
    
    const modalCancleEvent = () => {
        setIsModalOpen(false)
        setNewAdGroupName("")
    }

    const selectedEvent = (value: string) => {
        setSelected({label:value, value:0});
        selectAdGroup({agroupName: value})
        console.log(value)
    }

    useEffect(()=> {
        const { showAdGroup } = bindActionCreators(actionCreators, dispatch);
        // console.log("options")
        // console.log(options)
        //     setAdgroupList(options)
        //     console.log("eeeeee")
        //     console.log(adgroupList)
         // 광고그룹 API
         getAgroupList().then(res => {
            if (res !== null) {
                showAdGroup(res)
            }
        }).catch(error => {
            console.log("show AdGroup error")
            console.log(error)
        })
    },[])
    

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
                                        // onChange={(value) => selectAdGroup(value)}
                                        onChange={selectedEvent}
                                        // value={selected.label}
                                        // options={adgroupList}
                                        options={adGroups.map((option) => { return { value: option.agroupName, label: option.agroupName }})}
                                    >
                                    </Select>
                                </div>
                            </dd>
                        </dl>
                    </div>
                </div>
            </section>

            <AdKeywordList />
            
            {/* 광고그룹 생성 모달 */}
            <div>
                <Modal title="신규 광고 그룹 생성"
                    open={isModalOpen} onOk={() => setIsModalOpen(false)} onCancel={modalCancleEvent} maskClosable={false}
                    width={800}
                    footer={[
                        <Button key="back" type="primary" className="gray" size="large" onClick={modalCancleEvent}> {"취소"} </Button>,
                        <Button key="submit" type="primary" className="pink" size="large" onClick={regAdGroupEent}> {"등록"} </Button>,

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