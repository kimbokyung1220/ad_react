import React, { useState } from 'react';
import { ispAdKwdList, ispAdKwdListDefaultValue } from '../../../../type/dadDet';
import Body from '../../../layout/Body';
import ContentHeader from '../../../layout/content/ContentHeader';
import SearchSubToIspKwd from './component/SearchSubToIspKwd';
import SubToAdList from './component/SubToAdList';
import CnrProcessModal from "./modal/CnrProcessModal";

const IspAdContent = () => {
    const [cnrProcessModalOpen, setCnrProcessModalOpen] = useState(false);
    // 모달창open -> 검수처리 할 광고 상세조회 api 호출을 위해 사용
    const [recode, setRecode] = useState<ispAdKwdList>(ispAdKwdListDefaultValue);

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
                            <SubToAdList setCnrProcessModalOpen={setCnrProcessModalOpen} setRecode={setRecode}/>

                            {/* 모달 */}
                            <CnrProcessModal cnrProcessModalOpen={cnrProcessModalOpen} 
                                             setCnrProcessModalOpen={setCnrProcessModalOpen}
                                             recode={recode}                 
                            />
                        </div>
                    </div>
                </div>
            </Body>
        </>
    );
}

export default IspAdContent;