import './added.css'
import {MdOutlineCalendarMonth} from "react-icons/md";
import {BiBell} from "react-icons/bi";
import {TbRefresh} from "react-icons/tb";
import {useState} from "react";
import ReactDOM from "react-dom/client";
import {createPortal} from "react-dom";

export const Added = ({onHandleAdd}) => {
    const [checked, setChecked] = useState(true);
    const [text, setText] = useState("");
    const [datePortal, setDatePortal] = useState(false);
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
    }
    return (
        <>
            <div className="add">
                <div className="first-add">
                    <span id="circle"></span>
                    <input type="text" id="task" placeholder="添加任务" value={text} onChange={handleInput}/>
                </div>
                <div className="second-add">
                    <span id="calendar" onClick={toggleCalendar}><MdOutlineCalendarMonth/></span>
                    <span><BiBell/></span>
                    <span><TbRefresh/></span>
                    <input type="button" id="add-task" value="添加"
                           disabled={checked}
                           onClick={handleAdd}
                    />
                </div>
            </div>
            {/* portal */}
            {datePortal &&
                createPortal(
                    <div style={{position: "absolute", top: "0", left: "0"}}>
                        <ul>
                            <li>Option 1</li>
                            <li>Option 2</li>
                            <li>Option 3</li>
                        </ul>
                    </div>,
                    document.getElementById('calendar')
                )}
        </>
    )
}