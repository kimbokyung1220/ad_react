import React from 'react';
import { Button } from 'antd';
import { useSelector } from "react-redux"
import { State } from "../../../../state";
import { requestSaveAd } from '../../../../model/axios';
import { errorAlert, successReloadAlert, warningAlert } from '../../../alerts/alert';


const RegAdBtn = () => {
    const keywordInfo = useSelector((state: State) => state.keywordTableInfo);
    const itemInfo = useSelector((state: State) => state.itemInfo);
    const adGroupInfo = useSelector((state: State) => state.selectedAdGroup)
    

    // 등록버튼 이벤트
    const regAdEvent = () => {

        if (adGroupInfo === "") {
            warningAlert("광고그룹을 선택해 주세요");
            return false;
        }
        if (keywordInfo.length <= 0) {
            warningAlert("키워드를 입력해주세요");
            return false;
        }

        requestSaveAd({
            'agroupName': adGroupInfo,
            'kwds': keywordInfo,
            'itemId': itemInfo.itemId,
        }).then(res => {
            if (res.data === null || res.data.sucscess === 'false') {
                errorAlert(res.error.message)
                console.log(res.sucscess)
                return false;
            } else {
                successReloadAlert("광고 등록 완료! :-)")
            }

        }).catch(error => {
            console.log(error)
            const kwdName = error.response.data.keyword
            // "판매 가능한 키워드가 아닙니다."
            errorAlert(`[ ${kwdName} ](은)는 ${error.response.data.desc}`)
        })

    }

    return (
        <>
            <div className="box-footer">
                <div className="box-center">
                    <Button type="primary" size="large" className="pink" onClick={regAdEvent}>
                        <span>광고 등록</span>
                    </Button>
                </div>
            </div>
        </>
    );
}

export default RegAdBtn;