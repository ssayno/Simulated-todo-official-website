import {MdToday} from "react-icons/md";
import './calendar.css'
export const PopCalendar = () => {
    return(
        <div className={"portal"}>
            <div className={"portal-header"}><span>截止</span></div>
            <hr/>
            <div className="portal-content">
                <div className="today">
                    <MdToday />
                    <span>今天</span>
                </div>
                <div className="tomorrow">
                    <MdToday />
                    <span>明天</span>
                </div>
                <div className="next-week">
                    <MdToday />
                    <span>下周</span>
                </div>
            </div>
            <hr/>
            <div className="choose-time"><span>选择日期</span></div>
        </div>
    )
}