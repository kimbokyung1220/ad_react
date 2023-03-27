import React from 'react';
import Body from '../../../layout/Body';
import ContentHeader from '../../../layout/content/ContentHeader';
import IspKwdList from './component/IspKwdList';
import SearchIspKwd from './component/SearchIspKwd';

const IspKwdContent = () => {
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
                            <IspKwdList />
                        </div>
                    </div>
                </div>
            </Body>
        </>
    );
}

export default IspKwdContent;