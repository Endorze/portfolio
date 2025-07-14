import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

type Props = {
    children: React.ReactNode;
}

const AnimatedScrollComponent = ({children}: Props) => {

    useEffect(() => {
        const timeout = setTimeout(() => {
            AOS.init({
                duration: 600,
                once: true,
            });
            AOS.refresh();
        }, 500)
        return () => clearTimeout(timeout);
    }, [])

    return (
            <div data-aos="fade-right">
                {children}
            </div>
    )
}

export default AnimatedScrollComponent;