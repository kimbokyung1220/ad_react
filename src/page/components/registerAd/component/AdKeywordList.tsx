import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../../state";
import { Button, Table, TableColumnsType, Modal, Input } from 'antd';
import RegAdBtn from './RegAdBtn';
import { keywordTable, KeywordTableDefaultValue } from '../../../../type/keyword';



const AdKeywordList = () => {
    // 등록 키워드 정보
    const keywordTableInfo = useSelector((state: State) => state.keywordTableInfo)
    const dispatch = useDispatch();
    const { showKeywordTableInfo } = bindActionCreators(actionCreators, dispatch);

    // 모달
    const [kwdIsModalOpen, setKwdIsModalOpen] = useState(false);
    const [bioCostIsModalOpen, setBioCostIsModalOpen] = useState(false);
    const [newKeywordTable, setNewKeywordTable] = useState<keywordTable>(KeywordTableDefaultValue);

    // 키워드 등록 이벤트
    const saveKeywordEvent = (newKeywordTable: keywordTable) => {
        if (Number(newKeywordTable.bidCost) < 90 || Number(newKeywordTable.bidCost) >= 99000) {
            alert("입찰가는 최소 90원 최대 99000원까지 입력 가능합니다.");
            return false;
        }
        const sameKwdExist = keywordTableInfo.filter(keyword => keyword.kwdName === newKeywordTable.kwdName)
        if (sameKwdExist.length !== 0) {
            alert("현재 동일한 키워드 명이 존재합니다.");
            return false;
        }

        showKeywordTableInfo([...keywordTableInfo, newKeywordTable]);
        setKwdIsModalOpen(false);
        setNewKeywordTable(KeywordTableDefaultValue);
    }

    // 입찰가 일괄 설정 이벤트
    const regBioCostEvent = (newBidCost: keywordTable) => {
        
        if (Number(newBidCost.bidCost) < 90 || Number(newBidCost.bidCost) >= 99000) {
            alert("입찰가는 최소 90원 최대 99000원까지 입력 가능합니다.");
            return false;
        }
        let copyList = [...keywordTableInfo];
        copyList.map((copy) => copy.bidCost = newBidCost.bidCost)
        showKeywordTableInfo(copyList);
        setBioCostIsModalOpen(false);
        setNewKeywordTable(KeywordTableDefaultValue);
    }

    // 키워드 삭제
    const keywordDeleteEvent = (record: keywordTable) => {
        console.log(record)
        const deleteList = keywordTableInfo.filter(keyword => keyword.key !== record.key);
        return showKeywordTableInfo(deleteList);
    }

    // 모달 닫기
    const modalCancleEvent = () => {
        setKwdIsModalOpen(false);
        setBioCostIsModalOpen(false);
        setNewKeywordTable(KeywordTableDefaultValue);
    }

    const columns: TableColumnsType<keywordTable> = [
        { title: '키워드명', dataIndex: 'kwdName', key: 'kwdName', align: 'center' },
        { title: '입찰가', dataIndex: 'bidCost', key: 'bidCost', align: 'center' },
        {
            title: '키워드 삭제', dataIndex: 'kwdDeleteBtn', key: 'btn', align: 'center',
            render: (text, record) => (
                <Button size="small" className="pink" onClick={() => keywordDeleteEvent(record)} ><span>삭제</span></Button>
            )

        },
    ];

    return (
        <>
            <section className="wrap-section wrap-datagrid">
                <div className="box-header">
                    <div className="box-left">
                        <h2 className="fz-24 fc-gray-700">광고 키워드 리스트</h2>
                    </div>
                    <div className="box-right">
                        <Button className="pink" onClick={() => setKwdIsModalOpen(true)}>
                            <span>키워드 추가</span>
                        </Button>
                        <Button className="gray" onClick={() => setBioCostIsModalOpen(true)}>
                            <span>입찰가 일괄 설정</span>
                        </Button>
                    </div>
                </div>
                <div className="box-body">
                    <Table
                        dataSource={keywordTableInfo}
                        columns={columns}
                        bordered={true}
                        pagination={{ showSizeChanger: true, showTotal: ((total) => <p>Total {total} items</p>) }}
                    >

                    </Table>
                </div>
            </section>
            <RegAdBtn />

            {/* 키워드 추가 모달 */}
            <div>
                <Modal title="키워드 추가"
                    open={kwdIsModalOpen} onOk={() => setKwdIsModalOpen(false)} onCancel={modalCancleEvent} maskClosable={false}
                    width={800}
                    footer={[
                        <Button key="back" type="primary" className="gray" size="large" onClick={modalCancleEvent}> {"취소"} </Button>,
                        <Button key="submit" type="primary" className="pink" size="large" onClick={() => saveKeywordEvent(newKeywordTable)}> {"등록"} </Button>,

                    ]}
                >

                    <section className="wrap-section wrap-tbl">
                        <div className="box-body">
                            <div className="tbl">
                                <dl>
                                    <dt>
                                        <div className="dt-inner">
                                            <span className="fz-16 fw-med fc-7">키워드명 입력<i className="txt-essential"></i></span>
                                        </div>
                                    </dt>
                                    <dd>
                                        <div className="form-group">
                                            <Input type="text" name="groupName"
                                                value={newKeywordTable.kwdName}
                                                // onPressEnter={regKeywordEvent}/
                                                onChange={(e) => setNewKeywordTable({ key: Math.floor(Math.random() * 101), kwdName: e.target.value, bidCost: newKeywordTable.bidCost })}
                                                
                                            />
                                        </div>
                                    </dd>
                                </dl>
                                <dl>
                                    <dt>
                                        <div className="dt-inner">
                                            <span className="fz-16 fw-med fc-7">입찰가 입력<i className="txt-essential"></i></span>
                                        </div>
                                    </dt>
                                    <dd>
                                        <div className="form-group">
                                            <Input type="text" name="bi"
                                                value={newKeywordTable.bidCost}
                                                onChange={(e) => setNewKeywordTable({ key: Math.floor(Math.random() * 101), kwdName: newKeywordTable.kwdName, bidCost: e.target.value })}

                                            />
                                        </div>
                                    </dd>
                                </dl>
                            </div>
                        </div>
                    </section>
                </Modal>
            </div>

            {/* 입찰가격 설정 모달 */}
            <div>
                <Modal title="키워드 입찰가 일괄 설정"
                    open={bioCostIsModalOpen} onOk={() => setBioCostIsModalOpen(false)} onCancel={modalCancleEvent} maskClosable={false}
                    width={800}
                    footer={[
                        <Button key="back" type="primary" className="gray" size="large" onClick={modalCancleEvent}> {"취소"} </Button>,
                        <Button key="submit" type="primary" className="pink" size="large" onClick={() => regBioCostEvent(newKeywordTable)}> {"등록"} </Button>,

                    ]}
                >
                    <section className="wrap-section wrap-tbl">
                        <div className="box-body">
                            <div className="tbl">
                                <dl>
                                    <dt>
                                        <div className="dt-inner">
                                            <span className="fz-16 fw-med fc-7">입찰가 입력<i className="txt-essential"></i></span>
                                        </div>
                                    </dt>
                                    <dd>
                                        <div className="form-group">
                                            <Input type="text" name="groupName"
                                                value={newKeywordTable.bidCost}
                                                onChange={(e) => setNewKeywordTable({ key: newKeywordTable.key, kwdName: newKeywordTable.kwdName, bidCost: e.target.value })}
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

export default AdKeywordList;