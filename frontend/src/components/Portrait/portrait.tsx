import { Link } from "react-router-dom";
import styles from "./portrait.module.css"
import H2Title from "../H2Title/h2Title"

type Props = {
    title: string,
    desc: string,
    imgPath: string,
    interviewText: string,
    name: string,
    companyLogoPath: string,
}

const Portrait = ({title, desc, imgPath, interviewText, name, companyLogoPath}: Props) => {
    return (
        <>
        
        
        <div className={styles.portrait}>
            <H2Title text={title}/>
            <p>{desc}</p>
            <img className={styles.portraitPicture} src={imgPath}/>
            <p className={styles.interview}><em>“{interviewText}“ <br/> - {name}</em></p>
            <img className={styles.companyLogo} src={companyLogoPath} />
            <Link to={"/"}>

            </Link>
        </div>
        </>
    )
}

export default Portrait;