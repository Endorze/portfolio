import Container from "../../components/Container/container";
import styles from "./createAccount.module.css"

const CreateAccount = () => {
    return (
        <div className={styles.createAccount}>
            <Container>
                <div className={styles.horizontalWrap}>
                    <div className={styles.textSection}>
                        <a href="/">Home / Create Account</a>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni nulla, similique quam eligendi nihil animi. Harum temporibus voluptates debitis architecto aut, saepe nihil amet ad nesciunt, quibusdam dolore, veniam officiis.</p>
                        <img src="https://media.istockphoto.com/id/1368151370/photo/user-typing-login-and-password-cyber-security-concept.jpg?s=612x612&w=0&k=20&c=hZ14F6Fa4edYWwg0BduAj0is8gdcORsBBHpQcQbAPKc="></img>
                    </div>
                    <div>
                        <form className={styles.createAccountForm}>
                            <h2>Create your Account</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, debitis praesentium!</p>
                            <div className={styles.vertical}>
                                <label>Username</label>
                                <input></input>
                            </div>
                            <div className={styles.vertical}>
                                <label>Full Name</label>
                                <input></input>
                            </div>
                            <div className={styles.vertical}>
                                <label>Password</label>
                                <input></input>
                            </div>
                            <div className={styles.buttonDiv}>
                                <p></p>
                                <button type="submit">Create Account</button>
                            </div>
                        </form>
                            {/* <div>
                                <p>Already have an account?</p>
                                <a>Logga in</a>
                            </div> */}
                    </div>
                </div>
            </Container>
                {/* <div className={styles.gradient}></div> */}
        </div>
    )
}

export default CreateAccount;