import { FC } from "react";
import ChatSection from "../../components/ChatSection/chatSection";
import { Introduction } from "../../components/Introduction/Introduction";
import Container from "../../components/Container/container";
import Tools from "../../components/Tools/Tools";



const Home: FC = () => {

    return (
        <div className="bg-no-repeat bg-fixed bg-cover w-full h-screen">
            <section className="min-h-screen  flex gap-6 flex-col items-center justify-center mx-[5%] md:mx-[10%]">
                <Container>
                    <Introduction />
                    <Tools />
                    <ChatSection />
                </Container>
            </section>
        </div>
    )
}

export default Home;