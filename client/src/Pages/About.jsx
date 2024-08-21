import Tooltip from "../Components/ToolTip";
import { FaGithub, FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { useOutletContext } from "react-router-dom";
import { DiMongodb } from "react-icons/di";
import { FaDocker } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { useEffect, useState, useRef } from "react";

import "../assets/css/About.css";

const About = () => {
  const { isChecked } = useOutletContext();
  const [scale, setScale] = useState("scale-100");
  const [isScrolling, setIsScrolling] = useState(false);

  const containerRef = useRef(null);

  useEffect(() => {
    const checkZoom = () => {
      const zoom = Math.round((window.outerWidth / window.innerWidth) * 100);
      if (containerRef.current) {
        if (zoom > 100) {
          containerRef.current.classList.add("zoomed");
        } else {
          containerRef.current.classList.remove("zoomed");
        }
      }
    };

    window.addEventListener("resize", checkZoom);
    checkZoom();

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    setScale("xs:scale-105");
    const timer = setTimeout(() => {
      setScale("xs:scale-100");
    }, 3000);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkZoom);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const technologies = [
    {
      name: "HTML",
      icon: <FaHtml5 className="w-full h-full fill-[#E44D26]" />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="w-full h-full fill-[#264de4]" />,
    },
    {
      name: "JavaScript",
      icon: <IoLogoJavascript className="w-full h-full fill-[#F7DF1E]" />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript className="w-full h-full fill-[#3178c6]" />,
    },
    {
      name: "React",
      icon: <FaReact className="w-full h-full fill-[#61DAFB]" />,
    },
    {
      name: "Redux",
      icon: <SiRedux className="w-full h-full fill-[#764ABC]" />,
    },
    {
      name: "Tailwind",
      icon: <RiTailwindCssFill className="w-full h-full fill-[#06B6D4]" />,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="w-full h-full fill-[#7952B3]" />,
    },
    {
      name: "NodeJs",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
          className="w-full h-full"
        >
          <path
            fill="#5fa04e"
            d="M114.313 55.254a.26.26 0 0 0-.145.044l-2.346 1.37a.3.3 0 0 0-.142.26v2.74c0 .116.055.204.142.262l2.346 1.368a.262.262 0 0 0 .29 0l2.342-1.368a.308.308 0 0 0 .145-.263V56.93a.303.303 0 0 0-.145-.26l-2.343-1.371a.26.26 0 0 0-.144-.044zM63.22 71.638c-.427 0-.852.104-1.214.308l-11.549 6.727a2.457 2.457 0 0 0-1.214 2.124V94.22c0 .874.462 1.69 1.214 2.128l3.04 1.746c1.476.728 1.997.726 2.662.726 2.17 0 3.415-1.339 3.415-3.64V81.935a.356.356 0 0 0-.348-.351h-1.474a.356.356 0 0 0-.35.351v13.248c0 1.019-1.069 2.04-2.776 1.167l-3.155-1.835c-.116-.058-.175-.206-.175-.322V80.767c0-.116.059-.26.175-.319l11.545-6.697c.087-.058.233-.058.349 0l11.548 6.697c.115.059.172.174.172.32v13.424c0 .145-.057.264-.172.322l-11.548 6.727c-.087.058-.233.058-.349 0l-2.951-1.779c-.087-.058-.203-.087-.29-.029-.81.466-.952.527-1.734.789-.174.058-.463.173.115.493l3.85 2.302c.376.203.78.319 1.214.319.434 0 .867-.115 1.214-.26l11.549-6.727a2.463 2.463 0 0 0 1.214-2.128V80.797c0-.874-.462-1.687-1.214-2.124l-11.549-6.727a2.488 2.488 0 0 0-1.214-.308Zm18.03 6.13a2.236 2.236 0 0 0-2.227 2.243 2.236 2.236 0 0 0 2.227 2.242c1.217 0 2.228-1.019 2.228-2.242a2.254 2.254 0 0 0-2.228-2.242zm-.03.379a1.86 1.86 0 0 1 1.883 1.864c0 1.02-.84 1.894-1.882 1.894-1.012 0-1.852-.846-1.852-1.894s.869-1.864 1.852-1.864zm-.809.611v2.562h.494v-1.016h.434c.174 0 .231.058.26.203 0 .03.086.67.086.786h.52c-.058-.116-.087-.466-.116-.67-.028-.32-.056-.553-.404-.582.174-.059.463-.146.463-.612 0-.67-.58-.67-.868-.67zm.435.408h.404c.146 0 .376 0 .376.349 0 .116-.056.351-.376.351h-.405zm-14.47 2.01c-3.3 0-5.268 1.398-5.268 3.757 0 2.534 1.968 3.23 5.123 3.551 3.79.379 4.08.933 4.08 1.69 0 1.31-1.044 1.864-3.475 1.864-3.068 0-3.733-.758-3.965-2.301 0-.175-.142-.29-.316-.29H61.05a.35.35 0 0 0-.346.349c0 1.98 1.041 4.31 6.107 4.31 3.645 0 5.758-1.458 5.758-4.02 0-2.505-1.68-3.174-5.238-3.64-3.59-.466-3.965-.728-3.965-1.572 0-.699.318-1.63 2.98-1.63 2.373 0 3.269.525 3.617 2.126a.34.34 0 0 0 .319.26h1.533c.088 0 .175-.057.234-.115a.476.476 0 0 0 .085-.263c-.231-2.795-2.053-4.077-5.758-4.077z"
          />
          <path
            fill={`${isChecked ? "#fff" : "#333"}`}
            d="M86.072 24.664a.71.71 0 0 0-.352.089.755.755 0 0 0-.375.638V44.32c0 .174-.09.35-.263.466a.549.549 0 0 1-.52 0l-3.066-1.775a1.486 1.486 0 0 0-1.478 0L67.75 50.146a1.48 1.48 0 0 0-.753 1.279v14.24c0 .524.29 1.02.753 1.282l12.27 7.135a1.486 1.486 0 0 0 1.477 0l12.269-7.135c.463-.262.753-.758.753-1.282V30.168c0-.553-.29-1.05-.753-1.311l-7.32-4.104a.836.836 0 0 0-.373-.089zM13.687 42.43c-.231 0-.462.084-.664.2L.753 49.739A1.493 1.493 0 0 0 0 51.047l.03 19.102c0 .263.143.525.375.642a.656.656 0 0 0 .724 0l7.294-4.193c.463-.262.75-.758.75-1.282v-8.94c0-.524.29-1.02.754-1.282l3.096-1.805c.231-.146.493-.204.753-.204s.521.058.724.204l3.096 1.805c.463.262.753.758.753 1.282v8.94c0 .524.288 1.02.75 1.282l7.236 4.193a.704.704 0 0 0 .753 0 .724.724 0 0 0 .376-.642V51.047c0-.524-.29-1.02-.754-1.283L14.47 42.63a1.763 1.763 0 0 0-.664-.201Zm100.667.21c-.253 0-.504.066-.736.198l-12.272 7.131c-.463.262-.75.758-.75 1.283v14.24c0 .524.287 1.02.75 1.282l12.184 6.987a1.43 1.43 0 0 0 1.447 0l7.38-4.133a.724.724 0 0 0 .375-.642.724.724 0 0 0-.375-.64L110.03 61.21a.76.76 0 0 1-.375-.641v-4.456a.72.72 0 0 1 .375-.64l3.85-2.214a.705.705 0 0 1 .753 0l3.846 2.213a.762.762 0 0 1 .378.641v3.495c0 .263.144.525.375.641a.704.704 0 0 0 .754 0l7.291-4.28a1.46 1.46 0 0 0 .724-1.283v-3.465c0-.524-.29-1.017-.724-1.28l-12.184-7.104a1.499 1.499 0 0 0-.738-.198zM80.757 53.274c.065 0 .131.015.19.045l4.194 2.446c.116.058.175.202.175.319v4.892c0 .146-.059.264-.175.322l-4.195 2.446a.431.431 0 0 1-.378 0l-4.195-2.446c-.116-.058-.175-.205-.175-.322v-4.892c0-.146.06-.261.175-.32l4.195-2.445a.425.425 0 0 1 .19-.045z"
          />
          <path
            fill="url(#a)"
            d="M47.982 42.893a1.484 1.484 0 0 0-1.476 0L34.322 49.97a1.456 1.456 0 0 0-.724 1.281v14.181c0 .525.29 1.02.724 1.282l12.184 7.076a1.484 1.484 0 0 0 1.476 0l12.183-7.076c.463-.262.724-.757.724-1.282V51.251c0-.524-.29-1.02-.724-1.281z"
          />
          <path
            fill="url(#b)"
            d="m60.194 49.97-12.241-7.077a1.996 1.996 0 0 0-.376-.145L33.859 66.364c.116.146.26.262.405.35l12.242 7.076c.347.204.752.262 1.128.145l12.879-23.703a.905.905 0 0 0-.319-.262z"
          />
          <path
            fill="url(#c)"
            d="M60.194 66.713c.348-.204.608-.553.724-.932l-13.4-23.063c-.346-.058-.723-.029-1.041.175L34.322 49.94l13.11 24.053c.173-.029.376-.087.55-.175z"
          />
          <defs>
            <linearGradient
              id="a"
              x1="34.513"
              x2="27.157"
              y1="15.535"
              y2="30.448"
              gradientTransform="translate(0 24.664) scale(1.51263)"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3F873F" />
              <stop offset=".33" stopColor="#3F8B3D" />
              <stop offset=".637" stopColor="#3E9638" />
              <stop offset=".934" stopColor="#3DA92E" />
              <stop offset="1" stopColor="#3DAE2B" />
            </linearGradient>
            <linearGradient
              id="b"
              x1="30.009"
              x2="50.533"
              y1="23.359"
              y2="8.288"
              gradientTransform="translate(0 24.664) scale(1.51263)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".138" stopColor="#3F873F" />
              <stop offset=".402" stopColor="#52A044" />
              <stop offset=".713" stopColor="#64B749" />
              <stop offset=".908" stopColor="#6ABF4B" />
            </linearGradient>
            <linearGradient
              id="c"
              x1="21.917"
              x2="40.555"
              y1="22.261"
              y2="22.261"
              gradientTransform="translate(0 24.664) scale(1.51263)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset=".092" stopColor="#6ABF4B" />
              <stop offset=".287" stopColor="#64B749" />
              <stop offset=".598" stopColor="#52A044" />
              <stop offset=".862" stopColor="#3F873F" />
            </linearGradient>
          </defs>
        </svg>
      ),
    },
    {
      name: "Express",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128 128"
          className="w-full h-full"
        >
          <path
            fill={`${isChecked ? "#fff" : "#333"}`}
            d="M40.53 77.82V50.74H42V55a5.57 5.57 0 00.48-.6 7.28 7.28 0 016.64-4.12c3.35-.1 6.07 1.14 7.67 4.12a13.24 13.24 0 01.32 12.14c-1.49 3.34-5.17 5-9.11 4.39a7.37 7.37 0 01-5.88-3.88v10.77zM42 60.32c.13 1.32.18 2.26.33 3.18.58 3.62 2.72 5.77 6.08 6.16A6.91 6.91 0 0056 65.27a11.77 11.77 0 00-.26-9.68 6.77 6.77 0 00-7.13-3.94 6.59 6.59 0 00-5.89 4.87 33.4 33.4 0 00-.72 3.8zM88.41 64a7.92 7.92 0 01-7.74 7c-6.16.31-9.05-3.78-9.51-8.5a13.62 13.62 0 011.2-7.5 8.37 8.37 0 018.71-4.67 8 8 0 017.1 6.09 41.09 41.09 0 01.69 4.5H72.67c-.3 4.28 2 7.72 5.26 8.55 4.06 1 7.53-.76 8.79-4.62.28-.99.79-1.13 1.69-.85zm-15.74-4.45h14.47c-.09-4.56-2.93-7.86-6.78-7.91-4.36-.07-7.5 3.11-7.69 7.91zM91.39 64.1h1.42a5.69 5.69 0 003.34 4.9 8.73 8.73 0 007.58-.2 3.41 3.41 0 002-3.35 3.09 3.09 0 00-2.08-3.09c-1.56-.58-3.22-.9-4.81-1.41A35.25 35.25 0 0194 59.18c-2.56-1.25-2.72-6.12.18-7.66a10.21 10.21 0 019.76-.15 5.14 5.14 0 012.6 5.24h-1.22c0-.06-.11-.11-.11-.17-.15-3.89-3.41-5.09-6.91-4.75a9.17 9.17 0 00-3 .91 3 3 0 00-1.74 3 3 3 0 002 2.82c1.54.56 3.15.92 4.73 1.36 1.27.35 2.59.58 3.82 1a4.51 4.51 0 013.1 4.07 4.81 4.81 0 01-2.59 5c-3.34 1.89-8.84 1.39-11.29-1a6.67 6.67 0 01-1.94-4.75zM125.21 56.61h-1.33c0-.18-.07-.34-.09-.49a4.35 4.35 0 00-3.54-4.18 8.73 8.73 0 00-5.61.27 3.41 3.41 0 00-2.47 3.25 3.14 3.14 0 002.4 3.16c2 .62 4.05 1 6.08 1.56a17 17 0 011.94.59 5 5 0 01.27 9.31 11.13 11.13 0 01-9 .09 6.24 6.24 0 01-3.76-6.06h1.3a7.29 7.29 0 0011.1 4.64 3.57 3.57 0 001.92-3.34 3.09 3.09 0 00-2.11-3.07c-1.56-.58-3.22-.89-4.81-1.4a35.43 35.43 0 01-4.87-1.75c-2.5-1.23-2.7-6.06.15-7.6a10.07 10.07 0 019.92-.11 5.23 5.23 0 012.51 5.13zM38.1 70.51a2.29 2.29 0 01-2.84-1.08c-1.63-2.44-3.43-4.77-5.16-7.15l-.75-1c-2.06 2.76-4.12 5.41-6 8.16a2.2 2.2 0 01-2.7 1.06l7.73-10.37-7.19-9.37a2.39 2.39 0 012.85 1c1.67 2.44 3.52 4.77 5.36 7.24 1.85-2.45 3.68-4.79 5.39-7.21a2.15 2.15 0 012.68-1l-2.79 3.7c-1.25 1.65-2.48 3.31-3.78 4.92a1 1 0 000 1.49c2.39 3.17 4.76 6.35 7.2 9.61zM70.92 50.66v1.4a7.25 7.25 0 00-7.72 7.49v11h-1.43V50.74h1.4v4.06c1.73-2.96 4.4-4.06 7.75-4.14zM2.13 60c.21-1 .34-2.09.63-3.11 1.73-6.15 8.78-8.71 13.63-4.9 2.84 2.23 3.55 5.39 3.41 8.95h-16c-.26 6.36 4.33 10.2 10.2 8.24a6.09 6.09 0 003.87-4.31c.31-1 .81-1.17 1.76-.88a8.12 8.12 0 01-3.88 5.93 9.4 9.4 0 01-10.95-1.4 9.85 9.85 0 01-2.46-5.78c0-.34-.13-.68-.2-1q-.01-.89-.01-1.74zm1.69-.43h14.47c-.09-4.61-3-7.88-6.88-7.91-4.32-.06-7.41 3.14-7.6 7.89z"
          />
        </svg>
      ),
    },
    {
      name: "MongoDB",
      icon: <DiMongodb className="w-full h-full fill-[#4DB33D]" />,
    },
    { name: "Docker", icon: <FaDocker className="w-12 h-12 fill-[#2496ED]" /> },
    { name: "AWS", icon: <FaAws className="w-full h-full fill-[#FF9900]" /> },
    {
      name: "Postman",
      icon: <SiPostman className="w-full h-full fill-[#FF6C37]" />,
    },
    {
      name: "Git",
      icon: <FaGitAlt className="w-full h-full fill-[#F05032]" />,
    },
    {
      name: "GitHub",
      icon: (
        <FaGithub
          className={`w-full h-full ${
            isChecked ? "fill-[#fff]" : "fill-[#181717]"
          } `}
        />
      ),
    },
  ];

  return (
    <>
      <div
        ref={containerRef}
        className={` flex xs:justify-center xs:items-center mt-0  lg:items-center lg:justify-center min-h-screen w-full px-7 sm:px-6 lg:px-8 py-12 absolute top-0 ${scale} transition-transform duration-2000 ease-in-out custom-overflow scrollable-container ${
          isScrolling ? "scroll-padding" : ""
        } `}
      >
        <div className="flex flex-col justify-center xs:max-w-screen-sm sm:max-w-md md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-xl 2xl:max-w-screen-xl w-screen  xs:space-y-4 5 xl:mt-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f9004d]">
              About Me
            </h1>
          </div>

          <div
            className={`${
              isChecked ? "text-white" : "text-black"
            }  xs:space-y-8`}
          >
            <div className="mt-4 xs:mt-0 space-y-2 xs:space-y-4 hover:scale-105 transition-transform duration-500 ease-in-out">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#f9004d]">
                Who Am I?
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-justify">
                Hey! I'm Devansh Mehta, a 22 year old full stack developer from
                Mumbai, India, specializing in creating dynamic, responsive, and
                engaging web applications. I'm passionate about designing and
                developing websites that are both visually appealing and highly
                functional. My coding journey began in 2020 during the COVID-19
                era when I embraced programming as a passion. Along the way,
                I've acquired a wide range of skills, allowing me to craft
                innovative strategies for websites and web designs, with a focus
                on delivering exceptional user experiences and top-tier user
                interfaces. I'm committed to collaborating with teams to build
                amazing projects, transforming ideas into reality with
                innovative and engaging solutions.
              </p>
            </div>

            <div className="mt-6 xs:mt-0 xs:space-y-4 hover:scale-105 transition-transform duration-500 ease-in-out">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#f9004d]">
                Tools & Technologies I Use
              </h2>
              <p className="hidden sm:block text-sm sm:text-base lg:text-lg text-justify">
                Leveraging a powerful mix of modern technologies and robust
                open-source tools, I create responsive, high-performance apps
                and websites tailored for seamless user experiences across
                smartphones, tablets, and desktops.
              </p>

              <div className="mt-4 sx:mt-0 flex flex-wrap justify-evenly xs:justify-center gap-5 sm:gap-6 lg:gap-12 xl:gap-14 custom-css">
                {technologies.map((tech, index) => (
                  <Tooltip key={index} text={tech.name}>
                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 flex items-center justify-center bg-transparent cursor-pointer hover:scale-125 transition-transform duration-300 ease-in-out pointer-events-auto">
                      {tech.icon}
                    </div>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
