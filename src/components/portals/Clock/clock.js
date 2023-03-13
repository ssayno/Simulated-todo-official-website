import './clock.css'
import {CiClock2} from "react-icons/ci";
export const PopClock = () => {
    return(
        <div className={"portal"}>
            <div className={"portal-header"}><span>截止</span></div>
            <hr/>
            <div className="portal-content">
                <div className="today">
                    <CiClock2 />
                    <span>今天晚些时候</span>
                </div>
                <div className="tomorrow">
                    <CiClock2 />
                    <span>明天</span>
                </div>
                <div className="next-week">
                    <CiClock2 />
                    <span>下周</span>
                </div>
            </div>
            <hr/>
            <div className="choose-time"><span>选择日期</span></div>
        </div>
    )
}