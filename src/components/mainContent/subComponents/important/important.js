import {Added} from "../addComponent/added";
import {TaskComponent} from "../taskComponent/taskComponent";
import {AiOutlineStar} from "react-icons/ai";
import {BiDotsHorizontal} from "react-icons/bi";
import './important.css'

export const Important = ({data, upHandleAdd}) => {
    const significantHandleAdd = (text) => {
        upHandleAdd({
            text: text,
            taskType: "significant"
        })
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
            {data.map((node, index) => (
                <TaskComponent
                    key={`daily-task-${index}`}
                    text={node}
                    status={false}
                />
            ))}
        </>
    )
}