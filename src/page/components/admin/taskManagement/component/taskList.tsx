import React from 'react';
import { Button, Table } from "antd";
import Column from "antd/es/table/Column";
import { Type } from "typescript";

const dataSource = [
    {
        taskName: '1',
        taskStatus: 'Mike',
        memberId: 32,
        taskReqTime: '10 Downing Street',
    },
    {
        taskName: '1',
        taskStatus: 'Mike',
        memberId: 32,
        taskReqTime: '10 Downing Street',
    },
    {
        taskName: '1',
        taskStatus: 'Mike',
        memberId: 32,
        taskReqTime: '10 Downing Street',
    },

];

const TaskList = () => {
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
                        // rowKey={(render) => render.}
                        bordered
                        pagination={{ showTotal: ((total) => <p>총 {total}건</p>) }}
                    >

                        <Column title="작업명" dataIndex="taskName" align="center" />
                        <Column title="작업 상태" dataIndex="taskStatus" align="center" />
                        <Column title="등록자" dataIndex="memberId" align="center" />
                        <Column title="등록 시간" dataIndex="taskReqTime" align="center" />
                        <Column title="요청파일" dataIndex="reqFile" align="center" render={(value, recode: Type) =>
                            <Button type="primary" size="small" className="pink">다운로드</Button>
                        } />
                    </Table>
                </div>
            </section>

        </>
    );
}

export default TaskList;