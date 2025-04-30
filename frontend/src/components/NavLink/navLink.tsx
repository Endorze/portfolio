import styles from "./navLink.module.css"

type Props = {
    href: string,
    text: string
}

const NavLink = ({href, text}: Props) => {
    return (
        <div className={styles.linkDiv}>
            <a href={href} target="__blank">{text}</a>
        </div>
    )
}

export default NavLink;