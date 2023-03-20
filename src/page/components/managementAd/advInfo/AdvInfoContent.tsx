import React from 'react';
import Body from '../../../layout/Body';
import ContentHeader from '../../../layout/content/ContentHeader';
import NavigateLanding from '../../../NavigateLanding';
import AdGroupList from './component/AdGroupList';
import AdGroupSearch from './component/AdGroupSearch';
import AdvInfo from "./component/AdvInfo";

const AdvInfoContent = () => {
    return (
        <>
            <NavigateLanding>
                <Body>
                    <div className="site-layout-content">
                        <div className="inner-content">
                            <>
                                <ContentHeader headerTitle={"광고 관리"} />
                            </>
                            <div className="content-body">
                                <AdvInfo />
                                <AdGroupSearch />
                                <AdGroupList />
                            </div>
                        </div>
                    </div>
                </Body>
            </NavigateLanding>
        </>
    );
}

export default AdvInfoContent;