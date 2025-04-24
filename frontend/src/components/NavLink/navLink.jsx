import styles from "./navLink.module.css"

const NavLink = ({href, text}) => {
    return (
        <div className={styles.linkDiv}>
            <a href={href} target="__blank">{text}</a>
        </div>
    )
}

export default NavLink;