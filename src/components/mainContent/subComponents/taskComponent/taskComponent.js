import './taskComponent.css'
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {useState} from "react";
import {BsCheckCircle, BsCircle} from "react-icons/bs";
export const TaskComponent = ({text, status, upToggleTodoToDone}) => {
    const [isHover, setIsHover] = useState(false);
    const toggleTodoOrDone = () => {
        upToggleTodoToDone({
            content: text,
            type: true
        })
    }
    return(
        <div className="singleTask">
            <span className="add-circle"
                  onMouseEnter={() => setIsHover(true)}
                  onMouseLeave={() => setIsHover(false)}
                  onClick={toggleTodoOrDone}
            >
                {isHover ? <BsCheckCircle /> : <BsCircle />}
            </span>
            <span className="up">{text}</span>
            <span className="down">test</span>
            <span className="d-star">{status ? <AiOutlineStar/> : <AiFillStar />}</span>
        </div>
    )
}