import {BsChevronDown, BsChevronRight, BsFillCheckCircleFill} from "react-icons/bs";
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
import './doneTaskComponent.css'
import {useState} from "react";


export const DoneTaskComponent = ({data, onToggleTodoOrDone, type}) => {
    const length = data.length;
    const status = type !== "significant";
    const [expand, setExpand] = useState(false);
    const expandDoneComponent = () => {
        setExpand(prevState => !prevState)
    }
    const singleComponentSet = data.map((node, index) => (
        <SingleDoneTaskComponent
            key={`${type}-${index}`}
            text={node}
            status={status}
            upToggleDoneToTodo={onToggleTodoOrDone}
        />
    ))
    return(
        <>
            <div className="done-header">
                <span className="done-down-arrow"
                      onClick={expandDoneComponent}
                >
                    {
                        expand ? <BsChevronDown style={{ display: 'block' }}/>
                            : <BsChevronRight style={{ display: 'block' }}/>
                    }
                </span>
                <span className="done-header-name">已完成</span>
                <span className="done-length">{length || null}</span>
            </div>
            {
                expand && singleComponentSet
            }
        </>


    )
}

export const SingleDoneTaskComponent = ({text, status, upToggleDoneToTodo}) => {
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