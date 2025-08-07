'use client'

import clsx from 'clsx'
import { useState, useEffect, useRef } from 'react'
import styles from './loopingHeader.module.css'


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
                            {/**linear-gradient(90deg, #FFA9FF 0%, #FFB78B 22%, #FF8282 43%, #43FEFF 70%, #FFFF5C 100%); */}
                            <p className='bg-gradient-to-r from-[#FFA9FF] via-[#FFB78B] via-[#FF8282] via-[#43FEFF] to-[#845ef7] inline-block text-transparent bg-clip-text text-[14px] tracking-wide drop-shadow-sm'>
                                $ LOOKING FOR LIA | WORK OPPORTUNITIES
                            </p>

                        </div>
                    ))}
                </div>
                <div className={styles.gradientLine}></div>
            </div>

            <div className={clsx(styles.menu, isHidden && 'transform-all translate-x-[-50px] duration-700 opacity-0')}>
                <div className='container'>
                    <div className={styles.menuButtons}>
                        <button className={styles.fancyButton}>
                            <span className={styles.buttonBg}></span>
                            <span className={styles.buttonText}>MENU</span>
                        </button>
                        <img className='max-w-auto h-[120px]' src='/images/snowman.png' />
                        <button className={styles.fancyButton}>
                            <span className={styles.buttonBg1}></span>
                            <span className={styles.buttonBg}></span>
                            <span className={styles.buttonText}>OPTIONS</span>
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LoopingSlider;