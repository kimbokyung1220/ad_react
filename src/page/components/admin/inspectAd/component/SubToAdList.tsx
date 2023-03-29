import React, { Dispatch } from 'react';
import { Button, Table } from 'antd';
import Column from 'antd/es/table/Column';
import { useSelector } from "react-redux";
import { State } from "../../../../../state";

interface Props {
    setCnrProcessModalOpen: Dispatch<boolean>
}

const SubToAdList = ({ setCnrProcessModalOpen }: Props) => {
    const ispAdKwds = useSelector((state: State) => state.searchIspAdKwdList);

    ispAdKwds.map((row) => {
        row.reasonForIsp = `검수 대상 키워드 : ${row.itemName}`
    })

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
                        dataSource={ispAdKwds}
                        rowKey={(render) => render.cnrReqId}
                        bordered
                        pagination={{ showTotal: ((total) => <p>총 {total}건</p>) }}>

                        <Column title="상품 명" dataIndex="itemName" align="center" />
                        <Column title="키워드 명" dataIndex="kwdName" align="center" />
                        <Column title="검수 사유" dataIndex="reasonForIsp" align="center" />
                        <Column title="검수 처리" dataIndex="cnrProcess" align="center" render={(value, recode: string) =>
                            <Button type="primary" size="small" className="pink" onClick={() => setCnrProcessModalOpen(true)}>검수</Button>
                        } />
                    </Table>
                </div>
            </section>
        </>
    );
}

export default SubToAdList;