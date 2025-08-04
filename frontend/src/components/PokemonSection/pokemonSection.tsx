import VideoContainer from "../VideoContainer/videoContainer";
import { pokemonPaths } from "../../data/pokemondata"
import styles from "./pokemonSection.module.css";
import NavLink from "../NavLink/navLink";
import H2Title from "../H2Title/h2Title";


const PokemonSection = () => {
    return (
        <div className="bg-[#E7F5F6]">
            <div className="container">
                <div className="py-16 max-md:py-8">
                    <VideoContainer list={pokemonPaths} title={"Project Spotlight"} project={"Pokémon Browser Game"} />
                        <div className={styles.textContainer}>
                            <H2Title text={"Play my Game"} />
                            <NavLink href={"https://endorze.github.io/pokemon-game/"} text={"-- Visit Pokémon Game"}/>
                            <p><br/>One of the first assignments we were given in my education was to create a console based game with simple JavaScript. <br />I thought that'd be incredibly boring, so i went and made a browsergame with visuals, fully functional pokémon battles instead. <br/> <br/> - Alexander Hallgren</p>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonSection;