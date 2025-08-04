'use client'

import clsx from 'clsx'
import { useState, useEffect, useRef } from 'react'
import styles from './loopingSlider.module.css'

const logos = [
    "/images/carlexlogo.png",
    "/images/carlexlogo.png",
    "/images/carlexlogo.png",
    "/images/carlexlogo.png",
    "/images/carlexlogo.png",
    "/images/carlexlogo.png",
    "/images/carlexlogo.png",
    "/images/carlexlogo.png",
    "/images/carlexlogo.png",
    "/images/carlexlogo.png",
]

const LoopingSlider = () => {

    const allLogos = [...logos, ...logos];
    const [isHidden, setIsHidden] = useState<boolean>(false);
    const [hasScroll, setHasScroll] = useState<boolean>(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            if (currentScrollY > lastScrollY.current && currentScrollY > 150) {
                setIsHidden(true);
            } else if (currentScrollY < lastScrollY.current) {
                setIsHidden(false);
            }

            lastScrollY.current = currentScrollY;
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <div className={clsx(styles.marqueeWrapper, isHidden && "transform-all translate-y-[-50px] duration-700 opacity-0")}>
                <div className={styles.marqueeContent}>
                    {allLogos.map((src, i) => (
                        <div className={styles.logo} key={i}>
                            <img src={src} alt={`logo-${i}`} />
                        </div>
                    ))}
                </div>
                <div className={styles.gradientLine}></div>
            </div>            
        </>
    )
}

export default LoopingSlider;