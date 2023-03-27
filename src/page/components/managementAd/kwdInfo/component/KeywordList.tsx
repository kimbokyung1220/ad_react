import { Button, Popconfirm, Space, Table, TablePaginationConfig } from "antd";
import Column from "antd/es/table/Column";
import { rmSync } from "fs";
import React, { useEffect, useState } from 'react';
import { CSVLink } from "react-csv";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { bindActionCreators } from "redux";
import { requestKeywordList, requestUpdateDadActs, requestUpdateKwdUseConfig, requestUpdateKwdUseConfigs } from "../../../../../model/axios";
import { actionCreators, State } from "../../../../../state";
import { mngKeywordList } from "../../../../../type/keyword";
import { errorAlert, successAlert, warningAlert } from "../../../../alerts/alert";
interface Props {
    keywordName: string
}
interface TableParams {
    pagination?: TablePaginationConfig;
}

const KeywordList = ({ keywordName }: Props) => {
    // 키워드 리스트 
    const { state } = useLocation();

    const keywordList = useSelector((state: State) => state.mngKeyworldList);
    const dispatch = useDispatch();
    const { getReKeywordList } = bindActionCreators(actionCreators, dispatch);

    const [selectedRowKeys, setSelectedRowKeys] = useState(keywordList);
    const [tableParams, setTableParams] = useState<TableParams>({
        pagination: {
            current: 1,
            pageSize: 10,
        },
    });

    // 테이블 index
    let index = 1;
    keywordList.forEach((res) => {
        res.index = index++;
        res.dadUseConfigYnStr = res.dadUseConfigYn === 1 ? "ON" : "OFF"
    });

    // 키워드 - 직접광고 활성 여부 (1개)
    const updateDadConfigEvent = (recode: any) => {
        const param = recode.dadUseConfigYn === 1 ? 0 : 1;

        requestUpdateKwdUseConfig({
            'kwdId': recode.kwdId,
            'sellPossKwdYn': param
        })
            .then((res) => {
                successAlert("변경 완료! 🙌")
                requestKeywordList(
                    state,
                    { 'kwdName': keywordName })
                    .then((res) => {
                        console.log("keywordName")
                        getReKeywordList(res.data)
                    })
                    .catch((err) => { console.log(err); errorAlert("변경하지 못했습니다.") })
            })
            .catch()

    }

    // 키워드 - 직접광고 활성 여부 (체크박스)
    const updateDadUseConfigListEvent = (param: number) => {
        if (selectedRowKeys.length === 0) {
            warningAlert("선택한 키워드가 없습니다.")
            return false;
        }

        requestUpdateKwdUseConfigs({
            'code': param,
            'kwdList': selectedRowKeys
        })
            .then((res) => {
                successAlert("변경 완료! 🙌")
                requestKeywordList(
                    state,
                    { 'kwdName': keywordName })
                    .then((res) => {
                        console.log("keywordName")
                        getReKeywordList(res.data)
                    })
                    .catch((err) => { console.log(err); errorAlert("변경하지 못했습니다.") })
            })
    }


    // 키워드 삭제
    const deleteDadEvent = () => {

        if (selectedRowKeys.length === 0) {
            warningAlert("선택한 키워드가 없습니다.")
            return false;
        }

        requestUpdateDadActs({
            'deleteKwdList': selectedRowKeys
        })
            .then((res) => {
                successAlert("삭제 완료! 🙌")
                requestKeywordList(
                    state,
                    { 'kwdName': keywordName })
                    .then((res) => {
                        getReKeywordList(res.data)
                    })
                    .catch((err) => { console.log(err); errorAlert("삭제하지 못했습니다.") })
            })
            .catch()

    }


    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: mngKeywordList[]) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            setSelectedRowKeys(selectedRows)
        },
    };


    const handleTableChange = (pagination: TablePaginationConfig) => {
        console.log("selectedRowKeys*****")
        console.log(selectedRowKeys)
        setTableParams({ pagination });
        setSelectedRowKeys([]);


        // `dataSource` is useless since `pageSize` changed
        if (pagination.pageSize !== tableParams.pagination?.pageSize) {

            console.log(123)
        }
    };

    useEffect(() => {
        setSelectedRowKeys([]);
    },[])

    // 키워드 다운로드
    const headers = [
        { label: "번호", key: "index" },
        { label: "키워드명", key: "kwdName" },
        { label: "ON/OFF", key: "dadUseConfigYnStr" },
    ];

    return (
        <>
            <section className="wrap-section wrap-datagrid">
                <div className="box-header">
                    <div className="box-left">
                        <h2 className="fz-24 fc-gray-700">키워드 리스트</h2>
                    </div>
                    <div className="box-right">
                        <Button type="primary" className="pink" size="large" onClick={() => updateDadUseConfigListEvent(1)}>
                            <span>ON</span>
                        </Button>
                        <Button type="primary" className="gray" size="large" onClick={() => updateDadUseConfigListEvent(0)}>
                            <span>OFF</span>
                        </Button>
                        <Button type="primary" className="gray" size="large" onClick={deleteDadEvent}>
                            <span>키워드 삭제</span>
                        </Button>

                        <CSVLink filename={"KeywordList.csv"} data={keywordList} headers={headers} className="btn btn-primary"
                            onClick={() => { successAlert("다운로드 완료 👀👍") }}
                        >
                            <Button className="pink" size="large" style={{ marginLeft: '25px' }}>
                                <span> 키워드 다운로드 </span>
                            </Button>
                        </CSVLink>

                    </div>
                </div>
                <div className="box-body">


                    <Table
                        rowSelection={rowSelection}
                        dataSource={keywordList}
                        rowKey={(render) => render.dadDetId}
                        pagination={{ showSizeChanger: true, showTotal: ((total) => <p>Total {total} items</p>) }}
                        bordered={true}
                        onChange={handleTableChange}
                    >
                        <Column title="번호" dataIndex="index" key="index" align="center" />
                        <Column title="키워드 명" dataIndex="kwdName" key="kwdName" align="center" />
                        <Column title="ON/OFF" dataIndex="dadUseConfigYnStr" key="dadUseConfigYnStr" align="center"
                            render={(_: any, record: mngKeywordList, index) => (
                                <Popconfirm title="키워드 사용 설정 여부를 변경하시겠습니까?"
                                    onConfirm={() => updateDadConfigEvent(record)}
                                >
                                    <a>{record.dadUseConfigYnStr}</a>
                                </Popconfirm>
                            )}
                        />
                    </Table>
                </div>
            </section>
        </>
    );
}

export default KeywordList;