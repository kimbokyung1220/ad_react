import React from 'react';
import Body from "../../layout/Body";
import ContentHeader from "../../layout/content/ContentHeader";
import NavigateLanding from "../../NavigateLanding";
import AdvInfo from "./component/AdvInfo";

const MngContent = () => {
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

                            </div>
                        </div>
                    </div>
                </Body>
            </NavigateLanding>
        </>
    );
}

export default MngContent;