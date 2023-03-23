import React, { Dispatch, useState } from 'react';
import { Button, message, Popconfirm, Space, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators, State } from '../../../../../state';
import Column from "antd/es/table/Column";
import { adGroupItem } from "../../../../../type/adGroup";
import { requestAgroupItemList, requestUpdateAgUseConfig, requestUpdateAgUseConfigs, requestUpdateOffActYns } from "../../../../../model/axios";
import { bindActionCreators } from 'redux';
import { CSVLink } from "react-csv";
import { useNavigate } from 'react-router-dom';

interface Props {
    adGroupName: string
    setAdGroupModalOpen: Dispatch<boolean>
}

const AdGroupList = ({ adGroupName, setAdGroupModalOpen }: Props) => {
    const navigate = useNavigate();
    // 광고그룹 리스트
    const dispatch = useDispatch();
    const { getReAdgroupItemList } = bindActionCreators(actionCreators, dispatch);
    const { selectedAdGroupId } = bindActionCreators(actionCreators, dispatch);

    const adGroupItemList = useSelector((state: State) => state.adGroupItemList);
    const [messageApi, contextHolder] = message.useMessage();
    const [checkedAdGroup, setCheckedAdGroup] = useState(adGroupItemList);


    const headers = [
        { label: "번호", key: "index" },
        { label: "그룹 이름", key: "agroupName" },
        { label: "그룹ON/OFF", key: "agroupUseConfigYnSrt" },
        { label: "상품수(LIVE/전체)", key: "itemCnt" }
    ];

    // 광고그룹 사용설정여부 변경 
    const updateAgUseConfigEvent = (recode: any) => {
        console.log("ADFAD", recode);
        const param = recode.agroupUseConfigYn === 1 ? 0 : 1

        // 광고그룹 사용설정여부 변경(1개)
        requestUpdateAgUseConfig({
            'agroupId': recode.agroupId,
            'agroupUseConfigYn': param
        })
            .then((res) => {
                messageApi.open({
                    type: 'success',
                    content: '변경 완료 했습니다',
                });
                requestAgroupItemList({ 'agroupName': adGroupName })
                    .then((res) => getReAdgroupItemList(res))
                    .catch((err) => console.log(err))


            })
            .catch((err) => console.log(err))
    }

    // 광고그룹 사용설정여부 변경(체크박스)
    const updateOn_AgUseConfigListEvent = (param: number) => {
        if(checkedAdGroup.length === 0) {
            console.log("asdfasd")
            alert("선택한 그룹이 없습니다.")
            return null;
        }
        const newUpdateUseConfig = (param === 1 ? 1 : 0)
        console.log(checkedAdGroup)
        requestUpdateAgUseConfigs(
            {'code': newUpdateUseConfig, 
            'agUseConfigList': checkedAdGroup
        })
        .then((res) => 
            requestAgroupItemList({ 'agroupName': adGroupName })
                    .then((res) => getReAdgroupItemList(res))
                    .catch((err) => console.log(err))
        )
        .catch((err) => console.log(err))
    }
    // 그룹 삭제
    const deleteAdGroup = () => {
        if(checkedAdGroup.length === 0) {
            console.log("asdfasd")
            alert("선택한 그룹이 없습니다.")
            return null;
        }
        requestUpdateOffActYns({'deleteGroupList': checkedAdGroup})
        .then((res) => 
            requestAgroupItemList({ 'agroupName': adGroupName })
                    .then((res) => getReAdgroupItemList(res))
                    .catch((err) => console.log(err))
        )
        .catch((err) => console.log("500"))
    }

    // 모달 오픈
    const openModalEvent = () => {
        setAdGroupModalOpen(true)
    }

    // 그룹 상세페이지로 이동
    const movePageEvent = (agroupId: number) => {
        selectedAdGroupId(agroupId);
        navigate('/adv/mng/agInfo',{state: agroupId})
    }
   
    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: adGroupItem[]) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            setCheckedAdGroup(selectedRows)
        },
    };

    return (
        <>
            {contextHolder}
            <section className="wrap-section wrap-datagrid">
                <div className="box-header">
                    <div className="box-left">
                        <h2 className="fz-24 fc-gray-700">그룹 리스트</h2>
                    </div>
                    <div className="box-right">
                        <Button type="primary" className="pink" size="large" onClick={() => updateOn_AgUseConfigListEvent(1)}>
                            <span>ON</span>
                        </Button>
                        <Button type="primary" className="gray" size="large"onClick={() => updateOn_AgUseConfigListEvent(0)}>
                            <span>OFF</span>
                        </Button>
                        <Button type="primary" className="pink" size="large" style={{ marginLeft: '25px' }} onClick={openModalEvent}>
                            <span>그룹 추가</span>
                        </Button>
                        <Button type="primary" className="gray" size="large" onClick={deleteAdGroup}>
                            <span>그룹 삭제</span>
                        </Button>

                        <CSVLink filename={"ADGroupList.csv"} data={adGroupItemList} headers={headers} className="btn btn-primary"
                            onClick={() => { message.success("The file is downloading") }}
                        >
                            <Button className="pink" size="large" style={{ marginLeft: '25px' }}>
                                <span> 그룹 다운로드 </span>
                            </Button>
                        </CSVLink>

                    </div>
                </div>
                <div className="box-body">


                    <Table
                        rowSelection={rowSelection}
                        dataSource={adGroupItemList}
                        rowKey={(render) => render.agroupId}
                        pagination={{ showSizeChanger: true, showTotal: ((total) => <p>Total {total} items</p>) }}
                        bordered={true}
                    >
                        <Column title="번호" dataIndex="index" key="index" align="center" render={(_: any, recode: any, index: number) => (<a>{index + 1}</a>)} />
                        <Column title="그룹명" dataIndex="agroupName" key="agroupName" align="center"
                            render={(_: any, record: adGroupItem) => (
                                
                                <Space size="middle" onClick={() => movePageEvent(record.agroupId)}>
                                    <a>{record.agroupName}</a>
                                </Space>
                            )}
                        />
                        <Column title="그룹 ON/OFF" dataIndex="agroupUseConfigYnSrt" key="agroupUseConfigYnSrt" align="center"
                            render={(_: any, record: adGroupItem) => (
                                <Popconfirm title="그룹의 사용 설정 여부를 변경하시겠습니까?" onConfirm={() => updateAgUseConfigEvent(record)}>
                                    <a>{record.agroupUseConfigYnSrt}</a>
                                </Popconfirm>
                            )}
                        />
                        <Column title="상품 수(LIVE/전체)" dataIndex="itemCnt" key="itemCnt" align="center" />
                    </Table>
                    {/* } */}
                </div>
            </section>
        </>
    );
}

export default AdGroupList;