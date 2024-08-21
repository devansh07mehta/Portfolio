import { useOutletContext } from "react-router-dom";
import SocialHandles from "../Components/SocialHandles";
import "../assets/css/Contact.css";
import MatterComp from "../Components/MatterComp";
import { useEffect, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const ContactMe = () => {
  const { isChecked } = useOutletContext();
  const [scale, setScale] = useState("scale-100");

  useEffect(() => {
    setScale("xs:scale-105");
    const timer = setTimeout(() => {
      setScale("xs:scale-100");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    fetch("http://localhost:4000/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        alert("Thank You for Contacting Me!!!");
        // You can also show a success message to the user
      })
      .catch((error) => {
        console.error("Error:", error);
        // You can show an error message to the user here
      });

    e.target.reset();
  };

  // const emailPattern = "^[a-zA-Z0-9._\\%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$";
  return (
    <>
      <MatterComp isChecked={isChecked}></MatterComp>
      <div
        className={`${scale} transition-transform duration-2000 ease-in-out absolute inset-0 flex justify-start mx-2 sm:mx-0 sm:justify-center items-center min-h-screen bg-gradient-to-r form-container pointer-events-none`}
      >
        <div
          className={`w-10/12 max-w-lg p-5 sm:p-6 lg:p-8 bg-white sm:opacity-80 shadow-2xl rounded-lg transform transition-all duration-500 hover:scale-105 mx-4 sm:mx-6 max-h-[90vh] overflow-y-auto hover:opacity-100`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#f9004d] to-red-500">
            Contact Me
          </h2>
          <form
            className="space-y-4 sm:space-y-6 pointer-events-auto"
            onSubmit={handleSubmit}
          >
            <div className="transition-all duration-300 ease-in-out transform hover:scale-105">
              <label className="block text-gray-700 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f9004d]"
                placeholder="Your Name"
                pattern="^[a-zA-Z\s]+$" // Only letters and spaces allowed
                required
              />
            </div>
            <div className="transition-all duration-300 ease-in-out transform hover:scale-105">
              <label className="block text-gray-700 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f9004d]"
                placeholder="Your Email"
                // Basic email regex
                required
              />
            </div>
            <div className="transition-all duration-300 ease-in-out transform hover:scale-105">
              <label className="block text-gray-700 font-semibold">
                Message
              </label>
              <textarea
                name="message"
                className="w-full p-3 sm:p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f9004d]"
                placeholder="Your Message"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 sm:p-4 bg-[#f9004d] text-white rounded-lg hover:bg-red-600 transition-colors duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <FaPaperPlane />
              Send Message
            </button>
          </form>
        </div>
      </div>
      <SocialHandles isChecked={isChecked} />
    </>
  );
};

export default ContactMe;
