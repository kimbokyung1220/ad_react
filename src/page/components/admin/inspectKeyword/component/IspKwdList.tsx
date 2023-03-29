import { Button, Table } from 'antd';
import Column from 'antd/es/table/Column';
import React, { Dispatch } from 'react';
import { CSVLink } from 'react-csv';
import { useSelector } from 'react-redux';
import { State } from '../../../../../state';
import { ispKeywordList } from '../../../../../type/keyword';
import { successAlert } from '../../../../alerts/alert';

interface Props {
    setIspKwdModalOpen: Dispatch<boolean>
}

const IspKwdList = ({ setIspKwdModalOpen }: Props) => {

    const ispKwds = useSelector((state: State) => state.searchIspKwdList);

    //키워드 삭제 (수동검사여부 1 -> 0)
    const deleteIspKwdEvent = (recode: ispKeywordList[]) => {
        console.log("recode");
        console.log(recode);
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
                        <Column title="검수 키워드 삭제" dataIndex="deleteBtn" align="center" render={(value, recode: ispKeywordList[]) =>
                            <Button type="primary" size="small" className="pink" onClick={() => deleteIspKwdEvent(recode)} >선택</Button>
                        } />
                    </Table>
                </div>
            </section>
        </>
    );
}

export default IspKwdList;