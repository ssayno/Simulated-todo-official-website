import {Added} from "../addComponent/added";
import {TaskComponent} from "../taskComponent/taskComponent";
import {BsPerson} from "react-icons/bs";
import {BiDotsHorizontal} from "react-icons/bi";
import './assign.css'
import {DoneTaskComponent} from "../doneTaskComponent/doneTaskComponent";

export const Assign = ({data, upHandleAdd, upHandleTodoOrDone}) => {
    const todoData = data['todo'];
    const doneData = data['done']
    const assignHandleAdd = (text) => {
        upHandleAdd({
            text: text,
            taskType: "assign"
        })
    }
    const toggleTodoOrDone = (para) => {
        upHandleTodoOrDone(
            {...para, taskType: "assign"}
        )
    }
    return(
        <>
            <div className="assign-header">
                <BsPerson />
                <span>已分配给我</span>
                <BiDotsHorizontal />
            </div>
            <Added onHandleAdd={assignHandleAdd}/>
            <hr/>
            {todoData.map((node, index) => (
                <TaskComponent
                    key={`daily-task-${index}`}
                    text={node}
                    status={true}
                    upToggleTodoToDone={toggleTodoOrDone}
                />
            ))}
            <hr/>
            {doneData.map((node, index) => (
                <DoneTaskComponent
                    key={`daily-task-${index}`}
                    text={node}
                    status={true}
                    upToggleDoneToTodo={toggleTodoOrDone}
                />
            ))}
        </>
    )
}