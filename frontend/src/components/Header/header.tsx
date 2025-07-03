import clsx from "clsx";
import { useEffect, useState } from "react";
import { Link as LinkScroll } from "react-scroll";

type Props = {
    title: string
}

const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [hasScroll, setHasScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasScroll(window.scrollY > 32)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])



    return (
        <header className={clsx("fixed top-0 left-0 z-50 w-full py-10 transition-all duration-500 max-lg:py-4", hasScroll && "py-2 bg-black-100 backdrop-blur-[8px]")}>
            <div className="container flex h-14 items-center max-lg:px-5">
                <a className="lg:hidden flex-1 cursor-pointer">
                    <img src="/images/carlexlogo.png" width={115} height={115} alt="logo"></img>
                </a>
                <div className={clsx('w-full max-lg:fixed max-lg:top-0 max:lg left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0', isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none")}>
                    <div className="w-full max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4">
                        <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
                            <ul className="flex max-lg:block max-lg:px-12">
                                <div>
                                    <LinkScroll to="hero"
                                    offset={-250} spy smooth className={clsx("max-lg:hidden transition-transform duration-500 cursor-pointer")}>
                                        <img src="/images/carlexlogo.png" width={160} height={55} alt="logo"></img>
                                    </LinkScroll>
                                </div>
                                <div className="flex items-center">
                                    {/* <a>Hejhej</a>
                                    <a>Hejhej</a> */}
                                </div>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;