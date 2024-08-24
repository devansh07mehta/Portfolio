// App.jsx
import { useEffect, useState } from "react";
import Header from "./Components/Header";
import TabBar from "./Components/TabBar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function App() {
  const preloadImages = (images) => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  };
  const [isChecked, setIsChecked] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const navigate = useNavigate();

  useEffect(() => {
    preloadImages([
      "/assets/icon/favicon.svg",
      "/assets/images/certificates/AWS-cloud-practitioner.jpg",
      "/assets/images/certificates/AWS-Re-start.png",
      "/assets/images/certificates/Google Cloud Data Engineer.jpg",
      "/assets/images/certificates/Google Data Analytics.jpg",
      "/assets/images/certificates/IBM Data Science.jpg",
      "/assets/images/certificates/Web Developer Bootcamp-Udemy.jpg",
      "/assets/images/certificates/Foundations of User Experience.jpg",
      "/assets/images/certificates/NPTEL.jpg",
      "/assets/images/mockups/BOM-Mockup.png",
      "/assets/images/mockups/Book-My-Show.png",
      "/assets/images/mockups/Tasky-Mockup.png",
    ]);

    // Function to set the --vh custom property
    const setVhProperty = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    // Set initial value
    setVhProperty();

    // Update on window resize
    window.addEventListener("resize", setVhProperty);

    // const handlePageRefresh = () => {
    //   navigate("/home");
    // };

    // handlePageRefresh();

    // window.addEventListener("load", handlePageRefresh);

    return () => {
      window.removeEventListener("resize", setVhProperty);
      // window.removeEventListener("load", handlePageRefresh);
    };
  }, [navigate]);

  const heightClass = location.pathname === "/projects" ? "h-full" : "h-screen";

  return (
    <>
      <div
        className={`${
          isChecked ? "bg-[#111]" : "bg-slate-50"
        } ${heightClass} min-h-screen-dynamic relative overflow-hidden`}
      >
        <Header
          isChecked={isChecked}
          handleCheckboxChange={handleCheckboxChange}
          activeIndex={activeIndex}
          handleClick={handleClick}
        />

        <Outlet context={{ isChecked, handleCheckboxChange }}></Outlet>

        <TabBar activeIndex={activeIndex} handleClick={handleClick} />
      </div>
    </>
  );
}

export default App;
