import { FC } from "react";
import Container from "../../components/Container/container";
import Footer from "../../components/Footer/footer";
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
            <AnimatedScrollComponent>
                <div className="container">
                    <h1>Test test funkar den?</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius molestiae impedit doloremque nobis sapiente consectetur? Esse, aut. Tempora dolorem, reprehenderit fugiat, debitis possimus at explicabo laboriosam nihil, alias vitae voluptatem?</p>
                </div>
            </AnimatedScrollComponent>
        </div>
    )
}

export default Home;