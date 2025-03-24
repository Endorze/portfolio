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
            <img src="https://images.unsplash.com/photo-1483401757487-2ced3fa77952?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGJsdWUlMjBza3l8ZW58MHx8MHx8fDA%3D"/>
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