import { Button, Input } from 'antd';
import React, { useState } from 'react';

const SearchIspKwd = () => {
    const [searchIspKwd, setSearchIspKwd] = useState("")
    return (
        <>
            <section className="wrap-section wrap-tbl">
                <div className="box-header">
                    <div className="box-left">
                        <div className="box-left">
                            <h2 className="fz-24 fc-gray-700">검수 키워드 조회</h2>
                        </div>
                    </div>
                </div>
                <div className="box-body">
                    <div className="tbl">
                        <dl>
                            <dt>
                                <div className="dt-inner">
                                    <span className="fz-15 fc-gray-500">키워드명</span>
                                </div>
                            </dt>
                            <dd>
                                <div className="form-group">
                                    <Input name="itemName" placeholder="키워드명을 입력해주세요."
                                        onChange={(e) => { setSearchIspKwd(e.currentTarget.value); }}
                                        type="text"
                                        value={searchIspKwd}
                                        style={{ width: "500px" }}
                                    // onPressEnter={searchKeyword}
                                    />
                                </div>
                            </dd>
                            <dt>

                            </dt>
                        </dl>
                    </div>
                </div>
                <div className="box-footer">
                    <div className="box-center">
                        <Button className="pink" size="large" type="primary">
                            <span>키워드 조회</span>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SearchIspKwd;