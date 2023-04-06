import {useState} from "react";

export const SideCheckbox = ({text,defaultCheck=false}) => {
    const [checked, setChecked] = useState(defaultCheck);
    const changeChecked = () => setChecked(prevState => !prevState);
    const statusChange = () => {
        changeChecked()
        console.log('a')
    }
    return(
        <>
            <p onClick={changeChecked} className="button-header">{text}</p>
            <label className="slide" onClick={changeChecked}>
                <input type="checkbox" checked={checked} onChange={statusChange}/>
                <div className="slide-round"></div>
            </label>
            <span className="button-sc" onClick={changeChecked}>{checked ? "开启" : "关闭"}</span>
        </>
    )
}