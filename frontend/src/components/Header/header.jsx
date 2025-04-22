import Container from "../Container/container"
import styles from "./header.module.css"
import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from "react-redux"
import { logout } from "../../store/authSlice"

const Header = () => {

    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout());
    };

    const ref = useRef()

    useEffect(() => {

        const listener = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                if (ref.current) {
                    ref.current.classList.add(styles['scroll-header']);
                }
            } else {
                if (ref.current) {
                    ref.current.classList.remove(styles['scroll-header']);
                }
            }
        }

        window.addEventListener('scroll', listener)

        return () => {
            window.removeEventListener('scroll', listener)
        }
    }, [])

    return (
        <div ref={ref} className={styles.header}>
            <Container className={styles.headerContainer}>
                <img src={"/carlexdesign.png"} />
                <div className={styles.navWrap}>
                    <a href="/">Home</a>
                    <a href="about">About</a>
                    <a href="contact">Contact</a>
                    <a href="news">News</a>
                    <a href="shop">Shop</a>
                </div>
                {isLoggedIn ? (
                    <>
                        <div className={styles.buttonDiv}>
                            <a href="createaccount"><button>My Profile</button></a>
                            <a href="login"><button onClick={handleLogout}>Logout</button></a>
                        </div>
                    </>
                ) : (
                    <>
                        <div className={styles.buttonDiv}>
                            <a href="createaccount"><button>Sign Up</button></a>
                            <a className={styles.login} href="login"><button>Login</button></a>
                        </div>
                    </>
                ) }
                
            </Container>
        </div >
    )
}

export default Header;