import './App.css';
import {Header} from "./components/headers/header";
import {SideBar} from "./components/siderBar/siderbar";
import {MainContainer} from "./components/mainContent/maincontainer";
import {Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";
import {BsPerson, BsStar, BsSun} from "react-icons/bs";
import {RxCalendar} from "react-icons/rx";
import {VscHome} from "react-icons/vsc";
import {Login} from "./components/login/login";
import { Navigate } from 'react-router-dom'

function App() {
    const [loginStatus, setLoginStatus] = useState(false);
    const loginTo = (formData) =>{
        console.log("login")
        fetch('/api/login', {
            method: 'POST',
            body: formData
        }).then((resp) => {
            return resp.json();
        }).then((data) => {
            const status = data.status;
            console.log("login status", status);
            if(status === "success"){
                setLoginStatus(true);
            }else{
                setLoginStatus(false);
            }
        }).catch((err) => {
            console.log("error", err)
        })
    }
    if(loginStatus){
        return (
            <Routes>
                <Route path="*" element={<MainPage />} />>
            </Routes>
        )
    }
    return (
        <Login handleLogin={loginTo}/>
    );
}
const MainPage = () => {
    const [data, setData] = useState(
        {
            daily: {
                todo: ["you", "should", "know"],
                done: ["me"]
            },
            significant: {
                todo: ["me"],
                done: ["heihei"]
            },
            plan: {
                todo: ['and'],
                done: []
            },
            assign: {
                todo: [],
                done: ["haha"]
            },
            inbox: {
                todo: ["aa"],
                done: []
            }
        }
    );
    const updatePart = () => {
        return [
            [<BsSun className="svg-box"/>,
                '我的一天', '/task/myday', data['daily']],
            [<BsStar className="svg-box"/>,
                '重要', '/task/important', data['significant']],
            [<RxCalendar className="svg-box"/>,
                '计划内', 'task/planned', data['plan']],
            [<BsPerson className="svg-box"/>,
                '已分配给我', '/task/assigned_to_me', data["assign"]],
            [<VscHome className="svg-box"/>,
                '任务', '/task/inbox', data['inbox']]
        ]
    }
    let part = updatePart();
    useEffect(() => {
        part = updatePart();
    }, [])
    const appHandleAdd = (downedData) => {
        const {text, taskType} = downedData;
        setData(prevState => {
            const newTaskType = {...prevState[taskType], todo: prevState[taskType]['todo'].concat(text)}
            return Object.assign({}, prevState, {
                [`${taskType}`]: newTaskType
            })
        })
    }
    const appHandleTodoOrDone = (para) => {
        const {content, type, taskType} = para;
        setData(prevState => {
            let newTaskType;
            if(type){
                newTaskType = {...prevState[taskType],
                    todo: prevState[taskType]['todo'].filter(item => item !== content),
                    done: prevState[taskType]['done'].concat(content)
                }
            }else{
                newTaskType = {...prevState[taskType],
                    todo: prevState[taskType]['todo'].concat(content),
                    done: prevState[taskType]['done'].filter(item => item !== content)
                }
            }
            return Object.assign({}, prevState, {
                [`${taskType}`]: newTaskType
            })
        })
    }
    // useEffect(() => {
    //     sideBar-svg-box(`current data is ${JSON.stringify(data)}`)
    // }, [data])
    if(!part){
        return(
            <div>loading</div>
        )
    }
    return(
        <>
            <Header/>
            <div id="main-container">
                <SideBar data={part}/>
                <MainContainer
                    data={part}
                    upHandleAdd={appHandleAdd}
                    upHandleTodoOrDone={appHandleTodoOrDone}
                />
            </div>
        </>
    )
}
const ErrorPage = () => {
    return(
        <div>
            <h1>404 not found</h1>
        </div>
    )
}
export default App;
