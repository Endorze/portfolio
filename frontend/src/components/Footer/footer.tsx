import Container from "../Container/container";
import styles from "./footer.module.css"

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className="container">
                <h2 className={styles.contactTitle}>Contact</h2>
                <div className={styles.horizontal}>
                    <div className={styles.generalInfo}>
                        <h4>General Info</h4>
                        <p>CARLEX, DD-STUDIO
                            <br/>4234 Fake Adress
                            <br/>Uppsala, SE 75X XX
                            <br/>(+46)-709595287 
                            <br/><a href="mailto: alexanderjimhallgren@gmail.com">Alexanderjimhallgren@gmail.com</a>
                        </p>
                    </div>
                    <div className={styles.services}>
                        <h4>My Pages</h4>
                        <a href="https://kantherm.se/">Kantherm</a>
                        <a href="https://express-multipage-assignment2.vercel.app/">Summoners War</a>
                        <a href="https://react-mock-webpage.vercel.app/">Bethesda</a>
                        <a href="https://endorze.github.io/pokemon-game/">Pokemon Game</a>
                    </div>
                    <div className={styles.media}>
                        <h4>Social Media</h4>
                        <a href="https://www.linkedin.com/feed/">LinkedIn</a>
                        <a href="https://www.linkedin.com/feed/">Instagram</a>
                        <a href="https://www.linkedin.com/feed/">Facebook</a>
                    </div>
                </div>
                <div className={styles.copyright}>
                    <p>&copy; 2025 <a href="/">CARLEX DD STUDIO</a>. All rights reserved.<br/> This website, design and all rights belongs to Alexander Hallgren</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;