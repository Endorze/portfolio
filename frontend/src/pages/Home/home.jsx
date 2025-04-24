import Container from "../../components/Container/container";
import Footer from "../../components/Footer/footer";
import ImageCarousel from "../../components/ImageCarousel/imageCarousel";
import MarketerSection from "../../components/MarketerSection/marketerSection";
import ParallaxSection from "../../components/ParallaxSection/parallaxSection";
import PokemonSection from "../../components/PokemonSection/pokemonSection";
import VideoContainer from "../../components/VideoContainer/videoContainer";
import { pokemonPaths } from "../../data/pokemondata";


const Home = () => {

    return (
        <>
        <div>
            <ParallaxSection />
            <Container>
                <ImageCarousel title={"View My Projects"} text={"I craft my webpages with great passion, i usually take inspiration from games that i've played and that i really enjoyed. To combine my hobbies of programming and gaming."}/>
            </Container>
                <MarketerSection />
                <PokemonSection />
            <Footer />
        </div>
        </>
    )
}

export default Home;