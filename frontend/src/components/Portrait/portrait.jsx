import { Link } from "react-router-dom";
import Button from "../Button/button";
import styles from "./portrait.module.css"
import H2Title from "../H2Title/h2Title"

const Portrait = ({title, desc, imgPath, interviewText, name, companyLogoPath}) => {
    return (
        <div className={styles.portrait}>
            <H2Title text={title}/>
            <p>{desc}</p>
            <img className={styles.portraitPicture} src={imgPath}/>
            <p className={styles.interview}><em>“{interviewText}“ <br/> - {name}</em></p>
            <img className={styles.companyLogo} src={companyLogoPath} />
            <Link>
                <Button text={"Learn More"}/>
            </Link>
        </div>
    )
}

export default Portrait;