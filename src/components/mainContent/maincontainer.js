import './maincontainer.css'
import {Route, Routes} from "react-router-dom";
import {Important} from "./subComponents/important/important";
import {Planned} from "./subComponents/planned/planned";
import {Assign} from "./subComponents/assign/assign";
import {Inbox} from "./subComponents/inbox/inbox";
import {Daily} from "./subComponents/daily/daily";

export const MainContainer = ({data, upHandleAdd, upHandleTodoOrDone, upHandleTag}) => {
    console.log('maincontainer data', data)
    const mainHandleAdd = (downedData) => {
        upHandleAdd(downedData);
    }
    const mainHandleTodoOrDone = (para) => {
        console.log(para)
        upHandleTodoOrDone(para)
    }
    const mainTagToImportant = (para) => {
        upHandleTag(para)
    }
    return (
        <>
            <div id="content-area">
                <Routes>
                    <Route exact path="/task/myday/"
                           element={
                               <Daily data={data[0][3]} upHandleAdd={mainHandleAdd} headerText={data[0][1]}
                                      icon={data[0][0]} upHandleTodoOrDone={mainHandleTodoOrDone}
                                      upMainTagToImportant={mainTagToImportant}
                               />
                           }

                    />
                    <Route exact path="/task/important/"
                           element={
                               <Important data={data[1][3]} upHandleAdd={mainHandleAdd} icon={data[1][0]}
                                          headerText={data[1][1]} upHandleTodoOrDone={mainHandleTodoOrDone} />
                           }

                    />
                    <Route exact path="/task/planned/"
                           element={
                               <Planned data={data[2][3]} upHandleAdd={mainHandleAdd} icon={data[2][0]}
                                        headerText={data[2][1]} upHandleTodoOrDone={mainHandleTodoOrDone} />
                           }
                    />
                    <Route exact path="/task/assigned_to_me/"
                           element={
                               <Assign data={data[3][3]} upHandleAdd={mainHandleAdd} icon={data[3][0]}
                                       headerText={data[3][1]} upHandleTodoOrDone={mainHandleTodoOrDone} />
                           }

                    />
                    <Route exact path="/task/inbox/"
                           element={
                               <Inbox data={data[4][3]} upHandleAdd={mainHandleAdd} icon={data[4][0]}
                                      headerText={data[4][1]} upHandleTodoOrDone={mainHandleTodoOrDone} />
                           }

                    />
                </Routes>
            </div>
        </>
    )
}
