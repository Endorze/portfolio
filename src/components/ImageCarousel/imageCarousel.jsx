import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Container from '../Container/container';
import styles from "./imageCarousel.module.css"

const ImageCarousel = ({title, text}) => {
    return (
        <div>
            <Container>
                <div className={styles.textSection}>
                    <h2>{title}</h2>
                    <p>{text}</p>
                </div>
                <Carousel className={styles.carousel}>
                    <div>
                        <img src="/images/carousel/bethesda.png" alt="Slide 1" />
                        <a href="/" className="legend">Go to my Bethesda Page</a>
                    </div>
                    <div>
                        <img src="/images/carousel/pokemon.png" alt="Slide 2" />
                        <a href="https://endorze.github.io/pokemon-game/" className="legend">Play my pokemon fan-game!</a>
                    </div>
                    <div>
                        <img src="/images/carousel/summonerswar.jpg" alt="Slide 2" />
                        <a href="/" className="legend">Go to my Summoners-war Page</a>
                    </div>
                    <div>
                        <img src="/images/carousel/hero.jpg" alt="Slide 3" />
                        <p className="legend">The first Hero-section i ever made</p>
                    </div>
                    <div>
                        <img src="/images/carousel/kantherm.png" alt="Slide 3" />
                        <a href="/" className="legend">Go to Kantherm.se</a>
                    </div>
                </Carousel>
            </Container>
        </div>
    );
}

export default ImageCarousel;
