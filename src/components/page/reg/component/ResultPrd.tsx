import React, { useState } from 'react';
import { Button, Table, TableColumnsType } from 'antd';
import { item } from "../../RegContent";
import { useSelector } from "react-redux"
import { State } from "../../../../state";
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import { actionCreators } from "../../../../state";



const ResultPrd = () => {
    const items = useSelector((state: State) => state.item)
    const dispatch = useDispatch();
    const { showItemInfo } = bindActionCreators(actionCreators, dispatch);

    function selectItemEvent(record: item) {
        console.log(record)
        showItemInfo(record)
    }

    const columns: TableColumnsType<item>= [
        { title: '상품번호', dataIndex: 'itemNo', key: 'itemNo', align: 'center' },
        { title: '상품명', dataIndex: 'itemName', key: 'itemName', align: 'center' },
        { title: '성인 상품 여부', dataIndex: 'adultYn', key: 'adultYn', align: 'center' },
        { title: '상품 가격', dataIndex: 'itemOrgCost', key: 'itemOrgCost', align: 'center' },
        { title: '상품 활성화 여부', dataIndex: 'itemActYn', key: 'itemActYn', align: 'center' },
        { title: '상품 선택', dataIndex: 'selectBtn', key: 'selectBtn', align: 'center',
            render:(text, record) => (
                <Button size="small" className="pink" onClick={() => selectItemEvent(record)}><span>선택</span></Button>
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