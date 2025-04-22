import styles from "./portrait.module.css"

const Portrait = ({title, desc, imgPath, interviewText, name, companyLogoPath}) => {
    return (
        <div className={styles.portrait}>
            <h2>{title}</h2>
            <p>{desc}</p>
            <img className={styles.portraitPicture} src={imgPath}/>
            <p className={styles.interview}><em>"{interviewText}"</em></p>
            <p><strong>{name}</strong></p>
            <img className={styles.companyLogo} src={companyLogoPath} />
        </div>
    )
}

export default Portrait;