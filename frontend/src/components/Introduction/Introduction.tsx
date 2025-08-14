import { useState } from "react";
import Container from "../Container/container";

export const Introduction = () => {
  const [textCopied, setTextCopied] = useState(false);

  const copyText = () => {
    const text = document.getElementById("buttontext")?.innerText?.trim();
    if (!text) return;

    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        setTextCopied(true);
        setTimeout(() => setTextCopied(false), 1500);
      });
    } else {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setTextCopied(true);
      setTimeout(() => setTextCopied(false), 1500);
    }
  };

  return (
    <Container>

      <section
        id="home"
        className="pt-16 sm:pt-20 md:pt-24"
        aria-labelledby="intro-heading"
      >

        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10 md:gap-12">
          

          <div className="relative w-full max-w-2xl flex flex-col gap-5 sm:gap-6 md:gap-8">
            <h1
              id="intro-heading"
              className="font-bold leading-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[6rem] text-primary"
            >
              Hello <br />
              I&apos;m{" "}
              <span className="underline underline-offset-4 decoration-2">
                Alexander <br className="hidden sm:block" />
                Hallgren
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-primary/90">
              Current Assignment:{" "}
              <a
                href="https://futuregames.se/"
                target="_blank"
                rel="noreferrer"
                className="text-primaryDark underline underline-offset-4 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-sm"
              >
                Student at Futuregames Education
              </a>
            </p>


            <div className="w-full sm:w-auto">
              <button
                id="buttontext"
                type="button"
                onClick={copyText}
                className="w-full sm:w-auto select-text hover:text-white hover:bg-blue-400/80 bg-transparent text-primary text-base sm:text-lg md:text-xl px-4 py-3 sm:px-5 sm:py-4 border-2 border-primary rounded-lg shadow-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                aria-describedby="copy-toast"
              >
                Alexanderjimhallgren@gmail.com
              </button>
            </div>

            <div
              id="copy-toast"
              aria-live="polite"
              className={[
                "absolute left-0 top-full mt-2 text-sm sm:text-base rounded px-3 py-1 shadow",
                "bg-green-500 text-white",
                "transition-opacity duration-500 ease-out motion-reduce:transition-none",
                textCopied ? "opacity-100" : "opacity-0 pointer-events-none"
              ].join(" ")}
            >
              E-mail copied
            </div>
          </div>


          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl mx-auto">
            <img
              src="/images/man.png"
              alt="Illustration of Alexander Hallgren"
              className="w-full h-auto object-contain mix-blend-multiply"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </section>
    </Container>
  );
};
