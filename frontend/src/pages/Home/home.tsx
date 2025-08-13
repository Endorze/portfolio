import { FC } from "react";
import ChatSection from "../../components/ChatSection/chatSection";
import { Introduction } from "../../components/Introduction/Introduction";
import Container from "../../components/Container/container";


const Home: FC = () => {

    return (
        <div className="bg-[url(/images/background.png)] bg-no-repeat bg-fixed bg-cover w-full h-screen">
            <section className="min-h-screen text-justify flex gap-6 flex-col items-center justify-center mx-[5%] md:mx-[10%]">
                <Container>
                    <Introduction />
                    <ChatSection />
                </Container>
            </section>
        </div>
    )
}

export default Home;