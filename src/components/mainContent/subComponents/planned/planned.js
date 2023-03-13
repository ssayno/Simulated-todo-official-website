import {Added} from "../addComponent/added";
import {TaskComponent} from "../taskComponent/taskComponent";
import {MdOutlineCalendarMonth} from "react-icons/md";
import {BiDotsHorizontal} from "react-icons/bi";
import './plan.css'
import {DoneTaskComponent} from "../doneTaskComponent/doneTaskComponent";

export const Planned = ({data, upHandleAdd, upHandleTodoOrDone}) => {
    const todoData = data['todo'];
    const doneData = data['done']
    const planHandleAdd = (text) => {
        upHandleAdd({
            text: text,
            taskType: "plan"
        })
    }
    const toggleTodoOrDone = (para) => {
        upHandleTodoOrDone(
            {...para, taskType: "plan"}
        )
    }
    return(
        <>
            <div className="plan-header">
                <MdOutlineCalendarMonth />
                <span>计划内</span>
                <BiDotsHorizontal />
            </div>
            <Added onHandleAdd={planHandleAdd}/>
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