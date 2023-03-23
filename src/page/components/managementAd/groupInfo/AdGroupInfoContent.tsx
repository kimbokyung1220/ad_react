import React, { useState } from 'react';
import Body from '../../../layout/Body';
import ContentHeader from '../../../layout/content/ContentHeader';
import NavigateLanding from '../../../NavigateLanding';
import AdGroupInfo from './component/AdGroupInfo';
import ItemList from './component/ItemList';
import ItemSearch from './component/ItemSearch';
import UpdateAdGroupNmModal from "./modal/UpdateAdGroupNmModal";

const AdGroupInfoContent = () => {
    const [updateAdGroupNmModalOpen, setUpdateAdGroupNmModalOpen] = useState<boolean>(false);
    const [adGroupName, setAdGroupName] = useState("");
    const [adGroupId, setAdGroupId] = useState(0);

    const [itemNo, setItemNo] = useState("");
    const [itemName, setItemName] = useState("");


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
                                <ItemSearch setItemNo={setItemNo} setItemName={setItemName}/>
                                <ItemList itemNo={itemNo} itemName={itemName}/>
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