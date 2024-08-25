import { useOutletContext } from "react-router-dom";
import ToolTip_Project from "../Components/ToolTip_Project";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Project = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };
  const [scale, setScale] = useState("scale-100");
  const { isChecked } = useOutletContext();
  const projects = [
    {
      project_img: <img src="/assets/mockups/BOM-Mockup.png" />,
      title: "Bridge Of Music",
      link: "https://bridgeofmusic.in/",
      title_description: "Music Chords Library",
      description:
        "Bridge of Music offers a comprehensive chord library with autoscroll and capo features, making it easy for beginners to learn and play songs on their instrument.",
      tags: [
        "#html",
        "#css",
        "#javaScript",
        "#bootstrap",
        "#node.js",
        "#express.js",
        "#mongoDB",
      ],
    },
    {
      project_img: <img src="/assets/mockups/Tasky-Mockup.png" />,
      title: "Tasky Application",
      link: "https://devansh07mehta.github.io/Tasky-appln/",
      title_description: "Task Management Application",
      description:
        "Tasky application is a single page application that allows user to add, modify, search and delete their daily tasks in the form of dynamic cards.",
      tags: ["#html", "#css", "#bootstrap", "#javaScript"],
    },
    {
      project_img: <img src="/assets/mockups/Book-My-Show.png" />,
      title: "Book My Show Application",
      link: "https://devansh07mehta.github.io/book-my-show/",
      title_description: "Movie Booking Application",
      description:
        "Book My Show Application is an single page application that allows user to check the latest movies with their ratings & book movie shows in user-friendly UI.",
      tags: ["#react.js", "#tailwind.css", "#movie-db(tmdb)", "#razorpay"],
    },
  ];

  useEffect(() => {
    setScale("xs:scale-105");
    const timer = setTimeout(() => {
      setScale("xs:scale-100");
    }, 3000);

    projects.forEach((project) => {
      const img = new Image();
      img.src = project.project_img;
    });

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Devansh Mehta - Projects</title>
        <meta
          name="keywords"
          content="Devansh Mehta, Portfolio, Projects, Full-Stack Developer, Front-End Developer, Web Developer, Cloud Practitioner, DevOps Enthusiast, Devansh Mehta Projects, Devansh Mehta Portfolio, Devansh Mehta Project Page, Projects by Devansh Mehta, Web Development Projects"
        />

        <meta
          name="description"
          content="Explore the innovative and diverse projects by Devansh Mehta, showcasing expertise in web development. Discover his work on platforms like Bridge Of Music, Tasky Application, and more. Join him on his journey as a developer and be a part of the ever-evolving world of technology."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Devansh Mehta",
            url: "https://devansh-mehta-portfolio.netlify.app/projects",
            sameAs: [
              "https://github.com/Devansh07Mehta",
              "https://www.linkedin.com/in/devansh-mehta-8440bb1a0/",
              "https://github.com/devansh07mehta/Portfolio",
            ],
          })}
        </script>
      </Helmet>
      <div className="relative w-full mt-24 lg:mt-[9.5vh] xl:mt-[8.9vh] pb-8 lg:pb-0 overflow-hidden h-full ">
        {/* Center vertical line */}
        <div
          className={`hidden lg:block absolute bottom-0 left-1/2 w-[2px] transform -translate-x-1/2 h-full  ${
            isChecked ? "bg-white" : "bg-black"
          }`}
          style={{ top: `calc(${scrollPosition}px)` }}
        ></div>

        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`mb-20 lg:flex lg:w-full lg:justify-between items-center relative ${scale} transition-transform duration-2000 ease-in-out ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } `}
          >
            <div className="w-full md:w-[80%] md:mx-auto lg:mx-0 lg:w-[45%] px-6 relative">
              <div
                className={`w-full lg:w-[62%] lg:mx-auto mt-2 lg:mt-8 cursor-pointer relative hover:scale-105 xs:hover:scale-110 hover:z-10 transition-transform duration-300 ease-in-out`}
                onClick={() => window.open(project.link, "_blank")}
              >
                <ToolTip_Project key={index} text={project.title}>
                  {project.project_img}
                </ToolTip_Project>
              </div>
            </div>

            {/* Horizontal line */}
            <div
              className="hidden lg:block absolute top-1/2 left-1/2 w-[17%] h-[2px] bg-[#f9004d] opacity-50"
              style={{
                transform: `translateX(${index % 2 === 0 ? "-99%" : "0%"})`,
              }}
            ></div>

            {/* Circle */}
            <div className="hidden lg:block absolute top-1/2 left-1/2 w-4 h-4 bg-[#f9004d] rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10"></div>

            <div
              className={`flex flex-col mx-auto w-[90%] lg:w-[42%] ${
                index % 2 === 0 ? "lg:mx-12" : "lg:mx-20"
              }`}
            >
              <button
                className="mt-4 text-white bg-[#f9004d] rounded-lg p-2 left-1/2 flex items-center gap-2 px-4 mx-auto lg:hidden"
                onClick={() => window.open(project.link, "_blank")}
              >
                {project.title}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-external-link"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </button>
              <h1 className={`mt-6 text-[#f9004d] text-2xl font-bold`}>
                {project.title}
              </h1>
              <p className="text-[#f9004d] mt-3 font-medium">
                ({project.title_description})
              </p>
              <p
                className={`mt-3 ${
                  isChecked ? "text-white" : "text-black"
                } text-justify`}
              >
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <button
                    key={tag}
                    className={`p-2 rounded-xl bg-transparent border-2 ${
                      isChecked
                        ? "text-white border-white"
                        : "text-black border-black"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Project;
