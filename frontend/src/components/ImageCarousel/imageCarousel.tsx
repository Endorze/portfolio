import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import styles from "./imageCarousel.module.css"
import H2Title from '../H2Title/h2Title';

type Props = {
    title: string,
    text: string
}

const ImageCarousel = ({ title, text }: Props) => {
    return (
        <div className={styles.carouselBody}>
            <div className={styles.horizontal}>
                <div className={styles.textSection}>
                    <H2Title text={title} />
                    <p>{text}</p>
                </div>
                <div className={styles.textSection}>
                    <H2Title text={"Random Fact About Me"} />
                    <p>Before i decided on a career as a programmer, <em>i actually spent my years working as a salesman...</em> Worst time spent ever, glad to have found my true calling.</p>
                </div>
            </div>
            <Carousel className={styles.carousel}>
                <div>
                    <img src="/images/carousel/bethesda.png" alt="Slide 1" />
                    <a href="/" className="legend">Go to my Bethesda Page</a>
                </div>
                <div>
                    <img src="/images/carousel/zooreact.png" alt="Slide 2" />
                    <a href="https://zoo-react-project.vercel.app/" className="legend">Go to my Zoo-page</a>
                </div>
                <div>
                    <img src="/images/carousel/pokemonbattle.png" alt="Slide 3" />
                    <a href="https://endorze.github.io/pokemon-game/" className="legend">Play my pokemon fan-game!</a>
                </div>
                <div>
                    <img src="/images/carousel/summonerswar.png" alt="Slide 4" />
                    <a href="https://express-multipage-assignment2.vercel.app/" className="legend">Go to my Summoners-war Page</a>
                </div>
                <div>
                    <img src="/images/carousel/hero.jpg" alt="Slide 5" />
                    <p className="legend">The first Hero-section i ever made</p>
                </div>
                <div>
                    <img src="/images/carousel/kantherm.png" alt="Slide 6" />
                    <a href="https://kantherm.se/" className="legend">Go to Kantherm.se</a>
                </div>
                <div>
                    <img src="/images/carousel/avalon.png" alt="Slide 7" />
                    <a href="http://endorze.org:81/" className="legend">Ps... Page does not load content without downloading the screenreader for Albion</a>
                </div>
            </Carousel>
            <div className={styles.horizontal}>
                <div className={styles.textSection}>
                    <H2Title text={"My Workprocess"} />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, voluptatem repellat nam dicta voluptates unde tempora impedit libero inventore facilis, exercitationem eos ex asperiores qui ab quod laborum fuga minima?</p>
                </div>
                <div className={styles.textSection}>
                    <H2Title text={"Merits"} />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis aliquid, rerum nobis fuga necessitatibus commodi eaque. Ex atque beatae perferendis saepe in quia odit consequuntur delectus doloribus neque, esse dicta.</p>
                </div>
                <div className={styles.textSection}>
                    <H2Title text={"Why Carlex"} />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat voluptatibus illo ea, maiores, voluptates quas nulla exercitationem perferendis obcaecati mollitia odio! Nostrum officiis alias nesciunt ratione porro doloremque aliquam ea.</p>
                </div>
            </div>
        </div>
    );
}

export default ImageCarousel;
