import React from 'react';
import { Button, Table, TableColumnsType } from 'antd';

export type keyword = {
    kwdName: string,
    sellPossKwdYn: number,
    manualCnrKwdYn: number
}

const AdKeywordList = () => {
    const columns: TableColumnsType<keyword> = [
        { title: '키워드명', dataIndex: 'kwdName', key: 'kwdName', align: 'center' },
        { title: '입찰가', dataIndex: 'sellPossKwdYn', key: 'sellPossKwdYn', align: 'center' },
        { title: '키워드 삭제', dataIndex: 'manualCnrKwdYn', key: 'manualCnrKwdYn', align: 'center' },
    ];
    return (
        <>
            <section className="wrap-section wrap-datagrid">
                <div className="box-header">
                    <div className="box-left">
                        <h2 className="fz-24 fc-gray-700">광고 키워드 리스트</h2>
                    </div>
                    <div className="box-right">
                        <Button className="pink">
                            <span>키워드 추가</span>
                        </Button>
                        <Button className="gray">
                            <span>입찰가 일괄 설정</span>
                        </Button>
                    </div>
                </div>
                <div className="box-body">
                    <Table
                        // dataSource={items}
                        columns={columns}
                        bordered={true}
                        pagination={{ pageSize: 10 }}
                    >

                    </Table>
                    {/* <div className="ant-table-wrapper css-dev-only-do-not-override-1me4733">
                        <div className="ant-spin-nested-loading css-dev-only-do-not-override-1me4733">
                            <div className="ant-spin-container">
                                <div className="ant-table ant-table-bordered ant-table-empty">
                                    <div className="ant-table-container">
                                        <div className="ant-table-content">
                                            <table style="table-layout: auto;">
                                                <colgroup />
                                                <thead className="ant-table-thead">
                                                    <tr>
                                                        <th className="ant-table-cell" scope="col" style="text-align: center;">키워드명</th>
                                                        <th className="ant-table-cell" scope="col" style="text-align: center;">입찰가</th>
                                                        <th className="ant-table-cell" scope="col" style="text-align: center;">키워드 삭제</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="ant-table-tbody">
                                                    <tr className="ant-table-placeholder">
                                                        <td className="ant-table-cell" colspan="3">
                                                            <div className="css-dev-only-do-not-override-1me4733 ant-empty ant-empty-normal">
                                                                <div className="ant-empty-image">
                                                                    <svg width="64" height="41" viewBox="0 0 64 41" xmlns="http://www.w3.org/2000/svg">
                                                                        <g transform="translate(0 1)" fill="none" fill-rule="evenodd">
                                                                            <ellipse fill="#f5f5f5" cx="32" cy="33" rx="32" ry="7" />
                                                                            <g fill-rule="nonzero" stroke="#d9d9d9">
                                                                                <path d="M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z" />
                                                                                <path d="M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z" fill="#fafafa" />
                                                                            </g>
                                                                        </g>
                                                                    </svg>
                                                                </div>
                                                                <div className="ant-empty-description">No data</div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
        </>
    );
}

export default AdKeywordList;