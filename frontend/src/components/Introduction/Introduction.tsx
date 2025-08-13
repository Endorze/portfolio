import { useState } from "react";

export const Introduction = () => {
  const [textCopied, setTextCopied] = useState(false);

  const copyText = () => {
    const text = document.getElementById("buttontext")?.innerText;
    if (!text) return;
    navigator.clipboard.writeText(text).then(() => {
      setTextCopied(true);
      setTimeout(() => setTextCopied(false), 1500);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center md:flex-row md:gap-12 pt-20 md:mt-0 " id="home">
      <div className="flex flex-col gap-6 md:gap-10 relative">
        <h1 className="font-bold flex-2 text-6xl md:text-7xl text-primary xl:text-[7rem]">
          Hello <br />I'm <span className="underline">Alexander <br/>Hallgren</span>
        </h1>

        <p className="text-primary text-xl">
          Current Assignment:{" "}
          <a href="https://futuregames.se/" target="_blank" className="text-primaryDark underline-offset-4 underline">
            Student at Futuregames Education
          </a>
        </p>

        <button
          id="buttontext"
          onClick={copyText}
          className="hover:text-white hover:bg-blue-300 relative text-primary text-xl p-5 border-2 border-primary"
        >
          Alexanderjimhallgren@gmail.com
        </button>

        {/* Alltid monterad, vi växlar klasser */}
        <div
          aria-live="polite"
          className={[
            "absolute top-full mt-2 left-0 text-sm rounded px-3 py-1 shadow",
            "bg-green-500 text-white",
            "transition-opacity transition-transform duration-1500 ease-in-out",
            textCopied ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
          ].join(" ")}
        >
          E-mail Copied
        </div>
      </div>

      <div className="max-w-md md:max-w-2xl w-full">
        <img className="w-auto h-auto mix-blend-multiply" src="/images/man.webp" />
      </div>
    </div>
  );
};
