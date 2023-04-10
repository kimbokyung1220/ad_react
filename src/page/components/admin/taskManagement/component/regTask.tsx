import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input } from "antd";
import { CSVLink } from "react-csv";
import { errorAlert, successAlert, successReloadAlert } from "../../../../alerts/alert";
import { data, headers } from "./bulkMngTemplat";
import { requestSaveTaskReq } from '../../../../../model/adminAxios';
import { bindActionCreators } from 'redux';
import { State, admActionCreators } from '../../../../../state';


const RegTask = () => {
    const [taskFile, setTaskFile] = useState<File>();
    const [fileName, setFileName] = useState<string>(undefined || "");
    const [newTaskName, setNewTaskName] = useState<string>("");

    // 작업요청 전체 목록
    const taskReqAllList = useSelector((state: State) => state.taskReqList);
    const dispatch = useDispatch();
    const { getTaskReqList } = bindActionCreators(admActionCreators, dispatch);

    // 요청파일 업로드 event
    const selectedFileEvent = (e: any) => {
        console.log(e.target.files[0]);
        setTaskFile(e.target.files[0]); //mutipartFile
        setFileName(e.target.files[0].name); //fileName
    }

    // 작업 요청 파일 등록
    const regTaskFile = () => {
        if (taskFile === undefined) {
            errorAlert("작업 요청 파일을 첨부해주세요.");
            return false;
        }

        if (newTaskName === null) {
            errorAlert("작업명을 입력해주세요.");
            return false;
        }
        const formData = new FormData();
        formData.append('taskFile', taskFile as File);
        formData.append(
            'taskReqDto',
            new Blob(
                [
                    JSON.stringify({
                        'taskName': newTaskName
                    }),
                ],
                { type: 'application/json' }
            )
        );
        requestSaveTaskReq(formData)
            .then((res) => {
                console.log(res.data);
                successReloadAlert("등록 완료! 🙌")
                getTaskReqList(res.data);
            })
            .catch((err) => {
                console.log(newTaskName)
                if (err.response.status === 400) {
                    errorAlert(err.response.data.desc);
                    return false;
                }
            });


    }

    // 취소 버튼
    const cancleEvent = () => {
        setTaskFile(undefined);
        setFileName("");
        setNewTaskName("");
    }

    useEffect(() => {
        console.log(123)
        cancleEvent();
    }, [taskReqAllList])

    return (
        <>
            <section className="wrap-section wrap-tbl">
                <div className="box-header">
                    <div className="box-left">
                        <div className="box-left">
                            <h2 className="fz-24 fc-gray-700">작업 요청</h2>
                        </div>
                    </div>
                </div>
                <div className="box-body">
                    <div className="tbl">
                        <dl>
                            <dt>
                                <div className="dt-inner">
                                    <span className="fz-15 fc-gray-500">요청 템플릿</span>
                                </div>
                            </dt>
                            <dd>
                                <div className="form-group">
                                    <CSVLink filename={"BULK_MNG_TEMPLATE.csv"} data={data} headers={headers} className="btn btn-primary"
                                        onClick={() => successAlert("다운로드 완료 👀👍")}
                                    >
                                        <Button className="pink" size="large" style={{ marginLeft: '25px' }}>
                                            <span>템플릿 다운로드</span>
                                        </Button>
                                    </CSVLink>
                                </div>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <div className="dt-inner">
                                    <span className="fz-15 fc-gray-500">요청 파일 업로드</span>
                                </div>
                            </dt>
                            <dd>
                                <div className="form-group">
                                    <div className="filebox bs3-primary preview-image">
                                        <input className="upload-name"
                                            placeholder="파일을 업로드 해주세요"
                                            value={fileName}
                                            disabled
                                            style={{ width: '20%' }}
                                        />

                                        <label htmlFor="input_file" >업로드</label>
                                        <input type="file"
                                            style={{ display: "none" }}
                                            id="input_file"
                                            className="upload-hidden"
                                            onChange={(e) => selectedFileEvent(e)}
                                        />
                                    </div>
                                </div>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <div className="dt-inner">
                                    <span className="fz-15 fc-gray-500">작업명</span>
                                </div>
                            </dt>
                            <dd>
                                <div className="form-group">
                                    <Input name="taskName" placeholder="작업명을 입력해주세요"
                                        onChange={(e) => setNewTaskName(e.currentTarget.value)}
                                        type="text"
                                        value={newTaskName}
                                        style={{ width: "500px" }}
                                    // onPressEnter={searchEvent}
                                    />
                                </div>
                            </dd>
                        </dl>
                    </div>
                </div>
                <div className="box-footer">
                    <div className="box-center">
                        <Button className="gray" size="large" type="primary" onClick={cancleEvent}>
                            <span>취소</span>
                        </Button>
                        <Button className="pink" size="large" type="primary" onClick={regTaskFile}>
                            <span>등록</span>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default RegTask;