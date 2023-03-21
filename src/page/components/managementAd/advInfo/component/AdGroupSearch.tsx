import React, { useEffect, useState, Dispatch } from 'react';
import { Button, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showAgroupItemList } from '../../../../../model/axios';
import { actionCreators } from '../../../../../state';
interface Props{
    setIsAdGroupName: Dispatch<string>
}

const AdGroupSearch = ({setIsAdGroupName}:Props) => {
    const [adGroupName, setAdGroupName] = useState<string>("");
    const dispatch = useDispatch();
    const { getAdgroupItem } = bindActionCreators(actionCreators, dispatch);

    const searchAdGroup = () => {
        const data = {
            'agroupName': adGroupName,
        };
        showAgroupItemList(data)
            .then((res) => getAdgroupItem(res))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        searchAdGroup()
    }, [])

    return (
        <>
            <section className="wrap-section wrap-tbl">
                <div className="box-header">
                    <div className="box-left">
                        <div className="box-left">
                            <h2 className="fz-24 fc-gray-700">그룹 검색</h2>
                        </div>
                    </div>
                </div>
                <div className="box-body">
                    <div className="tbl">
                        <dl>
                            <dt>
                                <div className="dt-inner">
                                    <span className="fz-15 fc-gray-500">그룹 명 검색</span>
                                </div>
                            </dt>
                            <dd>
                                <div className="form-group">
                                    <Input name="itemName" placeholder="그룹명을 입력하세요."
                                        onChange={(e) => {setAdGroupName(e.currentTarget.value); setIsAdGroupName(e.currentTarget.value)}}
                                        type="text"
                                        // value={itemName}
                                        style={{ width: "500px" }}
                                        onPressEnter={searchAdGroup}
                                    />
                                </div>
                            </dd>
                            <dt>
                                <div className="dt-inner">
                                    <Button className="pink" size="large" type="primary"
                                    onClick={searchAdGroup}
                                    >
                                        <span>그룹 조회</span>
                                    </Button>
                                </div>
                            </dt>
                        </dl>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AdGroupSearch;