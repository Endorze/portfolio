import { useEffect, useState } from "react";
import Header from "../Header/header";
import { Outlet } from "react-router-dom";
import ChatWidget from "../Chat/Chat";
import Footer from "../Footer/footer";


function HeaderLayout() {

    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 600);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 600);
        };
        window.addEventListener("resize", handleResize)

        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <div>
            {isLargeScreen && <Header />}
            <Outlet />
            <ChatWidget />
            <Footer />
        </div>
    )
}

export default HeaderLayout;