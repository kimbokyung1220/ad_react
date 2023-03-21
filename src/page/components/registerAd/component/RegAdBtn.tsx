import React from 'react';
import { Button } from 'antd';
import { useSelector } from "react-redux"
import { State } from "../../../../state";
import { requestSaveAd, requesSaveAgroup } from '../../../../model/axios';

const RegAdBtn = () => {
    const keywordInfo = useSelector((state: State) => state.keywordTableInfo);
    const itemInfo = useSelector((state: State) => state.itemInfo);
    const adGroupInfo = useSelector((state: State) => state.selectedAdGroup)


    const regAdEvent = () => {
        console.log("광고등록 event click");
        if (adGroupInfo === "") {
            alert("광고그룹을 선택해 주세요");
            return false;
        }
        if (keywordInfo.length <= 0) {
            alert("키워드를 입력해주세요");
            return false;
        }

        // 1. 광고그룹 저장
        requesSaveAgroup({ 'agroupName': adGroupInfo })
            .then(res => {
                if (res !== null) {
                    console.log("광고그룹 생성")
                    console.log(res.data)
                    // const adGroupId = ;
                    resAdEvent(res.data.agroupId);
                }
            }).catch(error => {
                console.log("login error");
                console.log(error);

            })

    }

    const resAdEvent = (agroupId: number) => {
        // 광고, 키워드 등록
        requestSaveAd({
            'agroupId': agroupId,
            'kwds': keywordInfo,
            'itemId': itemInfo.itemId,
        }).then(res => {
            if (res !== null) {
                alert("광고를 등록 완료 했습니다! :)")
                window.location.reload();
            }
        }).catch(error => {
            console.log("login error");
            console.log(error);

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