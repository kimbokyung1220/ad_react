import React, { useState } from 'react';
import Body from '../../../layout/Body';
import ContentHeader from '../../../layout/content/ContentHeader';
import SearchSubToIspKwd from './component/SearchSubToIspKwd';
import SubToAdList from './component/SubToAdList';
import CnrProcessModal from "./modal/CnrProcessModal";

const IspAdContent = () => {
    const [cnrProcessModalOpen, setCnrProcessModalOpen] = useState(false);
    return (
        <>
            <Body>
                <div className="site-layout-content">
                    <div className="inner-content">
                        <>
                            <ContentHeader headerTitle={"광고 검수"} />
                        </>
                        <div className="content-body">
                            <SearchSubToIspKwd />
                            <SubToAdList setCnrProcessModalOpen={setCnrProcessModalOpen}/>

                            {/* 모달 */}
                            <CnrProcessModal cnrProcessModalOpen={cnrProcessModalOpen} setCnrProcessModalOpen={setCnrProcessModalOpen}/>
                        </div>
                    </div>
                </div>
            </Body>
        </>
    );
}

export default IspAdContent;