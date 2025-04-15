import styles from "./contact.module.css"
import Container from "../../components/Container/container";
import ContactForm from "../../components/ContactForm/contactForm";

const Contact = () => {
    return (
        <div>
            <h1>Contact</h1>
            <Container>
                <ContactForm title={"I'd love to help"} desc={"Usually responding within 24 Hours"}/>
            </Container>
        </div>
    )
}

export default Contact;