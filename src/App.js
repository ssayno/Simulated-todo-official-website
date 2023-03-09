import './App.css';
import {Header} from "./components/headers/header";
import {SideBar} from "./components/siderBar/siderbar";
import {MainContainer} from "./components/mainContent/maincontainer";
import {Route, Routes} from "react-router-dom";
import {useEffect, useState} from "react";
import {BsPerson, BsStar, BsSun} from "react-icons/bs";
import {RxCalendar} from "react-icons/rx";
import {VscHome} from "react-icons/vsc";


function App() {
    return (
        <Routes>
            <Route path="*" element={<MainPage />} />>
        </Routes>
    );
}
const MainPage = () => {
    const [data, setData] = useState(
        {
            daily: ["you", "should", "know", "me"],
            significant: ["me"],
            plan: ['and'],
            assign: [],
            inbox: ["aa"]
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
        setData(prevState => (
            Object.assign({}, prevState, {
                [`${taskType}`]: prevState[taskType].concat(text)
            })
        ))
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
