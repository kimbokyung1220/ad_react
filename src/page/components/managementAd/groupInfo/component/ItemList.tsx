import { Button, Popconfirm, Space, Table } from 'antd';
import Column from 'antd/es/table/Column';
import React from 'react';
import { CSVLink } from 'react-csv';

const ItemList = () => {
    return (
        <>
            <section className="wrap-section wrap-datagrid">
                <div className="box-header">
                    <div className="box-left">
                        <h2 className="fz-24 fc-gray-700">상품 리스트</h2>
                    </div>
                    <div className="box-right">
                        <Button type="primary" className="pink" size="large">
                            <span>ON</span>
                        </Button>
                        <Button type="primary" className="gray" size="large">
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
                        // rowSelection={{
                        //     type: selectionType,
                        //     ...rowSelection,
                        // }}
                        // dataSource={adGroupItemList}
                        rowKey={(render) => render.itemId}
                        pagination={{ showSizeChanger: true, showTotal: ((total) => <p>Total {total} items</p>) }}
                        bordered={true}
                    >
                        <Column title="번호" dataIndex="index" key="index" align="center" render={(_: any, recode: any, index: number) => (<a>{index + 1}</a>)} />
                        <Column title="상품번호" dataIndex="agroupName" key="agroupName" align="center"
                            render={(_: any, record: string ) => (
                                <Space size="middle" >
                                    {/* <a>{record.agroupName}</a> */}
                                </Space>
                            )}
                        />
                         <Column title="상품명" dataIndex="agroupName" key="agroupName" align="center"
                            render={(_: any, record: string ) => (
                                <Space size="middle" >
                                    {/* <a>{record.agroupName}</a> */}
                                </Space>
                            )}
                        />
                        <Column title="광고 상품 ON/OFF" dataIndex="agroupUseConfigYnSrt" key="agroupUseConfigYnSrt" align="center"
                            render={(_: any, record: string) => (
                                <Popconfirm title="그룹의 사용 설정 여부를 변경하시겠습니까?" >
                                    {/* <a>{record.agroupUseConfigYnSrt}</a> */}
                                </Popconfirm>
                            )}
                        />
                    </Table>
                    {/* } */}
                </div>
            </section>
        </>

    );
}

export default ItemList;