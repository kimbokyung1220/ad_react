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

        step2();
    }
    // // 1. 광고그룹 저장
    // const step1 = () => {
    //      createAgroup(
    //         {
    //             'agroupName': newAdGroupName
    //         }
    //     ).then(res => {
    //         if (res !== null) {
    //             console.log("광고그룹 생성")
    //             console.log(res)
    //             setIsModalOpen(false)
    //             setNewAdGroupName("")
    //         }
    //     }).catch(error => {
    //         console.log("login error");
    //         console.log(error);

    //     })
    // }


    // 1. 광고 
    const step2 = () => {
        console.log("[step 1] ====== 광고 등록")
        console.log(selectGroup);
        keywordInfo.map((info) => {
            createAd({
                'agroupId': selectGroup,
                'itemId': itemInfo.itemId,
                'kwdName': info.kwdName
            }).then(res => {
                if (res !== null) {

                }
            }).catch(error => {
                console.log("광고 등록 시 error")
                console.log(error)
            })
        });
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