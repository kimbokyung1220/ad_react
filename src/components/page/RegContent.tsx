
import React, { useState } from 'react';
import ContentHeader from "../content/ContentHeader";
import ResultPrd from "./reg/component/ResultPrd";
import SearchPrd from "./reg/component/SearchPrd";

export type item = {
    itemNo: string,
    itemName: string,
    adultYn: number,
    itemOrgCost: string,
    itemActYn: number,
    selectBtn: Element
}

const RegContent = () => {
    const [items, setItems] = useState<item[]>([]);
    return (
        <>
            <div className="site-layout-content">
                <div className="inner-content">
                    <ContentHeader />
                    <div className="content-body">
                        <SearchPrd setItems={setItems}/>
                        {items.length > 0  && <ResultPrd items={items}/>}
                        
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegContent;