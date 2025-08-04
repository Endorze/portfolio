import AnimatedText from "../AnimatedText/animatedText";
import styles from "./hero.module.css"

const Hero = () => {
    return (
        <div className="w-full bg-[url(/images/glacier.jpg)] bg-no-repeat bg-cover min-h-screen flex items-start md:items-center pt-36 md:pt-0">
            <div className="container">
                <div className="flex">
                    <section className="relative max-md:pt-4 max-md pb-8 max-md:max-w-[1220px] md:pb-20 ">
                        <div className="caption small-2 uppercase">
                            Alexander Hallgren's Portfolio
                        </div>
                        <h1 className={styles.heading}>
                            Chill out
                        </h1>
                        <div className={styles.paragraph}>
                            <div className="min-h-[150px]">
                                <AnimatedText text="Welcome to my portfolio, please make sure to checkout my projects :)" />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Hero;