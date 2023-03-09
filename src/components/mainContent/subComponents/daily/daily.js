import {Added} from "../addComponent/added";
import {TaskComponent} from "../taskComponent/taskComponent";
import {BiDotsHorizontal} from "react-icons/bi";
import './daily.css'

export const Daily = ({data, upHandleAdd, icon, headerText}) => {
    const dailyHandleAdd = (text) => {
        upHandleAdd({
            text: text,
            taskType: "daily"
        })
    }
    const getCurrentTime = () => {
        const months = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
        const days = ['日', '一', '二', '三', '四', '五', '六'];
        const now = new Date();
        const month = months[now.getUTCMonth()];
        const day = `星期${days[now.getDay()]}`;
        const date = `${now.getDate()}日`;
        return `${month} ${date} ${day}`
    }
    return (
        <>
            <div className={"daily-header"}>
                {icon}<span>{headerText}</span><BiDotsHorizontal />
            </div>
            <div>
                <span id={"daily-time"}>{getCurrentTime()}</span>
            </div>
            <Added onHandleAdd={dailyHandleAdd}/>
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