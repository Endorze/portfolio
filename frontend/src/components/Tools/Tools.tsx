"use client";
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
import Container from "../Container/container";

const WORDS = ["dazzling", "amazing", "surprising", "unbelivable", "stunning", "astonishing"];

export default function Tools({
    prefix = "I make",
    intervalMs = 2500,
}: { prefix?: string; intervalMs?: number }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const id = window.setInterval(
            () => setIndex((i) => (i + 1) % WORDS.length),
            intervalMs
        );
        return () => clearInterval(id);
    }, [intervalMs]);

    return (
        <div className="pt-12 md:flex justify-center items-center w-full mx-auto">
            <Container>
                <h3 id="tools" className="hidden md:block text-[12rem] py-24 text-primary opacity-10 leading-[0.8] -z-10 max-w-7xl mt-4 text-center">
                    What i do
                </h3>

                <div className="w-full md:w-auto md:flex min-h-[400px] border border-gray-200 shadow-md bg-white">

                    <div className="p-4 max-w-[650px]">
                        <h4 className="text-[1.5rem] md:inline-block items-baseline font-bold text-4xl sm:text-2xl text-[#0d4896]">
                            <span>{prefix}&nbsp;</span>
                            <span
                                className="inline-block overflow-hidden h-[1em]"
                                style={{ willChange: "transform", contain: "layout paint" }}
                            >
                                <TextTransition
                                    springConfig={presets.gentle}   
                                    direction="down"                
                                    translateValue="100%"            
                                    inline
                                >
                                    {WORDS[index]}
                                </TextTransition>
                            </span>

                            <span className="px-1">applications</span>
                        </h4>

                        <p className="pt-4 text-[1rem]">Developing applications the way you want it.</p>
                        <p className="pt-4 text-[1rem]">I will most likely develop your application in React, maybe even with a framework like Next.js. If you also need a backend I can asure you nothing will go wrong with Node combined with Express and PostgreSQL, i'm also down for learning whatever you need be to know.</p>
                        <p className="pt-8 text-[1rem]">Is the above text just gibberish for you? Don't panic! I make applications using some of the most used programming languages in the market which makes your application high-end and top modern.</p>
                    </div>

                    <div className="w-full md:w-auto md:min-w-[500px] bg-blue-400">
                        <p className="text-center text-white py-4 uppercase">Tools i've worked with</p>
                        <div className="flex justify-between p-12 text-white">
                            <div>
                                <p>React.js</p>
                                <p>Next.js</p>
                                <p>TypeScript.js</p>
                                <p>Express.js</p>
                                <p>Node.js</p>
                                <p>Sass</p>
                            </div>
                            <div>
                                <p>Docker</p>
                                <p>PostgreSQL</p>
                                <p>Redux</p>
                                <p>Modular CSS</p>
                                <p>Tailwind</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <style>{`
        @media (prefers-reduced-motion: reduce) {
          [data-texttransition-wrapper] { height: auto !important; overflow: visible !important; }
        }
      `}</style>
        </div>
    );
}
