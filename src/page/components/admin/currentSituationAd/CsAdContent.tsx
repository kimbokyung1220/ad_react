import React from 'react';
import Body from '../../../layout/Body';
import ContentHeader from '../../../layout/content/ContentHeader';
import CsAdList from './component/CsAdList';
import DadDetChart from './component/dadDetChart';
import CsDetailData from './component/csDetailData';

const CsAdContent = () => {
    return (
        <>
            <Body>
                <div className="site-layout-content">
                    <div className="inner-content">
                        <>
                            <ContentHeader headerTitle={"광고 현황"} />
                        </>
                        <div className="content-body">
                            <CsAdList />
                            <DadDetChart />
                            <CsDetailData />
                        </div>
                    </div>
                </div>
            </Body>
        </>
    );
}

export default CsAdContent;