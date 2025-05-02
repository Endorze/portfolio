import { FC } from "react";
import Container from "../../components/Container/container";
import Footer from "../../components/Footer/footer";
import ImageCarousel from "../../components/ImageCarousel/imageCarousel";
import MarketerSection from "../../components/MarketerSection/marketerSection";
import PokemonSection from "../../components/PokemonSection/pokemonSection";
import Hero from "../../components/Hero/hero";


const Home: FC = () => {

    return (
        <div>
            <Hero />
            <Container>
                <ImageCarousel title={"View My Projects"} text={"I craft my webpages with great passion, i usually take inspiration from games that i've played and that i really enjoyed. To combine my hobbies of programming and gaming."} />
            </Container>
            <MarketerSection />
            <PokemonSection />
            <Footer />
        </div>
    )
}

export default Home;