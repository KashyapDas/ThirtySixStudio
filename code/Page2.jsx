import { useRef } from "react";
import "../index.css";
import motion1 from "../video/motion1.mp4";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Page2() {
  const motionVideo = useRef(null);

  // handle video transition
  const handleVideo1 = () => {
    gsap.to(motionVideo.current, {
      opacity: 1,
      width: "100%",
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1],
    });
  };

  const handleVideo2 = () => {
    gsap.to(motionVideo.current, {
      opacity: 0,
      width: "50%",
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1],
    });
  };
``
  return (
    <div className="w-full h-full overflow-hidden -mt-50 md:mt-0">
      <div className="w-full h-[50%] font-black flex flex-col md:flex-row  items-center justify-evenly ">

        <h1 className="satoshi capitalize flex items-center text-[2vh] md:text-xl selection:bg-red-500 selection:text-yellow-200">
          01
          <h1 className="w-[70px] h-[2px] ml-3 mr-3 inline-block horizantal"></h1>
          What we do
        </h1>

        <div className="img w-[25%] h-[55%] overflow-hidden rounded-[5px] items-center justify-center hidden md:flex">
          <video
            ref={motionVideo}
            className="h-full w-[50%] object-cover opacity-0"
            autoPlay
            muted
            loop
          >
            <source src={motion1} type="video/mp4" />
          </video>
        </div>

          <div className="img w-[100%] h-[55%] overflow-hidden items-center justify-center block md:hidden">
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={motion1} type="video/mp4" />
            </video>
          </div>


        <p
          onMouseEnter={handleVideo1}
          onMouseLeave={handleVideo2}
          className="satoshi w-full md:w-[23%] text-2xl md:text-4xl px-2 text-start selection:bg-red-500 selection:text-yellow-200"
        >
          We aim to elevate digital production in the advertising space,
          bringing your ideas to life.
        </p>
      </div>

      <div className="w-full h-[50%] overflow-hidden flex flex-col justify-center items-center gap-y-2 ">
        <h1 className="capitalize satoshi font-medium text-3xl md:text-lg selection:bg-red-500 selection:text-yellow-200">Our Service</h1>
        <h3 className="satoshi text-lg md:text-2xl w-full px-2 md:w-[45%] text-center font-bold selection:bg-red-500 selection:text-yellow-200">
          We provide you with
          <span className="w-[80px] h-[15px] ml-2 mr-2 rounded-full overflow-hidden inline-block">
            <img src="https://i.pinimg.com/736x/9e/fb/4d/9efb4d59affabb269629521278683411.jpg" className="w-full h-full object-cover object-center" />
          </span>
          captivating design, interactive animations,
          <span className="w-[80px] h-[15px] ml-2 mr-2 rounded-full overflow-hidden inline-block">
            <img src="https://i.pinimg.com/736x/18/fb/cc/18fbcc955470f4ba13eb5836cd7cc470.jpg" className="w-full h-full object-cover object-center" />
          </span>
          reliable code, and immaculate
         <span className="w-[80px] h-[15px] ml-2 mr-2 rounded-full overflow-hidden inline-block">
            <img src="https://i.pinimg.com/736x/bf/1c/cb/bf1ccb9107cd115138773245e27218d7.jpg" className="w-full h-full object-cover object-center" />
          </span>
          project coordination. Whether you
          <span className="w-[80px] h-[15px] ml-2 mr-2 rounded-full overflow-hidden inline-block">
            <img src="https://i.pinimg.com/736x/5a/dc/f9/5adcf90177dfceb19d1135f9a98a7784.jpg" className="w-full h-full object-cover object-center" />
          </span>
          need a campaign built from
          <span className="w-[80px] h-[15px] ml-2 mr-2 rounded-full overflow-hidden inline-block">
            <img src="https://i.pinimg.com/736x/d8/62/ca/d862cadba69608a60e514839949492fa.jpg" className="w-full h-full object-cover object-center" />
          </span>
          scratch or
          <span className="w-[80px] h-[15px] ml-2 mr-2 rounded-full overflow-hidden inline-block">
            <img src="https://i.pinimg.com/736x/31/48/af/3148afb8352350e8a2c822159f413726.jpg" className="w-full h-full object-cover object-center" />
          </span>
          assistance at a specific
          <span className="w-[80px] h-[15px] ml-2 mr-2 rounded-full overflow-hidden inline-block">
            <img src="https://i.pinimg.com/1200x/19/62/6b/19626bac43be480ca73cf6045e6399ae.jpg" className="w-full h-full object-cover object-center" />
          </span>
          phase, we have got
          <span className="w-[80px] h-[15px] ml-2 mr-2 rounded-full overflow-hidden inline-block">
            <img src="https://i.pinimg.com/736x/f7/39/95/f73995f6d0a18eed77e0de72e835cfb4.jpg" className="w-full h-full object-cover object-center" />
          </span>
          you covered.
        </h3>
      </div>
    </div>
  );
}

export default Page2;
