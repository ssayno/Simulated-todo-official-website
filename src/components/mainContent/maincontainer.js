import './maincontainer.css'
import {Route, Routes} from "react-router-dom";
import {Important} from "./subComponents/important/important";
import {Planned} from "./subComponents/planned/planned";
import {Assign} from "./subComponents/assign/assign";
import {Inbox} from "./subComponents/inbox/inbox";
import {Daily} from "./subComponents/daily/daily";

export const MainContainer = () => {
    return (
        <>
            <div id="content-area">
                <Routes>
                    <Route exact path="/task/myday/" element={<Daily />}/>
                    <Route exact path="/task/important/" element={<Important />}/>
                    <Route exact path="/task/planned/" element={<Planned />}/>
                    <Route exact path="/task/assigned_to_me/" element={<Assign />}/>
                    <Route exact path="/task/inbox/" element={<Inbox />}/>
                </Routes>
            </div>
        </>
    )
}
