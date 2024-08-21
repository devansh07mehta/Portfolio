import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { PiCertificateBold } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
// import { CgFileDocument } from "react-icons/cg";

const TabBar = ({ activeIndex, handleClick }) => {
  const navigate = useNavigate();
  return (
    <div className="fixed bottom-0 w-full h-16 bg-[#1f1e1e] sm:text-2xl lg:hidden flex items-center justify-between px-6 text-slate-300">
      <button
        className={`${activeIndex === 0 ? "text-red-500" : "text-slate-300"}`}
        onClick={() => {
          handleClick(0);
          navigate("/home");
        }}
      >
        <FaHome className="w-6 h-6 md:w-8 md:h-8 mx-auto" />
        <p className={`${activeIndex === 0 ? "block" : "hidden"}`}>Home</p>
      </button>
      <button
        className={`${activeIndex === 1 ? "text-red-500 " : "text-slate-300"}`}
        onClick={() => {
          handleClick(1);
          navigate("/about");
        }}
      >
        <IoPerson className="w-6 h-6 md:w-8 md:h-8 mx-auto" />
        <p className={`${activeIndex === 1 ? "block" : "hidden"}`}>About Me</p>
      </button>
      <button
        className={`${activeIndex === 2 ? "text-red-500" : "text-slate-300"}`}
        onClick={() => {
          handleClick(2);
          navigate("/projects");
        }}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          t="1569683753031"
          viewBox="0 0 1024 1024"
          version="1.1"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 md:w-8 md:h-8 mx-auto "
        >
          <defs></defs>
          <path d="M312.1 591.5c3.1 3.1 8.2 3.1 11.3 0l101.8-101.8 86.1 86.2c3.1 3.1 8.2 3.1 11.3 0l226.3-226.5c3.1-3.1 3.1-8.2 0-11.3l-36.8-36.8c-3.1-3.1-8.2-3.1-11.3 0L517 485.3l-86.1-86.2c-3.1-3.1-8.2-3.1-11.3 0L275.3 543.4c-3.1 3.1-3.1 8.2 0 11.3l36.8 36.8z"></path>
          <path d="M904 160H548V96c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H120c-17.7 0-32 14.3-32 32v520c0 17.7 14.3 32 32 32h356.4v32L311.6 884.1c-3.7 2.4-4.7 7.3-2.3 11l30.3 47.2v0.1c2.4 3.7 7.4 4.7 11.1 2.3L512 838.9l161.3 105.8c3.7 2.4 8.7 1.4 11.1-2.3v-0.1l30.3-47.2c2.4-3.7 1.3-8.6-2.3-11L548 776.3V744h356c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32z m-40 512H160V232h704v440z"></path>
        </svg>
        <p className={`${activeIndex === 2 ? "block" : "hidden"}`}>Projects</p>
      </button>
      <button
        className={`${activeIndex === 3 ? "text-red-500" : "text-slate-300"}`}
        onClick={() => {
          handleClick(3);
          navigate("/certificates");
        }}
      >
        <PiCertificateBold className="w-6 h-6 md:w-8 md:h-8 mx-auto" />
        <p className={`${activeIndex === 3 ? "block" : "hidden"}`}>
          Certificates
        </p>
      </button>

      {/*<button
        className={`${activeIndex === 4 ? "text-red-500" : "text-slate-300"}`}
        onClick={() => handleClick(4)}
      >
        <CgFileDocument className="w-6 h-6 mx-auto" />
        <p className={`${activeIndex === 4 ? "block" : "hidden"}`}>Resume</p>
      </button>*/}

      <button
        className={`${activeIndex === 5 ? "text-red-500" : "text-slate-300"}`}
        onClick={() => {
          handleClick(5);
          navigate("/contact");
        }}
      >
        <FaPhone className="w-5 h-5 md:w-7 md:h-7 mx-auto" />
        <p className={`${activeIndex === 5 ? "block" : "hidden"}`}>
          Contact Me
        </p>
      </button>
    </div>
  );
};

export default TabBar;
