import React, { Dispatch, useState, useEffect } from 'react';
import { Button, Popconfirm, Space, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators, State } from '../../../../../state';
import Column from "antd/es/table/Column";
import { adGroupItem } from "../../../../../type/adGroup";
import { requestAgroupItemList, requestUpdateAgUseConfig, requestUpdateAgUseConfigs, requestUpdateOffActYns } from "../../../../../model/axios";
import { bindActionCreators } from 'redux';
import { CSVLink } from "react-csv";
import { useNavigate } from 'react-router-dom';
import { errorAlert, successAlert, warningAlert } from '../../../../alerts/alert';

interface Props {
    adGroupName: string
    setAdGroupModalOpen: Dispatch<boolean>
}

const AdGroupList = ({ adGroupName, setAdGroupModalOpen }: Props) => {

    const navigate = useNavigate();

    // reload
    const dispatch = useDispatch();
    const { getReAdgroupItemList } = bindActionCreators(actionCreators, dispatch);
    const { selectedAdGroupId } = bindActionCreators(actionCreators, dispatch);

    // 광고그룹 리스트
    const adGroupItemList = useSelector((state: State) => state.adGroupItemList);
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [selectedAdGroups, setSelectedAdGroups] = useState(adGroupItemList);

    // 가공이 필요한 테이블 데이터
    let index = 1;
    adGroupItemList.forEach((res) => {
        res.index = index++;
    });


    // 광고그룹 사용설정여부 변경 (1개)
    const updateAgUseConfigEvent = (recode: any) => {

        const param = recode.agroupUseConfigYn === 1 ? 0 : 1

        // aixos
        requestUpdateAgUseConfig({
            'agroupId': recode.agroupId,
            'agroupUseConfigYn': param
        })
            .then((res) => {

                successAlert(res.data)
                // reload
                requestAgroupItemList({ 'agroupName': adGroupName })
                    .then((res) => getReAdgroupItemList(res))
                    .catch((error) => errorAlert(error.message))
            })
            .catch((err) => errorAlert("광고그룹 사용여부가 변경되지 않았습니다."))
    }

    // 광고그룹 사용설정여부 변경(체크박스)
    const updateAgUseConfigListEvent = (param: number) => {

        if (selectedAdGroups.length === 0) {
            warningAlert("선택한 그룹이 없습니다.")
            return false;
        }

        // aixos
        requestUpdateAgUseConfigs({
            'code': param,
            'agUseConfigList': selectedAdGroups
        })
            .then((res) => {
                if (res.data !== null) {
                    successAlert(res.data)
                    // reload
                    return requestAgroupItemList({ 'agroupName': adGroupName })
                        .then((res) => getReAdgroupItemList(res))
                        .catch((err) => console.log(err))
                } else {
                    warningAlert(res.error.message)
                }
            }
            )
            .catch((err) => errorAlert("변경하지 못했습니다."))
    }

    // 그룹 삭제
    const deleteAdGroup = () => {
        if (selectedAdGroups.length === 0) {
            warningAlert("선택한 그룹이 없습니다.")
            return false;
        }
        // aixos
        requestUpdateOffActYns({ 'deleteGroupList': selectedAdGroups })
            .then((res) => {
                if (res.data === null) {
                    warningAlert(res.error.message);
                    return false;
                }
                successAlert(res.data);
                //reload
                requestAgroupItemList({ 'agroupName': adGroupName })
                    .then((res) => getReAdgroupItemList(res))
                    .catch((err) => console.log(err))
            })
            .catch((err) => console.log("500"))
    }

    // 그룹 상세페이지로 이동
    const movePageEvent = (agroupId: number) => {
        selectedAdGroupId(agroupId);
        navigate(`/adv/mng/ag-info/${agroupId}`, { state: agroupId })
    }

    useEffect(() => {
        setSelectedRowKeys([]);
        setSelectedAdGroups([]);
    }, [adGroupItemList])

    // 테이블 체크박스
    const rowSelection = {
        selectedAdGroups,
        selectedRowKeys,
        onChange: (newSelectedRowKeys: React.Key[], selectedRows: adGroupItem[]) => {
            // console.log('selectedRowKeys changed: ', newSelectedRowKeys);
            setSelectedRowKeys(newSelectedRowKeys);
            setSelectedAdGroups(selectedRows);
        }
    };

    // .csv 파일 다운로드 받을 시 제목열
    const headers = [
        { label: "번호", key: "index" },
        { label: "그룹 이름", key: "agroupName" },
        { label: "그룹ON/OFF", key: "agroupUseConfigYnSrt" },
        { label: "상품수(LIVE/전체)", key: "itemCnt" }
    ];

    return (
        <>
            <section className="wrap-section wrap-datagrid">
                <div className="box-header">
                    <div className="box-left">
                        <h2 className="fz-24 fc-gray-700">그룹 리스트</h2>
                    </div>
                    <div className="box-right">
                        <Button type="primary" className="pink" size="large" onClick={() => updateAgUseConfigListEvent(1)}>
                            <span>ON</span>
                        </Button>
                        <Button type="primary" className="gray" size="large" onClick={() => updateAgUseConfigListEvent(0)}>
                            <span>OFF</span>
                        </Button>
                        <Button type="primary" className="pink" size="large" style={{ marginLeft: '25px' }} onClick={() => setAdGroupModalOpen(true)}>
                            <span>그룹 추가</span>
                        </Button>
                        <Button type="primary" className="gray" size="large" onClick={deleteAdGroup}>
                            <span>그룹 삭제</span>
                        </Button>

                        <CSVLink filename={"ADGroupList.csv"} data={adGroupItemList} headers={headers} className="btn btn-primary"
                            onClick={() => { successAlert("다운로드 완료 👀👍") }}
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
                        onChange={() => { setSelectedRowKeys([]); setSelectedAdGroups([]); }}
                    >
                        <Column title="번호" dataIndex="index" key="index" align="center"
                        // render={(_: any, recode: any, index: number) => (<a>{index + 1}</a>)} 
                        />
                        <Column title="그룹명" dataIndex="agroupName" key="agroupName" align="center"
                            render={(_: any, record: adGroupItem) => (

                                <Space size="middle" onClick={() => movePageEvent(record.agroupId)}>
                                    <a>{record.agroupName}</a>
                                </Space>
                            )}
                        />
                        <Column title="그룹 ON/OFF" dataIndex="agroupUseConfigYnSrt" key="agroupUseConfigYnSrt" align="center"
                            render={(_: any, record: adGroupItem) => (
                                <Popconfirm title="그룹 사용여부를 변경하시겠습니까?" onConfirm={() => updateAgUseConfigEvent(record)}>
                                    <a>{record.agroupUseConfigYnSrt}</a>
                                </Popconfirm>
                            )}
                        />
                        <Column title="상품 수(LIVE/전체)" dataIndex="itemCnt" key="itemCnt" align="center" />
                    </Table>

                </div>
            </section>
        </>
    );
}

export default AdGroupList;