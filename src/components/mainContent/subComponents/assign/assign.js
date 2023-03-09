import {Added} from "../addComponent/added";
import {TaskComponent} from "../taskComponent/taskComponent";
import {BsPerson} from "react-icons/bs";
import {BiDotsHorizontal} from "react-icons/bi";
import './assign.css'

export const Assign = ({data, upHandleAdd}) => {
    const assignHandleAdd = (text) => {
        upHandleAdd({
            text: text,
            taskType: "assign"
        })
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