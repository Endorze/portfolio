import ContactForm from "../../components/ContactForm/contactForm";
import Container from "../../components/Container/container";
import Footer from "../../components/Footer/footer";
import ImageCarousel from "../../components/ImageCarousel/imageCarousel";
import ParallaxSection from "../../components/ParallaxSection/parallaxSection";
import Test from "../../components/Test/test";
import styles from "./home.module.css";


const Home = () => {

    return (
        <>
        <div>
            <ParallaxSection />
            <Container>
                <ImageCarousel title={"Take a look at my Projects"} text={"I make my webpages with great passion, i usually take inspiration from games that i've played and that i really enjoyed."}/>
            </Container>
            <Test />
            <Container>
                <ContactForm title={"I'd love to help"} desc={"Usually responding within 24 Hours"}/>
            </Container>
            <Footer />
        </div>
        </>
    )
}

export default Home;