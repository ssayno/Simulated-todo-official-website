import './taskComponent.css'
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import {useState} from "react";
import {BsCheckCircle, BsCircle} from "react-icons/bs";
export const TaskComponent = ({text, status, upToggleTodoToDone, upTagToImportant}) => {
    const [isHover, setIsHover] = useState(false);
    const [tatStatus, setTagStatus] = useState(status);
    const toggleTodoOrDone = () => {
        upToggleTodoToDone({
            content: text,
            type: true
        })
    }
    const tagThisAsImportant = () => {
        let operation;
        if(!tatStatus){
            operation = 'delete';
        }else{
            operation = 'add';
        }
        upTagToImportant({
            content: text,
            doneOrTodo: 'todo',
            operator: operation
        })
        setTagStatus(preState => !preState)
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
            <span className="d-star"
                  onClick={tagThisAsImportant}
            >{tatStatus ? <AiOutlineStar/> : <AiFillStar />}</span>
        </div>
    )
}