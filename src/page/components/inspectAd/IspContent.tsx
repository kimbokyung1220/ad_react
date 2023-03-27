import React from 'react';
import Body from "../../layout/Body";
import ContentHeader from "../../layout/content/ContentHeader";
import NavigateLanding from "../../NavigateLanding";

const IspContent = () => {
    return (
        <>
            <NavigateLanding>
                <Body>
                    <div className="site-layout-content">
                        <div className="inner-content">
                            <>
                                <div className="content-header">
                                    <h1 className="fz-32 fc-gray-900">광고 검수</h1>
                                </div>
                                {/* <ContentHeader /> */}
                            </>
                            <div className="content-body">
                                <h1> 검수페이지 제작중...</h1>
                            </div>
                        </div>
                    </div>
                </Body>
            </NavigateLanding>
        </>
    );
}

export default IspContent;