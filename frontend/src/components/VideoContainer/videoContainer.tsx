import VideoItem from "../VideoItem/videoItem";
import Masonry from 'react-masonry-css';
import styles from "./videoContainer.module.css";
import Container from "../Container/container";
import H2Title from "../H2Title/h2Title";

type Props = {
    list: string,
    title: string,
    project: string
}

const VideoContainer = ({list, title, project}: Props) => {

    const breakpointColumnsObj = {
        default: 3,
        1100: 3,
        700: 2,
        500: 1
    };


    return (
        <div className={styles.videoContainer}>
            <Container>
                <H2Title text={title}/>
                <p>{project}</p>
            </Container>
            <div className={styles.waterfallWrap}>
            <Masonry breakpointCols={breakpointColumnsObj}
                className={styles.myMasonryGrid}
                columnClassName={styles.myMasonryGridColumn}>
                {list.map((item, index) => (
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