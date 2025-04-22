import Rating from "react-rating"
import VideoItem from "../VideoItem/videoItem";
import Masonry from 'react-masonry-css';
import styles from "./videoContainer.module.css";

const VideoContainer = () => {

    const items = ["/videos/portfoliovideos/bethesda.mp4", "/images/carousel/zooreact.png", "/videos/portfoliovideos/zoo.mp4", "/images/carousel/avalon.png", "/images/carousel/bethesda.png", "/videos/gamingvideo/cs.mp4", "/images/carousel/hero.jpg", "/images/carousel/kantherm.png", "/images/carousel/pokemon.png", "/images/carousel/summonerswar.jpg", "/videos/portfoliovideos/pokemon.mp4",];

    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        700: 2,
        500: 1
    };


    return (
        <div className={styles.videoContainer}>
            <div className={styles.waterfallWrap}>
            <h2>Some of my work</h2>
            <Rating
                initialRating={3}
                emptySymbol={<span style={{ fontSize: '2rem', color: '#ccc' }}>☆</span>}
                fullSymbol={<span style={{ fontSize: '2rem', color: 'gold' }}>★</span>}
                onChange={(value) => console.log('Rated:', value)}
            />

            <Masonry breakpointCols={breakpointColumnsObj}
                className={styles.myMasonryGrid}
                columnClassName={styles.myMasonryGridColumn}>
                {items.map((item, index) => (
                    <div key={index}>
                        <VideoItem src={item} />
                    </div>
                ))}
            </Masonry>
            </div>
        </div>
    )
}

export default VideoContainer;