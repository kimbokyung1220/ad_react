import { useEffect } from 'react';
import { Button, Table, TableColumnsType } from 'antd';
import { item } from "../../RegContent";
import { useDispatch, useSelector } from "react-redux"
import { bindActionCreators } from "redux";
import { actionCreators, State } from "../../../../state";
import { getAgroupList } from '../../../../model/axios';
import PrdInfo from "./PrdInfo";



const ResultPrd = () => {
    // 상품 목록 조회
    const items = useSelector((state: State) => state.item)
    const dispatch = useDispatch();
    const { showItemInfo } = bindActionCreators(actionCreators, dispatch);
    // 해당 광고주의 광고그룹
    const { showAdGroup } = bindActionCreators(actionCreators, dispatch);

    // 상품 선택
    function selectItemEvent(record: item) {
        // 레코드정보 담기
        console.log("record 정보@@@@@@@@@@@@@@@@@@@@@")
        console.log(record)
        showItemInfo(record)

        // 광고그룹 API
        getAgroupList().then(res => {
            if (res !== null) {
                showAdGroup(res)
                console.log(" *********** showAdGroup.length")
                console.log(showAdGroup.length)
            }
        }).catch(error => {
            console.log("show AdGroup error")
            console.log(error)
        })
    };

    const columns: TableColumnsType<item> = [
        { title: '상품번호', dataIndex: 'itemNo', key: 'itemNo', align: 'center' },
        { title: '상품명', dataIndex: 'itemName', key: 'itemName', align: 'center' },
        { title: '성인 상품 여부', dataIndex: 'adultYn', key: 'adultYn', align: 'center' },
        { title: '상품 가격', dataIndex: 'itemOrgCost', key: 'itemOrgCost', align: 'center' },
        { title: '상품 활성화 여부', dataIndex: 'itemActYn', key: 'itemActYn', align: 'center' },
        {
            title: '상품 선택', dataIndex: 'selectBtn', key: 'selectBtn', align: 'center',
            render: (text, record) => (
                <Button size="small" className="pink" onClick={() => selectItemEvent(record)}><span>선택</span></Button>
            )
        },

    ];

    return (
        <>
            <section className="wrap-section wrap-datagrid">
                <div className="box-header">
                    <div className="box-left">
                        <h2 className="fz-24 fc-gray-700">상품 조회 결과</h2>
                    </div>
                </div>
                <div className="box-body">

                    <Table
                        dataSource={items}
                        columns={columns}
                        bordered={true}
                        pagination={{ pageSize: 10 }}
                    >
                    </Table>
                </div>
            </section>
            <>
            <PrdInfo />
                
               
               

            </>
        </>
    );
}

export default ResultPrd;