import {useState} from "react";
import Container from "../Container/container";
import styles from "./loginForm.module.css"
import { useDispatch } from "react-redux";
import { login } from "../../store/authSlice.js";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [accountData, setAccountData] = useState({
            email: "",
            password: ""
        })
    
        const handleChange = (e) => {
            setAccountData({...accountData, [e.target.name]: e.target.value })
        }
    
        const handleSubmit = async (e) => {
            e.preventDefault();
            console.log("Skickar konto data till backend", {accountData})
    
            if (!accountData) {
                return 
            }
    
            const response = await fetch("http://endorze.org:444/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({...accountData}),
            })

            const data = await response.json();

            if (data.token) {
                dispatch(login(data.token));
                navigate("/");
            }
    
            console.log("Response from server: ", response);
            setAccountData({username: "", password: "", email: ""})
        }

    return (
        <div className={styles.createAccount}>
        <Container>
            <div className={styles.login}>
                <div>
                <p><a href="/">Home</a> / <a href="/createaccount">Create Account</a></p>
                    <form className={styles.loginForm} onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <div className={styles.vertical}>
                            <label htmlFor="name">E-mail</label>
                            <input name="email" onChange={handleChange} required></input>
                        </div>
                        <div className={styles.vertical}>
                            <label htmlFor="name">Password</label>
                            <input name="password" type="password" onChange={handleChange} required></input>
                        </div>
                        <div className={styles.buttonDiv}>
                            <button type="submit">Login</button>
                        </div>
                        <div className={styles.alreadyAccount}>
                            <p>Dont have an account?</p>
                            <a href="/createaccount">Create Account</a>
                        </div>
                    </form>
                </div>
            </div>
        </Container>
            {/* <div className={styles.gradient}></div> */}
    </div>
    )
}

export default LoginForm;