import {Added} from "../addComponent/added";
import {TaskComponent} from "../taskComponent/taskComponent";
import {VscHome} from "react-icons/vsc";
import {BiDotsHorizontal} from "react-icons/bi";
import './inbox.css';

export const Inbox = ({data, upHandleAdd}) => {
    const inboxHandleAdd = (text) => {
        upHandleAdd({
            text: text,
            taskType: "inbox"
        })
    }
    return(
        <>
            <div className="inbox-header">
                <VscHome />
                <span>任务</span>
                <BiDotsHorizontal />
            </div>
            <Added onHandleAdd={inboxHandleAdd}/>
            {data.map((node, index) => (
                <TaskComponent
                    key={`daily-task-${index}`}
                    text={node}
                    status={true}
                />
            ))}
        </>
    )
}