import ReCAPTCHA from "react-google-recaptcha";
import Container from "../Container/container";
import styles from "./contactForm.module.css"
import { useState } from "react";


const ContactForm = ({ title, desc }) => {

    const [formData, setFormData] = useState({
        name: "",
        lastName: "",
        email: "",
        message: ""
    });

    const [recaptchaToken, setRecaptchaToken] = useState(null);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRecaptcha = (token) => {
        console.log("Got new recaptcha token", token)
        setRecaptchaToken(token);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log("Skickar data till backend: ", {...formData, recaptchaToken})

        if (!recaptchaToken) {
            setMessage("Vänligen verifiera att du inte är en robot.");
            setLoading(false);
            return;
        }

        const response = await fetch("http://localhost:8080/api/send-form", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({...formData, recaptchaToken})
        });

        console.log("Respons från server: ", {...formData, recaptchaToken})
        const data = await response.json();
        alert(data.message);
        setFormData({ name: "", lastName: "", email: "", message: "" });
        setLoading(false);
    };

    return (
        <div className={styles.contactForm}>
            <Container>

                <div className={styles.titleDescWrap}>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                </div>
                <form onSubmit={handleSubmit} className={styles.formWrap}>
                    <div className={styles.horizontal}>
                        <div className={styles.vertical}>
                            <label htmlFor="name">Name</label>
                            <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required placeholder="First name" />
                        </div>
                        <div className={styles.vertical}>
                            <label htmlFor="name">Last name</label>
                            <input id="lastname" name="lastName" type="text" value={formData.lastName} onChange={handleChange} required placeholder="Last name" />
                        </div>
                    </div>
                    <div className={styles.vertical}>
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="Email Adress" />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Leave me a message..." />
                    </div>

                    <ReCAPTCHA sitekey={`6Lev7_YqAAAAABQlNBmlIBG3TDJKljZ9P58uB0AH`} onChange={handleRecaptcha} />

                    <button type="submit">Send message</button>
                </form>


            </Container>
        </div>
    )
}


export default ContactForm;