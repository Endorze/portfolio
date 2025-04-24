import Button from "../Button/button";
import Portrait from "../Portrait/portrait";
import styles from "./marketerSection.module.css"

const MarketerSection = () => {
    return (
        <div className={styles.MarketSection}>
            <div>
                <h2>How Does Marketers Use Endorze?</h2>
                <p>Learn how SEOs, Digital and Content Marketers, and Executives see the market and capitilize on opportunities.</p>
            </div>
            <div className={styles.portraitSection}>
                <Portrait title={"SEOs"} desc={"Track and use the deep data, web-wide context, and recommendations to optimize"} imgPath={"/images/portraits/alexander.jpg"} interviewText={"We have over 500 registered users... Our goal is to make SEO experts out of everyone."} name={"Alexander Hallgren"} companyLogoPath={"/blackcarlex.png"} />
                <Portrait title={"Content & Digital Marketers"} desc={"Create high-performing content that customers can find and love."} imgPath={"/images/portraits/morris.jpg"} interviewText={"It helps us to discover those opportunities that are hidden just beneath the surface."} name={"Morris Hallgren"} companyLogoPath={"/images/portraits/wayne.png"} />
                <Portrait title={"Executives"} desc={"Endorze enables us to identify problems most people didn't know existed."} imgPath={"/images/portraits/michael.jpg"} interviewText={"The Endorze platform enables us to identify problems most people didnt know existed."} name={"Michael Scott"} companyLogoPath={"/images/portraits/dunder.png"} />
            </div>
        </div>
    )
}

export default MarketerSection;