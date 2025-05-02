import { FC } from "react";
import { useState } from "react";
import Container from "../../components/Container/container";
import styles from "./createAccount.module.css"

const CreateAccount: FC = () => {

    const [accountData, setAccountData] = useState({
        username: "",
        email: "",
        password: ""
    })

    const [terms, setTerms] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setAccountData({...accountData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Skickar konto data till backend", {accountData})

        if (!accountData) {
            return 
        }

        const response = await fetch("http://localhost:8080/api/create-account", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({...accountData}),
        })

        console.log("Response from server: ", response);
        setAccountData({username: "", password: "", email: ""})
    }

    return (
        <div className={styles.createAccount}>
            <Container>
                <div className={styles.horizontalWrap}>
                    <div className={styles.textSection}>
                        <h1>Carlex Designs</h1>
                        <p><a href="/">Home</a> / <a href="/login">Login</a></p>
                        <div className={styles.textWrap}>
                            <div>
                                <h2>Get started today</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum libero repellat repudiandae in.</p>
                            </div>
                            <div>
                                <h2>Support a fellow developer</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum libero repellat repudiandae in.</p>
                            </div>
                            <div>
                                <h2>Leave a review</h2>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum libero repellat repudiandae in.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <form className={styles.createAccountForm} onSubmit={handleSubmit}>
                            <h2>Create your Account</h2>
                            <div className={styles.vertical}>
                                <label htmlFor="name">Username</label>
                                <input name="username" type="name" onChange={handleChange} required></input>
                            </div>
                            <div className={styles.vertical}>
                                <label htmlFor="name">E-mail</label>
                                <input name="email" onChange={handleChange} required></input>
                            </div>
                            <div className={styles.vertical}>
                                <label htmlFor="name">Password</label>
                                <input name="password" type="password" onChange={handleChange} required></input>
                            </div>
                            <div className={styles.buttonDiv}>
                                <div className={styles.acceptTerms}>
                                    <input type="checkbox" required></input>
                                    <p>By creating a account you accept that i save your credentials for educational purposes.</p>
                                </div>
                                <button type="submit">Create Account</button>
                            </div>
                            <div className={styles.alreadyAccount}>
                                <p>Already have an account?</p>
                                <a href="/login">Login</a>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
                {/* <div className={styles.gradient}></div> */}
        </div>
    )
}

export default CreateAccount;