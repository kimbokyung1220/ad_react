import { useSelector } from "react-redux"
import { State } from "../../../../state";
import SelectAdGroup from "./SelectAdGroup";

const PrdInfo = () => {
    const itemInfo = useSelector((state: State) => state.itemInfo)
    const adultYn = itemInfo.adultYn === 'YES' ? '성인상품' : '일반상품';

    return (
        <>
            <section className="wrap-section wrap-tbl">
                <div className="box-header">
                    <div className="box-left">
                        <div className="box-left">
                            <h2 className="fz-24 fc-gray-700">선택한 상품 정보</h2>
                        </div>
                    </div>
                </div>
                <div className="box-body">
                    <div className="tbl">
                        <dl>
                            <dt>
                                <div className="dt-inner">
                                    <span className="fz-15 fc-gray-500">상품번호</span>
                                </div>
                            </dt>
                            <dd>
                                <div className="form-group">
                                    <span className="comp-txt">
                                        <span className="table">
                                            <span className="table-cell">
                                                <b className="fz-14 fc-gray-400">{itemInfo.itemNo}</b>
                                            </span>
                                        </span>
                                    </span>
                                </div>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <div className="dt-inner">
                                    <span className="fz-15 fc-gray-500">상품명</span>
                                </div>
                            </dt>
                            <dd>
                                <div className="form-group">
                                    <span className="comp-txt">
                                        <span className="table">
                                            <span className="table-cell">
                                                <b className="fz-14 fc-gray-400">{itemInfo.itemName}</b>
                                            </span>
                                        </span>
                                    </span>
                                </div>
                            </dd>
                        </dl>
                        <dl>
                            <dt>
                                <div className="dt-inner">
                                    <span className="fz-15 fc-gray-500">성인여부</span>
                                </div>
                            </dt>
                            <dd>
                                <div className="form-group">
                                    <span className="comp-txt">
                                        <span className="table">
                                            <span className="table-cell">
                                                <b className="fz-14 fc-gray-400">{adultYn}</b>
                                            </span>
                                        </span>
                                    </span>
                                </div>
                            </dd>
                        </dl>
                    </div>
                </div>
            </section>

            <SelectAdGroup />
        </>
    );
}

export default PrdInfo;