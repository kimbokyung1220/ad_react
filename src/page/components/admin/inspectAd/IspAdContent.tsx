import React from 'react';
import Body from '../../../layout/Body';
import ContentHeader from '../../../layout/content/ContentHeader';
import SearchSubToIspKwd from './component/SearchSubToIspKwd';
import SubToAdList from './component/SubToAdList';

const IspAdContent = () => {
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
                            <SubToAdList />
                        </div>
                    </div>
                </div>
            </Body>
        </>
    );
}

export default IspAdContent;