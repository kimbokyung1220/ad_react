import ContentHeader from "../content/ContentHeader";
import ResultPrd from "./component/ResultPrd";
import SearchPrd from "./component/SearchPrd";
import { useRegContent } from "./hooks/useRegContent";

const RegContent = () => {
    const { items } = useRegContent();

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