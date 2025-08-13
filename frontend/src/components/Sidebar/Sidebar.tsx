import { useState, useEffect, useRef } from "react";
import styles from "./Sidebar.module.css"


const MAX_DRAG_FACTOR = 500
const MIN_DRAG_FACTOR = 120

export const Sidebar = () => {
    
    const containerRef = useRef<HTMLDivElement>(null)
    const blobRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const mouseMovement = (event: MouseEvent) => {
            if (blobRef.current) {
                blobRef.current.style.top = `${event.clientY}px`;
            }

            if (containerRef.current) {
                let xPosition = event.clientX;

                if (xPosition > MAX_DRAG_FACTOR) xPosition = MAX_DRAG_FACTOR;
                if (xPosition < MIN_DRAG_FACTOR) xPosition = MIN_DRAG_FACTOR;

                
                const dragFactor = 1 - ((xPosition - MIN_DRAG_FACTOR) / (MAX_DRAG_FACTOR - MIN_DRAG_FACTOR));
                
                console.log(dragFactor);
                containerRef.current.style.setProperty("--dragFactor", `${dragFactor}`)
            }
        };
        window.addEventListener("mousemove", mouseMovement);
        return () => window.removeEventListener("mousemove", mouseMovement); 
    }, []);


    return (
        <aside ref={containerRef} className={styles.SidebarContainer}>
            <div className={styles.Sidebar}>
                <div className={styles.Content}>
                    <a href="#home">Home</a>
                    <a>Home</a>
                    <a>Home</a>
                    <a>Home</a>
                    <a>Home</a>
                    <a target="_blank" href="/alexander_hallgren_cv.pdf">Resume/CV</a>
                </div>
                <div className={styles.SiderbarBorder}>
                    <div ref={blobRef} className={styles.HamburgerContainer}>
                        <img className={styles.Blob} src="/images/sidebar_blob.png"/>
                        <img className="w-[38px] flex justify-center" src="/images/hammburgher.png"/> 
                    </div>
                </div>
            </div>
            
        </aside>
    )
}
