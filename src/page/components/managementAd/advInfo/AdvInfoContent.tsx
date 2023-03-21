import React, { useState } from 'react';
import Body from '../../../layout/Body';
import ContentHeader from '../../../layout/content/ContentHeader';
import NavigateLanding from '../../../NavigateLanding';
import AdGroupList from './component/AdGroupList';
import AdGroupSearch from './component/AdGroupSearch';
import AdvInfo from "./component/AdvInfo";
import AdGroupModal from "./modal/AdGroupModal";
import DayBudgetModal from "./modal/DayBudgetModal";

const AdvInfoContent = () => {
    const [adGroupName, setIsAdGroupName] = useState<string>("");
    const [dayLimitBudgetModalOpen, setDayLimitBudgetModalOpen] = useState<boolean>(false);
    const [adGroupModalOpen, setAdGroupModalOpen] = useState<boolean>(false);

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
                                <AdvInfo setDayLimitBudgetModalOpen={setDayLimitBudgetModalOpen}/>
                                <AdGroupSearch setIsAdGroupName={setIsAdGroupName}/>
                                <AdGroupList adGroupName={adGroupName} setAdGroupModalOpen={setAdGroupModalOpen}/>
                                <DayBudgetModal dayLimitBudgetModalOpen={dayLimitBudgetModalOpen} setDayLimitBudgetModalOpen={setDayLimitBudgetModalOpen}/>
                                <AdGroupModal adGroupModalOpen={adGroupModalOpen} setAdGroupModalOpen={setAdGroupModalOpen}/>
                            </div>
                        </div>
                    </div>
                </Body>
            </NavigateLanding>
        </>
    );
}

export default AdvInfoContent;