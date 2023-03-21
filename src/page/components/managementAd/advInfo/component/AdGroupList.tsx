import React, { useEffect, useState } from 'react';
import { Button, message, Popconfirm, Space, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators, State } from '../../../../../state';
import { rowSelection } from '../table/menu';
import Column from "antd/es/table/Column";
import { adGroupItem } from "../../../../../type/adGroup";
import { showAgroupItemList, updateAgUseConfig } from "../../../../../model/axios";
import { getReAdgroupItem } from '../../../../../state/action-creators';
import { bindActionCreators } from 'redux';
// import { CSVLink } from "react-csv";

interface Props {
    adGroupName: string
}

const AdGroupList = ({adGroupName}: Props) => {
    // 광고그룹 리스트
    const dispatch = useDispatch();
    const { getReAdgroupItem } = bindActionCreators(actionCreators, dispatch);
    const adGroupItemList = useSelector((state: State) => state.adGroupItem);
    const [reload, setReload] = useState<boolean>(false);
    const [messageApi, contextHolder] = message.useMessage();
    const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
    console.log("adGroupItemList//////");
    console.log(adGroupItemList);

    const headers = [
        { label: "번호", key: "index" },
        { label: "그룹 이름", key: "agroupName" },
        { label: "그룹ON/OFF", key: "agroupUseConfigYnSrt" },
        { label: "상품수(LIVE/전체)", key: "itemCnt" }
    ]; 

    // 광고그룹 사용설정여부 변경(1개)
    const updateAgUseConfigEvent = (recode: any) => {
        console.log("ADFAD", recode);
        const param = recode.agroupUseConfigYn === 1 ? 0 : 1

        updateAgUseConfig({
            'agroupId': recode.agroupId,
            'agroupUseConfigYn': param
        })
            .then((res) => {
                messageApi.open({
                    type: 'success',
                    content: '변경 완료 했습니다',
                });
                const data = {
                    'agroupName': adGroupName,
                };
                showAgroupItemList(data)
                    .then((res) => getReAdgroupItem(res))
                    .catch((err) => console.log(err))
                
                // getReAdgroupItem(recode);
                // getReAdgroupItem(res.data);
            })
            .catch((err) => setReload(false))
    }
    // 광고그룹 사용설정여부 변경(체크박스)

    useEffect(() => {

    }, [reload])

    return (
        <>
            {contextHolder}
            <section className="wrap-section wrap-datagrid">
                <div className="box-header">
                    <div className="box-left">
                        <h2 className="fz-24 fc-gray-700">그룹 리스트</h2>
                    </div>
                    <div className="box-right">
                        <Button type="primary" className="pink" size="large">
                            <span>ON</span>
                        </Button>
                        <Button type="primary" className="gray" size="large">
                            <span>OFF</span>
                        </Button>
                        <Button type="primary" className="pink" size="large" style={{ marginLeft: '30px' }}>
                            <span>그룹 추가</span>
                        </Button>
                        <Button type="primary" className="gray" size="large">
                            <span>그룹 삭제</span>
                        </Button>

                        {/* <CSVLink filename={"ADGroupList.csv"} data={adGroupItemList} headers={headers} className="btn btn-primary"
                            onClick={() => { message.success("The file is downloading") }}
                        >
                            <Button className="pink" size="large" style={{ marginLeft: '30px' }}> 
                                <span> 그룹 다운로드 </span>
                            </Button>
                        </CSVLink> */}

                    </div>
                </div>
                <div className="box-body">


                    <Table
                        rowSelection={{
                            type: selectionType,
                            ...rowSelection,
                        }}
                        dataSource={adGroupItemList}
                        rowKey={(render) => render.agroupId}
                        pagination={{ showSizeChanger: true, showTotal: ((total) => <p>Total {total} items</p>) }}
                        // columns={columns}
                        bordered={true}
                    >
                        <Column title="상품번호" dataIndex="index" key="index" align="center" render={(_: any, recode: any, index: number) => (<a>{index + 1}</a>)} />
                        <Column title="그룹명" dataIndex="agroupName" key="agroupName" align="center"
                            render={(_: any, record: adGroupItem) => (
                                <Space size="middle">
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