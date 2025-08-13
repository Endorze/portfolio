import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/footer";
import LoadingScreen from "../loadingScreen/loadingScreen";
import { Sidebar } from "../Sidebar/Sidebar";


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
            {/* <LoadingScreen> */}
                <Outlet />
                <Sidebar />
                {/* {isLargeScreen && <Header />} */}
            {/* </LoadingScreen> */}
        </div>
    )
}

export default HeaderLayout;