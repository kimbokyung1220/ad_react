import { Input, Button } from 'antd';
import { useSearchPrd } from '../hooks/useSearchPrd';

const SearchPrd = () => {
    const { itemNo, setItemNo, itemName, setItemName, searchEvent } = useSearchPrd();

    return (
        <>
            <section className="wrap-section wrap-tbl">
                <div className="box-header">
                    <div className="box-left">
                        <div className="box-left">
                            <h2 className="fz-24 fc-gray-700">상품 조회</h2>
                        </div>
                    </div>
                </div>
                <div className="box-body">
                    <div className="tbl">
                        <dl>
                            <dt>
                                <div className="dt-inner">
                                    <span className="fz-15 fc-gray-500">상품명</span>
                                </div>
                            </dt>
                            <dd>
                                <div className="form-group">
                                    <Input name="itemName" placeholder="상품명을 입력하세요."
                                        onChange={(e) => setItemName(e.currentTarget.value)}
                                        type="text"
                                        value={itemName}
                                        style={{ width: "500px" }}
                                        onPressEnter={searchEvent}
                                    />
                                </div>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <div className="dt-inner">
                                    <span className="fz-15 fc-gray-500">상품번호</span>
                                </div>
                            </dt>
                            <dd>
                                <div className="form-group">
                                    <Input name="itemNo" placeholder="상품번호을 입력하세요."
                                        onChange={(e) => setItemNo(e.currentTarget.value)}
                                        type="text"
                                        value={itemNo}
                                        style={{ width: "500px" }}
                                        onPressEnter={searchEvent}
                                    />
                                </div>
                            </dd>
                        </dl>
                    </div>
                </div>
                <div className="box-footer">
                    <div className="box-center">
                        <Button className="pink" size="large" type="primary" onClick={searchEvent}>
                            <span>조회</span>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SearchPrd;