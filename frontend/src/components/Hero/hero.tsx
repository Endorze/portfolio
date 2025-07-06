import AnimatedText from "../AnimatedText/animatedText";

const Hero = () => {
    return (
        <div className="flex justify-center">
            <section className="relative pt-40 max-md:pt-4 pb-20 max-md: pb-32 max-w-[1220px]">
                <div className="flex flex-col-reverse sm:flex-row justify-between">

                    <div className="relative z-2 max-w-512 max-lg:max-w-388 flex flex-col justify-center max-md:pt-6">
                        <div className="caption small-2 uppercase">
                            Alexander Hallgren's Portfolio
                        </div>
                        <h1 className="mb-6 h1 text-p4 uppercase max-lg:mb-7 max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
                            Amazingly Simple
                        </h1>
                        <AnimatedText text="Welcome to my portfolio page, please make sure to checkout my projects :)" />
                    </div>
                    <div>
                        <img src="/gibli.png" className="max-lg:h-auto w-[600px]" alt="hero" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hero;