import React, { useState } from 'react';
import { Button, Table } from 'antd';
import { item } from "../../RegContent";
import { ColumnsType, ColumnType } from "antd/es/table";

interface itemProps {
    items: item[]
}

const ResultPrd = ({items}:itemProps) => {
    const columns: ColumnsType<item>= [
        {
            title: '상품번호',
            dataIndex: 'itemNo',
            key: 'itemNo',
            // align: 'right',
        },
        {
            title: '상품명',
            dataIndex: 'itemName',
            key: 'itemName',
        },
        {
            title: '성인 상품 여부',
            dataIndex: 'adultYn',
            key: 'adultYn',
        },
        {
            title: '상품 가격',
            dataIndex: 'itemOrgCost',
            key: 'itemOrgCost',
        },
        {
            title: '상품 활성화 여부',
            dataIndex: 'itemActYn',
            key: 'itemActYn',
        },
        {
            title: '상품 선택',
            dataIndex: 'selectBtn',
            key: 'selectBtn',
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
                        dataSource={items}
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