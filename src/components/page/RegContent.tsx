import ContentHeader from "./content/ContentHeader";
import ResultPrd from "./reg/component/ResultPrd";
import SearchPrd from "./reg/component/SearchPrd";
import { useSelector } from "react-redux"
import { State } from "../../state";

export type item = {
    key: number,
    itemId: number,
    itemNo: string,
    itemName: string,
    adultYn: string,
    itemOrgCost: number,
    itemActYn: string
}

const RegContent = () => {
    const items = useSelector((state: State) => state.item)

    return (
        <>
            <div className="site-layout-content">
                <div className="inner-content">
                    <>
                    <ContentHeader />
                    </>
                    <div className="content-body">
                        <SearchPrd />
                        {items.length > 0 && <ResultPrd />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default RegContent;