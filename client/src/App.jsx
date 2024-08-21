// App.jsx
import { useEffect, useState } from "react";
import Header from "./Components/Header";
import TabBar from "./Components/TabBar";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function App() {
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
    const handlePageRefresh = () => {
      navigate("/home");
    };

    handlePageRefresh();

    window.addEventListener("load", handlePageRefresh);

    return () => {
      window.removeEventListener("load", handlePageRefresh);
    };
  }, [navigate]);

  const heightClass = location.pathname === "/projects" ? "h-full" : "h-screen";

  return (
    <>
      <div
        className={`${
          isChecked ? "bg-[#111]" : "bg-slate-50"
        } ${heightClass} relative overflow-hidden`}
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
