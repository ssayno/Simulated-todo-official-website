import './sidebar.css'
import {BsPerson, BsStar, BsSun} from "react-icons/bs";
import {Link} from 'react-router-dom'
import {RxCalendar} from "react-icons/rx";
import {VscHome, VscThreeBars} from "react-icons/vsc";

export const SideBar = () => {
    const sideBarContent = [
        "我的一天",
        "重要",
        "计划内",
        "已分配给我",
        "任务"
    ]
    return (
        <div className="sideBar">
            <p className="nav-item"><VscThreeBars className="sideBar-svg-box"/></p>
            <Link className="nav-item" to="/task/myday/" ><BsSun className="sideBar-svg-box"/><span className="sideBar-svg-box">我的一天</span></Link>
            <Link className="nav-item" to="/task/important/"><BsStar className="sideBar-svg-box"/><span className="sideBar-svg-box">重要</span></Link>
            <Link className="nav-item" to="/task/planned/"><RxCalendar className="sideBar-svg-box"/><span className="sideBar-svg-box">计划内</span></Link>
            <Link className="nav-item" to="/task/assigned_to_me/"><BsPerson className="sideBar-svg-box"/><span className="sideBar-svg-box">已分配给我</span></Link>
            <Link className="nav-item" to="/task/inbox/"><VscHome className="sideBar-svg-box"/><span className="sideBar-svg-box">任务</span></Link>
            <hr/>
        </div>
    )
}

const SinglePart = ({name=""}) => {
    // const addActivatedClass = (evt) => {
    //     const target = evt.target;
    //     target.setAttribute('class', 'activatedSinglePart');
    // }
    return(
        <a className="singlePart"><span>{name}</span></a>
    )
}