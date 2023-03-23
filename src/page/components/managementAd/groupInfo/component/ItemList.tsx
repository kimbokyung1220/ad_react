import { useDispatch, useSelector } from "react-redux";
import { Button, Popconfirm, Space, Table } from 'antd';
import Column from 'antd/es/table/Column';
import { actionCreators, State } from '../../../../../state';
import { CSVLink } from 'react-csv';
import { mngItem } from "../../../../../type/item";
import { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { bindActionCreators } from "redux";
import { requestAgroupItemList, requestMngItemList, requestUpdateAdUseConfig, requestUpdateAdUseConfigs } from "../../../../../model/axios";
interface Props {
    itemNo: string,
    itemName: string
}

const ItemList = ({itemNo, itemName}: Props) => {
    const navigate = useNavigate();
    const { state } = useLocation();
    console.log(state + ' state')
    
    // 상품 리스트 
    const ItemTable = useSelector((state: State) => state.mngItemList);

    const dispatch = useDispatch();
    const { getReMngItemList } = bindActionCreators(actionCreators, dispatch);

    const [selectedRowKeys, setSelectedRowKeys] = useState(ItemTable);

    // 광고그룹 사용설정여부 변경 이벤트
    const updateAdUseConfigEvent = (recode: any) => {
        const param = recode.adUseConfigYn === 1 ? 0 : 1;
        console.log(recode)
        console.log("param")
        console.log(recode.adUseConfigYn)

        // 광고 사용여부 변경 (1개)
        requestUpdateAdUseConfig(
            {'adId': recode.adId, 'adUseConfigYn': param}
        )
        .then((res) => {
           console.log(res)
            // reload
            // requestMngItemList(
            //     agroupId,
            //     { 'itemNo': itemNo, 'itemName': itemName, }
            // )
            //     .then((res) => getReMngItemList(res.data))
            //     .catch((err) => console.log(err))

        })
        .catch((err) => console.log(err))
    }

    // 광고그룹 사용설정여부 변경 이벤트
    const updateOn_AdUseConfigListEvent = (param: number) => {
        if(selectedRowKeys.length === 0) {
            console.log("asdfasd")
            alert("선택한 그룹이 없습니다.")
            return null;
        }
        const newUpdateIseConfig = (param === 1 ? 1 : 0)
        requestUpdateAdUseConfigs({
            'code': param,
            'adUseConfigYnList': selectedRowKeys
        })
        .then((res) => 
            requestAgroupItemList({ 'itemNo': itemNo, 'itemName': itemName })
            .then((res) => getReMngItemList(res))
            .catch((err) => console.log(err))
        )
        .catch((err) => console.log(err))
    }







    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: mngItem[]) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            setSelectedRowKeys(selectedRows)
        },
    };
    return (
        <>
            <section className="wrap-section wrap-datagrid">
                <div className="box-header">
                    <div className="box-left">
                        <h2 className="fz-24 fc-gray-700">상품 리스트</h2>
                    </div>
                    <div className="box-right">
                        <Button type="primary" className="pink" size="large" onClick={() => updateOn_AdUseConfigListEvent(1)}>
                            <span>ON</span>
                        </Button>
                        <Button type="primary" className="gray" size="large" onClick={() => updateOn_AdUseConfigListEvent(0)}>
                            <span>OFF</span>
                        </Button>
                        <Button type="primary" className="gray" size="large">
                            <span>광고 상품 삭제</span>
                        </Button>

                        {/* <CSVLink filename={"ADGroupList.csv"} data={} headers={} className="btn btn-primary"
                            onClick={}
                        >
                            <Button className="pink" size="large" style={{ marginLeft: '25px' }}>
                                <span> 그룹 다운로드 </span>
                            </Button>
                        </CSVLink> */}

                    </div>
                </div>
                <div className="box-body">


                    <Table
                        rowSelection={rowSelection}
                        dataSource={ItemTable}
                        rowKey={(render) => render.adId}
                        pagination={{ showSizeChanger: true, showTotal: ((total) => <p>Total {total} items</p>) }}
                        bordered={true}
                    >
                        <Column title="번호" dataIndex="index" key="index" align="center" render={(_: any, recode: any, index: number) => (<a>{index + 1}</a>)} />
                        <Column title="상품번호" dataIndex="itemNo" key="itemNo" align="center"
                            render={(_: any, record: mngItem) => (
                                <Space size="middle" >
                                    <a>{record.itemNo}</a>
                                </Space>
                            )}
                        />
                        <Column title="상품명" dataIndex="itemName" key="itemName" align="center"
                            render={(_: any, record: mngItem) => (
                                <Space size="middle" >
                                    <a>{record.itemName}</a>
                                </Space>
                            )}
                        />
                        <Column title="광고 상품 ON/OFF" dataIndex="itemName" key="itemName" align="center"
                            render={(_: any, record: mngItem) => (
                                <Popconfirm title="광고 사용 설정 여부를 변경하시겠습니까?" onConfirm={() => updateAdUseConfigEvent(record)}>
                                    <a>{record.adUseConfigYn === 1 ? "ON" : "OFF"}</a>
                                </Popconfirm>
                            )}
                        />
                    </Table>
                </div>
            </section>
        </>

    );
}

export default ItemList;