import React, { useEffect } from 'react';
import { Button, Table } from "antd";
import Column from "antd/es/table/Column";
import { Type } from "typescript";
import { useDispatch, useSelector } from 'react-redux';
import { State, admActionCreators } from '../../../../../state';
import { requestDownloadFile, requestTaskReqAllList } from '../../../../../model/adminAxios';
import { bindActionCreators } from 'redux';
import { errorAlert } from '../../../../alerts/alert';
import { taskReqList } from '../../../../../type/taskReq';

const TaskList = () => {
    // 작업요청 전체 목록
    const taskReqAllList = useSelector((state: State) => state.taskReqList);
    taskReqAllList.map((data) => {
        if (data.taskStatus === 'REQ') data.taskStatusStr = '요청'
        else if (data.taskStatus === 'ING') data.taskStatusStr = '진행'
        else if (data.taskStatus === 'COMPLETED') data.taskStatusStr = '완료'
        else if (data.taskStatus === 'ERROR') data.taskStatusStr = '에러'
    });
    // reload
    const dispatch = useDispatch();
    const { getTaskReqList } = bindActionCreators(admActionCreators, dispatch);

    const downloadTaskFileEvent = (taskReqFilePath: string) => {
        const filename = taskReqFilePath.substring(10);
        console.log("filename")
        console.log(filename)
        // console.log(recode.taskReqFilePath)
        
        // axios
        requestDownloadFile({'fileName': filename})
        .then((res) => console.log(res))
        .catch((err) => console.log(err))

        
    }

    useEffect(() => {
        requestTaskReqAllList()
            .then((res) => {
                console.log("res.data");
                console.log(res.data);
                getTaskReqList(res.data)
            })
            .catch((err) => {
                console.log(err)
                if (err.code === 'ERR_NETWORK') {
                    errorAlert("인터넷 연결상태를 확인해주세요");
                    return false;
                }
            });
    }, [])

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
                        dataSource={taskReqAllList}
                        rowKey={(render) => render.taskReqId}
                        bordered
                        pagination={{ showTotal: ((total) => <p>총 {total}건</p>) }}
                    >

                        <Column title="작업명" dataIndex="taskName" align="center" />
                        <Column title="작업 상태" dataIndex="taskStatusStr" align="center" />
                        <Column title="등록자" dataIndex="memberId" align="center" />
                        <Column title="등록 시간" dataIndex="taskReqTime" align="center" />
                        <Column title="요청파일" dataIndex="taskReqFilePath" align="center" render={(value, recode: taskReqList) =>
                            <Button type="primary" size="small" className="pink" onClick={() => downloadTaskFileEvent(recode.taskReqFilePath)}>다운로드</Button>
                        } />
                    </Table>
                </div>
            </section>

        </>
    );
}

export default TaskList;