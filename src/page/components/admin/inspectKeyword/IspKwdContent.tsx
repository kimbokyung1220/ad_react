import React, { useState } from 'react';
import Body from '../../../layout/Body';
import ContentHeader from '../../../layout/content/ContentHeader';
import IspKwdList from './component/IspKwdList';
import SearchIspKwd from './component/SearchIspKwd';
import SubToIspKwdModal from './modal/SubToIspKwdModal';

const IspKwdContent = () => {
    const [ispKwdModalOpen, setIspKwdModalOpen] = useState(false);

    return (
        <>
            <Body>
                <div className="site-layout-content">
                    <div className="inner-content">
                        <>
                            <ContentHeader headerTitle={"키워드 검수"} />
                        </>
                        <div className="content-body">
                            <SearchIspKwd />
                            <IspKwdList setIspKwdModalOpen={setIspKwdModalOpen} /> 
                            
                            {/* 모달 */}
                            <SubToIspKwdModal ispKwdModalOpen={ispKwdModalOpen} setIspKwdModalOpen={setIspKwdModalOpen}/>
                        </div>
                    </div>
                </div>
            </Body>
        </>
    );
}

export default IspKwdContent;