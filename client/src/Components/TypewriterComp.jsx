import Typewriter from "typewriter-effect";

const TypewriterComp = () => {
  return (
    <>
      <Typewriter
        options={{
          strings: [
            "FrontEnd Developer",
            "BackEnd Developer",
            "FullStack Developer",
            "Web Developer",
            "Cloud Practitioner",
            "DevOps Enthusiast",
          ],
          autoStart: true,
          loop: true,
        }}
      />
    </>
  );
};

export default TypewriterComp;
