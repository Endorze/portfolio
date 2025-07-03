import TypeIt from "typeit-react";

type Props = {
    text: string,
}

const AnimatedText: React.FC<Props> = ({text}) => {
    return (
        <TypeIt options={{
            speed: 100,
            deleteSpeed: 50,
            loop: true,
            breakLines: false,
            waitUntilVisible: true,
        }}>
            {text}
        </TypeIt>
    )
}

export default AnimatedText;