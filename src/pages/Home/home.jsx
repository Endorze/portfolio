import Container from "../../components/Container/container";
import ImageCarousel from "../../components/ImageCarousel/imageCarousel";
import ParallaxSection from "../../components/ParallaxSection/parallaxSection";
import styles from "./home.module.css"

const Home = () => {
    return (
        <>
        <div>
            <ParallaxSection />
            <Container>
                <ImageCarousel />
                <h2>Hej</h2>
            </Container>
        </div>
        </>
    )
}

export default Home;