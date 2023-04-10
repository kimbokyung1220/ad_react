import { Space, Table } from 'antd';
import Column from 'antd/es/table/Column';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { requestCsAdAllList, requestGetDadRptData } from "../../../../../model/adminAxios";
import { admActionCreators, State } from "../../../../../state";
import { csAdList } from "../../../../../type/dadDet";
import { errorAlert } from "../../../../alerts/alert";
import DadDetChart from "./dadDetChart";
import CsDetailData from "./csDetailData";

const CsAdList = () => {
    const dispatch = useDispatch();
    const { getCsAdList } = bindActionCreators(admActionCreators, dispatch);
    const { getDadRptDetail } = bindActionCreators(admActionCreators, dispatch);

    const csAds = useSelector((state: State) => state.csAdList);
    const dadRptDetails = useSelector((state: State) => state.dadRptDetail);

    const [itemName, setItemName] = useState("");

    const showRptTableEvent = (dadDetId: number) => {
        requestGetDadRptData(dadDetId)
            .then((res) => getDadRptDetail(res.data))
            .catch((err) => {
                console.log(err);
                errorAlert("조회하지 못했습니다.")
            })
    }

    useEffect(() => {
        requestCsAdAllList()
            .then((res) => getCsAdList(res.data))
            .catch((err) => { errorAlert("광고 현황을 조회하지 못했습니다."); console.log(err) })

    }, [])
    return (
        <>
            <section className="wrap-section wrap-datagrid">
                <div className="box-header">
                    <div className="box-left">
                        {/* <h2 className="fz-24 fc-gray-700"> 제목 </h2> */}
                    </div>
                </div>

                <div className="box-body">
                    <Table
                        dataSource={csAds}
                        rowKey={(render) => render.dadDetId}
                        bordered
                        pagination={{ showTotal: ((total) => <p>총 {total}건</p>) }}>

                        <Column title="직접광고 상세 ID" dataIndex="dadDetId" align="center" />
                        <Column title="상품 명" dataIndex="itemName" align="center"
                            render={(_: any, record: csAdList) => (
                                <Space size="middle" onClick={() => {showRptTableEvent(record.dadDetId); setItemName(record.itemName)}}>
                                    <a>{record.itemName}</a>
                                </Space>

                            )}
                        />
                        <Column title="키워드 명" dataIndex="kwdName" align="center" />
                        <Column title="성인 여부" dataIndex="adultYn" align="center"
                            render={(value, recode: csAdList) =>
                                <span>{recode.adultYn === 1 ? "성인상품" : "일반상품"}</span>}
                        />
                    </Table>
                </div>
            </section>
            {dadRptDetails.length > 0 && <DadDetChart itemName={itemName}/> }
            {dadRptDetails.length > 0 && <CsDetailData /> }
        </>


    );
}

export default CsAdList;