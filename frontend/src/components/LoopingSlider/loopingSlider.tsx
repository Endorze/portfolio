'use client'

import clsx from 'clsx'
import { useState, useEffect } from 'react'
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

    const [hasScroll, setHasScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setHasScroll(window.scrollY > 250)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className={clsx(styles.marqueeWrapper, hasScroll && "transform-all translate-y-[-50px] duration-700 opacity-0")}>
            <div className={styles.marqueeContent}>
                {allLogos.map((src, i) => (
                    <div className={styles.logo} key={i}>
                        <img src={src} alt={`logo-${i}`} />
                    </div>
                ))}
            </div>
            <div className={styles.gradientLine}></div>
        </div>
    )
}

export default LoopingSlider;