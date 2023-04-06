import {Added} from "../addComponent/added";
import {TaskComponent} from "../taskComponent/taskComponent";
import {VscHome} from "react-icons/vsc";
import {BiDotsHorizontal} from "react-icons/bi";
import './inbox.css';
import {DoneTaskComponent} from "../doneTaskComponent/doneTaskComponent";

export const Inbox = ({data, upHandleAdd, upHandleTodoOrDone}) => {
    const todoData = data['todo'];
    const doneData = data['done']
    const inboxHandleAdd = (text) => {
        upHandleAdd({
            text: text,
            taskType: "inbox"
        })
    }
    const toggleTodoOrDone = (para) => {
        upHandleTodoOrDone(
            {...para, taskType: "inbox"}
        )
    }
    return(
        <>
            <div className="inbox-header">
                <VscHome />
                <span>任务</span>
                <BiDotsHorizontal />
            </div>
            <Added onHandleAdd={inboxHandleAdd}/>
            {todoData.map((node, index) => (
                <TaskComponent
                    key={`daily-task-${index}`}
                    text={node}
                    status={true}
                    upToggleTodoToDone={toggleTodoOrDone}
                />
            ))}
            <hr/>
            <DoneTaskComponent
                data={doneData}
                onToggleTodoOrDone={toggleTodoOrDone}
                type="inbox"
            />
        </>
    )
}