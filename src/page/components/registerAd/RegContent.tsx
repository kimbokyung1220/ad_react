import Body from "../../layout/Body";
import NavigateLanding from "../../NavigateLanding";
import ContentHeader from "../../layout/content/ContentHeader";
import ResultPrd from "./component/ResultPrd";
import SearchPrd from "./component/SearchPrd";
import { useRegContent } from "./hooks/useRegContent";

const RegContent = () => {
    const { items } = useRegContent();

    return (
        <>
            <NavigateLanding>
                <Body>
                    <div className="site-layout-content">
                        <div className="inner-content">
                            <>
                                <ContentHeader headerTitle={"광고 등록"} />
                            </>
                            <div className="content-body">
                                <SearchPrd />
                                {items.length > 0 && <ResultPrd />}
                            </div>
                        </div>
                    </div>
                </Body>
            </NavigateLanding>
        </>
    );
}

export default RegContent;