import { Button, Table } from 'antd';
import Column from 'antd/es/table/Column';
import React from 'react';

const SubToAdList = () => {
    const dataSource = [
        {
            itemName: '1',
            kwdName: "선택",
            ddd: "ddd",
            cnrIngStatus: "adsfasd"

        },
        {
            itemName: '1',
            kwdName: "선택",
            ddd: "ddd",
            cnrIngStatus: "adsfasd"

        },
        {
            itemName: '1',
            kwdName: "선택",
            ddd: "ddd",
            cnrIngStatus: "adsfasd"

        },
    ]
    return (
        <>
            <section className="wrap-section wrap-datagrid">
                <div className="box-header">
                    <div className="box-left">
                        <h2 className="fz-24 fc-gray-700">광고 검수 대상 리스트</h2>
                    </div>
                </div>

                <div className="box-body">
                    <Table
                        dataSource={dataSource}
                        bordered
                        pagination={{ showTotal: ((total) => <p>총 {total}건</p>) }}>

                        <Column title="상품 명" dataIndex="itemName" align="center" />
                        <Column title="키워드 명" dataIndex="kwdName" align="center" />
                        <Column title="검수 사유" dataIndex="ddd" align="center" />
                        <Column title="검수 처리" dataIndex="cnrIngStatus" align="center" render={(value, recode: string) =>
                            <Button type="primary" size="small" className="pink" >선택</Button>
                        } />
                    </Table>
                </div>
            </section>
        </>
    );
}

export default SubToAdList;