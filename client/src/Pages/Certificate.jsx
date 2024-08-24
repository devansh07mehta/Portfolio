import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/Certificate.css";
import { useOutletContext } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const isMobile = () => {
  return /Mobi|Android/i.test(navigator.userAgent);
};

// Define your certificate data
const certificates = [
  {
    title: "AWS Certified Cloud Practitioner",
    link: "https://aws.amazon.com/verification",
    coordinates: { top: "68%", left: "27.5%", width: "40%", height: "3.5%" },
    image: "/assets/images/certificates/AWS-cloud-practitioner.jpg", // Replace with actual image path
    text: "Cleared the AWS Certified Cloud Practitioner (AWS CLF-C02) Exam and became an AWS Certified Cloud Practitioner",
  },
  {
    title: "AWS re/Start Graduate Badge",
    link: "https://www.credly.com/badges/30f2a991-4928-4125-b284-2c880544b017/public_url",
    coordinates: { top: "22%", left: "19%", width: "15.5%", height: "18%" },
    image: "/assets/images/certificates/AWS-Re-start.png", // Replace with actual image path
    text: "Earned an AWS re/Start Graduate Badge from Credly by completing AWS Cloud Training from Anudip Foundations for 3 months",
  },
  {
    title: "Google Cloud Data Engineer Professional Certificate",
    link: "https://coursera.org/verify/professional-cert/QEGCEVE2NNHG",
    coordinates: { top: "87%", left: "71.7%", width: "20%", height: "4%" },
    image: "/assets/images/certificates/Google Cloud Data Engineer.jpg", // Replace with actual image path
    text: "Successfully completed Google Cloud Data Engineer Professional Certificate through an online platform, Coursera",
  },
  {
    title: "Google Data Analytics Professional Certificate",
    link: "https://coursera.org/verify/professional-cert/BE4WNGM755E8",
    coordinates: { top: "87%", left: "71.7%", width: "20%", height: "4%" },
    image: "/assets/images/certificates/Google Data Analytics.jpg", // Replace with actual image path
    text: "Successfully completed Google Data Analytics Professional Certificate through an online platform, Coursera",
  },
  {
    title: "IBM Data Science Professional Certificate",
    link: "https://coursera.org/verify/professional-cert/2NHFZF9ZGCVK",
    coordinates: { top: "87%", left: "71.7%", width: "20%", height: "4%" },
    image: "/assets/images/certificates/IBM Data Science.jpg", // Replace with actual image path
    text: "Successfully completed IBM Data Science Professional Certificate through an online platform, Coursera",
  },
  {
    title: "Web Developer Bootcamp Certificate",
    link: "https://ude.my/UC-b24e467c-f423-4a74-a97c-43d9343ff4e5/",
    coordinates: { top: "10%", left: "69.65%", width: "24.4%", height: "2%" },
    image: "/assets/images/certificates/Web Developer Bootcamp-Udemy.jpg", // Replace with actual image path
    text: "Successfully completed Web Developer Bootcamp and earned a certificate through an online platform, Udemy",
  },
  {
    title: "User Experience (UX) Design Certificate",
    link: "https://coursera.org/verify/44X8PU575G4Z",
    coordinates: { top: "82%", left: "65%", width: "23.7%", height: "2%" },
    image: "/assets/images/certificates/Foundations of User Experience.jpg", // Replace with actual image path
    text: "Successfully completed Foundations of User Experience (UX) Design Course and earned a certificate through an online platform, Coursera",
  },
  {
    title: "NPTEL DBMS Certificate",
    link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs21/Course/NPTEL24CS21S55030058630063994.pdf",
    coordinates: { top: "85.5%", left: "51%", width: "5.2%", height: "6.7%" },
    image: "/assets/images/certificates/NPTEL.jpg", // Replace with actual image path
    text: "Successfully completed the NPTEL DBMS Course by clearing the proctored exam and received the Elite Certificate through the Swayam online platform from IIT Kharagpur",
  },
  // Add more certificates here if needed
];

// Custom next arrow component
const SampleNextArrow = (props) => {
  const { onClick, isChecked, activeSlide, certificates } = props;
  const isDisabled = activeSlide === certificates.length - 1;

  return (
    <div
      className={`absolute top-1/2 -translate-y-1/2 -right-4 xs:-right-8 lg:-right-12 cursor-pointer ${
        isDisabled ? "opacity-50 pointer-events-none" : ""
      }`}
      onClick={isDisabled ? null : onClick}
      style={{ zIndex: 10 }}
    >
      <FaChevronRight
        className={`${isChecked ? "fill-white" : "fill-black"}`}
        size={32}
      />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick, isChecked, activeSlide } = props;
  const isDisabled = activeSlide === 0;

  return (
    <div
      className={`absolute top-1/2 -translate-y-1/2 -left-4 xs:-left-8 lg:-left-12 cursor-pointer ${
        isDisabled ? "opacity-50 pointer-events-none" : ""
      }`}
      onClick={isDisabled ? null : onClick}
      style={{ zIndex: 10 }}
    >
      <FaChevronLeft
        className={`${isChecked ? "fill-white" : "fill-black"}`}
        size={32}
      />
    </div>
  );
};

