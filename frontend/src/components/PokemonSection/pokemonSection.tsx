import VideoContainer from "../VideoContainer/videoContainer";
import { pokemonPaths } from "../../data/pokemondata"
import styles from "./pokemonSection.module.css";
import NavLink from "../NavLink/navLink";
import H2Title from "../H2Title/h2Title";


const PokemonSection = () => {
    return (
        <div className={styles.pokemonSection}>
            <VideoContainer list={pokemonPaths} title={"Project Spotlight"} project={"Pokémon Browser Game"} />
                <div className={styles.textContainer}>
                    <H2Title text={"Play my Game"} />
                    <NavLink href={"https://endorze.github.io/pokemon-game/"} text={"-- Visit Pokémon Game"}/>
                    <p><br/><em>"One of the first assignments we were given in my course was to create a console based game with simple JavaScript. <br />I thought that'd be incredibly boring, so i went and made a browsergame with visuals, fully functional pokémon battles instead." <br/> <br/> - Alexander Hallgren</em></p>
                </div>
        </div>
    )
}

export default PokemonSection;