import {Added} from "../addComponent/added";
import {TaskComponent} from "../taskComponent/taskComponent";
import {MdOutlineCalendarMonth} from "react-icons/md";
import {BiDotsHorizontal} from "react-icons/bi";
import './plan.css'

export const Planned = ({data, upHandleAdd}) => {
    const planHandleAdd = (text) => {
        upHandleAdd({
            text: text,
            taskType: "plan"
        })
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