const Modal = ({
  isOpen,
  onClose,
  activeSlide,
  setActiveSlide,
  certificates,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-[9999] p-4 sm:p-0">
      <button
        className="absolute top-1/2 left-28 text-2xl text-gray-500 hover:text-gray-400"
        onClick={() => setActiveSlide((prev) => Math.max(prev - 1, 0))}
        disabled={activeSlide === 0}
      >
        <FaChevronLeft
          className={`fill-white ${activeSlide === 0 ? "opacity-50" : ""}`}
          size={32}
        />
      </button>
      <button
        className="absolute top-1/2 right-28 text-2xl text-gray-500 hover:text-gray-400"
        onClick={() =>
          setActiveSlide((prev) => Math.min(prev + 1, certificates.length - 1))
        }
        disabled={activeSlide === certificates.length - 1}
      >
        <FaChevronRight
          className={`fill-white ${
            activeSlide === certificates.length - 1 ? "opacity-50" : ""
          }`}
          size={32}
        />
      </button>
      <button
        className="absolute top-10 right-4 sm:top-2 sm:right-28 text-5xl text-gray-400 hover:text-gray-300"
        onClick={onClose}
      >
        &times;
      </button>
      <div className="relative bg-white p-0 rounded shadow-lg max-w-full h-auto sm:h-screen overflow-auto">
        <img
          src={certificates[activeSlide].image}
          alt={certificates[activeSlide].title}
          className="w-full h-full sm:w-full sm:h-[calc(100vh-7vh)]"
        />
        <a
          href={certificates[activeSlide].link}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute cursor-pointer"
          style={{
            top: certificates[activeSlide].coordinates.top,
            left: certificates[activeSlide].coordinates.left,
            width: certificates[activeSlide].coordinates.width,
            height: certificates[activeSlide].coordinates.height,
          }}
        ></a>
        <p className="text-center sm:mt-4 text-2xl font-bold">
          {certificates[activeSlide].title}
        </p>
      </div>
    </div>
  );
};

const Certificate = () => {
  const [scale, setScale] = useState("scale-100");
  const [activeSlide, setActiveSlide] = useState(0); // Main carousel
  const [modalSlide, setModalSlide] = useState(0); // Modal overlay
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isChecked } = useOutletContext(); // Assuming isChecked comes from context
  const sliderRef = useRef(null); // Ref to control the slider instance

  useEffect(() => {
    certificates.forEach((certificate) => {
      const img = new Image();
      img.src = certificate.image;
    });

    setScale("xs:scale-110");
    const timer = setTimeout(() => {
      setScale("xs:scale-100");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleImageClick = (index) => {
    if (isMobile()) {
      window.open(certificates[index].link, "_blank");
    } else {
      setModalSlide(index); // Set the slide index for the modal
      setIsModalOpen(true);
      sliderRef.current.slickPause(); // Pause the main slider
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    sliderRef.current.slickPlay(); // Resume autoplay in the main slider
  };

  // Main carousel settings
  const mainCarouselSettings = {
    dots: true,
    slidesToShow: window.innerWidth < 1024 ? 1 : 3,
    slidesToScroll: 1,
    nextArrow: (
      <SampleNextArrow
        isChecked={isChecked}
        activeSlide={activeSlide}
        certificates={certificates}
      />
    ),
    prevArrow: (
      <SamplePrevArrow isChecked={isChecked} activeSlide={activeSlide} />
    ),
    customPaging: function (i) {
      return (
        <div
          style={{
            width: "7px",
            height: "7px",
            marginTop: "15px",
            borderRadius: "50%",
            background: isChecked ? "white" : "black",
            opacity: i === activeSlide ? 1 : 0.5,
            transition: "opacity 0.3s ease",
          }}
        />
      );
    },
    beforeChange: (current, next) => setActiveSlide(next),
    autoplay: true,
    autoplaySpeed: 8000,
    pauseOnHover: true,
    speed: 1000,
    cssEase: "linear",
  };

  return (
    <>
      <Helmet>
        <title>Devansh Mehta - Certificates</title>
        <meta
          name="keywords"
          content="Devansh Mehta, Portfolio, Certificates, Achievements, Full-Stack Developer, Front-End Developer, Web Developer, Cloud Practitioner, DevOps Enthusiast, Devansh Mehta Portfolio, Devansh Mehta Certificates"
        />

        <meta
          name="description"
          content="Explore the certifications achieved by Devansh Mehta, showcasing expertise in full-stack development, web design, and innovative technologies. View a comprehensive list of professional achievements and credentials that highlight Devansh's commitment to excellence."
        />
      </Helmet>
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-auto max-w-6xl mx-auto ${scale} transition-transform duration-2000 ease-in-out px-6 xs:px-20 lg:px-0`}
      >
        <Slider
          ref={sliderRef}
          {...mainCarouselSettings}
          className="w-full px-3"
        >
          {certificates.map((certificate, index) => (
            <div key={index} className="px-3 h-full ">
              <div
                className="m-0 p-0 bg-white shadow-lg rounded-lg w-full text-center overflow-hidden h-full cursor-pointer"
                onClick={() => handleImageClick(index)}
              >
                <div className="lg:h-64 overflow-hidden">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <p className={`mt-2 px-2 font-bold text-black text-2xl`}>
                  {certificate.title}
                </p>
                <p className="text-gray-900 mt-2 mb-4 px-2">
                  {certificate.text}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}
          activeSlide={modalSlide} // Use modalSlide state here
          setActiveSlide={setModalSlide}
          certificates={certificates}
        />
      )}
    </>
  );
};

export default Certificate;
