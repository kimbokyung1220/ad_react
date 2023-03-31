import React from 'react';
import Body from "../../../layout/Body";
import ContentHeader from "../../../layout/content/ContentHeader";
import RegTask from "./component/regTask";
import TaskList from "./component/taskList";

const TaskMngContent = () => {
    return (
        <>
            <Body>
                <div className="site-layout-content">
                    <div className="inner-content">
                        <>
                            <ContentHeader headerTitle={"대량 관리"} />
                        </>
                        <div className="content-body">
                            <RegTask />
                            <TaskList />
                        </div>
                    </div>
                </div>
            </Body>
        </>
    );
}

export default TaskMngContent;