import {BsFillCheckCircleFill} from "react-icons/bs";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";

export const DoneTaskComponent = ({text, status, upToggleDoneToTodo}) => {
    const toggleTodoOrDone = () => {
        upToggleDoneToTodo({
            content: text,
            type: false
        })
    }
    return(
        <div className="singleTask">
            <span className="add-circle"
                  onClick={toggleTodoOrDone}
            >
                <BsFillCheckCircleFill />
            </span>
            <span className="up">{text}</span>
            <span className="down">test</span>
            <span className="d-star">{status ? <AiOutlineStar/> : <AiFillStar />}</span>
        </div>
    )
}