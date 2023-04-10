import React, { Dispatch } from 'react';
import { Button, Table, Popconfirm } from 'antd';
import Column from 'antd/es/table/Column';
import { CSVLink } from 'react-csv';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from "redux";
import { requestOffIspKwdManualYn } from "../../../../../model/adminAxios";
import { admActionCreators, State } from '../../../../../state';
import { ispKeywordList } from '../../../../../type/keyword';
import { errorAlert, successAlert } from '../../../../alerts/alert';

interface Props {
    setIspKwdModalOpen: Dispatch<boolean>
}

const IspKwdList = ({ setIspKwdModalOpen }: Props) => {

    const ispKwds = useSelector((state: State) => state.searchIspKwdList);
    // reload
    const dispatch = useDispatch();
    const { getSearchIspKwdList } = bindActionCreators(admActionCreators, dispatch);


    //키워드 삭제 (수동검사여부 1 -> 0)
    const deleteIspKwdEvent = (recode: ispKeywordList) => {
        console.log("recode");
        requestOffIspKwdManualYn(recode.kwdId)
            .then((res) => {
                if(res.data === null) {
                    errorAlert(res.error.message)
                    return false;
                }
                getSearchIspKwdList(res.data)
                successAlert("삭제 완료! 🙌")
            })
            .catch((err) => { console.log(err); errorAlert("삭제하지 못했습니다.") })
    }

    // .csv 파일 다운로드 받을 시 제목열
    const headers = [
        { label: "키워드 명", key: "kwdName" },
    ];

    return (
        <>
            <section className="wrap-section wrap-datagrid">
                <div className="box-header">
                    <div className="box-left">
                        <h2 className="fz-24 fc-gray-700">광고 검수 대상 리스트</h2>
                    </div>
                    <div className="box-right">
                        <Button className="pink" onClick={() => setIspKwdModalOpen(true)}>
                            <span>접수 키워드 등록</span>
                        </Button>
                        <CSVLink filename={"Inspect_Keyword_List.csv"} data={ispKwds} headers={headers} className="btn btn-primary"
                            onClick={() => { successAlert("다운로드 완료 👀👍") }}
                        >
                            <Button className="gray" >
                                <span>키워드 다운로드</span>
                            </Button>
                        </CSVLink>
                    </div>
                </div>

                <div className="box-body">
                    <Table
                        dataSource={ispKwds}
                        rowKey={(render) => render.kwdId}
                        bordered
                        pagination={{ showTotal: ((total) => <p>총 {total}건</p>) }}
                    >

                        <Column title="키워드 명" dataIndex="kwdName" align="center" />
                        <Column title="검수 키워드 삭제" dataIndex="deleteBtn" align="center" render={(value, recode: ispKeywordList) =>
                            <Popconfirm title="검수 키워드를 삭제하시겠습니까?" onConfirm={() => deleteIspKwdEvent(recode)}>
                                <Button type="primary" size="small" className="pink">선택</Button>
                            </Popconfirm>
                        } />
                    </Table>
                </div>
            </section>
        </>
    );
}

export default IspKwdList;