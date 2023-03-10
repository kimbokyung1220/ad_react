import React from 'react';
import { Button, Select } from "antd";
const Option = Select.Option;

const SelectAdGroup = () => {

    return (
        <>
            <section className="wrap-section wrap-tbl">
                <div className="box-header">
                    <div className="box-left">
                        <h2 className="fz-24 fc-gray-700">광고 그룹 선택</h2>
                    </div>
                    <div className="box-right">
                        <Button type="primary" className="gray" size="large">
                            <span>신규 그룹 생성</span>
                        </Button>
                    </div>
                </div>
                <div className="box-body">
                    <div className="tbl">
                        <dl>
                            <dt>
                                <div className="dt-inner">
                                    <span className="fz-15 fc-gray-500">광고 그룹</span>
                                </div>
                            </dt>
                            <dd>
                                <div className="form-group">
                                    <Select 
                                        style={{ width: "250px" }} 
                                        placeholder="광고그룹을 선택해주세요"
                                        // onChange={handleChange}
                                        onChange={(value) => console.log(`selected ${value}`)}

                                    >
                                        <Option value="광고그룹1">광고그룹1</Option>
                                        <Option value="광고그룹2">광고그룹2</Option>
                                    </Select>
                                </div>
                            </dd>
                        </dl>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SelectAdGroup;