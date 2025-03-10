import { useEffect } from "react";
import styles from "./parallaxSection.module.css";

const ParallaxSection = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "/scripts/script.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className={styles.parallax}>
            <img src="https://cdn.prod.website-files.com/6768f29a6d5da42209173f20/6768f29b6d5da4220917749c_Rectangle%20(1).svg"/>
            <img src="/images/parallax/hill1.png" id="hill1"/>
            <img src="/images/parallax/hill2.png" id="hill2"/>
            <img src="/images/parallax/hill3.png" id="hill3"/>
            <img src="/images/parallax/hill4.png" id="hill4"/>
            <img src="/images/parallax/hill5.png" id="hill5"/>
            <img src="/images/parallax/tree.png" id="tree"/>
            <h2 id="text">Alexander H. Designs</h2>
            <img src="/images/parallax/leaf.png" id="leaf"/>
            <img src="/images/parallax/plant.png" id="plant"/>
        </div>
    )
}

export default ParallaxSection;