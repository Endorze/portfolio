import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Container from '../Container/container';
import styles from "./imageCarousel.module.css"
import H2Title from '../H2Title/h2Title';

const ImageCarousel = ({title, text}) => {
    return (
        <div className={styles.carouselBody}>
                <div className={styles.horizontal}>
                    <div className={styles.textSection}>
                        <H2Title text={title}/>
                        <p>{text}</p>
                    </div>
                    <div className={styles.randomFact}>
                        <H2Title text={"Random Fact About Me"}/>
                        <p>Before i decided on a career as a programmer, <em>i actually spent my years working as a salesman...</em> Worst time spent ever, glad to have found my true calling!</p>    
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
        
        </div>
    );
}

export default ImageCarousel;
