import styles from "./h2Title.module.css"

type Props = {
    text: string;
}

const H2Title = ({text} : Props) => {
    return (
        <p className={styles.title}>
            {text}
        </p>
    )
}

export default H2Title;