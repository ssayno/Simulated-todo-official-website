import './settings.css';
import {useState} from "react";
import {AiOutlineClose} from "react-icons/ai";
import {NormalSetting} from './NormalSetting/normalSetting'
import {SmartList} from "./smartList/smartList";
export const SettingSideBar = ({onHandleClose}) => {

    return (
        <div className="setting-sidebar header-sidebar">
            <div className="setting-header">
                <div className="name"><span>设置</span></div>
                <div className="close-button" onClick={onHandleClose}><AiOutlineClose /></div>
            </div>
            <div className="setting-content">
                <NormalSetting />
                <SmartList />
            </div>
        </div>
    )
}

