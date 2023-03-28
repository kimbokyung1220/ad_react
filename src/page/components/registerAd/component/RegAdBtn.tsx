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

    const regAdEvent = (code: number) => {

        console.log(adGroupInfo);
        if (adGroupInfo === "") {
            warningAlert("광고그룹을 선택해 주세요");
            return false;
        }
        if (keywordInfo.length <= 0) {
            warningAlert("키워드를 입력해주세요");
            return false;
        }
        console.log(adGroupInfo);

        requestSaveAd({
            'code': code, // 일반등록: 0, 수동등록: 1
            'agroupName': adGroupInfo,
            'kwds': keywordInfo,
            'itemId': itemInfo.itemId,
        }).then(res => {
            if (res.data === null || res.data.sucscess === 'false') {
                errorAlert(res.error.message)
                console.log(res.sucscess)
                return false;
            } else {
                successReloadAlert("광고(자동) 등록 완료! :-)", window.location.reload())
            }

        }).catch(error => {
            console.log(error)
            errorAlert(error.message)
        })

    }

    return (
        <>
            <div className="box-footer">
                <div className="box-center">
                    <Button type="primary" size="large" className="pink" onClick={() => regAdEvent(0)}>
                        <span>광고 등록(자동 검수 키워드)</span>
                    </Button>
                    <Button size="large" className="pink" onClick={() => regAdEvent(1)}>
                        <span>광고 등록(수동 검수 키워드)</span>
                    </Button>
                </div>
            </div>
        </>
    );
}

export default RegAdBtn;