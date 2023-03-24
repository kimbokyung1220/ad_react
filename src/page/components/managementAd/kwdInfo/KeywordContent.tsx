import React, { useState } from 'react';
import Body from "../../../layout/Body";
import ContentHeader from "../../../layout/content/ContentHeader";
import NavigateLanding from "../../../NavigateLanding";
import KeywordList from "./component/KeywordList";
import KeywordSearch from "./component/KeywordSearch";

const KeywordContent = () => {
    const [keywordName, setKeywordName] = useState<string>("");
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
                                <KeywordSearch setKeywordName={setKeywordName}/>
                                <KeywordList keywordName={keywordName}/>
                            </div>
                        </div>
                    </div>
                </Body>
            </NavigateLanding>
        </>
    );
}

export default KeywordContent;