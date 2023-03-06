import './header.css'
import {AiFillSetting, AiOutlineSearch} from "react-icons/ai";
import {MdOutlineQuestionMark} from "react-icons/md";
import {IoMdPaperPlane} from "react-icons/io";
import {RxPerson} from "react-icons/rx";
import {TbGridDots} from "react-icons/tb";

export const Header = () => {
    return(
        <div id="header">
            <div className="left-container">
                <TbGridDots className="svg-box"/>
                <span className="svg-box">To do</span>
            </div>
            <div className="searchBar">
                <i><AiOutlineSearch className="svg-box searchIcon"/></i>
                <input type="search" id="searchBox"/>
            </div>
            <div className="right-container">
                <span><AiFillSetting className="svg-box" /></span>
                <span><MdOutlineQuestionMark className="svg-box" /></span>
                <span><IoMdPaperPlane className="svg-box" /></span>
                <span><RxPerson className="svg-box" /></span>
            </div>
        </div>
    )
}