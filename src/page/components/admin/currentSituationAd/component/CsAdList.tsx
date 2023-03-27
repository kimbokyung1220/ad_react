import { Table } from 'antd';
import Column from 'antd/es/table/Column';
import React from 'react';

const CsAdList = () => {
    const dataSource = [
        {
            dadDetId: '1',
            itemName: "의료용 탄소매트",
            kwdName: "의료",
            adultYn: "일반상품"

        },
        {
            dadDetId: '1',
            itemName: "의료용 탄소매트",
            kwdName: "의료",
            adultYn: "일반상품"


        },
        {
            dadDetId: '1',
            itemName: "의료용 탄소매트",
            kwdName: "의료",
            adultYn: "일반상품"


        },
    ]
    return (
        <>
            <section className="wrap-section wrap-datagrid">
                <div className="box-header">
                    <div className="box-left">
                        {/* <h2 className="fz-24 fc-gray-700"> 제목 </h2> */}
                    </div>
                </div>

                <div className="box-body">
                    <Table
                        dataSource={dataSource}
                        bordered
                        pagination={{ showTotal: ((total) => <p>총 {total}건</p>) }}>

                        <Column title="직접광고 상세 ID" dataIndex="dadDetId" align="center" />
                        <Column title="상품 명" dataIndex="itemName" align="center" />
                        <Column title="키워드 명" dataIndex="kwdName" align="center" />
                        <Column title="성인 여부" dataIndex="adultYn" align="center" />
                    </Table>
                </div>
            </section>
        </>
    );
}

export default CsAdList;