import {Added} from "../addComponent/added";
import {TaskComponent} from "../taskComponent/taskComponent";
import {AiOutlineStar} from "react-icons/ai";
import {BiDotsHorizontal} from "react-icons/bi";
import './important.css'
import {DoneTaskComponent} from "../doneTaskComponent/doneTaskComponent";

export const Important = ({data, upHandleAdd, upHandleTodoOrDone}) => {
    const todoData = data['todo'];
    const doneData = data['done']
    const significantHandleAdd = (text) => {
        upHandleAdd({
            text: text,
            taskType: "significant"
        })
    }
    const toggleTodoOrDone = (para) => {
        upHandleTodoOrDone(
            {...para, taskType: "significant"}
        )
    }
    return(
        <>
            <div className="significant-header">
                <AiOutlineStar />
                <span>重要</span>
                <BiDotsHorizontal />
            </div>
            <Added onHandleAdd={significantHandleAdd}/>
            <hr/>
            {todoData.map((node, index) => (
                <TaskComponent
                    key={`daily-task-${index}`}
                    text={node}
                    status={false}
                    upToggleTodoToDone={toggleTodoOrDone}
                />
            ))}
            <hr/>
            <DoneTaskComponent
                data={doneData}
                onToggleTodoOrDone={toggleTodoOrDone}
                type={"significant"}
            />
        </>
    )
}