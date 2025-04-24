import styles from "./h2Title.module.css"

const H2Title = ({text}) => {
    return (
        <p className={styles.title}>
            {text}
        </p>
    )
}

export default H2Title;