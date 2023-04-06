import './header.css'
import {AiFillSetting, AiOutlineSearch} from "react-icons/ai";
import {MdOutlineQuestionMark} from "react-icons/md";
import {IoMdPaperPlane} from "react-icons/io";
import {RxPerson} from "react-icons/rx";
import {TbGridDots} from "react-icons/tb";
import {useEffect, useState} from "react";
import {createPortal} from "react-dom";
import {SettingSideBar} from "../portals/settings/settings";
import {HelpSideBar} from "../portals/help/help";
import {FuncSideBar} from "../portals/func/func";

export const Header = () => {
    const [[setting, help, func, person], setPopBarArray] = useState([
        false, false, false, false
    ])
    const handleSideBar = (index_) => {
        setPopBarArray(prevState => prevState.map((n, i) => i===index_ ? !n: false));
    }
    const closeSideBar = (index_) => {
        setPopBarArray(prevState => prevState.map((n, i) => i===index_ ? false: false));
    }
    return(
        <div id="header">
            <div className="left-container">
                <TbGridDots className="svg-box"/>
                <span style={{verticalAlign: "middle"}}>Todo</span>
            </div>
            <div className="searchBar">
                <i><AiOutlineSearch className="svg-box searchIcon"/></i>
                <input type="search" id="searchBox"/>
            </div>
            <div className="right-container">
                <span id={"setting"} onClick={() => handleSideBar(0)}>
                    <AiFillSetting className="svg-box" />
                </span>
                <span id={"help"} onClick={() => handleSideBar(1)}>
                    <MdOutlineQuestionMark className="svg-box" />
                </span>
                <span id={"func"} onClick={() => handleSideBar(2)}>
                    <IoMdPaperPlane className="svg-box" />
                </span>
                <span id={"person"} onClick={() => handleSideBar(3)}>
                    <RxPerson className="svg-box" />
                </span>
            </div>
            {
                setting && createPortal(
                    <SettingSideBar onHandleClose={() => {closeSideBar(0)}} />
                ,document.getElementById('setting')
                )
            }
            {
                help && createPortal(
                    <HelpSideBar />
                    ,document.getElementById('help')
                )
            }
            {
                func && createPortal(
                    <FuncSideBar />
                    ,document.getElementById('func')
                )
            }
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