import './header.css'
import {AiFillSetting, AiOutlineSearch} from "react-icons/ai";
import {MdOutlineQuestionMark} from "react-icons/md";
import {IoMdPaperPlane} from "react-icons/io";
import {RxPerson} from "react-icons/rx";
import {TbGridDots} from "react-icons/tb";
import {useState} from "react";
import {createPortal} from "react-dom";

export const Header = () => {
    const [setting, setSetting] = useState(false);
    const [help, setHelp] = useState(false);
    const [func, setFunc] = useState(false);
    const [person, setPerson] = useState(false);
    const handleSettings = () => {
        setSetting(prevState => !prevState)
    }
    const handleHelp = () => {
        setHelp(prevState => !prevState)
    }
    const handleFunc = () => {
        setFunc(prevState => !prevState)
    }
    const handlePerson = () => {
        setPerson(prevState => !prevState)
    }
    return(
        <div id="header">
            <div className="left-container">
                <TbGridDots className="svg-box"/>
            </div>
            <div className="searchBar">
                <i><AiOutlineSearch className="svg-box searchIcon"/></i>
                <input type="search" id="searchBox"/>
            </div>
            <div className="right-container">
                <span id={"setting"} onClick={handleSettings}>
                    <AiFillSetting className="svg-box" />
                </span>
                <span id={"help"} onClick={handleHelp}>
                    <MdOutlineQuestionMark className="svg-box" />
                </span>
                <span id={"func"} onClick={handleFunc}>
                    <IoMdPaperPlane className="svg-box" />
                </span>
                <span id={"person"} onClick={handlePerson}>
                    <RxPerson className="svg-box" />
                </span>
            </div>

            {
                person && createPortal(
                    <div className={"person-info"}>
                        <div className={"person-header"}>
                            help
                        </div>
                        <hr/>
                        <div className={"person-content"}>
                            <div><span>we</span></div>
                            <div><span>need</span></div>
                            <div><span>you</span></div>
                        </div>
                    </div>
                    ,document.getElementById('person')
                )
            }
        </div>
    )
}