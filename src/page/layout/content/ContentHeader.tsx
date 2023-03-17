import { type } from "os";

interface titleProps {
    headerTitle: string
}

const ContentHeader = ({ headerTitle }: titleProps) => {
    return (
        <>
            <div className="content-header">
                <h1 className="fz-32 fc-gray-900">{headerTitle}</h1>
            </div>
        </>
    );
}

export default ContentHeader;