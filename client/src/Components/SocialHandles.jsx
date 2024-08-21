import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";
import "../assets/css/SocialHandles.css";

const SocialHandles = ({ isChecked }) => {
  return (
    <>
      <div
        className={`extreme-right-side absolute right-3 md:right-6 flex flex-col gap-5 md:gap-9 text-2xl md:text-4xl ${
          isChecked ? "text-slate-300" : "text-slate-700"
        }  top-1/2 -translate-y-1/2`}
      >
        <FaLinkedinIn
          className={`${
            isChecked ? "hover:text-white" : "hover:text-black"
          } cursor-pointer hover:scale-125 transition-transform duration-1000 pointer-events-auto`}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/devansh-mehta-8440bb1a0",
              "_blank"
            )
          }
        />
        <FaGithub
          className={`${
            isChecked ? "hover:text-white" : "hover:text-black"
          } cursor-pointer hover:scale-125 transition-transform duration-1000 pointer-events-auto`}
          onClick={() =>
            window.open("https://github.com/devansh07mehta", "_blank")
          }
        />
        <FiMail
          className={`${
            isChecked ? "hover:text-white" : "hover:text-black"
          } cursor-pointer hover:scale-125 transition-transform duration-1000 pointer-events-auto`}
          onClick={() =>
            window.open(
              "mailto:devansh1622mht@gmail.com",
              "_blank",
              "noopener,noreferrer"
            )
          }
        />
        <BsWhatsapp
          className={`${
            isChecked ? "hover:text-white" : "hover:text-black"
          } cursor-pointer hover:scale-125 transition-transform duration-1000 pointer-events-auto`}
          onClick={() =>
            window.open(
              "https://wa.me/+918369515644?text=Feel free to reach out! If you'd like to get in touch, you can contact me directly via WhatsApp",
              "_blank"
            )
          }
        />
        <FaPhone
          className={`${
            isChecked ? "hover:text-white" : "hover:text-black"
          } cursor-pointer hover:scale-125 transition-transform duration-1000 pointer-events-auto`}
          onClick={() =>
            window.open("tel:+918369515644", "_blank", "noopener,noreferrer")
          }
        />
      </div>
    </>
  );
};

export default SocialHandles;
