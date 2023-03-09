import './taskComponent.css'
import {AiFillStar, AiOutlineStar} from "react-icons/ai";
export const TaskComponent = ({text, status}) => {
    return(
        <div className="singleTask">
            <input type="checkbox" />
            <span className="up">{text}</span>
            <span className="d-star">{status ? <AiOutlineStar/> : <AiFillStar />}</span>
        </div>
    )
}