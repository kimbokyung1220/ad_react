import { useSelector } from 'react-redux';
import { State } from '../../../../../state';
import { Button, Table } from 'antd';
import Column from 'antd/es/table/Column';
import { CSVLink } from 'react-csv';
import { successAlert } from '../../../../alerts/alert';


// .csv 파일 다운로드 받을 시 제목열
const headers = [
    { label: "날짜", key: "basicDate" },
    { label: "노출수", key: "impCnt" },
    { label: "클릭수", key: "clickCnt" },
    { label: "클릭률", key: "clickPercentStr" },
    { label: "평균 노출 순위", key: "avgImpRank" },
    { label: "평균 클릭 비용", key: "avgCpc" },
    { label: "광고비", key: "adSpendStr" },
];


const CsDetailData = () => {
    const dadRptDetails = useSelector((state: State) => state.dadRptDetail);
    let i = 0;
    dadRptDetails.forEach((row) =>{
        row.index = i++;
        row.clickPercentStr = row.clickCnt + "%";
        row.avgImpRank = row.avgImpRank / 1;
        row.adSpendStr = row.adSpend.toLocaleString();
    })

    return (
        <>
            <section className="wrap-section wrap-datagrid">
                <div className="box-header">
                    <div className="box-left">
                        {/* <h2 className="fz-24 fc-gray-700">{}</h2> */}
                    </div>
                    <div className="box-right">
                        <CSVLink filename={"DadDet_Report.csv"} headers={headers} data={dadRptDetails} className="btn btn-primary"
                            onClick={() => { successAlert("다운로드 완료 👀👍") }}
                        >
                            <Button className="gray" >
                                <span>다운로드</span>
                            </Button>
                        </CSVLink>
                    </div>
                </div>

                <div className="box-body">
                    <Table
                        dataSource={dadRptDetails}
                        rowKey={(render) => render.index}
                        bordered
                        pagination={{ showTotal: ((total) => <p>총 {total}건</p>) }}>

                        <Column title="날짜" dataIndex="basicDate" align="center" />
                        <Column title="노출수" dataIndex="impCnt" align="center" />
                        <Column title="클릭수" dataIndex="clickCnt" align="center" />
                        <Column title="클릭률" dataIndex="clickPercentStr" align="center" />
                        <Column title="평균 노출 순위" dataIndex="avgImpRank" align="center" />
                        <Column title="평균 클릭 비용" dataIndex="avgCpc" align="center" />
                        <Column title="광고비" dataIndex="adSpendStr" align="center" />
                    </Table>
                </div>
            </section>

        </>
    );
}

export default CsDetailData;