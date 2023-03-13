import './login.css';
import {useState} from "react";
export const Login = ({handleLogin}) => {
    const [account, setAccount] = useState("");
    const [passwd, setPasswd] = useState("");
    const [accountError, setAccountError] = useState("");
    const [passwdError, setPasswdError] = useState("");
    const handleChangeAccount = (evt) => {
        const target = evt.target;
        const value = target.value.trim();
        if(!value){
            setAccountError("Account can't be empty");
        }else{
            setAccountError("")
        }
        setAccount(value);
    }
    const handleChangePasswd = (evt) => {
        const target = evt.target;
        const value = target.value.trim();
        if(!value){
            setPasswdError("Password can't be empty");
        }else{
            setPasswdError("")
        }
        setPasswd(value);
    }
    const onSubmitEvent = (evt) =>{
        evt.preventDefault();
        const formData = new FormData();
        formData.append("account", account);
        formData.append("password", passwd);
        console.log(`Account: ${account}\nPassword: ${passwd}`)
        console.log("submit")
        handleLogin(formData)
    }
    return(
        <div className="login-box">
            <div className="login-form">
                <div className="login-header">
                    Login
                </div>
                <hr/>
                <div className="login-content">
                    <form onSubmit={onSubmitEvent}>
                        <label htmlFor="account">
                            <span>Account</span>
                        </label>
                        <input type="text"
                               placeholder="账户名字"
                               id="account"
                               value={account}
                               name={"account"}
                               onChange={handleChangeAccount}
                        />
                        <span className={"error-info"}>{accountError}</span>
                        <label htmlFor="password">
                            <span>Password</span>
                        </label>
                        <input type="password"
                               placeholder="密码"
                               id="password"
                               name={"password"}
                               value={passwd}
                               onChange={handleChangePasswd}
                        />
                        <span className={"error-info"}>{passwdError}</span>
                        <input type="submit" value="Login" id={"login"}/>
                    </form>
                    <div className="question-register">
                        <a href="">some question</a>
                        <a href="">register</a>
                    </div>
                </div>
            </div>
        </div>
    )
}