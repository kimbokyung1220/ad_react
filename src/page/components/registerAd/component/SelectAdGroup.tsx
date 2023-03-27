
import { useState, useEffect } from 'react';
import { Button, Select, Modal, Input } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators, State } from '../../../../state';
import { requesSaveAgroup, requestAgroupAllList } from '../../../../model/axios';
import { bindActionCreators } from 'redux';
import { adGroup } from '../../../../type/adGroup';
import AdKeywordList from "./AdKeywordList";
import { errorAlert, successAlert, warningAlert } from '../../../alerts/alert';
import { validation } from "../../../../store/validation";

const SelectAdGroup = () => {
    // validation
    const { checkInputSpecial, checkSpace } = validation();
    // 광고목록 
    const [adGroupList, setAdGroupList] = useState<adGroup[]>([]);
    const options = adGroupList.map((option) => {
        return { value: option.agroupName, label: option.agroupName }
    })
    // 선택한 광고그룹 저장
    const dispatch = useDispatch();
    const { selectedAdGroup } = bindActionCreators(actionCreators, dispatch); // agroupName : string

    // 모달
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newAdGroupName, setNewAdGroupName] = useState("");

    // Btn 순서
    const [btnValue, setBtnValue] = useState("");
    const selected = btnValue === "" ? null : btnValue;


    // select-box
    const saveAdGroupEvent = () => {
        if(newAdGroupName === "" ){
            warningAlert("광고그룹명을 입력해 주세요.")
            return false;
        }

       if(checkInputSpecial(newAdGroupName)) {
            warningAlert("특수문자는 제외해주세요.")
            return false;
        }
        if(checkSpace(newAdGroupName)) {
            warningAlert("공백은 제외해주세요.")
            return false;
        }

        requesSaveAgroup({
            'agroupName': newAdGroupName
        })
            .then((res) => {
                if (res.data === null) {
                    errorAlert(res.error.message)
                    return false;
                }

                successAlert("광고그룹 생성 완료!")

                // 신규 그룹 input 값
                // const pushAgroup: adGroup = 
                setAdGroupList([...adGroupList, { agroupName: newAdGroupName, agroupId: newAdGroupName }]);
                setBtnValue(newAdGroupName)
                // 모달이 닫히면 input 초기화
                setNewAdGroupName("");
                setIsModalOpen(false);

                // 그룹 등록 시 그룹이름 focusing
                onChangeEvent(newAdGroupName)
            })
            .catch((err) => console.log(err))

    }

    const onChangeEvent = (value: string) => {
        setBtnValue(value);
        selectedAdGroup(value);
        console.log(value)
    }

    useEffect(() => {
        requestAgroupAllList()
            .then((res) => setAdGroupList(res.data))
            .catch((err) => console.log(err))
    }, [])

    useEffect(() => {

    }, [btnValue])

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
                                        onChange={onChangeEvent}
                                        value={selected}
                                        options={options}
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
                    open={isModalOpen} onOk={() => setIsModalOpen(false)} onCancel={() => { setIsModalOpen(false); setNewAdGroupName(""); }} maskClosable={false}
                    width={800}
                    footer={[
                        <Button key="back" type="primary" className="gray" size="large" onClick={() => { setIsModalOpen(false); setNewAdGroupName(""); }}> {"취소"} </Button>,
                        <Button key="submit" type="primary" className="pink" size="large" onClick={saveAdGroupEvent}> {"등록"} </Button>,

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
                                                onPressEnter={saveAdGroupEvent}
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