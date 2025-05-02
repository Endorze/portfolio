import styles from "./videoItem.module.css"

type Props = {
    src: string,
    width?: number,
    height?: number
}

const VideoItem = ({ src, width = 560, height = 315 }: Props) => {
    const isYoutube = src.includes('youtube.com') || src.includes('youtu.be');
    const isMp4 = src.includes('.mp4')
    let embedUrl: string | undefined;

    if (isYoutube) {
        const getYoutubeEmbedUrl = (url: string) => {
            try {
                const videoId = new URL(url).searchParams.get('v') || url.split('/').pop();
                return `https://www.youtube.com/embed/${videoId}`;
            } catch (e) {
                return undefined;
            }
        }
        embedUrl = getYoutubeEmbedUrl(src);
    }

    return (
        <>
        <div className={styles.videoItem}>
            {isYoutube && (
                <iframe
                    width={width}
                    height={height}
                    src={embedUrl}
                    title="Youtube Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            )}

            {isMp4 && (
                <video controls style={{ width: '100%', maxHeight: '500px', borderRadius: '8px', objectFit: 'contain' }}>
                    <source src={src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
             {!isYoutube && !isMp4 && <img src={src}/>}
        </div>
        </>
    )
}

export default VideoItem;