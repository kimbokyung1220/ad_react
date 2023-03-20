import React, { useEffect, useState } from 'react';
import { Button, Table } from 'antd';
import { useSelector } from 'react-redux';
import { State } from '../../../../../state';
import { columns, rowSelection } from '../table/menu';


const AdGroupList = () => {
    // 광고그룹 리스트
    const adGroupItemList = useSelector((state: State) => state.adGroupItem);
    const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');

    useEffect(() => {
        
    }, [])
    
    return (
        <>
            <section className="wrap-section wrap-datagrid">
                <div className="box-header">
                    <div className="box-left">
                        <h2 className="fz-24 fc-gray-700">그룹 리스트</h2>
                    </div>
                    <div className="box-right">
                        <Button type="primary" className="pink" size="large">
                            <span>ON</span>
                        </Button>
                        <Button type="primary" className="gray" size="large">
                            <span>OFF</span>
                        </Button>
                        <Button type="primary" className="pink" size="large" style={{ marginLeft: '30px' }}>
                            <span>그룹 추가</span>
                        </Button>
                        <Button type="primary" className="gray" size="large">
                            <span>그룹 삭제</span>
                        </Button>
                        <Button className="pink" size="large" style={{ marginLeft: '30px' }}>
                            <span>그룹 다운로드</span>
                        </Button>
                    </div>
                </div>
                <div className="box-body">


                    <Table
                        rowSelection={{
                            type: selectionType,
                            ...rowSelection,
                        }}
                        dataSource={adGroupItemList}
                        rowKey={(render) => render.agroupId}
                        pagination={{ showSizeChanger: true, showTotal: ((total) => <p>Total {total} items</p>) }}
                        columns={columns}
                        bordered={true}
                    >
                    </Table>
                    {/* } */}
                </div>
            </section>
        </>
    );
}

export default AdGroupList;