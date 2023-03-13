import './added.css'
import {useState} from "react";
import {BiBell, BiPlus} from "react-icons/bi";
import {TbCircle, TbRefresh} from "react-icons/tb";
import {createPortal} from "react-dom";
import {MdOutlineCalendarMonth} from "react-icons/md";
import {PopCalendar} from "../../../portals/calendar/calendar";
import {PopClock} from "../../../portals/Clock/clock";
import {PopRefresh} from "../../../portals/refresh/refresh";

export const Added = ({onHandleAdd}) => {
    const [checked, setChecked] = useState(true);
    const [text, setText] = useState("");
    const [datePortal, setDatePortal] = useState(false);
    const [clockPortal, setClockPortal] = useState(false);
    const [refreshPortal, setRefreshPortal] = useState(false);
    const [focus, setFocus] = useState(false);
    const handleInput = (evt) => {
        const target = evt.target;
        const value = target.value;
        setText(value);
        if (value.trim()) {
            setChecked(false)
        } else {
            setChecked(true)
        }
    }
    const handleAdd = () => {
        onHandleAdd(text);
        setChecked(true);
        setText("");
    }
    const toggleCalendar = () => {
        setDatePortal(prevState => (
            !prevState
        ))
        setClockPortal(false)
        setRefreshPortal(false)
    }
    const toggleClock = () => {
        setClockPortal(prevState => (
            !prevState
        ))
        setDatePortal(false)
        setRefreshPortal(false)
    }
    const toggleRefresh = () => {
        setRefreshPortal(prevState => (
            !prevState
        ))
        setDatePortal(false)
        setClockPortal(false)
    }
    const keyResponse = (evt) => {
        if(evt.keyCode === 13 && !checked){
            handleAdd();
        }
    }
    return (
        <>
            <div className="add">
                <div className="first-add">
                    <span
                        id="circle-or-plus"
                        onMouseEnter={() => {setFocus(true)}}
                        onMouseLeave={() => {setFocus(false)}}
                    >
                        {focus ? <BiPlus />: <TbCircle />}
                    </span>
                    <input type="text" id="task"
                           placeholder="添加任务" value={text}
                           onChange={handleInput}
                           onKeyDown={keyResponse}
                    />
                </div>
                <div className="second-add">
                    <span id="calendar"
                          onClick={toggleCalendar}
                    ><MdOutlineCalendarMonth/></span>
                    <span id="clock"
                          onClick={toggleClock}
                    ><BiBell/></span>
                    <span id="refresh"
                          onClick={toggleRefresh}
                    ><TbRefresh/></span>
                    <input type="button" id="add-task" value="添加"
                           disabled={checked}
                           onClick={handleAdd}
                    />
                </div>
            </div>
            {/* portal */}
            {datePortal &&
                createPortal(
                    <PopCalendar />,
                    document.getElementById('calendar')
                )}
            {clockPortal &&
                createPortal(
                    <PopClock />,
                    document.getElementById('clock')
                )}
            {refreshPortal &&
                createPortal(
                    <PopRefresh />,
                    document.getElementById('refresh')
                )}
        </>
    )
}