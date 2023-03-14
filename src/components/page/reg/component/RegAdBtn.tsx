import React from 'react';
import { Button } from 'antd';
import { useSelector } from "react-redux"
import { State } from "../../../../state";
import { createAd, createKwds } from '../../../../model/axios';

const RegAdBtn = () => {
    const keywordInfo = useSelector((state: State) => state.keywordTableInfo);
    const itemInfo = useSelector((state: State) => state.itemInfo);
    const selectGroup = useSelector((state: State) => state.selectAdGroup);

    const regAdEvent = () => {
        console.log("광고등록 event click");
        if (selectGroup === 0) {
            alert("광고그룹을 선택해 주세요");
            return false;
        }
        if (keywordInfo.length <= 0) {
            alert("키워드를 입력해주세요");
            return false;
        }

        // step1();
        step2();
    }
    // 1. 키워드 등록
    const step1 = () => {
        console.log("[step 1] ====== 키워드 등록")
        keywordInfo.map((info) => {
            createKwds(
                {
                    'kwdName': info.kwdName
                }
            ).then(res => {
                if (res !== null) {
                    console.log("키워드 등록 성공")
                }
            }).catch(error => {
                console.log("광고 등록 시 키워드 저장 error")
                console.log(error)
            })
        });
    }

    // 2. 광고 등록
    const step2 = () => {
        console.log("[step 2] ====== 광고 등록")
        console.log(selectGroup);
        createAd({
            'agroupId': selectGroup,
            'itemId': itemInfo.itemId,
        }).then(res => {
            if (res !== null) {
            

            }
        }).catch(error => {
            console.log("광고 등록 시 error")
            console.log(error)
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