import './App.css';
import {Header} from "./components/headers/header";
import {SideBar} from "./components/siderBar/siderbar";
import {MainContainer} from "./components/mainContent/maincontainer";
import {Route, Routes} from "react-router-dom";


function App() {

    return (
        <Routes>
            <Route path="*" element={<MainPage />} />>
        </Routes>
    );
}
const MainPage = () => {
    return(
        <>
            <Header/>
            <div id="main-container">
                <SideBar/>
                <MainContainer/>
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
