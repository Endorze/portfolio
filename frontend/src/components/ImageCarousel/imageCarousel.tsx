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
        <div className="w-full bg-gray-200 py-16 max-md:py-8">
            <div className="container">

                <div className={styles.horizontal}>
                    <div className={styles.textSection}>
                        <H2Title text={title} />
                        <p>{text}</p>
                    </div>
                </div>
                <Carousel className={styles.carousel}>
                    <div>
                        <img src="/images/carousel/uiux.png" alt="Slide 1" />
                        <a href="https://ui-ux-page-fh9m.vercel.app/" className="legend">Go to my UI/UX Page</a>
                    </div>
                    <div>
                        <img src="/images/carousel/bethesda.png" alt="Slide 1" />
                        <a href="https://react-mock-webpage.vercel.app/" className="legend">Go to my Bethesda Page</a>
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
            </div>

        </div>
    );
}

export default ImageCarousel;
