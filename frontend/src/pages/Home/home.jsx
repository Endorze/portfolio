import ContactForm from "../../components/ContactForm/contactForm";
import Container from "../../components/Container/container";
import Footer from "../../components/Footer/footer";
import ImageCarousel from "../../components/ImageCarousel/imageCarousel";
import MarketerSection from "../../components/MarketerSection/marketerSection";
import ParallaxSection from "../../components/ParallaxSection/parallaxSection";
import Test from "../../components/Test/test";
import styles from "./home.module.css";


const Home = () => {

    return (
        <>
        <div>
            <ParallaxSection />
            <Container>
                <ImageCarousel title={"View my Projects"} text={"I craft my webpages with great passion, i usually take inspiration from games that i've played and that i really enjoyed. To combine my hobbies of programming and gaming."}/>
            </Container>
                <MarketerSection />
            <Footer />
        </div>
        </>
    )
}

export default Home;