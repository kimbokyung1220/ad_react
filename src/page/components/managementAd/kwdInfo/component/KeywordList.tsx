import { Button, Popconfirm, Space, Table } from "antd";
import Column from "antd/es/table/Column";
import React, { useState } from 'react';
import { CSVLink } from "react-csv";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { bindActionCreators } from "redux";
import { requestKeywordList, requestUpdateDadActs, requestUpdateKwdUseConfig, requestUpdateKwdUseConfigs } from "../../../../../model/axios";
import { actionCreators, State } from "../../../../../state";
import { mngKeywordList } from "../../../../../type/keyword";
import { successAlert } from "../../../../alerts/alert";
interface Props {
    keywordName: string
}

const KeywordList = ({ keywordName }: Props) => {
    // 키워드 리스트 
    const { state } = useLocation();

    const keywordList = useSelector((state: State) => state.mngKeyworldList);
    const dispatch = useDispatch();
    const { getReKeywordList } = bindActionCreators(actionCreators, dispatch);

    const [selectedRowKeys, setSelectedRowKeys] = useState(keywordList);

    // 직접광고 활성 여부
    const updateDadConfigEvent = (recode: any) => {
        const param = recode.dadUseConfigYn === 1 ? 0 : 1;
        console.log("recode.dadUseConfigYn")
        console.log(recode.dadUseConfigYn)
        console.log("param")
        console.log(param)
        console.log(recode);

        requestUpdateKwdUseConfig({
            'kwdId': recode.kwdId,
            'sellPossKwdYn': param
        })
            .then((res) => {
                successAlert("변경 하였습니다.")
                requestKeywordList(
                    state,
                    { 'kwdName': keywordName })
                    .then((res) => {
                        console.log("keywordName")
                        getReKeywordList(res.data)
                    })
                    .catch((err) => console.log(err))
            })
            .catch()

    }

    // 활성화(체크박스)
    const updateDadUseConfigListEvent = (param: number) => {
        requestUpdateKwdUseConfigs({
            'code': param,
            'kwdList': selectedRowKeys
        })
            .then((res) => {
                successAlert("변경 되었습니다")
                requestKeywordList(
                    state,
                    { 'kwdName': keywordName })
                    .then((res) => {
                        console.log("keywordName")
                        getReKeywordList(res.data)
                    })
                    .catch((err) => console.log(err))
            })
    }


    // 키워드 삭제
    const deleteDadEvent = () => {
     
        requestUpdateDadActs({
            'deleteKwdList': selectedRowKeys
        })
            .then((res) => {
                successAlert("변경 되었습니다")
                requestKeywordList(
                    state,
                    { 'kwdName': keywordName })
                    .then((res) => {
                        console.log("keywordName")
                        getReKeywordList(res.data)
                    })
                    .catch((err) => console.log(err))
            })
            .catch()

    }


    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: mngKeywordList[]) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            setSelectedRowKeys(selectedRows)
        },
    };

    // 키워드 다운로드
    const headers = [
        { label: "번호", key: "index" },
        { label: "키워드명", key: "keywordName" },
        { label: "ON/OFF", key: "dadUseConfigYn" },
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
                            onClick={() => alert("다운완료")}
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
                    >
                        <Column title="번호" dataIndex="index" key="index" align="center" render={(_: any, recode: any, index: number) => (<a>{index + 1}</a>)} />
                        <Column title="키워드 명" dataIndex="kwdName" key="kwdName" align="center"
                            render={(_: any, record: mngKeywordList) => (
                                <Space size="middle">
                                    <a>{record.kwdName}</a>
                                </Space>
                            )}
                        />
                        <Column title="ON/OFF" dataIndex="dadUseConfigYn" key="dadUseConfigYn" align="center"
                            render={(_: any, record: mngKeywordList, index) => (
                                <Popconfirm title="광고 사용 설정 여부를 변경하시겠습니까?"
                                    onConfirm={() => updateDadConfigEvent(record)}
                                >
                                    <a>{record.dadUseConfigYn === 1 ? "ON" : "OFF"}</a>
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