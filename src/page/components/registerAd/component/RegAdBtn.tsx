import React from 'react';
import { Button } from 'antd';
import { useSelector } from "react-redux"
import { State } from "../../../../state";
import { requestSaveAd, requesSaveAgroup } from '../../../../model/axios';
import { errorAlert, successAlert } from '../../../alerts/alert';
import { ok } from 'assert';

const RegAdBtn = () => {
    const keywordInfo = useSelector((state: State) => state.keywordTableInfo);
    const itemInfo = useSelector((state: State) => state.itemInfo);
    const adGroupInfo = useSelector((state: State) => state.selectedAdGroup)


    const regAdEvent = () => {
        console.log(adGroupInfo);
        if (adGroupInfo === "") {
            alert("광고그룹을 선택해 주세요");
            return false;
        }
        if (keywordInfo.length <= 0) {
            alert("키워드를 입력해주세요");
            return false;
        }
        console.log(adGroupInfo);

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
                successAlert("광고 등록 완료! :-)")
                return window.location.reload();
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
                    <Button type="primary" size="large" className="pink" onClick={regAdEvent}>
                        <span>광고 등록</span>
                    </Button>
                </div>
            </div>
        </>
    );
}

export default RegAdBtn;