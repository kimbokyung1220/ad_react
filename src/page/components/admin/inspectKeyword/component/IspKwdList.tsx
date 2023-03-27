import { Button, Table } from 'antd';
import Column from 'antd/es/table/Column';
import React from 'react';

const IspKwdList = () => {
    const dataSource = [
        {
          kwdName: '1',
          checkKwdDelete: "선택",

        },
        {
            kwdName: '1',
            checkKwdDelete: "선택",
        },
        {
            kwdName: '1',
            checkKwdDelete: "선택",
        },

      ];
    return (
        <>
            <section className="wrap-section wrap-datagrid">
                <div className="box-header">
                    <div className="box-left">
                        <h2 className="fz-24 fc-gray-700">광고 검수 대상 리스트</h2>
                    </div>
                    <div className="box-right">
                        <Button className="pink" >
                            <span>접수 키워드 등록</span>
                        </Button>
                        <Button className="gray" >
                            <span>키워드 다운로드</span>
                        </Button>
                    </div>
                </div>

                <div className="box-body">
                    <Table
                        dataSource={dataSource}
                        bordered
                        pagination={{ showTotal: ((total) => <p>총 {total}건</p>) }}>

                        <Column title="키워드 명" dataIndex="kwdName" align="center" />
                        <Column title="검수 키워드 삭제" dataIndex="checkKwdDelete" align="center" render={(value, recode: string) =>
                            <Button type="primary" size="small" className="pink" >선택</Button>
                        } />
                    </Table>
                </div>
            </section>
        </>
    );
}

export default IspKwdList;