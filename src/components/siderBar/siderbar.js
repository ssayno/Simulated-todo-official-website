import './sidebar.css'
import {Link} from 'react-router-dom'
import {VscHome, VscThreeBars} from "react-icons/vsc"
import React, {useState} from "react";

export const SideBar = ({data}) => {
    const [state, setState] = useState(0);
    const updateSelected = (evt, index) => {
        evt.preventDefault();
        evt.stopPropagation();
        setState(index)
    }

    // useEffect(() => {
    //     sideBar-svg-box("state is", state);
    // }, [state])
    return (
        <div className="sideBar">
            <p className="nav-item"><VscThreeBars className="sideBar-svg-box"/></p>
            {data.map((n, i) => (
                <SinglePart key={i}
                            icon={n[0]}
                            partName={n[1]}
                            location={n[2]}
                            count={n[3].length}
                            className_={`${state === i ? "selected-part" : ""}`}
                            onHandleClick={(evt) => (updateSelected(evt, i))}
                />
            ))}
            <hr/>
        </div>
    )
}

const SinglePart = ({icon, partName, location, className_, count, onHandleClick
}) => {
    return (
        <div onClick={onHandleClick}  className={`${className_} singlePart`.trim()}>
            <Link to={location} className="nav-item">
                {icon}
            <span className="sideBar-svg-box">
            {partName}
        </span></Link>
            {count > 0 ? <span className="part-count">{count}</span>: null}
        </div>
    )
}