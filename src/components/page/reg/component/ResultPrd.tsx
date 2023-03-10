import React, { useState } from 'react';
import { Button, Table } from 'antd';
import { item } from "../../RegContent";
import { ColumnsType, ColumnType } from "antd/es/table";
import { useSelector } from "react-redux"
import { State } from '../../../redux/reducer';

interface itemProps {
    items: item[]
}

const ResultPrd = ({items}:itemProps) => {

    const items2 = useSelector((state: State) => state.item)

    const columns: ColumnsType<item>= [
        { title: '상품번호', dataIndex: 'itemNo', key: 'itemNo', align: 'center' },
        { title: '상품명', dataIndex: 'itemName', key: 'itemName', align: 'center' },
        { title: '성인 상품 여부', dataIndex: 'adultYn', key: 'adultYn', align: 'center' },
        { title: '상품 가격', dataIndex: 'itemOrgCost', key: 'itemOrgCost', align: 'center' },
        { title: '상품 활성화 여부', dataIndex: 'itemActYn', key: 'itemActYn', align: 'center' },
        { title: '상품 선택', dataIndex: 'selectBtn', key: 'selectBtn', align: 'center',
            render:(record) => (
                <Button className="pnik" onClick={() => console.log(record)}><span>선택</span></Button>
            )
    },
       
    ];
    
    return (
        <>
            <section className="wrap-section wrap-datagrid">
                <div className="box-header">
                    <div className="box-left">
                        <h2 className="fz-24 fc-gray-700">상품 조회 결과</h2>
                    </div>
                </div>
                <div className="box-body">
            
                    <Table
                        dataSource={items2}
                        columns={columns}
                        bordered={true}
                        pagination={{ pageSize: 10 }}

                    >

                    </Table>
                </div>
            </section>
        </>
    );
}

export default ResultPrd;