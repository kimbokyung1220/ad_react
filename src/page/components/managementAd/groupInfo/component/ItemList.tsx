import { useDispatch, useSelector } from "react-redux";
import { Button, Popconfirm, Space, Table } from 'antd';
import Column from 'antd/es/table/Column';
import { actionCreators, State } from '../../../../../state';
import { CSVLink } from 'react-csv';
import { mngItem } from "../../../../../type/item";
import { useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { bindActionCreators } from "redux";
import { 
    requestMngItemList, requestUpdateAdUseConfig, requestUpdateAdUseConfigs, requestUpdateOffAdActYns } from "../../../../../model/axios";
import { successAlert, warningAlert } from "../../../../alerts/alert";
interface Props {
    itemNo: string,
    itemName: string
}

const ItemList = ({ itemNo, itemName }: Props) => {
    const navigate = useNavigate();
    const { state } = useLocation();

    // 상품 리스트 
    const ItemTable = useSelector((state: State) => state.mngItemList);

    const dispatch = useDispatch();
    const { getReMngItemList } = bindActionCreators(actionCreators, dispatch);
    const { selectedAdId } = bindActionCreators(actionCreators, dispatch);

    const [selectedRowKeys, setSelectedRowKeys] = useState(ItemTable);

    // 광고그룹 사용설정여부 변경 이벤트
    const updateAdUseConfigEvent = (recode: any) => {
        console.log("변경전" + recode.adUseConfigYn);
        const param = recode.adUseConfigYn === 1 ? 0 : 1;
        console.log("변경후" + param)

        // 광고 사용여부 변경 (1개)
        requestUpdateAdUseConfig(
            { 'adId': recode.adId, 'adUseConfigYn': param }
        )
            .then((res) => {

                console.log("res")
                console.log(res)
                const agroupId = res
                // reload
                requestMngItemList(
                    agroupId,
                    { 'itemNo': itemNo, 'itemName': itemName, }
                )
                    .then((res) => getReMngItemList(res.data))
                    .catch((err) => console.log(err))

            })
            .catch((err) => console.log(err))
    }

    // 광고그룹 사용설정여부 변경 이벤트(체크박스)
    const updateAdUseConfigListEvent = (param: number) => {
        if (selectedRowKeys.length === 0) {
            warningAlert("선택한 그룹이 없습니다.")
            return null;
        }

        requestUpdateAdUseConfigs({
            'code': param,
            'adUseConfigYnList': selectedRowKeys
        })
            .then((res) => {
                successAlert("변경되었습니다.")
                // reload
                requestMngItemList(
                    state,
                    { 'itemNo': itemNo, 'itemName': itemName, }
                )
                    .then((res) => getReMngItemList(res.data))
                    .catch((err) => console.log(err))
            })
            .catch((err) => console.log(err))
    }

    // 광고 삭제 => 활성여부 off
    const deleteAdEvent = () => {
        if (selectedRowKeys.length === 0) {
            alert("광고를 선택해 주세요")
        }

        requestUpdateOffAdActYns({ 
            'deleteAdList': selectedRowKeys 
        })
            .then((res) => {
                successAlert("변경되었습니다.")
                // reload
                requestMngItemList(
                    state,
                    { 'itemNo': itemNo, 'itemName': itemName, }
                )
                    .then((res) => getReMngItemList(res.data))
                    .catch((err) => console.log(err))
            })
            .catch()
    }

    const movePageEvent = (adId: number) => {
        selectedAdId(adId);
        navigate('/adv/mng/kwdInfo',{state: adId})
    }


    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: mngItem[]) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            setSelectedRowKeys(selectedRows)
        },
    };
    // 광고 상품 다운로드
    const headers = [
        { label: "번호", key: "index" },
        { label: "상품번호", key: "itemNo" },
        { label: "상품명", key: "itemName" },
        { label: "광고 상품 ON/OFF", key: "adUseConfigYn" }
        ];
    return (
        <>
            <section className="wrap-section wrap-datagrid">
                <div className="box-header">
                    <div className="box-left">
                        <h2 className="fz-24 fc-gray-700">상품 리스트</h2>
                    </div>
                    <div className="box-right">
                        <Button type="primary" className="pink" size="large" onClick={() => updateAdUseConfigListEvent(1)}>
                            <span>ON</span>
                        </Button>
                        <Button type="primary" className="gray" size="large" onClick={() => updateAdUseConfigListEvent(0)}>
                            <span>OFF</span>
                        </Button>
                        <Button type="primary" className="gray" size="large" onClick={deleteAdEvent}>
                            <span>광고 상품 삭제</span>
                        </Button>

                        <CSVLink filename={"ADItemList.csv"} data={ItemTable} headers={headers} className="btn btn-primary"
                            onClick={() => alert("다운완료")}
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
                        dataSource={ItemTable}
                        rowKey={(render) => render.adId}
                        pagination={{ showSizeChanger: true, showTotal: ((total) => <p>Total {total} items</p>) }}
                        bordered={true}
                    >
                        <Column title="번호" dataIndex="index" key="index" align="center" render={(_: any, recode: any, index: number) => (<a>{index + 1}</a>)} />
                        <Column title="상품번호" dataIndex="itemNo" key="itemNo" align="center"
                            render={(_: any, record: mngItem) => (
                                <Space size="middle" onClick={() => movePageEvent(record.adId)}>
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
                        <Column title="광고 상품 ON/OFF" dataIndex="adUseConfigYn" key="adUseConfigYn" align="center"
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