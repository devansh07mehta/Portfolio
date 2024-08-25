import Typewriter from "../Components/TypewriterComp";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import SocialHandles from "../Components/SocialHandles";
import MatterComp from "../Components/MatterComp";
import "../assets/css/Home.css";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const { isChecked } = useOutletContext();
  const [scale, setScale] = useState("scale-100");

  useEffect(() => {
    if (window.innerWidth > 388) {
      setScale("scale-110");
    } else if (window.innerWidth > 325) {
      setScale("scale-105");
    }
    const timer = setTimeout(() => {
      setScale("scale-100");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>Devansh Mehta - Portfolio</title>
        <meta
          name="keywords"
          content="Devansh, Devansh Mehta, Portfolio, Devansh Mehta's Portfolio, Devansh Mehta Portfolio, Devansh Mehta Home Page, FullStack Developer, FrontEnd Developer, Web Developer, Cloud Practitioner, DevOps Enthusiast"
        />
        <meta
          name="description"
          content="Explore Devansh Mehta's Portfolio, a passionate full stack developer from Mumbai, India, specializing in creating dynamic, responsive, and engaging web applications."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Devansh Mehta",
            url: "https://devansh-mehta-portfolio.netlify.app/home",
            sameAs: [
              "https://github.com/Devansh07Mehta",
              "https://www.linkedin.com/in/devansh-mehta-8440bb1a0/",
              "https://github.com/devansh07mehta/Portfolio",
            ],
          })}
        </script>
      </Helmet>
      <MatterComp isChecked={isChecked}></MatterComp>
      <div
        className={`${
          isChecked ? "text-white" : "text-black"
        } px-5 2xl:pl-28 2xl:pr-44 2xl:py-28 w-full overflow-x-hidden xl:h-auto flex flex-col justify-center pointer-events-none absolute inset-0 max-w-screen-2xl min-w-fit mx-auto`}
      >
        <div
          className={`home-content ${scale} transform transition-transform duration-2000 ease-in-out flex flex-col justify-center xl:flex-row xl:items-center xl:mx-24 xl:mr-32 2xl:mx-0 xl:justify-between gap-5 xl:gap-0 xl:px-0`}
        >
          <div
            className={`left-side relative w-40 h-40 sm:w-60 sm:h-60 xl:w-72 xl:h-72 rounded-full mx-auto xl:mx-4 ${
              isChecked ? "text-black bg-white" : "text-white bg-black"
            }`}
          >
            <div
              className={`absolute inset-0 overflow-hidden rounded-full shadow-lg`}
            >
              <svg
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                className={`w-full h-full object-cover`}
                viewBox="0 0 500.000000 500.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <g
                  transform="translate(0.000000,500.000000) scale(0.100000,-0.100000)"
                  fill="currentColor"
                  stroke="none"
                >
                  <path
                    d="M1012 3503 l3 -38 95 -6 c96 -6 139 -20 172 -55 41 -46 43 -84 43
-894 0 -426 -4 -796 -8 -822 -8 -46 -40 -96 -59 -90 -5 1 -7 -2 -3 -7 12 -21
-60 -45 -150 -51 l-90 -5 -3 -38 -3 -38 628 4 c584 4 636 6 738 25 129 24 269
68 353 111 33 17 62 27 66 24 3 -4 6 -2 6 4 0 13 65 53 86 53 8 0 13 4 10 8
-6 11 55 58 69 54 6 -2 7 0 3 4 -10 9 12 35 23 28 5 -3 8 -1 7 4 -2 5 20 34
47 65 160 176 247 450 232 726 -12 222 -75 403 -197 567 -44 59 -165 186 -180
189 -3 0 -21 11 -40 23 -19 12 -39 22 -43 22 -5 0 -5 6 -1 13 4 6 4 9 0 5 -4
-3 -40 9 -79 27 -154 71 -370 111 -664 122 -118 4 -163 3 -163 -5 0 -6 9 -26
19 -44 11 -17 17 -36 14 -41 -3 -6 -2 -7 4 -4 5 4 16 -4 22 -17 12 -21 21 -24
119 -29 128 -7 226 -33 340 -89 87 -44 227 -152 216 -169 -3 -5 0 -8 7 -7 16
4 119 -138 126 -174 3 -15 9 -26 13 -23 12 8 67 -173 80 -263 15 -103 8 -341
-13 -433 -17 -75 -72 -213 -93 -234 -8 -7 -14 -18 -14 -24 0 -30 -189 -229
-204 -214 -3 3 -6 2 -6 -4 0 -11 -70 -61 -92 -65 -7 -2 -18 -8 -25 -15 -16
-14 -107 -49 -183 -70 -89 -24 -306 -28 -439 -8 -62 9 -120 19 -127 22 -12 4
-14 120 -14 712 l0 706 75 -113 c42 -62 73 -118 69 -124 -4 -6 -3 -8 3 -5 10
7 73 -81 63 -88 -3 -2 2 -10 12 -17 22 -17 321 -469 321 -485 0 -7 3 -11 5 -8
7 6 62 -76 62 -92 0 -6 4 -13 8 -15 5 -1 39 -49 77 -105 37 -56 73 -104 79
-106 40 -16 62 6 166 163 58 87 108 156 111 154 3 -1 6 2 6 9 0 7 21 45 48 85
44 67 48 76 46 130 0 31 -6 92 -12 135 -5 42 -8 81 -6 85 7 10 -19 31 -29 24
-5 -4 -22 -26 -37 -49 -15 -24 -32 -43 -37 -43 -6 0 -9 -4 -8 -8 4 -11 -83
-142 -94 -142 -5 0 -7 -4 -4 -8 8 -13 -32 -58 -42 -47 -9 10 -86 122 -537 785
-126 184 -235 345 -244 357 l-16 22 -368 1 -368 0 3 -37z"
                  />
                  <path
                    d="M3236 3378 l-109 -162 18 -30 c49 -83 76 -136 71 -144 -2 -4 4 -8 14
-9 13 -1 32 20 62 65 l43 66 3 -144 c1 -80 1 -417 0 -750 -3 -541 -5 -608 -20
-635 -39 -71 -92 -95 -209 -95 l-79 0 0 -40 0 -40 480 0 480 0 0 39 0 39 -98
4 c-81 3 -104 8 -136 27 -74 46 -71 0 -74 910 -2 713 -1 821 13 867 10 34 21
54 30 54 8 0 15 4 15 10 0 23 68 44 155 50 l90 5 3 38 3 37 -323 0 -323 0
-109 -162z"
                  />
                </g>
              </svg>
            </div>
          </div>
          <div className={`right-side text-left xl:ml-auto`}>
            <div className="flex justify-center xl:justify-start gap-2 text-2xl sm:text-3xl 2xl:text-4xl">
              <p>Hey There!</p>
              <span className="inline-block origin-[70%_70%] animate-wave">
                👋🏻
              </span>
            </div>
            <div className="w-11/12 md:w-full flex justify-evenly xl:justify-start gap-2 pt-2 xl:pt-6 name-custom text-center xl:text-left">
              <p className="responsive-text text-2xl sm:text-4xl xl:text-6xl 2xl:text-8xl whitespace-nowrap">
                I'm{" "}
                <span className="text-[#f9004d] text-4xl sm:text-6xl xl:text-7xl 2xl:text-8xl name-responsive">
                  Devansh Mehta
                </span>
                ,
              </p>
            </div>
            <div className="flex justify-center xl:justify-start gap-2 pt-2 sm:pt-4 xl:pt-6">
              <div className="text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl">
                <Typewriter />
              </div>
            </div>
            <div className="pt-8 sm:pt-10 xl:pt-14 flex justify-center xl:justify-start">
              <button
                className="p-4 bg-[#f9004d] rounded-lg sm:text-xl text-lg text-slate-200 hover:bg-[#f9004d]/90 hover:text-white hover:scale-110 transition-transform duration-300 ease-in-out pointer-events-auto"
                onClick={() => {
                  window.open(
                    "./Resume/Devansh-Resume.pdf",
                    "_blank",
                    "noopener,noreferrer"
                  );
                }}
              >
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
      <SocialHandles isChecked={isChecked} />
    </>
  );
};

export default Home;
