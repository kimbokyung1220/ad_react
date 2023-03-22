import React, { useState } from 'react';
import Body from '../../../layout/Body';
import ContentHeader from '../../../layout/content/ContentHeader';
import NavigateLanding from '../../../NavigateLanding';
import AdGroupInfo from './component/AdGroupInfo';
import UpdateAdGroupNmModal from "./modal/UpdateAdGroupNmModal";

const AdGroupInfoContent = () => {
    const [updateAdGroupNmModalOpen, setUpdateAdGroupNmModalOpen] = useState<boolean>(false);
    const [adGroupName, setAdGroupName] = useState("");
    const [adGroupId, setAdGroupId] = useState(0);

    return (
        <>
            <NavigateLanding>
                <Body>
                    <div className="site-layout-content">
                        <div className="inner-content">
                            <>
                                <ContentHeader headerTitle={"광고 관리"} 
                                />
                            </>
                            <div className="content-body">
                                <AdGroupInfo setUpdateAdGroupNmModalOpen={setUpdateAdGroupNmModalOpen} 
                                             setAdGroupName={setAdGroupName}
                                             setAdGroupId={setAdGroupId}             
                                />

                                <UpdateAdGroupNmModal updateAdGroupNmModalOpen={updateAdGroupNmModalOpen}
                                                      setUpdateAdGroupNmModalOpen={setUpdateAdGroupNmModalOpen} 
                                                      adGroupName={adGroupName}
                                                      adGroupId={adGroupId}
                                />
                            </div>
                        </div>
                    </div>
                </Body>
            </NavigateLanding>
        </>
    );
}

export default AdGroupInfoContent;