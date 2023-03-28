import { useDispatch, useSelector } from "react-redux";
import { Button, Popconfirm, Space, Table } from 'antd';
import Column from 'antd/es/table/Column';
import { actionCreators, State } from '../../../../../state';
import { CSVLink } from 'react-csv';
import { mngItem } from "../../../../../type/item";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { bindActionCreators } from "redux";
import {
    requestMngItemList, requestUpdateAdUseConfig, requestUpdateAdUseConfigs, requestUpdateOffAdActYns
} from "../../../../../model/axios";
import { errorAlert, successAlert, warningAlert } from "../../../../alerts/alert";

interface Props {
    itemNo: string,
    itemName: string
}

const ItemList = ({ itemNo, itemName }: Props) => {
    const navigate = useNavigate();
    const { state } = useLocation();

    const dispatch = useDispatch();
    const { getReMngItemList } = bindActionCreators(actionCreators, dispatch);
    const { selectedAdId } = bindActionCreators(actionCreators, dispatch);

    // 상품 리스트 
    const ItemTable = useSelector((state: State) => state.mngItemList);
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
    const [selectedItems, setSelectedItems] = useState(ItemTable);

    // 테이블 index
    let index = 1;
    ItemTable.forEach((res) => {
        res.index = index++;
        res.adUseConfigYnStr = res.adUseConfigYn === 1 ? "ON" : "OFF"
    });

    // 광고그룹 사용설정여부 변경 이벤트
    const updateAdUseConfigEvent = (recode: any) => {

        const param = recode.adUseConfigYn === 1 ? 0 : 1;

        // axios 광고 사용여부 변경 (1개)
        requestUpdateAdUseConfig(
            { 'adId': recode.adId, 'adUseConfigYn': param }
        )
            .then((res) => {
                successAlert("변경 완료! 🙌")
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

        if (selectedItems.length === 0) {
            warningAlert("선택한 상품이 없습니다.")
            return false;
        }
        // axios
        requestUpdateAdUseConfigs({
            'code': param,
            'adUseConfigYnList': selectedItems
        })
            .then((res) => {
                successAlert("변경 완료! 🙌")
                // reload
                requestMngItemList(
                    state,
                    { 'itemNo': itemNo, 'itemName': itemName, }
                )
                    .then((res) => getReMngItemList(res.data))
                    .catch((err) => console.log(err))
            })
            .catch((err) => { console.log(err); errorAlert("변경하지 못했습니다.") })
    }

    // 광고 삭제 => 활성여부 off
    const deleteAdEvent = () => {

        if (selectedItems.length === 0) {
            warningAlert("선택한 상품이 없습니다.")
            return null;
        }
        // axios
        requestUpdateOffAdActYns({
            'deleteAdList': selectedItems
        })
            .then((res) => {
                successAlert("삭제 완료! 🙌")
                // reload
                requestMngItemList(
                    state,
                    { 'itemNo': itemNo, 'itemName': itemName, }
                )
                    .then((res) => getReMngItemList(res.data))
                    .catch((err) => { console.log(err); errorAlert("삭제하지 못했습니다.") })
            })
            .catch()
    }

    // 상품 상세페이지로 이동
    const movePageEvent = (adId: number) => {
        selectedAdId(adId);
        navigate(`/adv/mng/kwd-info/${adId}`, { state: adId })
    }

    useEffect(() => {
        setSelectedRowKeys([]);
        setSelectedItems([]);
    }, [ItemTable])

    // 테이블 체크박스 옵션
    const rowSelection = {
        selectedItems,
        selectedRowKeys,
        onChange: (newSelectedRowKeys: React.Key[], selectedRows: mngItem[]) => {
            // console.log('selectedRowKeys changed: ', newSelectedRowKeys);
            setSelectedRowKeys(newSelectedRowKeys);
            setSelectedItems(selectedRows);
        }
    };

    // .csv 파일 다운로드 받을 시 제목열
    const headers = [
        { label: "번호", key: "index" },
        { label: "상품번호", key: "itemNo" },
        { label: "상품명", key: "itemName" },
        { label: "광고 상품 ON/OFF", key: "adUseConfigYnStr" }
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
                            onClick={() => successAlert("다운로드 완료 👀👍")}
                        >
                            <Button className="pink" size="large" style={{ marginLeft: '25px' }}>
                                <span> 광고 상품 다운로드 </span>
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
                        // onChange={handleTableChange}
                        onChange={() => { setSelectedRowKeys([]); setSelectedItems([]); }}
                    >
                        <Column title="번호" dataIndex="index" key="index" align="center" />
                        <Column title="상품번호" dataIndex="itemNo" key="itemNo" align="center"
                            render={(_: any, record: mngItem) => (
                                <Space size="middle" onClick={() => movePageEvent(record.adId)}>
                                    <a>{record.itemNo}</a>
                                </Space>
                            )}
                        />
                        <Column title="상품명" dataIndex="itemName" key="itemName" align="center" />
                        <Column title="광고 상품 ON/OFF" dataIndex="adUseConfigYnStr" key="adUseConfigYnStr" align="center"
                            render={(_: any, record: mngItem) => (
                                <Popconfirm title="광고 사용 설정 여부를 변경하시겠습니까?" onConfirm={() => updateAdUseConfigEvent(record)}>
                                    {/* <a>{record.adUseConfigYn === 1 ? "ON" : "OFF"}</a> */}
                                    <a>{record.adUseConfigYnStr}</a>
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