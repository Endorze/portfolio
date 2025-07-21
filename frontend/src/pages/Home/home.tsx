import { FC } from "react";
import ImageCarousel from "../../components/ImageCarousel/imageCarousel";
import PokemonSection from "../../components/PokemonSection/pokemonSection";
import Hero from "../../components/Hero/hero";
import AnimatedScrollComponent from "../../components/AnimatedScrollComponent/animatedScrollComponent";
import ChatSection from "../../components/ChatSection/chatSection";

const Home: FC = () => {

    return (
        <div>
            <Hero />
            <ChatSection />
            <AnimatedScrollComponent>
                <ImageCarousel title={"View My Projects"} text={"I craft my webpages with great passion, i usually take inspiration from games that i've played and that i really enjoyed. To combine my hobbies of programming and gaming."} />
            </AnimatedScrollComponent>
            <PokemonSection />
        </div>
    )
}

export default Home;