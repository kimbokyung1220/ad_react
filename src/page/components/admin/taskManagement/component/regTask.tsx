import React, { useState } from 'react';
import { Button, Input } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import { CSVLink } from "react-csv";
import { successAlert } from "../../../../alerts/alert";
import { data, headers } from "./bulkMngTemplat";




const RegTask = () => {
    const [newTaskName, setNewTaskName] = useState<string>("");

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
                                    <Input name="taskReqFile" placeholder="파일을 업로드해주세요."
                                        // onChange={(e) => setItemNo(e.currentTarget.value)}
                                        type="text"
                                        // value={itemNo}
                                        style={{ width: "500px" }}
                                    // onPressEnter={searchEvent}
                                    />
                                    <Button icon={<UploadOutlined />}>업로드</Button>
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
                                        // value={itemNo}
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
                        <Button className="gray" size="large" type="primary">
                            <span>취소</span>
                        </Button>
                        <Button className="pink" size="large" type="primary">
                            <span>등록</span>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default RegTask;