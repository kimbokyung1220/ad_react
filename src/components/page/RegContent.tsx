import { useState } from "react";
import ContentHeader from "./content/ContentHeader";
import AdKeywordList from "./reg/component/AdKeywordList";
import PrdInfo from "./reg/component/PrdInfo";
import ResultPrd from "./reg/component/ResultPrd";
import SearchPrd from "./reg/component/SearchPrd";
import SelectAdGroup from "./reg/component/SelectAdGroup";

export type item = {
    itemNo: string,
    itemName: string,
    adultYn: number,
    itemOrgCost: number,
    itemActYn: number
}

const RegContent = () => {

    return (
        <>
            <div className="site-layout-content">
                <div className="inner-content">
                    <ContentHeader />
                    <div className="content-body">
                        {/* <SearchPrd setItems={setItems}/>
                        {items.length > 0  && <ResultPrd items={items}/>} */}
                        <SearchPrd />
                        <ResultPrd />
                        <PrdInfo />
                        <SelectAdGroup />
                        <AdKeywordList />
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegContent;